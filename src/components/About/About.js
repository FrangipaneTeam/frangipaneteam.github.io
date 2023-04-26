import GitHubIcon from '@material-ui/icons/GitHub'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { about } from '../../frangipane'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
                rel="noreferrer"
                data-umami-event='About Github'
              >
                <GitHubIcon />
              </a>
            )}
            {social.documentation && (
              <a
                href={social.documentation}
                aria-label='documentation'
                className='link link--icon'
                target="_blank"
                rel="noreferrer"
                data-umami-event='About Documentation'
              >
                <MenuBookIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
