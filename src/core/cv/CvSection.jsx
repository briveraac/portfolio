import CvLeft from './CvLeft.jsx'
import CvRight from './CvRight.jsx'

function CvSection() {
  return (
    <section id="cv">
      <div className="main">
        <CvLeft />
        <CvRight />
      </div>
    </section>
  )
}

export default CvSection