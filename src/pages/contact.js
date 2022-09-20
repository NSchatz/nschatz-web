import "../styles/contact.css"
export default function Contact(){
    return(
        <div className="contact">
            <h1 className="headtext">Contact</h1>
            <form className="contact-form" action="">
                <input className="contact-name" type="text" name="contact-name" placeholder="Name" />
                <input className="contact-email" type="email" name="contact-email" placeholder="Email" />
                <textarea className="contact-message" type="" name="contact-message" placeholder="Message" />
                <input className="contact-submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}