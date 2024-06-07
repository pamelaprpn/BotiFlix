import * as S from './style';
import {slide as Menu} from 'react-burger-menu'
import { useEffect, useState } from 'react';


import arrowBack from '../../../../assets/arrow-back.svg'
import search from '../../../../assets/ep_search.svg'
import user from '../../../../assets/user.svg'
import universal from '../../../../assets/universal.svg'
import paramount from '../../../../assets/paramount.svg'
import columbia from '../../../../assets/columbia.svg'
import metro from '../../../../assets/metro.svg'
import dreamWorks from '../../../../assets/dreamWorks.svg'
import wb from '../../../../assets/wb.svg'
import waltDisney from '../../../../assets/waltDisney.svg'
import century from '../../../../assets/century.svg'
import lionsgate from '../../../../assets/lionsgate.svg'

export default function MenuMobile(){

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#ffff'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      top: '30px',
      left: '22px'
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      padding: '4.5em 1.5em 0',
      fontSize: '1.15em'
    },

    bmItemList: {
      color: '#b8b7ad',
    },
    bmItem: {
      display: 'flex',
    },
    bmItemGrid: {
      display: 'grid',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }

  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [] );

  return(

      <S.containerHeader className="containerHeader">
        <div className='container-menu'>
          {isMobile ? (
            <Menu styles={styles} width={'50%'} style={styles.bmItem}>
              <S.MenuOpcoes>
                <S.MenuItem id='series' href="#">Séries</S.MenuItem>
                <S.MenuItem id='filmes' href="#">Filmes</S.MenuItem>
                <S.MenuItem id='originais' href="#">Originais</S.MenuItem>
                <S.MenuItem id='lancamentos' href="#">Lançamentos</S.MenuItem>
                <S.MenuItem id='ultimos-dias' href="#">Últimos dias</S.MenuItem>
                <S.MenuItem id='em-breve' href="#">Em breve</S.MenuItem>
              </S.MenuOpcoes>
              <S.MenuGeneros>
                <S.MenuItemGerero id='generos' href="">Gêneros</S.MenuItemGerero>
                <img src={arrowBack} alt="Icone de seta" />
              </S.MenuGeneros>
              <S.MenuIcones style={styles.bmItemGrid}>
                <S.FilmProducer src={universal} alt="Universal" />
                <S.FilmProducer src={paramount} alt="Produtores de Filmes" />
                <S.FilmProducer src={columbia} alt="Produtores de Filmes" />
                <S.FilmProducer src={metro} alt="Produtores de Filmes" />
                <S.FilmProducer src={dreamWorks} alt="Produtores de Filmes" />
                <S.FilmProducer src={wb} alt="Produtores de Filmes" />
                <S.FilmProducer src={waltDisney} alt="Produtores de Filmes" />
                <S.FilmProducer src={century} alt="Produtores de Filmes" />
                <S.FilmProducer src={lionsgate} alt="Produtores de Filmes" />
              </S.MenuIcones>
            </Menu>
          ) : (
            <S.DesktopMenu className="desktop-menu">
              <S.MenuItemDesktop href="#" className="menu-item">Séries</S.MenuItemDesktop>
              <S.MenuItemDesktop href="#" className="menu-item">Filmes</S.MenuItemDesktop>
              <S.MenuItemDesktop href="#" className="menu-item">Originais</S.MenuItemDesktop>
              <S.MenuItemDesktop href="#" className="menu-item">Lançamentos</S.MenuItemDesktop>
              <S.MenuItemDesktop href="#" className="menu-item">Últimos dias</S.MenuItemDesktop>
              <S.MenuItemDesktop href="#" className="menu-item">Em breve</S.MenuItemDesktop>
              <S.MenuItemDesktop href="#" className="menu-item">Gêneros</S.MenuItemDesktop>
            </S.DesktopMenu>
          )};
        </div>
        <S.containerUser className='container-user'>
          <img src={search} alt="Icone de Pesquisar" />
          <img src={user} alt="Icone do usuário" />
        </S.containerUser>
      </S.containerHeader>

  );
}
