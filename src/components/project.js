import project from '../images/photo3.jpeg'
export default function Project(props){
    return(
        <div className={`project-${props.side}`}>
            
            <div className={`project-container-${props.side}`}>
                
                    <img src={props.source} alt="" />
                
                
            </div>
            
            <div className={`project-info-${props.side}`}>
                    <h3 className='project-title'>{props.title}</h3>
                    <p className='project-description'>{props.description}</p>
                    <a className='links' href="">LIVE APP</a>
                    <a className='links' href="">LEARN MORE</a>
            </div>
        </div>
    )
}