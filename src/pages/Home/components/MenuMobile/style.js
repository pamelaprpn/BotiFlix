import styled from "styled-components";

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

`

export const FilmProducer = styled.img`
  
`


