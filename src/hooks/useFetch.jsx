import { useEffect, useRef, useState } from "react"
import axios from "axios"

function useFetch(lang) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const [finalData, setFinalData] = useState({})

  const updateTranslation = (lang) => {
    let obj = {}
    for (const key of data)
      obj[key['name']] = key[lang]
      
    setFinalData(obj)
  }

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()

    ;(async () => {
      try {
        const res = await axios.get("https://fx5mwe-8080.csb.app/en", { signal: controller.signal })
        setData(res.data)
        
      } catch(err) {
        setError(err)
      }
      
      setLoading(false)

      return () => { controller.abort() } 
    })()
    
  }, [])

  useEffect(() => {
    if (!data) return
    updateTranslation('en')
  }, [data])
  

  return {finalData, updateTranslation, loading, error}
}

export default useFetch