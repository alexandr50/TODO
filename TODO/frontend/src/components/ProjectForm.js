import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', link: '', user: []}
    }

    handleProjectChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'user': []
            })
            return;
        }
        let users = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push(event.target.selectedOptions.item(i).value)
            console.log(users)
        }
        console.log(users)
        this.setState({
            'user': users
        })
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        console.log(event.target.name, event.target.value)
    }
    handleSubmit (event) {
        this.props.createProject(this.state.name, this.state.link, this.state.user)

        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="name">Название проекта</label>
                    <input type="text" className="form-control" name="name"
                           value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="link">Ссылка на репозиторий</label>
                    <input type="text" className="form-control" name="link"
                           value={this.state.link} onChange={(event) => this.handleChange(event)}/>
                </div>


                <div className="form-group">
                    <label htmlFor="user">Список пользователей</label>
                    <select name="user" multiple onChange={(event) => this.handleProjectChange(event)}>
                        {this.props.user_list.map((item) => <option value={item.id}> {item.username}</option>)}
                    </select>
                </div>

                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Save"/>
            </form>
        );
    }
}

export default ProjectForm