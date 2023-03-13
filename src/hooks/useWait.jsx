function useWait(seconds) {

  const prom = new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, seconds * 1000)
  })

  return prom

}

export default useWait