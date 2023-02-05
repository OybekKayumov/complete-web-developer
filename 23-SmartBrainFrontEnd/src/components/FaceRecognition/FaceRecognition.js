import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center'>
      <img id='inputimage' src={imageUrl} alt="clarifai" />
      <div 
        className='bounding-box'
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
      >

      </div>
    </div>
  )
}

export default FaceRecognition

{/* <img src={'https://samples.clarifai.com/face-det.jpg'} alt="clarifai" /> */}