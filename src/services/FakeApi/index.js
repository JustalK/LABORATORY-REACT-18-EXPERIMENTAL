const wrapPromise = (promise) => {
  let status = 'pending'
  let result
  const suspender = promise.then(
    (r) => {
      status = 'success'
      result = r
    },
    (e) => {
      status = 'error'
      result = e
    }
  )
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      } else {
        throw suspender
      }
    }
  }
}

const fetchData = (random = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        foo: 'bar'
      })
    }, 3000 * random)
  })
}

export const dataFetcher = (params) => {
  return wrapPromise(fetchData(params))
}

export default dataFetcher
