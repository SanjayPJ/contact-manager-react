import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <strong>{branding}</strong>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Coming soon
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    branding: "My App"
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

// const heading_style = {
//     color: "red",
//     fontSize: "50px"
// };
