import './footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer>
        <div className="footer">
            <p>Shorpee &copy; {currentYear}</p>
        </div>
    </footer>
  )
}

export default Footer