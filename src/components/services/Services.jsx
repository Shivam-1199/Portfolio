import React from 'react';
import { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
         <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Web <br /> Designer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__model active-modal" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">Web Designer</h3>
                        <p className="services__model-description">Good expertise with full stack development, designing static website or dynamic website with responsiveness</p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    I develop the static or dynamic websites
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Websites with proper routing
                                </p>
                            </li>    

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Full responsive website interface
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Completed multiple projects on web designing
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    An all time learner of updating technologies
                                </p>
                            </li>
                        </ul>             
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        Ui/Ux <br /> Designer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__model active-modal" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">Ui/Ux Designer</h3>
                        <p className="services__model-description">Good expertise on Ui development or Frontend development with designing technologies and frameworks</p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    I develop the user interface
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Developed interactive user interface websites
                                </p>
                            </li>    

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Knowledge on Frontend technologies like HTML,CSS,JS and React.js framework
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Worked on multiple Ui projects
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    An all time learner of updating Ui technologies
                                </p>
                            </li>
                        </ul>             
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Software <br /> Engineer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__model active-modal" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">Software Engineer</h3>
                        <p className="services__model-description">A Full Stack developer with good expertise on frontend as well as backend programming</p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Knowledge of Java and Python programming language
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Usage of APIs and making of customizable APIs on projects
                                </p>
                            </li>    

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Expertise on handling backend server and providing response based on requests made
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Connection of interface with database using MongoDB or SQL
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>    
                                <p className="services__model-info">
                                    Multiple projects based on MERN Stack, APIs, etc...
                                </p>
                            </li>
                        </ul>             
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services