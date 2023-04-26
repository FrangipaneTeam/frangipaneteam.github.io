import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './TeamMember.css'

const TeamMember = ({ member }) => (
  <div className='team_member'>

    <img src={member.picture} alt={member.name} className='team_member__picture' />
    <h3>{member.name}</h3>

    <div className="team_member__chips">
      {member.linkedin && (
        <a
          className="team_member__chip team_member__chip:hover"
          href={member.linkedin}
          target='_blank'
          rel='noreferrer'
          data-umami-event={`${member.name} Linkedin`}
        >
          <div className="md-chip-icon">
            <LinkedInIcon
              sx={{
                fontSize: '17px',
                verticalAlign: 'text-top',
              }}
            />
          </div>
          Linkedin
        </a>
      )}
      {member.github && (
        <a
          className="team_member__chip team_member__chip:hover"
          href={member.github}
          target='_blank'
          rel='noreferrer'
          data-umami-event={`${member.name} Github`}
        >
          <div className="md-chip-icon">
            <GitHubIcon
              sx={{
                fontSize: '17px',
                verticalAlign: 'text-top',
              }}
            />
          </div>
          Github
        </a>
      )}
    </div>

    {member.resume && (
      <p className='team_member__resume'>{member.resume}</p>
    )
    }

  </div>

)

export default TeamMember
