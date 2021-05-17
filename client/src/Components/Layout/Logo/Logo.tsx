import React, { Component } from "react";
import "./Logo.css";
import logoImage from "./great-vacations-logo.png";

// Same, but with Class Component: 
class Logo extends Component {
    public render(): JSX.Element {
        return (
            <div className="Logo">
                <img src={logoImage} alt='Logo'/>
            </div>
        );
    }
}

export default Logo;
