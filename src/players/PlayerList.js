import React from 'react';

// const Players = (props) => {
// export default  PlayerList = ({players = []}) => {      BROKE
    

function Players({players = []}){    


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
}
export default Players;