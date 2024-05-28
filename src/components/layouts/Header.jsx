import { useState } from 'react'
import '../../css/header.css'
import { Icon } from '@iconify/react'
import { headerData } from '../../utils/data/headerData'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mid, setMid] = useState(0)

  const openNav = () => {
    document.getElementById('nav_side').style.width = '375px'
    document.getElementById('nav_side').style.height = '100vh'
    document.getElementById('nav_side').style.transition = '0.5s'
  }

  const closeNav = () => {
    document.getElementById('nav_side').style.transition = '0s'
    document.getElementById('nav_side').style.width = '0px'
  }

  return (
    <nav>
      <div className="navbar">
        <div className="nav_toggle_btn">
          <a
            onClick={() => openNav()}
            className="navbar_toggleBtn"
            style={{ fontSize: '30px' }}
          >
            <Icon icon="basil:menu-outline" />
          </a>
        </div>

        <div
          className="nav_side"
          id="nav_side"
          style={{ backgroundColor: '#ababab', zIndex: '3' }}
        >
          <div className="nav_side_top">
            <a href="#" className="nav_side_close" onClick={() => closeNav()}>
              &times;
            </a>
            <a href="#">
              <img
                className="logoImg_side"
                src="/assets/img/logoDemo.png"
              ></img>
            </a>
          </div>
          <ul className="side_nav_menu">
            {headerData.map((menu, i) => {
              const dropdown_menu = menu.submenu
              return (
                <li
                  className="nav_side_link"
                  key={i}
                  onClick={() => {
                    setOpen(true)
                    setMid(menu.id)
                    if (open === true && mid === menu.id) {
                      setOpen(false)
                    }
                  }}
                >
                  <a style={{ fontSize: '18px' }}>{menu.title}</a>
                  {dropdown_menu && open && mid === i ? (
                    <ul>
                      {dropdown_menu.map((submenu, x) => {
                        return (
                          <li key={x}>
                            <a className="nav_side_submenu" href={submenu.url}>
                              {submenu.title}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="nav_logo">
          <a href="">
            <img className="logoImg" src="/assets/img/logoDemo.png"></img>
          </a>
        </div>

        <div>
          <ul className="nav_menu">
            {headerData.map((menu, i) => {
              const dropdown_menu = menu.submenu
              return (
                <li
                  key={i}
                  onMouseOver={() => {
                    setOpen(true)
                    setMid(menu.id)
                  }}
                  onMouseOut={() => setOpen(false)}
                >
                  <a className="nav_link" href={menu.url}>
                    {menu.title}
                  </a>
                  {dropdown_menu && open && mid === i ? (
                    <ul className="dropdownMenu">
                      {dropdown_menu.map((submenu, x) => {
                        return (
                          <li key={x}>
                            <a href={submenu.url}>{submenu.title}</a>
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="nav_icons">
          <ul className="nav_icon_list">
            <li>
              <a href="#">
                <Icon
                  icon="basil:search-outline"
                  style={{ fontSize: '30px' }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="basil:user-outline" style={{ fontSize: '30px' }} />
              </a>
            </li>
            <li className="topBtn">
              <a href="#">게임시작</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
