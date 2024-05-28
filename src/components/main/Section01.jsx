import ReactPlayer from 'react-player'

export default function Section01() {
  return (
    <div className="page section01">
      <ReactPlayer
        className="player"
        url={
          'https://s1.pearlcdn.com/global_static/video/skinjoin_world_loop.webm'
        }
        width={'100%'}
        height={'100vh'}
        playing={true}
        controls={false}
        muted={true}
        loop={true}
      />

      <div className="main_wrap">
        <div className="main_title">
          <h1 className="main_title_text">나만의 모험이 펼쳐지는 곳</h1>
        </div>
        <div className="main_btn">
          <button className="main_start_btn">
            <a href="/">지금 시작하기</a>
          </button>
        </div>
      </div>
    </div>
  )
}
