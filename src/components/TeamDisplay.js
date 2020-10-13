import React from 'react'


export default function TeamDisplay(props) {

    // let players;
    // if( props.players.length > 0 )

    const players = props.players.map(player => {
        console.log("Making a row")
        return (
            // <div>
            // <p> Name: {player.name} </p>
            // <p>Position: {player.position} </p>
            // <p>Shirt Number: {player.shirtNumber} </p>
            // </div>


            <tbody>
                <td> {player.name} </td>
                <td> {player.position} </td>
                <td> {player.shirtNumber} </td>
            </tbody>
        )
    } )


 // <tbody>, <thead> or <tfoot>

    return (
        // <div>
        // {players}
        // </div>

        <table>          
            <thead>
                <th> Name:</th>
                <th> Position:</th>
                <th> Shirt number:</th>
            </thead>

            {players}

         </table>

    )


}