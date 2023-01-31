import React from 'react'
import Tilt from 'react-parallax-tilt'
import './Logo.css'
import brain from '../../img/brain.png'

const Logo = () => {
  return (
    <Tilt>
      <div style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen' }}>
      <img style={{paddingTop: '25px'}} src={brain} alt="brain" />
      </div>
    </Tilt>
  )
}

export default Logo

/*
<div className='ma4 mt0'>
<Tilt 
  className='br2 shadow-2' 
  style={{ height: '150px', width: '150' }}
  options={{max: 55}}
>
  <div className='pa3'>
      <img style={{paddingTop: '5px'}} src={brain} alt="brain" />
  </div>
</Tilt>
</div>
*/