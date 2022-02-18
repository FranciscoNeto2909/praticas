import React from "react"

export default function Button({eventClick, text}) {

    return(
    <button className="btn bg-primary text-white me-1" onClick={eventClick}>{text}</button>
    )
}