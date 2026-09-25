import pythonImg from '../../../docs/legacy/assets/imgs/python.png'
import sqlImg from '../../../docs/legacy/assets/imgs/sql.png'
import jsImg from '../../../docs/legacy/assets/imgs/js.svg'
import htmlImg from '../../../docs/legacy/assets/imgs/html.png'
import cssImg from '../../../docs/legacy/assets/imgs/css.png'

const skills = [
  { src: pythonImg, alt: 'Python', label: 'Python' },
  { src: sqlImg, alt: 'SQL', label: 'SQL' },
  { src: jsImg, alt: 'JavaScript', label: 'JavaScript' },
  { src: htmlImg, alt: 'HTML', label: 'HTML' },
  { src: cssImg, alt: 'CSS', label: 'CSS' },
]

function SkillsSection() {
  return (
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
  )
}

export default SkillsSection