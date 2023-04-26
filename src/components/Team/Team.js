import uniqid from 'uniqid'
import { team } from '../../frangipane'
import TeamMember from '../TeamMember/TeamMember'
import './Team.css'

const Team = () => {
  if (!team.length) return null

  return (
    <section id='team' className='section team'>
      <h2 className='section__title'>Team</h2>

      <div className='team__grid'>
        {team.map((member) => (
          <TeamMember key={uniqid()} member={member} />
        ))}
      </div>
    </section>
  )
}

export default Team
