import React from 'react'

import { Button } from '../Button'

import './HomeHeader.css'

const HomeHeader = () => (
  <div className={'HomeHeader'}>
    <h1 className={'title'} id={'title'}>
      Monto Wave Portal 🚀
    </h1>
    <h3 className={'subtitle'}>Just wave me and you will see it here 💕</h3>
    <Button>Wave at me</Button>
  </div>
)

export default React.memo(HomeHeader)
