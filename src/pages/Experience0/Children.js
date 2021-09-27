import React, { Profiler } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const Children = ({ val }) => {
  return (
    <Profiler id="Children" onRender={onRender}>
      <div>Val: {val}</div>
    </Profiler>
  )
}

export default Children
