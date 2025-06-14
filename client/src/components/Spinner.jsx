import React from 'react'

const Spinner = ({width}) => {
  return (
    <div className={`border border-4 border-b-transparent rounded-full spinner`}
    style={{'width': width, 'height': width}}
    > </div>
  )
}

export default Spinner