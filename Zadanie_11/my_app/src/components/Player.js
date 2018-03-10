import React from 'react';
import players from '../data/players';
import { Link } from 'react-router-dom';

export default (props) => {
    const playerDisplay = parseFloat(props.match.params.id);
    const player = players.find(player => player.id === playerDisplay);

    return player ?
        <React.Fragment>
            <h2>Gracz</h2>
            <p>Nazwa: {player.name}</p>
            <p>Numer koszulki: {player.number}</p>
            <p>Życiorys: {player.bio}</p>
            <Link to='/'>Powrót na stronę główną</Link>
            </React.Fragment>
        :
        <React.Fragment>
            <p>Brak takiego zawodnika</p>
            <Link to='/'>Powrót na stronę główną</Link>
            </React.Fragment>
        };