function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>
                {currentYear}. Brunenger. derechos netos
            </p>
        </footer>
    )
}

export default Footer;