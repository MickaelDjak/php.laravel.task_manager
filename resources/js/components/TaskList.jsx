import React, {Component, Fragment} from 'react';
import Task from "./Task";

export default class TaskList extends Component {
    render() {
        const {tasks} = this.props
        if (tasks.length) {
            return <Fragment>
                {tasks.map((el, inx) => <Task key={inx} {...el}
                                              update={this.props.update}
                                              destroy={this.props.destroy}
                                              edit={this.props.edit}/>
                )}
            </Fragment>
        }

        return <div className="container  mt-2 mb-2">
            <div className="row justify-content-center">
                There is any tasks
            </div>
        </div>
    };
}
