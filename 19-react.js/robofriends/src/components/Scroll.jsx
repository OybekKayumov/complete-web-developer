import React from 'react'

const Scroll = (props) => {
  console.log(props );
  return (
    <div style={{
          overflowY: 'scroll',
          border: '3px solid black',
          height: '500px'
    }}>
      {props.children}
    </div>
  )
}

export default Scroll

// props
// state
// children (components)
