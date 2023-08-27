import "./web.css"
function Built()
{
    return(
        <div className="built">
            <h1 className="aboutme"> <span>02. </span>Some Things I’ve Built</h1>
            <div className="section3">
                <img src="./trippy.png" width="600" height="300" />
                <div className="text_desc">
                    <div className="titres">
                    <p>Featured Project</p>
                    <h2>Vacation Website</h2>
                    </div>
                    <div className="rectangle">
                        <p>Trippy: Your React-powered travel companion. Discover curated destinations, seamless <span>planning</span>, and insider tips. Elevate your <span>vacation experience </span> and create memories that last a lifetime.</p>
                    </div>
                </div>
            </div>
            <div className="section33">
               <div className="text_desc2">
                    <div className="titres2">
                    <p>Featured Project</p>
                    <h2>Astronomy Website</h2>
                    </div>
                    <div className="rectangle2">
                        <p>Embark on a celestial journey with our React-based astronomy website. Explore the cosmos, uncover celestial wonders, and deepen your understanding of the universe. Ignite your curiosity today!</p>
                    </div>
                </div>
                <img src="./astronomy.png" width="600" height="300"/>
            </div>
            <div className="section3">
                <img src="./portfolio.png" width="600" height="300" />
                <div className="text_desc">
                    <div className="titres">
                    <p>Featured Project</p>
                    <h2>Portfolio Website</h2>
                    </div>
                    <div className="rectangle">
                        <p>Experience my creative journey through my portfolio website built with React. Discover a showcase of my work, skills, and passion. Join me in exploring innovation and imagination.</p>
                    </div>
 
                </div>
            </div>
        </div>
    );
}

export default Built;