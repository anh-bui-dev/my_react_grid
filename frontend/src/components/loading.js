import React, { Component } from 'react';

class Loading extends Component {
    // Initialization
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-mask">
                <div className="loading d-flex justify-content-center">
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;