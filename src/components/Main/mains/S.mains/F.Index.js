import React, {useState} from 'react';
import Mod from "./modal"
import * as S from "./styled"

import Ph1 from "../imgs_main/imgs/photo1.jpg"
import Ph2 from "../imgs_main/imgs/photo2.jpg"
import Ph3 from "../imgs_main/imgs/photo3.jpg"
import Ph4 from "../imgs_main/imgs/photo4.jpg"
import Ph5 from "../imgs_main/imgs/photo5.jpg"
import Ph6 from "../imgs_main/imgs/photo6.jpg"
import Ph7 from "../imgs_main/imgs/photo7.jpg"
import Ph8 from "../imgs_main/imgs/photo8.jpg"
import Ph9 from "../imgs_main/imgs/photo9.jpg"
import Ph10 from "../imgs_main/imgs/photo10.jpg"
import Ph11 from "../imgs_main/imgs/photo11.jpg"
import Ph12 from "../imgs_main/imgs/photo12.jpg"
import Ph13 from "../imgs_main/imgs/photo13.jpg"
import Ph14 from "../imgs_main/imgs/photo14.jpg"
import Ph15 from "../imgs_main/imgs/photo15.jpg"
import Lup from "../imgs_main/lup.svg"

const equipe = [
    {
        name:`Dimitri Duque`,
        profis:`#Voluntário`,
        key:0,
        img:Ph2
        
    },            {
        name:`Hugo Sabino`,
        profis:`#Voluntário`,
        key:1,
        img:Ph6

    },            {
        name:`Karla De Melo`,
        profis:`#Voluntário`,
        key:2,
        img:Ph10
    },            {
        name:`Paula Misan`,
        profis:`#Voluntário`,
        key:3,
        img:Ph4
    },            {
        name:`Thais Brait`,
        profis:`#Voluntário`,
        key:4,
        img:Ph12
    },            {
        name:`Aline Fróes`,
        profis:`#CEO`,
        key:5,
        img: Ph1
    },            {
        name:`Aline Nogueira`,
        profis:`#Agente Socioemocional`,
        key:6,
        img:Ph5
    },            {
        name:`Andrea Marinho`,
        profis:`#Psicóloga`,
        key:7,
        img:Ph9
    },            {
        name:`Cris Dos Prazeres`,
        profis:`#Coordenadora Executiva`,
        key:8,
        img:Ph13
    },            {
        name:`Karynne Moreira`,
        profis:`#Facilitadora Técnica`,
        key:9,
        img:Ph14
    },            {
        name:`Luzia Merlim`,
        profis:`#Agente Socioemocional`,
        key:10,
        img:Ph3
    },            {
        name:`Mariana Correia`,
        profis:`#Coordenadora Administrativa`,
        key:11,
        img:Ph7
    },            {
        name:`Marina Tiago`,
        profis:`#Agente de Estratégia`,
        key:12,
        img:Ph11
    },            {
        name:`Marlon Yuri`,
        profis:`#Instrutor Técnico`,
        key:13,
        img:Ph15
    },            {
        name:`Pricila Tufani`,
        profis:`#Agente de Estratégia`,
        key:14,
        img:Ph8
    }
]

export default function Fmains({children}) {
/*     const [mod, setMod] = useState(false)
 */    const [busca, SetBusc]= useState(``)
    const lowerBusca = busca.toLowerCase()
    const EquipeFiltradas = equipe
  .filter((equipe)=> equipe.name.toLowerCase().includes(lowerBusca))
  return(
    <>
        <S.Equip>
            <div>
                <S.ContEquip>
                    <h3 id="eq">Equipe</h3>
                </S.ContEquip>
                <div>
                    <div>
                        <S.ContFilter>
                            <S.BoxFilter>
                                <S.Filter type="text" placeholder="Pesquisar..."
                                value={busca}
                                onChange={(event) => {
                                    SetBusc(event.target.value)
                                }}/>
                                <S.BoxLup>
                                    <S.Lup src={Lup} alt="Lupa de busca(Equipe)"/>
                                </S.BoxLup>
                            </S.BoxFilter>
                        </S.ContFilter>
                        <S.ContEquipVnw >
                            {EquipeFiltradas.map((item)=>(
                                <S.CardEquipe 
                                key={item.key}
/*                                 onClick={() => setMod(true)} */
                                > {/* {mod === false ? <Mod/> :null} */}
                                        <S.ContProfisName>
                                            <S.Name>{item.name}</S.Name>
                                            <S.Area>{item.profis}</S.Area>
                                        </S.ContProfisName>
                                        <S.BoxProfiss>
                                            <S.Profiss src={item.img} alt={item.name}/>
                                        </S.BoxProfiss>
                                </S.CardEquipe>
                            ))}
                        </S.ContEquipVnw>

                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </S.Equip>
    </>

  )
}

