import { Swiper, SwiperSlide } from 'swiper/react'
import { slideData } from '../../utils/data/slideData'

export default function Section07() {
  const params = {
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      320: {
        // >= 320px
        slidesPerView: 1.5,
        spaceBetween: 20,
      },

      765: {
        // >= 765px
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        // >= 1024px
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1400: {
        // >= 1024px
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1600: {
        slidesPerView: 4.2,
        spaceBetween: 10,
      },
      1800: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  }

  return (
    <>
      <div className="section07">
        <div className="section media">
          <h2 className="top_title">미디어</h2>
          <p className="top_description">
            리마스터링으로 태어난 검은사막의 아름다운 세계를 영상과 이미지를
            통해 만나보세요.
          </p>
        </div>

        <div className="swiper_zone">
          <Swiper {...params}>
            {slideData.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="box">
                    <img className="inner_img" src={data.imgUrl} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        <div className="section story">
          <h2 className="story_title">당신의 이야기를 시작하세요.</h2>
          <div className="story_start_btn">
            <button className="main_start_btn">
              <a href="/">지금 시작하기</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
