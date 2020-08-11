import React, {Component} from 'react';
import TaskForm from "./TaskForm";
import TaskViewer from "./TaskViewer";

export default class Task extends Component {
    render() {
        const {id, name, description, isEdited} = this.props;
        const one = {
            id, name, description
        }

        if (isEdited) {
            return <TaskForm  {...one}
                              canceler={() => {
                                  this.props.edit(id)
                              }}
                              handler={(task) => {
                                  this.props.update({id: id, ...task})
                              }}/>;
        }

        return <TaskViewer  {...one}
                            destroy={this.props.destroy}
                            edit={this.props.edit}/>;

    };
}
