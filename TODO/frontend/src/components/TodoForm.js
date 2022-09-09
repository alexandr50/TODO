import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {project: '', text: '', person: ''}
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
        this.props.createTodo(this.state.project, this.state.text, this.state.person)
        console.log(this.state.project)
        console.log(this.state.text)
        console.log(this.state.person)

        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="project"> id проекта</label>
                    <input type="text" className="form-control" name="project"
                           value={this.state.project} onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Содержание заметки</label>
                    <input type="text" className="form-control" name="text"
                           value={this.state.text} onChange={(event) => this.handleChange(event)}/>
                </div>


                <div className="form-group">
                    <label htmlFor="person">Введите id создателя</label>
                    <input type="number" className="form-control" name="person"
                           value={this.state.person} onChange={(event) => this.handleChange(event)}/>
                </div>

                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Save"/>
            </form>
        );
    }
}

export default TodoForm