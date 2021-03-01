import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Player = (props) =>
{
    const { name, country, status, salary, img } = props.player
    const handleAddPlayer = props.handleAddPlayer
    return (
        <div className="playerContainer">
            <img className="playerImg" src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Country: {country}</h4>
            <h4>Salary: <span>$</span>{salary}</h4>
            <h5>Status: {status}</h5>
            <button onClick={() => handleAddPlayer(props.player)} className="playerButton"><FontAwesomeIcon icon={faCheck} /> Hire</button>
        </div>
    );
};

export default Player;