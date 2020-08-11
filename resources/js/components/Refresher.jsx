import React, {Component} from 'react';

export default class Refresher extends Component {
    render() {
        return <div className="container mt-2 mb-2">
            <div className="row justify-content-end">
                <button className="btn btn-primary" onClick={this.props.refresh}>Refresh</button>
            </div>
        </div>
    };
}
