import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className="uil uil-award about__icon"></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtiitle">Fresher</span>
        </div>

        <div className="about__box">
        <i className="uil uil-briefcase about__icon"></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtiitle">10+ Projects</span>
        </div>

        <div className="about__box">
        <i class="uil uil-graduation-cap about__icon"></i>

            <h3 className="about__title">Graduation</h3>
            <span className="about__subtiitle">BE EXTC</span>
        </div>

    </div>
  )
}

export default Info