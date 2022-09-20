import "../styles/footer.css"
import GitHub from "../images/github.png"

export default function Footer(){
    return(
        <footer>
                <a href="" className="github">
                    <img src={GitHub} alt="" />
                </a>
            <p>NOAH SCHATZ ©2022</p>
        </footer>
    )
}