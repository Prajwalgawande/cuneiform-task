import React from 'react'

const Title = (props) => {
    return (
        <div>
            <div className="title-box">
                <div className="main-title"><p>{props.st}</p> <p>{props.end}</p></div>
                <div className="title-description">{props.desc}</div>
            </div>
        </div>
    )
}

export default Title