import "../styles/about.css"
import self from "../images/self.jpg"
import SkillItem from "../components/skillitem"
import FadeIn from '../components/fadeIn'
export default function About(){
    return(
        <section className="about" id="scrollAbout">
            <h1 className="headtext">About</h1>
            <div className="aboutsections">
                <FadeIn name='left'>
                    <div className="aboutself">
                        <img id="self" src={self} alt="" /><br />
                        <p id="about">Fully committed to the philosophy of life-long learning, I’m a developer with a passion for Python, Javascript and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time working on cars, rock climbing and staying healthy.</p>
                    </div>
                </FadeIn>
                <FadeIn name='right'>
                    <div className="aboutskills">
                        <div className="skills">
                            <div className="skills_row">
                                <SkillItem name="HTML5" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                                <SkillItem name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                                <SkillItem name="Docker" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/>
                            </div>
                            <div className="skills_row">
                                <SkillItem name="Python" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
                                <SkillItem name="GIT" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
                                <SkillItem name="Java" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
                                <SkillItem name="Javascript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
                            </div>
                            <div className="skills_row">
                                <SkillItem name="CSS3" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
                                <SkillItem name="Node.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
                                <SkillItem name="mySQL" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    ) 
    }