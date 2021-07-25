import React, { Profiler, memo } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const Children = ({ resource }) => {
  console.log(resource)
  const n = resource.num.read()
  return (
    <Profiler id="Children" onRender={onRender}>
      <div>{n}</div>
    </Profiler>
  )
}

export default memo(Children)
