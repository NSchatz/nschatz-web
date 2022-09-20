import project from '../images/photo2.png'
import Link from './links'

export default function ProjectRight(props){
    return(
        <div className="project-right">
            <div className='project-info-right'>
                    <h3 className='project-title'>{props.title}</h3>
                    <p className='project-description'>{props.description}</p>
                    <Link name='LEARN MORE'/>
                    
            </div>
            <a href='' target='_blank'>
                <div className='project-container-right'>
                    <div className='project-image-right'>
                        <img src={props.source} />
                        
                    </div>
                </div>
            </a>
        </div>
    )
}