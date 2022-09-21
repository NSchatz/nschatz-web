import ProjectLeft from "../components/project-left"
import ProjectRight from "../components/project-right"
import "../styles/projects.css"
import FadeIn from "../components/fadeIn"
import ArrBotScreen from '../images/ArrBotresized.png'
import NicotineTrackerScreen from '../images/NicotineTracker.png'
import HearthSensei from '../images/HearthSensei.png'
export default function Projects(){
    
    return <div id="scrollProjects">
            <h1 className='headtext'>Projects</h1>
            <div className='projects'>
                <FadeIn name='left'>
                    <ProjectLeft side='left' title='No Nicotine Tracker' description='Full stack nicotine tracker application build with React, Node.js, and mySQL.' source={NicotineTrackerScreen} liveLink='https://seashell-app-kzwnf.ondigitalocean.app' learnLink='https://github.com/NSchatz/NoNicotine'/>
                </FadeIn>
                <FadeIn name='right'>
                    <ProjectRight side='right' title='Arr Discord Bot' description='Python script that works with Radarr, Sonarr, and Plex.' source={ArrBotScreen} learnLink='https://github.com/NSchatz/ArrBotDiscord'/>
                </FadeIn>
                <FadeIn name='left'>
                    <ProjectLeft side='left' title='HearthSensei' description='Full stack HearthStone single card battle simulator with custom card creation.' source={HearthSensei} liveLink='https://lionfish-app-wl92c.ondigitalocean.app' learnLink='https://github.com/NSchatz/Hearth-Sensei'/>
                </FadeIn>
                
            </div>
        </div>
}