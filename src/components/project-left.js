import project from '../images/photo2.png'
import Link from './links'
export default function ProjectLeft(props){
    return(
        <section className="project-left">
            <a href='' target='_blank'>
            <div className='project-container-left'>
                <div className='project-image-left'>
                    <img src={props.source} alt="" />
                    
                </div>
                
            </div>
            </a>
            <div className='project-info-left'>
                    <h3 className='project-title'>{props.title}</h3>
                    <p className='project-description'>{props.description}</p>
                    <Link name='LIVE APP' link={props.liveLink}/>
                    <Link name='LEARN MORE' link={props.learnLink}/>
            </div>
        </section>
    )
}