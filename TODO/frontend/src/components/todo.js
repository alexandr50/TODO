import React from 'react';

const TodoItem = ({todo}) => {

    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.text}
            </td>

            <td>
                {todo.created_at}
            </td>
            <td>
                {todo.updated_at}
            </td>
            <td>
                {todo.person}
            </td>
        </tr>
    )

}


const TodoList = ({todos}) => {
    return (
        <table>
            <th>
                project
            </th>
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
            {todos.map((todo) => <TodoItem todo={todo}/>)}
        </table>

    )
}
export default TodoList