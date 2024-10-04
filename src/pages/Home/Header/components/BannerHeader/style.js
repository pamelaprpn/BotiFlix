import styled from "styled-components";

export const ContainerBannerHeader = styled.ul`

`

export const BannerImgHeader = styled.img `
  width: 100%;
  height: auto;
  opacity: 0.3;
  display: block;
  
`

export const ContainerImg = styled.div`
    height: 800px;
    position: relative;
    display: inline-block;

`

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 5;
  z-index: 1;
`

export const TitleBannerHeader = styled.h2`
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`
export const OverviewBannerHeader = styled.p`
  color: #fff;
  text-align: center;
  width: 80%;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
