import picture  from '../assets/headshot.jpg'

export default function Header() {
    return (
        <div className="header">
            <img src={picture} />
            <h1>William Webdev</h1>
            <h2>Frontend Developer</h2>
            <h4>portfolio.site</h4>
            <div className="button-div">
                <button className="email-button"><i className="fa-solid fa-envelope"></i>Email</button>
                <button className="linkedin-button"><i className="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i>LinkedIn</button>
            </div>
        </div>
    )
}