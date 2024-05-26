export default function Section04() {
  return (
    <>
      <div className="section04">
        <div className="section4_top">
          <h2 className="top_title">고대의 진실을 찾아</h2>
          <p className="top_description">
            대륙의 중심에서 기억을 잃은 한 모험가.
            <br />
            세계를 관통하는 비밀을 향한 긴 모험이 시작됩니다.
          </p>
        </div>

        <div className="adventure section">
          <div className="ad_left">
            <h2>꿈꾸던 모험을 현실로</h2>
            <p>
              말과 함께 초원을 가로지르는 방랑자, 거대한 범선으로 섬과 육지를
              오가는 대상인.
              <br />
              드넓은 세계를 유랑하며 나의 이야기를 만들어 가세요.
            </p>
            <button className="moreBtn">더보기</button>
          </div>
          <div className="ad_img">
            <img src="/assets/img/main_feature_adventure_thumb.png" />
          </div>
        </div>

        <div className="battle section">
          <div className="battle_img">
            <div className="back_img"></div>
            <div className="front_img"></div>
            <div className="battle_text">
              <h2 className="battle_title">끊이지 않는 전투와 전쟁</h2>
            </div>
          </div>
        </div>

        <div className="battle_description section">
          <p>
            세계를 위협하는 세력을 저지하고, 때로는 다른 모험가와 승부를 겨루는
            짜릿한 전투들. <br />
            포화가 가득한 전쟁을 승리로 이끌어 길드의 명성을 드높이고 막대한
            부를 쟁취할 수도 있습니다.
          </p>
          <button className="moreBtn">더보기</button>
        </div>

        <div className="life section">
          <div className="life_zone">
            <div className="left_img">
              <img
                className="img_bg"
                src="/assets/img/main_feature_life_thumb_1.jpg"
              />
              <img
                className="img_ch"
                src="/assets/img/main_feature_life_thumb_1_char.png"
              />
              <img
                className="img_bird"
                src="/assets/img/main_feature_life_thumb_1_pet.png"
              />
            </div>

            <div className="center_text">
              <h2>
                자유로운 생활, <br />또 다른 일상
              </h2>
              <p>
                내 마음대로 꾸민 공간에서 여가를 즐기세요.
                <br />
                때로는 모닥불 근처에 둘러앉아 풀벌레 소리를 듣기도 하고, <br />
                친구들과 함께 바다 낚시를 떠나거나 연금술사가 되어보세요.
              </p>
              <button className="moreBtn">더보기</button>
            </div>

            <div className="right_img">
              <img
                className="right_top_img"
                src="/assets/img/main_feature_life_thumb_2.jpg"
              />
              <img
                className="right_bottom_img"
                src="/assets/img/main_feature_life_thumb_3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
