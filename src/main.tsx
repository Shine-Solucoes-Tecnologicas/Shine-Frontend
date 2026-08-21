import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const ACTIVE_THEME = 'violet'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Contato', href: '#contato' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

function Hero() {
  return (
    <main className="hero" id="inicio" data-theme={ACTIVE_THEME}>
      <div className="contours" aria-hidden="true">
        <div className="contour contour--white" />
        <div className="contour contour--mist" />
        <div className="contour contour--soft" />
        <div className="contour contour--medium" />
        <div className="contour contour--deep" />
      </div>

      <div className="orb orb--large" aria-hidden="true" />
      <div className="orb orb--small" aria-hidden="true" />

      <header className="header">
        <a className="brand" href="#inicio" aria-label="Shine, página inicial">
          <span className="brand__symbol" aria-hidden="true">S</span>
          <span>shine</span>
        </a>

        <nav className="navigation" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header__action" href="#entrar">Entrar</a>
      </header>

      <section className="hero__content" aria-labelledby="hero-title">
        <p className="eyebrow"><span /> Um novo jeito de evoluir</p>
        <h1 id="hero-title">
          Seu próximo passo<br />
          <em>começa aqui.</em>
        </h1>
        <p className="hero__description">
          Encontre clareza para transformar ideias em movimento e construir uma jornada que combina com você.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#comecar">
            Começar agora <ArrowIcon />
          </a>
          <a className="button button--secondary" href="#como-funciona">
            Conhecer a Shine
          </a>
        </div>

        <div className="hero__note">
          <div className="avatars" aria-hidden="true">
            <span>J</span><span>M</span><span>A</span>
          </div>
          <p><strong>+2 mil pessoas</strong><br />já começaram sua jornada</p>
        </div>
      </section>

      <div className="hero__visual" aria-hidden="true">
        <img src="/images/hero-woman.png" alt="" />
      </div>

      <a className="scroll-hint" href="#como-funciona" aria-label="Rolar para a próxima seção">
        <span />
        Explore
      </a>
    </main>
  )
}

function App() {
  return <Hero />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
