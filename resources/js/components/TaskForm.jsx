import React, {Component} from 'react';

export default class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name || "New one name",
            description: props.description || "New one description"
        }
    }

    set = (e) => {
        const {name, value} = e.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    };

    submit = () => {
        this.props.handler({...this.state});
        this.setState({
            name: "New one name",
            description: "New one description"
        })
    };

    render() {
        return <div className="container  mt-2 mb-2">
            <div className="row justify-content-center">

                <div className="col-md-8">
                    <div className="card">

                        <div className="card-header">
                            <textarea
                                className="form-control"
                                rows="1"
                                placeholder="TaskViewer name"
                                required
                                maxLength={50}
                                name='name'
                                onChange={this.set}
                                value={this.state.name}
                            />
                        </div>

                        <div className="card-body">

                            <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Crate a new task description"
                                        required
                                        maxLength={255}
                                        name='description'
                                        onChange={this.set}
                                        value={this.state.description}
                                    />

                            </div>
                            <button className="btn btn-danger" onClick={this.props.canceler}>
                                Cancel
                            </button>

                            <button className="btn btn-primary" onClick={this.submit}>
                                Create task
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    };
}
