import {useState} from "react";
import {allProjects} from "../../Utils/Projects";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";

export default function UserProjects() {
    const [projects, setProjects] = useState(allProjects)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                projects.map(project => (
                    <ProjectBox key={project.id} {...project}/>
                ))
            }
        </div>
    )
}