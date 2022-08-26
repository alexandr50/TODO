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
import {HashRouter, BrowserRouter, Route, Routes, Switch, Navigate, Link} from 'react-router-dom'
import NotFound404 from "./components/NotFound";
import LoginForm from "./components/Auth.js";
import Cookies from 'universal-cookie';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'project': [],
            'todos': []

        }
    }

    is_auth() {

        return !!this.state.token
    }

    logout() {
        this.set_token('')
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
        // console.log(this.state.token)
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_token(username, password) {
        const data = {username: username, password: password}
        axios.post('http://127.0.0.1:8000/api-token-auth/', data).then(response => {
            this.set_token(response.data['token'])
        }).catch(error => alert('error'))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_auth()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers;
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
            this.setState(
                {
                    'users': response.data
                }
            )
        }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/project/', {headers}).then(response => {
            this.setState(
                {
                    'project': response.data
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(response => {
            this.setState(
                {
                    'todos': response.data
                }
            )
        }).catch(error => console.log(error))
    }


    componentDidMount() {
        this.get_token_from_storage();
        this.load_data();

    }

    render() {
        return (

            <div>
                <div>

                    {/*<Menu menu={this.state.menu}/>*/}

                </div>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <form className="form-inline">
                                <li><Link to='/'>Main</Link></li>
                                <li><Link to='/todos'>Todos</Link></li>
                                <li><Link to='/project'>Projects list</Link></li>
                                {/*<li><Link to='/login'>Login</Link></li>*/}
                                <li> {this.is_auth() ? <button
                                        onClick={() => this.logout()}>Logout</button> :
                                    <Link as={Link} to='/login'>Login</Link>}</li>
                            </form>

                        </ul>
                    </nav>

                    <Routes>

                        <Route exact path='/' element={<UserList users={this.state.users}/>}/>
                        <Route exact path='/todos' element={<TodosList todos={this.state.todos}/>}/>
                        <Route path='/project'>
                            <Route index element={<ProjectList items={this.state.project}/>}/>
                            <Route path='project/:projectId' element={<ProjectFilterList items={this.state.todos}/>}/>
                        </Route>
                        <Route exact path='/login/' element={<LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                        <Route path='*' exact element={<NotFound404/>}/>


                    </Routes>


                </BrowserRouter>
            </div>

            // <div>
            //     <Footer footer={this.state.footer}/>
            // </div>


        )
    }
}

export default App;