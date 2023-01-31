import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center'>
      <img id='inputimage' src={imageUrl} alt="clarifai" />
      
    </div>
  )
}

export default FaceRecognition

{/* <img src={'https://samples.clarifai.com/face-det.jpg'} alt="clarifai" /> */}