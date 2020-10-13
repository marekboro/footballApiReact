import React from 'react'

export default function TeamSelector(props){

    function handleSelect(event) {
        props.onTeamSelected(event.target.value);
    }


    if (props.teams.length===0){
        return <p>waiting...</p>
    }

    const options = props.teams.map(team => {
        return <option value={team.id} key={team.id}>  {team.name}  </option>
    })


    return (
        <select onChange={handleSelect} id="competition-selector" defaultValue="default"> 
            <option disabled value="default">Choose a team..</option>
            {options}
        </select>
    )
}