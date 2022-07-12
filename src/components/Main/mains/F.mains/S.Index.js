import React from 'react';
import Backg from "../imgs_main/codBack.png"
import NoteIc from "../imgs_main/icoNote.svg"
import * as S from "./styled"

export default function Smains(){
  return (
    <S.ContForm>
      <S.BoxCont>
        <S.BoxFor>
          <h3 id="for">Formação</h3>
        </S.BoxFor>
        <S.ContsNote>
          <S.ContNote>
            <S.BoxNote>
              <S.Note src={NoteIc} alt="Computador Logo"/>
            </S.BoxNote>
            <S.FormParg>
              <S.ContTitlForm>
                <h4>FRONT-END</h4>
              </S.ContTitlForm>
              <p>Quem trabalha com Front End é responsável por desenvolver por meio</p>
              <p>do código uma interface gráfica e, normalmente, com as tecnologias</p>
              <p>base da Web: HTML, CSS e JavaScript.</p>
            </S.FormParg>
          </S.ContNote>
          <S.ContNote>
            <S.BoxNote>
              <S.Note src={NoteIc} alt="Computador Logo"/>
            </S.BoxNote>
            <S.FormParg>
              <S.ContTitlForm>
                <h4>BACK-END</h4>
              </S.ContTitlForm>
              <p>
                O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco
              </p>
              <p>de dados e vice-versa, sempre aplicando</p>
              <p>
                as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não
              </p>
              <p> consegue acessar ou manipular algo).</p>
            </S.FormParg>
          </S.ContNote>
        </S.ContsNote>
      </S.BoxCont>
      <section>
        <S.BoxBack>
          <S.Back src={Backg} alt="Fundo code"/>
        </S.BoxBack>
      </section>
    </S.ContForm>
  )
}