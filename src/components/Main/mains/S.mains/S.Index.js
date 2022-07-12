import React from 'react';
import TechGirls from "../imgs_main/techGirls.png"
import * as S from "./styled"

export default function Smains() {
    return (
        <S.ContEvent>
            <S.ContPerf>
                <h3 id="ev">Eventos</h3>
            </S.ContPerf>
            <S.ContTech>
                <S.BoxTechNote>
                    <S.TechNote src={TechGirls} alt="" />
                </S.BoxTechNote>
                <S.ContTechGirls>
                    <S.TitlGirls>
                        <h4>Tech Girls</h4>
                    </S.TitlGirls>
                    <S.TechPerf>
                        Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.
                    </S.TechPerf>
                </S.ContTechGirls>
            </S.ContTech>
        </S.ContEvent>
    )
}