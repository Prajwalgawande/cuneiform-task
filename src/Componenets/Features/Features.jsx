import React from 'react'
import './features.css'
import Title from '../Title'
import img1 from '../../images/Group (1).png'
import img2 from '../../images/Group (2).png'
import img3 from '../../images/Group (3).png'

const Features = () => {
    const features = [
        {
            id: 1,
            url:img1,
            title: "What is Lorem Ipsum?",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id: 2,
            url:img2,
            title: "Where does it come from?",
            desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
        },
        {
            id: 3,
            url:img3,
            title: "Where can I get some?",
            desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
        },
    ]
    return (
        <div>
            <Title st="OUR TOP TIER "end="FEATURES" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <div className="feature-boxes">
                {features.map(item => {
                    return <div className="feature-box">
                        <img src={item.url} alt="" />
                        <div className="feature-title">{item.title}</div>
                        <div className="feature-description">{item.desc}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Features