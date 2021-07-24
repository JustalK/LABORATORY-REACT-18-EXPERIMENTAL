/**
 * Reload the component multiple time, the second suspense will sometime load first
 * @module Experiences/Experience3
 */

import React, { Suspense } from 'react'
import Children1 from '@pages/Experience3/Children1'
import Children2 from '@pages/Experience3/Children2'

/**
 * @function Experience
 * Reload the component multiple time, the second suspense will sometime load first
 * @return {Object} Return the dom
 */
const Experience = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Children1 />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Children2 />
      </Suspense>
    </>
  )
}

export default Experience
