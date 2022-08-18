import React from 'react';
import {HashRouter, BrowserRouter, Route, Routes, Link, Redirect} from 'react-router-dom'

const ProjectItem = ({project}) => {

    return (
        <tr>
            <td>
                <Link to={`/project/${project.id}`}>{project.name}</Link>
                </td>
                <td>
                {project.link}
                </td>

                <td>
                {project.users}
                </td>
        </tr>
    )

}



const ProjectList = ({projects}) => {
    return (
    <table>

        <th>
        name
        </th>
        <th>
        link
        </th>
        <th>
        users
        </th>

        {projects.map((project) => <ProjectItem project={project} />)}
    </table>

    )
}
export default ProjectList