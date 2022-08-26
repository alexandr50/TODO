import React from 'react';
import {HashRouter, BrowserRouter, Route, Routes, Link, Redirect} from 'react-router-dom'

const ProjectItem = ({item}) => {

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
        </tr>
    )

}



const ProjectList = ({items}) => {
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

        {items.map((item) => <ProjectItem item={item} />)}
    </table>

    )
}
export default ProjectList