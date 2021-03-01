import React from 'react';
import './SelectedPlayersDetails.css'

const SelectedPlayersDetails = (props) =>
{
    const { name, salary } = props.playerDetails
    return (
        <div className="playerDetails">
            <h4>Name : {name}</h4>
            <h5>Salary : <span>$</span>{salary}</h5>
        </div>
    );
};

export default SelectedPlayersDetails;