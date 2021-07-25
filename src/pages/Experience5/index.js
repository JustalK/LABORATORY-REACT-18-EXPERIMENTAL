/**
 * Using the useTransition for getting a change
 * @module Experiences/Experience1
 */

import React, { Profiler, useState, useDeferredValue, Suspense } from 'react'
import { createResource } from '@services/FakeUser'
import Children from './Children'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const initialResource = createResource()

/**
 * @function Experience
 * You can try to spam the button, you should see the Loading appeared from time to time
 * @return {Object} Return the dom
 */
const Experience = () => {
  const [resource, setResource] = useState(initialResource)
  const deferredResource = useDeferredValue(resource, { timeoutMs: 2000 })

  return (
    <Profiler id="Experience" onRender={onRender}>
      <Suspense fallback={<h1>loading num...</h1>}>
        <Children resource={deferredResource} />
      </Suspense>
      <button onClick={() => setResource(createResource())}>
        Change Resource
      </button>
    </Profiler>
  )
}

export default Experience
