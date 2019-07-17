import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Karen Smith",
                email: "karen@gmail.com",
                phone: "222-222-2225"
            },
            {
                id: 3,
                name: "Jacob Williams",
                email: "jw@gmail.com",
                phone: "333-333-3335"
            },
            {
                id: 4,
                name: "Will I Am",
                email: "william@gmail.com",
                phone: "999-999-9995"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
