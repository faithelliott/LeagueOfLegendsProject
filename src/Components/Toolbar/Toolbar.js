import React from 'react';
import  './Toolbar.css'
import  DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="nav_logo"><img src="img/Concept_Logo_2.png" className="imgSize"/></div>
            <div className="spacer"></div>
            <div className="nav_items">
                <ul>
                    <li><a href="/"></a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;