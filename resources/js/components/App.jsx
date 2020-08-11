import React, {Component} from 'react';
import ApiClient from "../services/ApiClient";
import Refresher from './Refresher';
import TaskList from "./TaskList";
import TaskCreator from "./TaskCreator";

export default class App extends Component {

    state = {
        isAdd: false,
        tasks: []
    };

    componentDidMount() {
        ApiClient.get(tasks => this.setState({tasks}))
    }

    refresh = () => {
        ApiClient.get(tasks => this.setState({tasks}))
    };

    toggle = () => {
        this.setState({isAdd: !this.state.isAdd});
    };

    destroy = (id) => {
        ApiClient.destroy(id, () => {
            this.setState({
                tasks: this.state.tasks.filter(el => el.id !== id)
            });
        })
    };

    edit = (id) => {
        this.setState({
            tasks: [
                ...this.state.tasks.map(el => el.id === id ? {
                    ...el,
                    isEdited: !el.isEdited
                } : el)
            ]
        });
    };

    update = (task) => {
        ApiClient.update(task, () => {
            this.setState((prevState) => {
                return {
                    tasks: [
                        ...prevState.tasks.map(el => el.id === task.id ? {...el, ...task, isEdited: false} : el)
                    ]
                }
            })
        })
    }

    creat = (task) => {
        ApiClient.create(task, task => {
            this.setState({
                isAdd: false,
                tasks: [
                    ...this.state.tasks,
                    {
                        ...task,
                        isEdited: false
                    }
                ]
            });
        });
    };

    render() {
        const {tasks, isAdd} = this.state;

        return <div>
            <Refresher refresh={this.refresh}/>
            <TaskList tasks={tasks}
                      edit={this.edit}
                      update={this.update}
                      destroy={this.destroy}/>
            <TaskCreator
                isAdd={isAdd}
                switcher={this.toggle}
                handler={this.creat}/>
        </div>
    };
}
