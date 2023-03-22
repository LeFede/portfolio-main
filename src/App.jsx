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
            <li><a onClick={handleClick} data-lang="en" href="#uk">🇬🇧</a></li>
            <li><a onClick={handleClick} data-lang="es" href="#ar">🇦🇷</a></li>
            <li><a onClick={handleClick} data-lang="it" href="#it">🇮🇹</a></li>
            <li><a onClick={handleClick} data-lang="de" href="#de">🇩🇪</a></li>
            <li className={`first`}><a href="#">{finalData?.e6 || 'About'}</a></li>
            <li><a href="#work">{finalData?.e7 || 'Work'}</a></li>
            <li><a href="#contact">{finalData?.e8 || 'Contact'}</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="welcome">
          <h1>{finalData?.e1 || 'Hey I am Fede'}</h1>
          <h2>{finalData?.e2 || 'a web developer'}</h2>
        </section>
        <section id="work">
          <h2>{finalData?.e3 || 'These are some of my projects'}</h2>
          <div className='projects container'>
            <Project alt="JS Calculator page" caption="JS Calculator" path='./webp/calc.webp' url="https://js-calculator-five-kappa.vercel.app/" tec="js"/>
            <Project alt="React Todo page" caption="React TODO" path='./webp/react.webp' url="https://react-todo-liard-rho.vercel.app/" tec="react"/>
            <Project alt="Svelte Todo page" caption="Svelte TODO" path='./webp/svelte.webp' url="https://svelte-todo-eta.vercel.app/" tec="svelte"/>
            <Project alt="Vue Todo page" caption="Vue TODO" path='./webp/vue.webp' url="https://vue-todo-five-kappa.vercel.app/" tec="vue"/>
            <Project alt='Hawaii Bowl page' caption='Hawaii Bowl' path='./webp/hawaii.webp' url="https://www.thehawaiibowl.com/" tec="wp"/>
            <Project alt='Mexico Bowl page' caption='Mexico Bowl' path='./webp/mexico.webp' url="https://newmexicobowl.com/" tec="wp"/>
            <Project alt='The Mill Restaurants page' caption='The Mill Restaurants' path='./webp/mill.webp' url="https://www.themillrestaurants.com/" tec="wp"/>
            <Project alt='Newberg Irrigation page' caption='Newberg Irrigation' path='./webp/newberg.webp' url="https://irrigationnet.com/" tec="wp"/>
          </div>
        </section>
        <section id="contact">
          <h2>{finalData?.e4 || 'Let\'s work together...'}</h2>
          <h3>{finalData?.e5 || 'How do you take your coffee?'}</h3>
          <div className='links'>
            <a href="https://github.com/LeFede/" target="_blank"><i className="fa-brands fa-github"></i>GitHub</a>
            <a href="mailto:lefedeok@gmail.com"><i className="fa-at"></i>Email</a>
            <a href="https://www.linkedin.com/in/lefede" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p></p>
          <p>©2023</p>
        </div>
      </footer>
    </div>
  )
}

export default App
