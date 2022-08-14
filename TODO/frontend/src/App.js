import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/user.js'
import axios from 'axios'
import Menu from "./components/menu.js";
import Footer from "./components/footer.js";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        'users': []
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
//    const users = [
//        {
//            'first_name': 'Фёдор',
//            'last_name': 'Достоевский',
//            'birthday_year': 1821
//            },
//            {
//            'first_name': 'Александр',
//            'last_name': 'Грин',
//            'birthday_year': 1880
//            },
//
//    ]

}

  render() {
  return (
  <div>
  <div>
        <Menu menu={this.state.menu}/>
    </div>
    <div>
        <UserList users={this.state.users}/>
    </div>

    <div>
        <Footer footer={this.state.footer}/>
    </div>


</div>
  )
  }
}

export default App;
