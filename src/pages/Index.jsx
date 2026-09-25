import pythonImg from '../../docs/legacy/assets/imgs/python.png'
import sqlImg from '../../docs/legacy/assets/imgs/sql.png'
import jsImg from '../../docs/legacy/assets/imgs/js.svg'
import htmlImg from '../../docs/legacy/assets/imgs/html.png'
import cssImg from '../../docs/legacy/assets/imgs/css.png'
import './Index.css'

const skills = [
  { src: pythonImg, alt: 'Python', label: 'Python' },
  { src: sqlImg, alt: 'SQL', label: 'SQL' },
  { src: jsImg, alt: 'JavaScript', label: 'JavaScript' },
  { src: htmlImg, alt: 'HTML', label: 'HTML' },
  { src: cssImg, alt: 'CSS', label: 'CSS' },
]

const contactLinks = {
  direct: [
    { href: 'mailto:brun.rivera@duocuc.cl', label: 'Email' },
    {
      href: 'https://www.linkedin.com/in/bruno-rivera-98038a327/',
      label: 'LinkedIn',
    },
    { href: 'https://github.com/briveraac', label: 'GitHub' },
  ],
  social: [
    {
      href: 'https://www.instagram.com/saaiiinttt77',
      label: 'Instagram',
    },
    { href: 'https://www.x.com/Rydeiziim', label: 'Twitter' },
    { href: 'https://wa.me/56951501780', label: 'Whatsapp' },
  ],
}

function Index() {
  return (
    <>
      <section id="cv">
        <div className="main">
          <section className="izquierda">
            <div className="foto-placeholder" aria-hidden="true">
              BR
            </div>
            <h1>Bruno Rivera</h1>
            <ul className="roles">
              <li>Data Engineer JR.</li>
              <li>Fullstack Developer JR.</li>
            </ul>
          </section>

          <section className="derecha">
            <h4>About me</h4>
            <p>
              Soy un estudiante de Ingenieria en informatica en DUOC UC.
              Actualmente trabajando para KLOG.CO como Data Engineer JR.
            </p>

            <h4>Estudios</h4>
            <ul>
              <li>Tecnico medio en Programacion - Liceo RBL.</li>
              <li>Ingenieria en informatica - DUOC UC.</li>
            </ul>
          </section>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.label}>
              <img src={skill.src} alt={skill.alt} />
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <p>Si quieres contactarme, puedes hacerlo a través de:</p>
        <div className="main">
          <div className="izquierda">
            <h4>Directo</h4>
            <ul>
              {contactLinks.direct.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="derecha">
            <h4>Redes Sociales</h4>
            <ul>
              {contactLinks.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
