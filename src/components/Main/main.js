import React from 'react';
import FMain from "./mains/F.mains/F.Index"
import FSMain from "./mains/F.mains/S.Index"

import SMain from "./mains/S.mains/F.Index"
import SSMain from "./mains/S.mains/S.Index"


export default function Main() {
  return(
    <>
        <div>
            <FMain/>
            <FSMain/> 
        </div>
        <div>
            <SMain/>
            <SSMain/>
        </div>
    </>
  )
}

