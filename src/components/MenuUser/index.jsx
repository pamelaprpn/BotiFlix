import * as S from './style'
import search from '../../assets/ep_search.svg'
import user from '../../assets/user.svg'


export default function MenuUser(){

  return(
    <S.containerUserMenu className='container-user'>
          <img src={search} alt="Icone de Pesquisar" />
          <img src={user} alt="Icone do usuário" />
    </S.containerUserMenu>
  )
}
