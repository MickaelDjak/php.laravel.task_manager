import React, {Component} from 'react';

export default class TaskViewer extends Component {
    destroy = () => {
        this.props.destroy(this.props.id)
    }

    edit = () => {
        this.props.edit(this.props.id)
    }

    render() {
        return <div className="container mt-2 mb-2">
            <div className="row justify-content-center">

                <div className="col-md-8">
                    <div className="card">

                        <div className="card-header">
                            <p>{this.props.name}</p>
                        </div>

                        <div className="card-body">

                            <div className="form-group">
                                <p>{this.props.description}</p>
                            </div>
                            <button className="btn btn-warning" onClick={this.edit}>
                                Edit
                            </button>
                            <button className="btn btn-danger" onClick={this.destroy}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    };
}
