import MenuMobile from "../components/MenuMobile";
import * as S from "./style";


export default function Header(){
  return(
    <>
      <div className="container__header">
          <div className="menu">
              <MenuMobile pageWrapID={"page-wrap"} outerContainerId={"Header"} />
          </div>
          <div className="search">

          </div>
      </div>

    </>
  )
}
