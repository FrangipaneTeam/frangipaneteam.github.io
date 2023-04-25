import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import MenuBookIcon from '@material-ui/icons/MenuBook';

import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    <p className='project__links'>

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          target="_blank"
          rel="noreferrer"
          data-umami-event={`${project.name} Github`}
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
          target="_blank"
          rel="noreferrer"
          data-umami-event={`${project.name} Documentation`}
        >
          <MenuBookIcon />
        </a>
      )}

    </p>
  </div>
)

export default ProjectContainer
