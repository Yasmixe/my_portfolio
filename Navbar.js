import './style.css'
import "./web.css"
function Navbar() {
    return (
      <div className="container">
        <nav className="navbaritems" >
        <img width="50" height="50" src="./icon.png" alt="h-key"/>
            <ul className='navmenu'>
                    <li className="li">
                        <a href='about' className="about">
                            About
                        </a>
                    </li>
                    <li className="li">
                        <a href='/'>
                            Experience
                        </a>
                    </li>
                   
                    <li className="li">
                        <a href='/'>
                            Contact
                        </a>
                    </li>
                    <a class="resume-button" href="/Experience.pdf" target="_blank" rel="noopener noreferrer">Resume</a>

                </ul>
            </nav>
            <div className="hero">
                <h4 className="name"> Hi, my name is</h4>
                <h1 className="title1"> Hanafi Yasmine. </h1>
                <h1 className="title2"> I build things for the web.</h1>
                <p className="desc">I’m a Data Scientist and Web Developer, passionate about Artificial <br />Intelligence, image processing and Quantum Computing. <br />Currently, i'm studying Big Data at <span>USTHB</span>.</p>
                <div className="bouton"> 
                <a class="email-link" href="https://github.com/Yasmixe" target="_blank" rel="noreferrer">Check out my Github!</a>

                </div>
            </div>
            <div orientation="right" class="mailing">
                    <div class="mailing">
                        <a href="mailto:yasminehanafi59@gmail.com" className="email">yasminehanafi59@gmail.com</a>
                    </div>
            </div>
            <div orientation="left" class="mailing2">
                    <div class="mailing2">
                        <a href="mailto:yasminehanafi59@gmail.com" className="email2">yasminehanafi59@gmail.com</a>
                    </div>
            </div>
            </div>
            
    );
  }
  
  export default Navbar;
  