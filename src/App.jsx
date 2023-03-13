import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './hooks/useFetch';
import useWait from './hooks/useWait';
import Project from './components/Project';


function App() {

  const {finalData, updateTranslation, loading, error} = useFetch()
  if (error) console.log(error)

  const handleClick = async (e) => {
    if (loading) return
    const language = e.target.attributes['data-lang'].value
    updateTranslation(language)
  }

  const handleResize = async () => {
    document.querySelector('body').classList.add('preload')
    await useWait(.2)
    document.querySelector('body').classList.remove('preload')
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    
    ;(async() => {
      await useWait(.2)
      document.querySelector('body').classList.remove('preload')
    })()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <header>
        {/* TODO */}
        <label  htmlFor="mobile"><i className="fa-solid fa-grip-lines"></i></label>
        <input type="checkbox" className="mobile" id="mobile" />
        <nav>
          <ul>
            <li><a onClick={handleClick} data-lang="en">🇬🇧</a></li>
            <li><a onClick={handleClick} data-lang="es">🇦🇷</a></li>
            <li><a onClick={handleClick} data-lang="it">🇮🇹</a></li>
            <li><a onClick={handleClick} data-lang="de">🇩🇪</a></li>
            <li className={`first`}><a href="#">{finalData?.e6 || ''}</a></li>
            <li><a href="#work">{finalData?.e7 || ''}</a></li>
            <li><a href="#contact">{finalData?.e8 || ''}</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="welcome">
          <h1>{finalData?.e1 || ''}</h1>
          <h4>{finalData?.e2 || ''}</h4>
        </section>
        <section id="work">
          <h2>{finalData?.e3 || ''}</h2>
          <div className='projects container'>
            <Project alt='project1' caption='Hawaii Bowl' path='./hawaii.png' url="https://www.thehawaiibowl.com/" tec="wp"/>
            <Project alt='project2' caption='Mexico Bowl' path='./mexico.png' url="https://newmexicobowl.com/" tec="wp"/>
            <Project alt='project3' caption='The Mill Restaurants' path='./mill.png' url="https://www.themillrestaurants.com/" tec="wp"/>
            <Project alt='project4' caption='Newberg Irrigation' path='./newberg.png' url="https://irrigationnet.com/" tec="wp"/>
          </div>
        </section>
        <section id="contact">
          <h2>{finalData?.e4 || ''}</h2>
          <h4>{finalData?.e5 || ''}</h4>
          <div className='links'>
            <a href="https://github.com/LeFede/" target="_blank"><i className="fa-brands fa-github"></i>GitHub</a>
            <a href="mailto:lefedeok@gmail.com"><i className="fa-at"></i>Email</a>
            <a href="https://www.linkedin.com/in/lefede" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            {/* <a href="https://wa.me/+5492213142657" target="_blank"><i className="fas fa-mobile-alt"></i>{finalData?.e9 || 'Call me'}</a> */}
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p></p>
          <p>©2023 All Rights Reserved </p>
        </div>
      </footer>
    </div>
  )
}

export default App
