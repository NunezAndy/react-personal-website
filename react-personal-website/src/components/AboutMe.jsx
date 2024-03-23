import React from "react";

const circleImageStyle = {
  width: "400px",
  height: "400px",
  objectFit: "cover",
  borderRadius: "50%",
  margin: "20px auto 0",
};

const certImageStyle = {
  width: "400px",
  height: "400px",
  objectFit: "cover",
  margin: "20px",
};

function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
        <div>
          <img
            src="./images/IMG_2112.jpeg"
            alt="Woods"
            style={circleImageStyle}
          />
        </div>
        <div className="hero--section--content--box
        about--section--box">
          <div className="hero--section--content">
            <h3>Who Am I?</h3>

            <p className="hero--section-description">
              Hi! My name is Andy, born and raised in the city of Chicago. I am
              a web developer that specializes in front and back end
              developement. I completed a Full Stack
              Software Engineering certificate from The University of Illinois
              Chicago UIC - associated with Fullstack Academy.
            </p>
            <br></br>
            <p className="hero--section-description">
              As of lately I've been bulding projects with the PERN (PostgreSQL,
              Express.js, React.js and Node.js) tech stack. However, I make it a
              personal goal to continue to learn new tech and code each day that
              goes by. Advancing as tech does.
            </p>
            <br></br>

            <div>
              <img src="./images/IMG_3497.jpeg" alt="wife" style={circleImageStyle} />
            </div>
            <p className="hero--section-description">
              Apart from coding, I enjoy traveling with my wife and dog.
              Exploring new places and enjoying new eats.
            </p>
          </div>
        </div>
        <br></br>

        <h3>My Journey in Web Development</h3>

        <div>
          <div>
            <img
              src="./images/Certification.jpeg"
              alt="LinkedIn Python Certificate"
              style={certImageStyle}
            />
          </div>
        </div>
    </section>
  );
}

export default AboutMe;
