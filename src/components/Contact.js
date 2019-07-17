import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./contact.css";
import { Consumer } from "../context";

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            show_contact_info: false
        };
        this.on_show_click = () => {
            this.setState({ show_contact_info: !this.state.show_contact_info });
        };

        this.on_delete_click = (id, dispatch) => {
            dispatch({ type: "DELETE_CONTACT", payload: id });
        };
    }

    render() {
        const { contact } = this.props;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <div className="card my-2">
                                <div className="card-body">
                                    <h4>
                                        <strong>{contact.name}</strong>
                                        <i
                                            className="fa fa-angle-down ml-2"
                                            aria-hidden="true"
                                            onClick={this.on_show_click}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <i
                                            className="fa fa-times-circle text-danger"
                                            aria-hidden="true"
                                            style={{
                                                cursor: "pointer",
                                                float: "right"
                                            }}
                                            onClick={this.on_delete_click.bind(
                                                this,
                                                contact.id,
                                                dispatch
                                            )}
                                        />
                                    </h4>
                                    {this.state.show_contact_info ? (
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>Email</strong>:{" "}
                                                {contact.email}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Phone</strong>:{" "}
                                                {contact.phone}
                                            </li>
                                        </ul>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};
