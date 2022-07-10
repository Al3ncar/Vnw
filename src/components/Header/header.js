import React from 'react';
import * as S from "./styled"

import FHeader from './headers/F.Index'
import SHeader from './headers/S.Index'
 
export default function Header() {
  return(
    <S.Header>
        <FHeader/>
        <SHeader/>
    </S.Header>
  )
}

