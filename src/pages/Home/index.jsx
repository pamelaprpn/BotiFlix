import { useEffect, useState } from "react";
import Header from "./Header";
import * as S from "./style";
import ListaDeBanners from "./components/ListaDeBanners";
import MinhaLista from "./components/MinhaLista";

export default function Home(){  
  return (
    <>
      <Header />
      <div className="body" style={{color: 'white'}}>
        <MinhaLista titulo={'Minha Lista'}/>
      </div>
    </>
  )
 }

