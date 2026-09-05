import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Crosshair, MapPin, Menu, X } from 'lucide-react'

const capabilities = [
  { code: 'OSINT', title: 'Inteligencia de fuentes abiertas', tools: 'Shodan · Censys · Maltego · FOCA', detail: 'Reconocimiento, correlación de activos y construcción de superficie de ataque.' },
  { code: 'NET', title: 'Tráfico y redes', tools: 'Wireshark · Nmap', detail: 'Inspección de paquetes, enumeración y lectura técnica del comportamiento de red.' },
  { code: 'DFIR', title: 'Forense y respuesta', tools: 'Autopsy · Volatility · Hayabusa', detail: 'Adquisición, análisis de artefactos y respuesta estructurada a incidentes.' },
  { code: 'APP', title: 'Seguridad de aplicaciones', tools: 'OWASP · JADX · PE Studio', detail: 'Análisis estático, priorización de hallazgos y bug bounty hunting activo.' },
]

const stack = ['Go', 'Python', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'GORM', 'Docker', 'Kali Linux', 'Git']

function PixelPortrait({ progress }: { progress: number }) {
  const [imagesAvailable, setImagesAvailable] = useState(false)
  useEffect(() => {
    const sources = ['/portraits/villa-sin-mascara.png', '/portraits/villa-con-mascara.png']
    Promise.all(sources.map((src) => new Promise<void>((resolve, reject) => {
      const img = new Image(); img.onload = () => resolve(); img.onerror = () => reject(); img.src = src
    }))).then(() => setImagesAvailable(true)).catch(() => setImagesAvailable(false))
  }, [])

  return (
    <figure className="portrait-stage">
      <div className="scan-coordinates" aria-hidden="true"><span>SUBJECT_VILLA</span><span>{String(Math.round(progress * 100)).padStart(3, '0')}%</span></div>
      {imagesAvailable ? (
        <>
          <img className="portrait-img" src="/portraits/villa-sin-mascara.png" alt="Alexander Villarroel sin máscara" />
          <div className="mask-reveal" style={{ clipPath: `inset(${100 - progress * 100}% 0 0 0)` }}>
            <img className="portrait-img" src="/portraits/villa-con-mascara.png" alt="" />
          </div>
        </>
      ) : (
        <div className="pixel-avatar" aria-label="Espacio reservado para el retrato de Alexander">
          <div className="pixel-head"><i className="hair"/><i className="ear left"/><i className="ear right"/><i className="eye left"/><i className="eye right"/><i className="nose"/></div>
          <div className="pixel-neck"/><div className="pixel-body"/>
          <div className="generated-mask" style={{ clipPath: `inset(${100 - progress * 100}% 0 0 0)` }}>
            <div className="mask-shell"><i className="mask-eye left"/><i className="mask-eye right"/><i className="filter"/></div>
          </div>
        </div>
      )}
      <div className="portrait-grid" aria-hidden="true" />
      <div className="scan-line" style={{ top: `${100 - progress * 100}%` }} aria-hidden="true" />
      {!imagesAvailable && <p className="asset-note">RETRATOS PENDIENTES<br/><small>public/portraits/</small></p>}
      <figcaption className="sr-only">Retrato interactivo de Alexander. La máscara se equipa progresivamente al avanzar por la página. Progreso: {Math.round(progress * 100)}%.</figcaption>
    </figure>
  )
}

export default function App() {
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const update = () => {
      const h = Math.max(window.innerHeight * .9, 500)
      setProgress(Math.min(1, Math.max(0, window.scrollY / h)))
    }
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const onPointerMove = (event: React.PointerEvent) => {
    if (window.scrollY > window.innerHeight * .85) return
    const box = heroRef.current?.getBoundingClientRect()
    if (!box) return
    setProgress(Math.min(1, Math.max(0, (event.clientY - box.top) / box.height)))
  }

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

      <section id="inicio" className="hero" ref={heroRef} onPointerMove={onPointerMove}>
        <div className="signal-line" aria-hidden="true"><i style={{ height: `${progress * 100}%` }}/></div>
        <div className="hero-copy">
          <h1><span>ALEXANDER</span><br/>VILLARROEL</h1>
          <p className="hero-role">Seguridad de la información <b>×</b> Ingeniería backend</p>
          <p className="hero-summary">Investigo amenazas, construyo herramientas y convierto señales dispersas en decisiones técnicas defendibles.</p>
          <div className="hero-meta"><span><MapPin size={15}/> La Paz, Bolivia</span><span><Crosshair size={15}/> OSINT · DFIR · AppSec</span></div>
        </div>
        <PixelPortrait progress={progress}/>
        <div className="scroll-cue"><ArrowDown size={17}/><span>DESPLÁZATE PARA EQUIPAR</span></div>
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
