import React from 'react';

const TodoItem = ({todo, deleteTodo}) => {

    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.id}
            </td>

            <td>
                {todo.text}
            </td>

            <td>
                {todo.created_at}
            </td>
            {/*<td>*/}
            {/*    {todo.updated_at}*/}
            {/*</td>*/}
            <td>
                {todo.person}
            </td>
            <td>
                <button onClick={() => deleteTodo(todo.id)} type='button'>Delete</button>
            </td>
        </tr>
    )

}


const TodoList = ({todos, deleteTodo}) => {
    return (
        <table>
            <th>
                project
            </th>
            <th>
                id
            </th>

            <th>
                text
            </th>
            <th>
                created_at
            </th>
            {/*<th>*/}
            {/*    updated_at*/}
            {/*</th>*/}
            <th>
                person
            </th>
            {todos.map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo}/>)}
        </table>

    )
}
export default TodoList