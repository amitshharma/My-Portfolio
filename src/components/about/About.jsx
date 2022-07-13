import React from 'react'
import "./about.css"
import award from '../../img/award.png'

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img
                    src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="a-img"
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            It is a long established fact that a reader will be distracted by the
            readable content.
            </p>
            <p className="a-desc">
            MCA student with a focus on tech. To seek a job in the IT industry where
            I can utilize my skills and technical knowledge for theorganization’s
            and individual growth..
            </p>
            <div className="a-award">
                <img src={award} alt="" className="a-award-img"/>
                <div className="a-award-texts">
                    <h4 className="a-award-title">Award Title</h4>
                    <p className="a-award-desc">
                        Award description
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
