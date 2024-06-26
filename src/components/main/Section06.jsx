import { useEffect, useState } from 'react'
import { characterData } from '../../utils/data/characterData'

export default function Section06() {
  const [chData, setChData] = useState(characterData[0])
  const [id, setId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(e => {
      e.forEach(ani => {
        if (ani.isIntersecting) {
          ani.target.style.opacity = 1
          ani.target.style.transform = 'translateZ(0)'
        } else {
          ani.target.style.opacity = 0
        }
      })
    })
    const h2text = document.querySelectorAll('h2')
    h2text.forEach(text => {
      observer.observe(text)
    })
    const ptext = document.querySelectorAll('p')
    ptext.forEach(text => {
      observer.observe(text)
    })
  }, [chData])

  return (
    <>
      <div className="section06">
        <div className="section">
          <div className="symbol">
            <img className="symbolImg" src={chData.symbImgUrl} />
          </div>
          <div className="char">
            <img className="charImg" src={chData.chImgUrl} />
          </div>
          <div className="char_text">
            <h2>{chData.name}</h2>
            <p>
              {chData.line1}
              <br />
              {chData.line2 === ' ' ? (
                <>
                  <br />
                </>
              ) : (
                <>{chData.line2}</>
              )}
            </p>
            <a href={chData.detailUrl} className="detail_text">
              자세히 알아보기
            </a>
          </div>
          <div className="select_zone">
            <div className="main_btn">
              <button className="main_start_btn">
                <a href="/">지금 시작하기</a>
              </button>
            </div>

            <div className="char_selector">
              {characterData.map((data, i) => {
                return (
                  <div
                    className="char_box"
                    key={i}
                    onClick={e => {
                      setChData(characterData[i])
                      setId(i)
                    }}
                  >
                    <img
                      src={data.cellActiveImgUrl}
                      id="visible"
                      className={`${id === data.id ? 'active' : 'none'}`}
                    />
                    <img src={data.cellBlackImgUrl} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
