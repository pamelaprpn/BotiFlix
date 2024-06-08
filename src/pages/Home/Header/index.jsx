import MenuSidebar from "../components/MenuMobile";
import * as S from "./style";


export default function Header(){
  return(
    <>
      <div className="container__header">
          <div className="menu">
              <MenuSidebar pageWrapID={"page-wrap"} outerContainerId={"Header"} />
          </div>
          <div className="search">
            
          </div>
      </div>

    </>
  )
}
