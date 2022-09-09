import React from 'react';
import {HashRouter, BrowserRouter, Route, Routes, Link, Redirect} from 'react-router-dom'

const ProjectItem = ({item, deleteProject}) => {

    return (
        <tr>
            <td>
                <Link to={`project/${item.id}`}>{item.name}</Link>
            </td>
            <td>
                {item.link}
            </td>

            <td>
                {item.users}
            </td>
            <td>
                {item.id}
            </td>
            <td>
                <button onClick={()=> deleteProject(item.id)} type='button'>Delete</button>
            </td>
        </tr>
    )

}


const ProjectList = ({items, deleteProject}) => {
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
            <th>
                id
            </th>

            {items.map((item) => <ProjectItem item={item} deleteProject={deleteProject}/>)}
        </table>

    )
}
export default ProjectList