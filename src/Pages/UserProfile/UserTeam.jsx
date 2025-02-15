import TeamBox from "../../Components/TeamBox/TeamBox";
import {useState} from "react";
import {team} from "../../Utils/Team";

export default function UserTeam() {
    const [teamData, setTeamData] = useState(team)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                teamData.map(team => (
                    <TeamBox key={team.id} {...team}/>
                ))
            }
        </div>
    )
}