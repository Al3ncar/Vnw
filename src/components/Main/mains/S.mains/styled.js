import styled from "styled-components"

export const Equip = styled.section`
    width:100%;
    padding:11.2% 0 0 9.2%;
`


export const ContEquip = styled.div`
    width: 100%;
    font-size:2.8vw;
    font-weight: bolder;
    padding-bottom:2.8% ;
    color:#0F2260;
`

export const ContFilter = styled.div`
    width:89%;
    padding:2.9% 0 2.1% 6%;
    display:flex;
    align-items: center;
    background-color: #0F2260;
`
export const BoxFilter = styled.div`
    width:23%;
    outline: solid white 0.1vw;
    border-radius: 0.2vw;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const Filter = styled.input`
    width:85%;
    padding:0.4% 0 0.4% 3%;
    font-size: 1.3vw;
    color:white;
    background-color: transparent;
    border: none;
    outline: none;
    ::placeholder{
        color:white;
        font-weight: 800;
    }
`
export const BoxLup= styled.button`
    width:13%;
    background-color: transparent;
    border: none;

`
export const Lup = styled.img`
    width:100%;
    &:active{
        transform: scale(1.05);
    }
`

export const ContEquipVnw = styled.div`
    width:90%;
    display: flex;
    flex-wrap:wrap;

       /*column-count: auto; */

`
export const CardEquipe = styled.div`
    width:24%;
    padding: 18% 0 0 0;
    margin: 1% 1% 0% 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    :hover{
        transform: scale(1.01);
    }
`
export const ContProfisName = styled.div`
    width:100%;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 10;
    background-image: linear-gradient(to top, #0F2260, #00145daf,#0f22607b,transparent);
`   
export const BoxProfiss = styled.div`
    width:100%;
    position: absolute;
    top:0;
    left:0;
`
export const Profiss = styled.img`
    width:100%;

`
export const Name = styled.h4`
    font-size: 1.6vw;
    padding-bottom:1.8%;
`
export const Area = styled.p`
    font-size:1;
    margin-bottom: 3.1%;
`

//

export const ContEvent = styled.div`
    width:100%;
    margin:7% 0 14.5% 0%;
`
export const ContPerf = styled.div`
    font-size:2.8vw;
    padding-left:9.2%;

`

export const ContTech = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const BoxTechNote = styled.div`
    width:80%;
    padding-left:2%;
`
export const TechNote =  styled.img`
    width:100%;
`
export const ContTechGirls = styled.div`
    width:22%;
    position:absolute;
    right:2%;
`
export const TitlGirls = styled.div`
    font-size:2.5vw;
    padding:10% 0;
    color:#00145d;
`

export const TechPerf = styled.p`
    width:82%;
    font-size: 1.1vw;
    padding:0 0 15% 0;
`