import React from "react"

export default function Button({eventClick, text}) {

    return(
    <button className="btn bg-primary text-white mx-2" onClick={eventClick}>{text}</button>
    )
}