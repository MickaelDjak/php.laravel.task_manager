import React, {Component} from 'react';

export default class CreatorButton extends Component {
    render() {
        return <div className="container mt-2 mb-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <button className="btn btn-success" onClick={this.props.switcher}>
                                Add task
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    };
}
