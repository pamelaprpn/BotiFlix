import MenuUser from "../../../components/MenuUser";
import BannerHeader from "../Header/components/BannerHeader";
import MenuHeader from "./components/MenuHeader";
import * as S from "./style";


export default function Header(){
  return(

    <S.ContainerHeader>
      <S.ContainerMenu>
        <MenuHeader pageWrapID={"page-wrap"} outerContainerId={"Header"} />
        <MenuUser />
      </S.ContainerMenu>
      <BannerHeader />
    </S.ContainerHeader>

  )
}
