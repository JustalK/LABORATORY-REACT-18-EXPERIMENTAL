/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler, unstable_useOpaqueIdentifier } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const id = unstable_useOpaqueIdentifier()
  const secondId = unstable_useOpaqueIdentifier()
  const thirdId = unstable_useOpaqueIdentifier()

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div id={id}>Element with id</div>
      <div id={secondId}>Element with another id</div>
      <div id={thirdId}>Element with also another id</div>
    </Profiler>
  )
}

export default Experience
