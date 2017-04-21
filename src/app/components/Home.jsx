
import React, { Component, PropTypes } from 'react';
import { Link } from "react-router-dom";
import {Button} from 'antd';
export default class Home extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
             Home containers
             <Button type="primary">ant button</Button>
           </div>

        );
    }
}
