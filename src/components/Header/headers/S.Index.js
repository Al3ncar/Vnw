import React from 'react';
import * as S from "./styled"
import MiniLog from "./img_header/MiniLog.svg"

export default function SecHeader() {
  return (
    <>
      <section>
        <S.Cont>
          <S.BoxVnw>
            <S.Vnw src={MiniLog} alt=""/>
          </S.BoxVnw>
          <S.ContTitl>
            <S.Titl>
              <S.Bars>//</S.Bars>
               Quer construir uma Carreira de sucesso como Desenvolvedor(a) Front-end?
            </S.Titl>
          </S.ContTitl>
          <S.Card>
            <S.ContBord>
              <S.BoxBord>
                <S.Close/>
                <S.Close/>
                <S.Close/>
              </S.BoxBord>
              <S.Bord/>
            </S.ContBord>
            <S.ContInscre>
              <S.Inscre>Inscreva-se no Vai na Web!</S.Inscre>
              <S.InscreParg>Inscrições 02 a 21 de Agosto</S.InscreParg>
            </S.ContInscre>
          </S.Card>
          <S.ContLink>
            <p>
              <S.BoxParg>Link para o formulário: </S.BoxParg>
              <S.AncParg href="https://docs.google.com/forms/d/e/1FAIpQLSd91L0SON4bgqDMpR1SOv-faCw0_RqIoih0wptbst5bVjvS4Q/closedform"target="_blank">
                 bit.ly/CarreiraVaiNaWeb
              </S.AncParg>
            </p>
          </S.ContLink>
        </S.Cont>

      </section>
    </>
  )
}

