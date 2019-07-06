import React from 'react'

const Button= props => {
  return <div className="knopochka">
    <button  className="btn" onClick={props.addComponent} >USA</button>
  </div>
}

export default Button