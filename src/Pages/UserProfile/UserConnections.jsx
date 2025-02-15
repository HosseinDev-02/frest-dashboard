import {useState} from "react";
import {connections} from "../../Utils/Connections";
import ConnectionBox from "../../Components/ConnectionBox/ConnectionBox";

export default function UserConnections() {
    const [userConnections, setUserConnections] = useState(connections)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                userConnections.map(connection => (
                    <ConnectionBox key={connection.id} {...connection}/>
                ))
            }
        </div>
    )
}