import { useEffect } from 'react'

export default function Section05() {
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
  }, [])
  return (
    <>
      <div className="section05">
        <div className="parallax">
          <div className="parallax-one">
            <h2>광활한 오픈월드</h2>
            <p>
              숲과 바다, 사막과 설원
              <br />
              한적한 시골 마을에서 북적이는 대도시까지
              <br />
              발길이 닿는 곳마다 새겨진 가슴 뛰는 이야기
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
