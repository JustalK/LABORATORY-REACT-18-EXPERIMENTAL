import React, { useEffect, useState } from 'react'
import { dataFetcher } from '@services/FakeApi'

const initialData = {
  read: () => {
    return { foo: 'initial' }
  }
}

const Children2 = () => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    // Too lazy to do a deep compare useEffect for a test
    if (data.read().foo === 'initial') {
      setData(dataFetcher(Math.random()))
    }
  }, [data])

  return <div>{data?.read()?.foo}</div>
}

export default Children2
