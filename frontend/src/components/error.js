import React, { Component } from 'react';

class Error extends Component {
    // Initialization
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    render() {
        const { message } = this.state;
        if(message) {
            return (
                <div className="alert alert-danger alert-dismissible fade show">
                    <strong>Error:</strong> { message }.
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                </div>
            )
        }
    }
}

export default Error;