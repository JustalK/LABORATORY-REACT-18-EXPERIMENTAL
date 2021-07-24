/**
 * Using the useTransition for getting a change
 * @module Experiences/Experience1
 */

import React, { useTransition, useState } from 'react'

/**
 * @function Experience
 * You can try to spam the button, you should see the Loading appeared from time to time
 * @return {Object} Return the dom
 */
const Experience = () => {
  const [val, setVal] = useState(0)
  const [isPending, startTransition] = useTransition({
    timeoutMs: 3000
  })

  return (
    <>
      <button
        onClick={() =>
          startTransition(() => {
            setVal((v) => v + 1)
          })
        }
      >
        Increment
      </button>
      {isPending ? ' Loading...' : null}
      <div>{val}</div>
    </>
  )
}

export default Experience
