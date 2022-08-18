import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/user.js'
import ProjectList from './components/projects.js'
import TodosList from './components/todo.js'
import ProjectFilterList from './components/projectlist.js'
import axios from 'axios'
import Menu from "./components/menu.js";
import Footer from "./components/footer.js";
import {HashRouter, BrowserRouter, Route, Routes, Switch, Redirect} from 'react-router-dom'
import NotFound404 from "./components/NotFound";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'project': [],
            'todos': []

        }
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            this.setState(
                {
                    'users': response.data
                }
            )
        }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/project/').then(response => {
            this.setState(
                {
                    'project': response.data
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/').then(response => {
            this.setState(
                {
                    'todos': response.data
                }
            )
        }).catch(error => console.log(error))


    }

    render() {
        return (

            // <div>
            //     <Menu menu={this.state.menu}/>
            // </div>
            <div>
                <div>
                    <Menu menu={this.state.menu}/>
                </div>
                <HashRouter>
                    <maincontent>

                        <Routes>

                            <Route path='/' exact element={<UserList users={this.state.users}/>}/>
                            <Route path='/project' exact element={<ProjectList projects={this.state.project}/>}/>
                            <Route path='/todos' exact element={<TodosList todos={this.state.todos}/>}/>
                            {/*<Route path='/project/:id'> <ProjectFilterList projects={this.state.project}/></Route>*/}
                            <Route
                                path="*"
                                exact element={<NotFound404/>}/>


                        </Routes>

                    </maincontent>


                </HashRouter>
            </div>

            // <div>
            //     <Footer footer={this.state.footer}/>
            // </div>


        )
    }
}

export default App;
