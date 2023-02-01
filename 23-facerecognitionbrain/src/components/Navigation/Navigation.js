import React from 'react'

const Navigation = ({ onRouteChanges, isSignedIn }) => {
  
    if (isSignedIn) {
      return (
        <nav 
          style={{display: 'flex', 
          justifyContent: 'flex-end'
        }}>
          <p
          onClick={() => onRouteChanges('signout')}
            className='f3 link dim black  underline pa3 pointer'
          >
            Sign Out
          </p>
        </nav>
      )
    } else {
      return (
        <nav 
          style={{display: 'flex', 
          justifyContent: 'flex-end'
        }}>
          <p
          onClick={() => onRouteChanges('signin')}
            className='f3 link dim black  underline pa3 pointer'
          >
            Sign In
          </p>

          <p
            onClick={() => onRouteChanges('register')}
              className='f3 link dim black  underline pa3 pointer'
            >
              Register
            </p>
        </nav>
      )
    }  
}

export default Navigation