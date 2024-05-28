import { useState } from 'react'
import { Icon } from '@iconify/react'
import { headerData } from '../../utils/data/headerData'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mid, setMid] = useState(0)

  return (
    <nav>
      <div className="navbar">
        <div className="nav_logo">
          <a href="">
            <img className="logoImg" src="/assets/img/logoDemo.png"></img>
          </a>
        </div>

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
        {/* 
      <a href="#" className="navbar_toggleBtn" style={{ fontSize: '30px' }}>
        <Icon icon="basil:menu-outline" />
      </a> */}
      </div>
    </nav>
  )
}
