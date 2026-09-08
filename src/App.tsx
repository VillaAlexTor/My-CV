import { useEffect, useRef, useState, type RefObject } from 'react'
import { ArrowDown, ArrowUpRight, Crosshair, MapPin, Menu, X } from 'lucide-react'

const capabilities = [
  { code: 'OSINT', title: 'Inteligencia de fuentes abiertas', tools: 'Shodan · Censys · Maltego · FOCA', detail: 'Reconocimiento, correlación de activos y construcción de superficie de ataque.' },
  { code: 'NET', title: 'Tráfico y redes', tools: 'Wireshark · Nmap', detail: 'Inspección de paquetes, enumeración y lectura técnica del comportamiento de red.' },
  { code: 'DFIR', title: 'Forense y respuesta', tools: 'Autopsy · Volatility · Hayabusa', detail: 'Adquisición, análisis de artefactos y respuesta estructurada a incidentes.' },
  { code: 'APP', title: 'Seguridad de aplicaciones', tools: 'OWASP · JADX · PE Studio', detail: 'Análisis estático, priorización de hallazgos y bug bounty hunting activo.' },
]

const stack = ['Go', 'Python', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'GORM', 'Docker', 'Kali Linux', 'Git']

function CinematicPortrait({ heroRef }: { heroRef: RefObject<HTMLElement | null> }) {
  const frameCount = 47
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stageRef = useRef<HTMLElement>(null)
  const framesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = window.matchMedia('(max-width: 800px)').matches
    const frameNumbers = reducedMotion
      ? [1]
      : mobile
        ? Array.from({ length: 24 }, (_, index) => Math.min(47, index * 2 + 1))
        : Array.from({ length: frameCount }, (_, index) => index + 1)

    Promise.all(frameNumbers.map((number) => new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image()
      image.decoding = 'async'
      image.onload = () => resolve(image)
      image.onerror = reject
      image.src = `/portraits/${number}.png`
    }))).then((images) => {
      if (cancelled) return
      framesRef.current = images
      currentFrameRef.current = 0
      setLoaded(true)
    })

    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (!loaded) return
    const canvas = canvasRef.current
    const stage = stageRef.current
    const hero = heroRef.current
    if (!canvas || !stage || !hero) return
    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return
    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = 'high'

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = hero.style

    const draw = () => {
      const image = framesRef.current[currentFrameRef.current]
      if (!image) return
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.clearRect(0, 0, canvas.width, canvas.height)
      const dpr = Math.min(window.devicePixelRatio || 1, 3)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      context.imageSmoothingEnabled = true
      context.imageSmoothingQuality = 'high'
      context.filter = 'contrast(1.045) saturate(1.015)'
      const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight)
      const drawWidth = image.naturalWidth * scale
      const drawHeight = image.naturalHeight * scale
      const drawX = (width - drawWidth) / 2
      const drawY = height - drawHeight

      context.filter = 'contrast(1.045) saturate(1.015)'
      context.drawImage(image, drawX, drawY, drawWidth, drawHeight)
      context.filter = 'none'

      // Dissolve the source image's hard rectangular edges into the hero background.
      const sideFeather = Math.min(drawWidth * .16, 92)
      const topFeather = Math.min(drawHeight * .07, 54)
      context.save()
      context.globalCompositeOperation = 'destination-out'

      const leftFade = context.createLinearGradient(drawX, 0, drawX + sideFeather, 0)
      leftFade.addColorStop(0, 'rgba(0,0,0,1)')
      leftFade.addColorStop(1, 'rgba(0,0,0,0)')
      context.fillStyle = leftFade
      context.fillRect(drawX, drawY, sideFeather, drawHeight)

      const rightFade = context.createLinearGradient(drawX + drawWidth - sideFeather, 0, drawX + drawWidth, 0)
      rightFade.addColorStop(0, 'rgba(0,0,0,0)')
      rightFade.addColorStop(1, 'rgba(0,0,0,1)')
      context.fillStyle = rightFade
      context.fillRect(drawX + drawWidth - sideFeather, drawY, sideFeather, drawHeight)

      const topFade = context.createLinearGradient(0, drawY, 0, drawY + topFeather)
      topFade.addColorStop(0, 'rgba(0,0,0,1)')
      topFade.addColorStop(1, 'rgba(0,0,0,0)')
      context.fillStyle = topFade
      context.fillRect(drawX, drawY, drawWidth, topFeather)

      // Remove the final source pixels completely; some frames contain a bright
      // one-pixel seam that survives an interpolated gradient at the boundary.
      context.fillStyle = '#000'
      context.fillRect(drawX - 1, drawY, 3, drawHeight)
      context.fillRect(drawX + drawWidth - 4, drawY, 6, drawHeight)
      context.restore()

    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 3)
      canvas.width = Math.max(1, Math.round(bounds.width * dpr))
      canvas.height = Math.max(1, Math.round(bounds.height * dpr))
      draw()
    }

    const update = () => {
      rafRef.current = 0
      const scrollRange = Math.max(1, hero.offsetHeight - window.innerHeight)
      const progress = reducedMotion ? 0 : Math.min(1, Math.max(0, (window.scrollY - hero.offsetTop) / scrollRange))
      const nextFrame = Math.min(framesRef.current.length - 1, Math.round(progress * (framesRef.current.length - 1)))
      if (nextFrame !== currentFrameRef.current) {
        currentFrameRef.current = nextFrame
        draw()
      }
      const range = (start: number, end: number) => Math.min(1, Math.max(0, (progress - start) / (end - start)))
      root.setProperty('--scroll-progress', String(progress))
      root.setProperty('--glow-progress', String(range(.06, .3)))
    }

    const requestUpdate = () => {
      if (!rafRef.current) rafRef.current = window.requestAnimationFrame(update)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(stage)
    resize()
    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
    }
  }, [heroRef, loaded])

  return (
    <figure className={`portrait-stage ${loaded ? 'is-ready' : ''}`} ref={stageRef}>
      <canvas ref={canvasRef} aria-label="Alexander eleva una máscara mientras avanzas por la página" />
      {!loaded && <div className="sequence-loader" role="status"><span />Preparando secuencia</div>}
      <figcaption className="sr-only">Secuencia cinematográfica controlada por desplazamiento: Alexander levanta una máscara desde el rostro descubierto hasta cubrirlo.</figcaption>
    </figure>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <main>
      <a className="skip-link" href="#perfil">Saltar al contenido</a>
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Villa, volver al inicio"><span>V</span>ILLA_OS</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X/> : <Menu/>}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#perfil" onClick={() => setMenuOpen(false)}>Perfil</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a>
          <a className="contact-link" href="https://github.com/VillaAlexTor" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Contactar <ArrowUpRight size={15}/></a>
        </div>
      </nav>

      <section id="inicio" className="hero-sequence" ref={heroRef}>
        <div className="hero">
          <div className="signal-line" aria-hidden="true"><i /></div>
          <div className="cyber-atmosphere" aria-hidden="true">
            <div className="cyber-glow" />
          </div>
          <div className="hero-copy">
            <h1><span>ALEXANDER</span><br/>VILLARROEL</h1>
            <p className="hero-role">Seguridad de la información <b>×</b> Ingeniería backend</p>
            <p className="hero-summary">Investigo amenazas, construyo herramientas y convierto señales dispersas en decisiones técnicas defendibles.</p>
            <div className="hero-meta"><span><MapPin size={15}/> La Paz, Bolivia</span><span><Crosshair size={15}/> OSINT · DFIR · AppSec</span></div>
          </div>
          <CinematicPortrait heroRef={heroRef}/>
          <div className="scroll-cue"><ArrowDown size={17}/><span>DESPLÁZATE PARA EQUIPAR</span></div>
        </div>
      </section>

      <section id="perfil" className="section profile-section">
        <header className="section-header"><h2>Pienso como atacante.<br/><em>Construyo como ingeniero.</em></h2><p>Último semestre de Ingeniería Informática en la UMSA, con mención en Seguridad de la Información.</p></header>
        <div className="capability-list">
          {capabilities.map((item) => <article key={item.code} className="capability"><span className="cap-code">{item.code}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><strong>{item.tools}</strong></article>)}
        </div>
      </section>

      <section id="proyectos" className="section projects-section">
        <div className="project-visual" aria-hidden="true"><span className="node n1">CLI</span><span className="node n2">OSINT</span><span className="node n3">CVSS</span><span className="node n4">PDF</span><i className="wire w1"/><i className="wire w2"/><i className="wire w3"/></div>
        <div className="project-copy"><h2>CÓNDOR<br/>FRAMEWORK</h2><p>Pipeline propio para transformar investigación OSINT en hallazgos priorizados y reportes listos para entregar.</p><ul><li>CLI de reconocimiento en Python</li><li>Dashboard operativo en React</li><li>Motor CVSS 3.1 y reportes PDF con Node.js</li></ul><a href="https://github.com/VillaAlexTor" target="_blank" rel="noreferrer">Explorar en GitHub <ArrowUpRight size={18}/></a></div>
      </section>

      <section className="section integrity-section">
        <div><h2>NUGEO</h2><p>Auditoría con integridad criptográfica: encadenamiento HMAC y checkpoints firmados con Ed25519.</p></div><div className="hash-chain" aria-label="Diagrama de cadena de integridad"><span>EVENT_01<small>HMAC A31F</small></span><i/><span>EVENT_02<small>HMAC B772</small></span><i/><span>CHECKPOINT<small>ED25519 ✓</small></span></div>
      </section>

      <section id="stack" className="section stack-section"><h2>ARSENAL<br/>TÉCNICO</h2><div className="stack-grid">{stack.map((skill, i) => <span key={skill} style={{ '--i': i } as React.CSSProperties}>{skill}</span>)}</div><p>Frameworks: MITRE ATT&amp;CK · NIST CSF 2.0 · OWASP Top 10 · CVSS 3.1</p></section>

      <footer><div><p>¿TIENES UN SISTEMA QUE PROTEGER<br/>O UNA HERRAMIENTA QUE CONSTRUIR?</p><a href="https://github.com/VillaAlexTor" target="_blank" rel="noreferrer">Hablemos <ArrowUpRight/></a></div><div className="footer-links"><a href="https://github.com/VillaAlexTor" target="_blank" rel="noreferrer">GitHub</a><span>LinkedIn · pendiente</span></div><small>© {new Date().getFullYear()} Alexander Villarroel // La Paz, BO</small></footer>
    </main>
  )
}
