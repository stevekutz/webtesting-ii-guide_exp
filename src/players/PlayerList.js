import React from 'react';

// const Players = (props) => {
// export default  PlayerList = ({players = []}) => {      BROKE
    

function Players({players = []}){    
    if(!players.length) {
        return <h2>No players to list</h2>;

    }

    return (
            <ul>
                {players.map(p => (
                    <li key = {p.id} >
                        {p.name}
                    </li>
                ))}
            </ul>
    )
}
export default Players;

/*  BREAKS 
    return (
        <div>
            <ul>
                {players.map(p => (
                    <li key = {p.id} >
                        {p.name}
                    </li>
                ))}
            </ul>
        </div>
    )

*/