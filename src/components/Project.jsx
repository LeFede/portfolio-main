function Project({caption, url, tec = null, path = "./ex.png", alt, wide = 1, tall = 1, contain = false}) {
  const tecs = {
    react: './react.svg',
    svelte: './svelte.svg',
    wp: './wp.svg',
    js: './js.svg',
    vue: './vue.svg'
  }

  return (
    <div className="project wide tall" style={{"--wide": wide, "--tall": tall}}>
      <a className="project-link" target="_blank" href={url}>
        <div className={`image ${contain ? "contain" : ""}`} style={{backgroundImage: `url(${path})`}}></div>
        <div className="desc">
          <div className="icon"><img src={tecs[tec]} alt="" /></div>
          <div className="text">{caption}</div>
        </div>
      </a>
    </div>
  )
}

export default Project