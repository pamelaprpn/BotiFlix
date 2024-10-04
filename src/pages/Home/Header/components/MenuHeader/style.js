import styled from "styled-components";

export const containerMenu = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;



`
export const MenuOpcoes = styled.div`

  flex-direction: column;

  @media only screen and (min-width: 768px){
    .bmMenu{
      display: 'none';
    }
  }

`
export const MenuItem = styled.a`
  font-size: 16px;
  padding-bottom: 2rem;
  color: #fff;
`
export const MenuItemGerero = styled.a`
  font-size: 16px;
  color: #fff;
  padding: 1rem 0;
`

export const MenuGeneros = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2c2c3a;
  border-top: 1px solid #2c2c3a;
  color: #ccc;
  text-decoration: none;

`

export const MenuIcones = styled.div`
  margin-top: 2rem;
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const FilmProducer = styled.img`
  width: 50px;

`
export const DesktopMenu = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1rem;
  position: absolute;
  
`
export const MenuItemDesktop = styled.a`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`


