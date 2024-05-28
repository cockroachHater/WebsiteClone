import '../../css/footer.css'
import { footerSnsData } from '../../utils/data/footerSnsData'
import { footerListData } from '../../utils/data/footerListData'
import { footerInfoData } from '../../utils/data/footerInfoData'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_icon_wrap section">
          {footerSnsData.map((data, i) => {
            return (
              <div className="footer_icon" key={i}>
                <img src={data.imgUrl} />
              </div>
            )
          })}
        </div>
        <div className="footer_list_wrap section">
          {footerListData.map((data, i) => {
            return (
              <div className="footer_list" key={i}>
                <a href="#">{data.name}</a>
              </div>
            )
          })}
        </div>
        <div className="footer_info_wrap mini_section">
          {footerInfoData.map((data, i) => {
            return (
              <div className="footer_info" key={i}>
                <a className="footer_info_text">{data.name}</a>
              </div>
            )
          })}
        </div>
        <div className="right">
          <p>© Pearl Abyss Corp. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}
