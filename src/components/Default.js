import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase">

                        <h1 className="display-3"></h1>
                        <h1>Error</h1>
                        <br />
                        <br />

                        <h2>Page Not Found</h2>

                        <br />
                        <h3>
                            The Requested URL
                        </h3>

                        <br />

                        <span className="text-danger">
                            {this.props.location.pathname}
                            <span>{" "} was not found</span>
                        </span>
                    </div>

                </div>

            </div>
        )
    }
}
