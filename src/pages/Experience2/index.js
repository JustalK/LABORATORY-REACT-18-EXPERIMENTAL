/**
 * The module managing the home page
 * @module Experiences/Experience2
 */

import React, { useTransition, useState, Suspense } from 'react'
import { dataFetcher } from '@services/FakeApi'

const initialData = {
  read: () => {
    return { foo: 'initial' }
  }
}

/**
 * @function Experience
 * Create the component Home
 * @return {Object} Return the dom
 */
const Experience = () => {
  const [data, setData] = useState(initialData)
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition({
    timeoutMs: 3000
  })

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <button
          disabled={isPending}
          onClick={() =>
            startTransition(() => {
              setData(dataFetcher())
            })
          }
        >
          Increment
        </button>
        <div>{data?.read()?.foo}</div>
      </Suspense>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>{count}</div>
    </>
  )
}

export default Experience
