import React, { useState } from 'react';
import SelectedPlayersDetails from '../SelectedPlayersDetails/SelectedPlayersDetails';
import './SelectedPlayer.css'

const SelectedPlayer = (props) =>
{
    const selectedPlayer = props.selectedPlayer
    const totalSalary = selectedPlayer.reduce((sum, selectedPlayer) => sum + selectedPlayer.salary, 0)
    const playerDetails = selectedPlayer

    return (
        <div className="selectedPlayer">
            <h3 style={{ textAlign: 'center' }}>Player Hired</h3>

            {
                playerDetails.map(players => <SelectedPlayersDetails playerDetails={players}></SelectedPlayersDetails>)
            }

            <div className="totalContainer">
                <p>Players Selected : {selectedPlayer.length}</p>
                <p>Total Salary : <span>$</span>{totalSalary}</p>
            </div>

        </div>
    );
};

export default SelectedPlayer;