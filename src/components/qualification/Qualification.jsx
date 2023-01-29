import React from 'react'
import "./qualification.css";
import { useState } from 'react';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__conatiner container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Eductaion         
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience        
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">SSC</h3>
                            <span className="qualification__subtitle">
                                St. Joseph's High School
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2005 - 2015
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">HSC</h3>
                            <span className="qualification__subtitle">
                                KLE Jr College of Science
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2015 - 2017
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BE EXTC</h3>
                            <span className="qualification__subtitle">
                                Pillai College of Engineering, Mumbai University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2017 - 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data__ex">
                        <div>
                            <h3 className="qualification__title__ex">Web development/ Software Engg</h3>
                            <span className="qualification__subtitle__ex">
                                Currently Fresher
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification