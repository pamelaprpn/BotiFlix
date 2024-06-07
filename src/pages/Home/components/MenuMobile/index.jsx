import * as S from './style';
import {slide as Menu} from 'react-burger-menu'
import icones from '../../../../assets/icones.svg'
import arrowBack from '../../../../assets/arrow-back.svg'
import { useEffect, useState } from 'react';

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
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }

  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return(
    <>
      {isMobile && (
        <Menu styles={styles} width={'50%'}>
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
        <S.MenuIcones>
          <S.FilmProducer src={icones} alt="Produtores de Filmes" />
        </S.MenuIcones>
        </Menu>
      )};
    </>
  );
};
