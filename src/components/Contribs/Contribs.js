import uniqid from 'uniqid'
import { contribs } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import '../Projects/Projects.css'

const Contribs = () => {
  if (!contribs.length) return null

  return (
    <section id='contribs' className='section projects'>
      <h2 className='section__title'>Maintainers</h2>

      <div className='projects__grid'>
        {contribs.map((contrib) => (
          <ProjectContainer key={uniqid()} project={contrib} />
        ))}
      </div>
    </section>
  )
}

export default Contribs
