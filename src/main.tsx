import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CalendarIcon, ClockIcon, GrowthChartIcon, TaskListIcon } from './components/DecorativeIcons'
import './styles.css'

const ACTIVE_THEME = 'neon'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Projeto', href: '#projeto' },
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
    <section className="hero" id="inicio">
      <div className="contours" aria-hidden="true">
        <div className="contour contour--white" />
        <div className="contour contour--mist" />
        <div className="contour contour--soft" />
        <div className="contour contour--medium" />
        <div className="contour contour--deep" />
      </div>

      <div className="orb orb--large" aria-hidden="true" />
      <div className="orb orb--small" aria-hidden="true" />
      <CalendarIcon className="decorative-calendar" />
      <ClockIcon className="decorative-clock" />
      <TaskListIcon className="decorative-task-list" />
      <GrowthChartIcon className="decorative-growth-chart" />

      <header className="header">
        <a className="brand" href="/#inicio" aria-label="Shine, página inicial">
          <span className="brand__symbol" aria-hidden="true">S</span>
          <span>shine</span>
        </a>

        <nav className="navigation" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header__action" href="#projeto">O projeto</a>
      </header>

      <section className="hero__content" aria-labelledby="hero-title">
        <p className="eyebrow"><span /> Gestão de serviços · Projeto de portfólio</p>
        <h1 id="hero-title">
          Seu próximo passo<br />
          <em>começa aqui.</em>
        </h1>
        <p className="hero__description">
          Uma proposta para conectar agenda, serviços e pessoas. Explore a interface e o desenvolvimento da Shine.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projeto">
            Explorar o projeto <ArrowIcon />
          </a>
          <a className="button button--secondary" href="#como-funciona">
            Conhecer a Shine
          </a>
        </div>

        <div className="hero__note">
          <p><strong>Do produto ao portfólio</strong><br />design, arquitetura e aprendizado em evolução</p>
        </div>
      </section>

      <div className="hero__visual" aria-hidden="true">
        <img src="/images/hero-woman-v2.png" alt="" />
      </div>

      <a className="scroll-hint" href="#como-funciona" aria-label="Rolar para a próxima seção">
        <span />
        Explore
      </a>
    </section>
  )
}

function LandingPage() {
  return (
    <main className="landing-page" data-theme={ACTIVE_THEME}>
      <Hero />

      <div className="section-divider" aria-hidden="true">
        <span className="section-divider__wave section-divider__wave--deep" />
        <span className="section-divider__wave section-divider__wave--medium" />
        <span className="section-divider__wave section-divider__wave--soft" />
        <span className="section-divider__wave section-divider__wave--mist" />
      </div>

      <section className="next-section" id="como-funciona" aria-labelledby="next-section-title">
        <div className="next-section__content">
          <div className="next-section__visual" aria-hidden="true">
            <span className="next-section__visual-shape" />
            <img src="/images/barber-service.png" alt="" />
          </div>

          <div className="next-section__copy">
            <p className="eyebrow"><span /> Pensada para quem presta serviços</p>
            <h2 id="next-section-title">Como funciona</h2>
            <p className="next-section__description">
              A proposta da Shine reúne serviços, profissionais e agendamentos em uma experiência de gestão. Esta interface apresenta os primeiros passos dessa visão.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section" id="beneficios" aria-labelledby="benefits-title">
        <div className="benefits-section__content">
          <div className="benefits-section__copy">
            <p className="eyebrow"><span /> Organização que gera resultados</p>
            <h2 id="benefits-title">Tudo sob controle.</h2>
            <p className="benefits-section__description">
              Uma visão de produto para organizar a rotina e acompanhar a operação. Os módulos de gestão estão em desenvolvimento; a interface atual demonstra a apresentação e o acesso à plataforma.
            </p>
          </div>

          <div className="benefits-section__visual" aria-hidden="true">
            <span className="benefits-section__visual-shape" />
            <img src="/images/stock-organizing.png" alt="" />
          </div>
        </div>
      </section>
      <section className="portfolio-section" id="projeto" aria-labelledby="portfolio-title">
        <p className="eyebrow"><span /> Sobre este trabalho</p>
        <h2 id="portfolio-title">Uma ideia que continua como aprendizado.</h2>
        <p>A iniciativa comercial da Shine foi encerrada. O projeto segue como portfólio de desenvolvimento, com uma interface em React e TypeScript e uma API modular em .NET.</p>
        <p>Esta é uma apresentação do trabalho realizado. Não há contratação de serviços ou suporte comercial.</p>
        <div className="hero__actions">
          <a className="button button--primary" href="https://github.com/Shine-Solucoes-Tecnologicas/Shine-Frontend">Explorar o frontend <ArrowIcon /></a>
          <a className="button button--secondary" href="https://github.com/Shine-Solucoes-Tecnologicas/Shine-Backend">Conhecer o backend</a>
        </div>
      </section>
      <footer className="portfolio-footer">Shine · Projeto de portfólio · Gestão de serviços</footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><LandingPage /></StrictMode>)
