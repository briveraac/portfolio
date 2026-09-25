function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>&copy; {currentYear} Bruno Rivera. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
