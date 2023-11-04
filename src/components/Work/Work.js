import React from "react";
import Particles from "react-tsparticles";

import "./Work.css";

const Work = (props) => {
  return (
    <>
      <div>
        <div className="">
          <h1 className="move-down-pro">My Projects</h1>
          <h2 className="move-down-react">HTML CSS JAVASCRIPT</h2>
        </div>
        <div className="card workcard">
          <img
            src={sav}
            className="card-img-top imgWork hcj"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Sorting Algorithms Visualiser</h5>
            <p className="card-text">
              Sorting Algorithms Visualiser help in visualising the internal
              working of the sorting algorithms....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://sorting-algorithms-visualisers.netlify.app/"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className="card workcard">
          <img
            src={tyson}
            className="card-img-top imgWork hcj"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">GYM Site</h5>
            <p className="card-text">
              MonsterNews is a react app that shows you all the latest news from
              all over the world catogory wise like if....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://utkarshsharma718.github.io/Gym-site/"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className="card workcard">
          <img
            src={indiga}
            className="card-img-top imgWork hcj"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">MANGA Selling store</h5>
            <p className="card-text">
              MonsterNews is a react app that shows you all the latest news from
              all over the world catogory wise like if....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://utkarshsharma718.github.io/Manga-Store/"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className="card workcard">
          <img
            src={todoi}
            className="card-img-top imgWork hcj"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Todo List</h5>
            <p className="card-text">
              It's an web app which allows you to make a list of all list to-do
              task....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://todo-list-webapp56.netlify.app/"
            >
              Take a look
            </a>
          </div>
        </div>



        <h2 className="move-down-react">React JS</h2>
        <div className="card workcard">
          <img
            src={mosnter}
            className="card-img-top imgWork"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">MonsterNews</h5>
            <p className="card-text">
              MonsterNews is a react app that shows you all the latest news from
              all over the world catogory wise like if....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/MonsterNews"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className="card workcard">
          <img
            src={notebook}
            className="card-img-top imgWork"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Cloud NoteBook</h5>
            <p className="card-text">
              Cloud Notebook is an MERN Stack based application which provide
              amny functionality such as sign-in, sign-out,....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://cloud-notebook.netlify.app/"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className="card workcard">
          <img src={quiz} className="card-img-top imgWork" alt="MonsterNews" />
          <div className="card-body">
            <h5 className="card-title">Quiz app</h5>
            <p className="card-text">
              It's an quiz app which helps you to test your knowledge about
              technologies like html,JAVASCRIPT,....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://fun-quizes-app.netlify.app/"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className="card workcard">
          <img src={site} className="card-img-top imgWork" alt="MonsterNews" />
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">
              It's an custom made portfolio site which allows you to show you
              skill, work, experience,....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Portfolio"
            >
              Take a look
            </a>
          </div>
        </div>

        <div className="card workcard">
          <img
            src={wheather}
            className="card-img-top imgWork"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Wheather App</h5>
            <p className="card-text">
              Wheather App is a react app that shows you the current wheater
              condition like temperature...
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://weather-informations-app.herokuapp.com/"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className="card workcard">
          <img
            src={textMani}
            className="card-img-top imgWork"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Text-Manipulator</h5>
            <p className="card-text">
              It is a React based app that allows you a to do different type of
              Operations on text like removing extra spaces....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://textmanipulator.herokuapp.com/"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className="card workcard">
          <img src={easyH} className="card-img-top imgWork" alt="MonsterNews" />
          <div className="card-body">
            <h5 className="card-title">Holidays Easy</h5>
            <p className="card-text">
              It is a MERN stack application which allows user to book an
              hotel,restaurent,....
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Reservator"
            >
              Take a look
            </a>
          </div>
        </div>

        <h2>React-Native</h2>

        <div className="card workcard">
          <img
            src={Random}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Random Background Colour</h5>
            <p className="card-text">
              App which allows you to change the color of your background to a
              random colour...
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Random-BackGround-colour"
            >
              Take a look
            </a>
          </div>
        </div>

        <div className="card workcard">
          <img
            src={Currency}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Currency Convertor</h5>
            <p className="card-text">
              Currency convertor allows you to convert one currency into
              other...
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Currency-converter"
            >
              Take a look
            </a>
          </div>
        </div>

        <div className="card workcard">
          <img
            src={spanish}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Spanish Numbers</h5>
            <p className="card-text">App to learn spanish numbers.</p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Spanish-Numbers-pronounciation"
            >
              Take a look
            </a>
          </div>
        </div>

        <div className="card workcard">
          <img
            src={luck}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Game of Luck</h5>
            <p className="card-text">
              A game that checks the credibility of your luck.
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/MonsterNews"
            >
              Take a look
            </a>
          </div>
        </div>

        <div className="card workcard">
          <img
            src={profile}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Profile Pic Taker</h5>
            <p className="card-text">
              Take a new freshing profile pic which Profile Pic Taker.
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Game-Of-Luck"
            >
              Take a look
            </a>
          </div>
        </div>

        <div className="card workcard">
          <img
            src={netflix}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Netflix Store</h5>
            <p className="card-text">
              Take a new freshing profile pic which Profile Pic Taker.
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Netflix-store"
            >
              Take a look
            </a>
          </div>
        </div>

        <div className="card workcard">
          <img
            src={pp}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">User Profile Generator</h5>
            <p className="card-text">
              Take a new freshing profile pic which Profile Pic Taker.
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Random-User-Profile"
            >
              Take a look
            </a>
          </div>
        </div>

        <div className="card workcard">
          <img
            src={cross}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">CROSS vs CIRCLE</h5>
            <p className="card-text">
              Take a new freshing profile pic which Profile Pic Taker.
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/CROSS-vs-CIRCLE"
            >
              Take a look
            </a>
          </div>
        </div>
        
        <div className="card workcard">
          <img
            src={social}
            className="card-img-top imgWork mobileApp"
            alt="MonsterNews"
          />
          <div className="card-body">
            <h5 className="card-title">Social App</h5>
            <p className="card-text">
              Take a new freshing profile pic which Profile Pic Taker.
            </p>
            <a
              className="workButton btn btn-warning"
              href="https://github.com/UTKARSHSHARMA718/Social-app"
            >
              Take a look
            </a>
          </div>
        </div>

        <Particles
          id="tsparticles"
          init={props.particlesInit}
          loaded={props.particlesLoaded}
          options={props.particlesOptions}
        />
      </div>
    </>
  );
};

export default Work;
