import React from 'react';
import {useParams} from "react-router-dom";

const TodoItem = ({item}) => {

    return (
        <tr>

            <td>
                {item.text}
            </td>

            <td>
                {item.created_at}
            </td>
            <td>
                {item.updated_at}
            </td>
            <td>
                {item.person}
            </td>
        </tr>
    )

}

const ProjectFilterList = ({items})=>{
    let {projectId} = useParams()
    let filter_projects = items.filter((item) => item.project == projectId)
    return (
        <table>
            <th>
                text
            </th>
            <th>
                created_at
            </th>
            <th>
                updated_at
            </th>
            <th>
                person
            </th>

            {filter_projects.map((item) => <TodoItem item={item}/>)}
        </table>

    )
}
export default ProjectFilterList