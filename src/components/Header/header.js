import React from 'react';
import * as S from "./styled"

import FHeader from './headers/FirHeader'
import SHeader from './headers/SecHeader'
 
export default function Header() {
  return(
    <S.Header>
        <FHeader/>
        <SHeader/>
    </S.Header>
  )
}

