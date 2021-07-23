/**
 * The module managing the home page
 * @module Experiences/Experience2
 */

import React, { useTransition, useState } from 'react'

/**
 * @function Experience
 * Create the component Home
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
