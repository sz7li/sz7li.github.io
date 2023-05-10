import React, { useRef, useState, useEffect } from 'react';

const Bio_body = (props) => {

    return (
        <>
        <div className={`container mx-auto text-sm sm:text-2xl md:text-6xl p-8 ${props.bg.primary.bg} transition ease-in-out hover:scale-110`}>
        {props.text.map(function (n) {
            return (<h1 key={n}>{n}</h1>)
        })}
        </div>
        </>
    )
}

export default Bio_body