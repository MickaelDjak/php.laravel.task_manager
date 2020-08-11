import React, {Component} from 'react';
import TaskForm from "./TaskForm";
import CreatorButton from "./CreatorButton";

export default class TaskCreator extends Component {
    render() {
        if (this.props.isAdd) {
            return <TaskForm canceler={this.props.switcher}
                             handler={this.props.handler}
            />
        }

        return <CreatorButton switcher={this.props.switcher}/>
    };
}
