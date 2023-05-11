import React, { useRef, useState, useEffect } from 'react';

const Bio_body = (props) => {

    return (
        <>
        <div className={`tracking-wider container mx-auto text-sm sm:text-2xl md:text-6xl pr-4 md:pr-12 ${props.bg.primary.bg} transition ease-in-out duration-700 hover:scale-105`}>
        {props.text.map(function (n) {
            return (<h1 key={n}>{n}</h1>)
        })}
        </div>
        </>
    )
}

export default Bio_body