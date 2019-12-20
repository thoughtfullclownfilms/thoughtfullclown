import React from 'react';
import './DrawerToggleButton.css';
const drawerToggleButton = ({ click }) => {
    return (
        <button className="toggle-button" onClick={click}>
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
        </button>
    );
};

export default drawerToggleButton;
