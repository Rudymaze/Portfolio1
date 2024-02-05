import PrimaryButton from "./PrimaryButton.jsx";
import SecondaryButton from "./SecondaryButton.jsx";
import Picture from "./Picture.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="landing1">
        <div class="landing2">
          <div className="navbar">
            <a href="">About Me</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
          </div>
          <div className="grid-container">
            <div className="heading">
              <h2>
                Hi &#128400;,
                <br />
                I'm RUDIGER,
                <br />
                Front-end Developer
              </h2>
            </div>

            <div className="image">
              <Picture />
            </div>
          </div>

          <div className="paragraph">
            <p>
              I design and develop experiences that make people's lives <br />
              simpler through Web and Mobile apps.I work with FIgma,
              <br />
              HTML5, CSS3, JavaScript, React, ReactNative and Flutter.
            </p>
          </div>

          <div className="grid-container2">
            <div className="btn-primary">
              {" "}
              <PrimaryButton />
            </div>
            <div className="btn-secondary">
              <SecondaryButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
