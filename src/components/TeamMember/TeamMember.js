import { useContext } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { ThemeContext } from '../../contexts/theme'
import './TeamMember.css'

const ImgRounded = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '50%',
  border: '2px solid #ff00b7',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
});

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
