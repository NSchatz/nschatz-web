import ProjectLeft from "../components/project-left"
import ProjectRight from "../components/project-right"
import "../styles/projects.css"
import FadeIn from "../components/fadeIn"
import projectimg2 from '../images/ArrBotscreenshot.png'
export default function Projects(){
    
    return <div id="scrollProjects">
            <h1 className='headtext'>Projects</h1>
            <div className='projects'>
                <FadeIn name='left'>
                    <ProjectLeft side='left' title='Arr Discord Bot' description='Python script that works with Radarr, Sonarr, and Plex.'/>
                </FadeIn>
                <FadeIn name='right'>
                    <ProjectRight side='right' title='Arr Discord Bot' description='Python script that works with Radarr, Sonarr, and Plex.' source={projectimg2}/>
                </FadeIn>
                <FadeIn name='left'>
                    <ProjectLeft side='left' title='No Nicotine Tracker' description='Full stack nicotine tracker application build with React, Node.js, and mySQL'/>
                </FadeIn>
                <FadeIn name='right'>
                    <ProjectRight side='right' title='No Nicotine Tracker' description='Full stack nicotine tracker application build with React, Node.js, and mySQL'/>
                </FadeIn>
            </div>
        </div>
}