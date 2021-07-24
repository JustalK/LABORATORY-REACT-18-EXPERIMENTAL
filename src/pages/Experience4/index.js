/**
 * Reload the component and you will always see the component load first or at the same time as component 2
 * @module Experiences/Experience4
 */

import React, { Suspense, SuspenseList } from 'react'
import Children1 from '@pages/Experience3/Children1'
import Children2 from '@pages/Experience3/Children2'

/**
 * @function Experience
 * Reload the component and you will always see the component load first or at the same time as component 2
 * @return {Object} Return the dom
 */
const Experience = () => {
  return (
    <>
      <SuspenseList revealOrder="forwards">
        <Suspense fallback={<p>Loading...</p>}>
          <Children1 />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <Children2 />
        </Suspense>
      </SuspenseList>
    </>
  )
}

export default Experience
