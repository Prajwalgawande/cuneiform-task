import React from 'react'
import Title from '../Title'
import './review.css'
import Slider from '../Slider/Slider'
import ic1 from "../../images/Ellipse.png"
import ic2 from "../../images/Ellipse (1).png"
import ic3 from "../../images/Ellipse (2).png"
const Review = () => {
    const items = [
        {
            icon: ic1,
            name: "Lorem Ipsum",
            subname: "What is Lorem",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon: ic2,
            name: "Lorem Ipsum",
            subname: "What is Lorem",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon: ic3,
            name: "Lorem Ipsum",
            subname: "What is Lorem",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ];
    return (
        <div>
            <Title st="WHAT ARE THEY" end="SAYING?" desc="It has been proven that thousands of users are satisfied with the features we provide, here are some words from them" />

            <Slider items={items} />
        </div>
    )
}

export default Review