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

function ContactSection() {
  return (
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
  )
}

export default ContactSection