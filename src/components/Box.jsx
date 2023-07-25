import React from 'react'
import squares from './squares'

const Box = (props) => {
  const [curState, setState] = React.useState(props.on);
  const toggle = () => {
    setState(prevOn => !prevOn);
  }
  const style = {
    backgroundColor : curState? "white" : "black"
  }
  console.log(props)
  return (
    <div> 
      <div onClick={toggle} style={style} className='boxes'></div>
    </div>
  )
}
export default Box
