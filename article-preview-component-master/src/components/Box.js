import React, { useState } from "react";
import '../css/boxstyle.css';
import Active from './Active.js';
import drawers from '../images/drawers.jpg';
import Michelle from '../images/avatar-michelle.jpg';
import Share from '../images/icon-share.svg'


export default function Box() {

    const [showActive, setActive] = useState(false);

    return (
        <div className="box">
             {showActive && <Active /> }
            <img className="drawers" src={drawers} alt="drawers"/>
            <div className="text">
            <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <p> Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            <div className="grid">
                <img className="avatar" src={Michelle} alt="avatar-michelle"/>
                <p className="name">Michelle Appleton</p>
                <p className="date">28 Jun 2020</p>
               <img className={showActive ? 'share-active' : 'share-noneactive'} src={Share} onClick={() => setActive(!showActive)} alt="Share" />        
            </div>
            
            </div> 
        </div>
    )
}
