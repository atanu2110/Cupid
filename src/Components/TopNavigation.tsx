import React from 'react'
import { AppBar, Tabs, Tab, Avatar } from '@material-ui/core';
import avatar from './Me.jpg';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class TopNavigation extends React.Component<any, any> {


    render() {
        return (<AppBar title="My App">
            <Tabs>
            <Link to="/"><Tab label="Pic Shot" /></Link>
            <Link to="/capture"><Tab label="Capture" /></Link>
               <Link to="/navigate"> <Tab label="Navigate" /></Link>
                <Avatar alt="Avatar Me" src={avatar} />
            </Tabs>

        </AppBar>)
    };

}

export default TopNavigation;

