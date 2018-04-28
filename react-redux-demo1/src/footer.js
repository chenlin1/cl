import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Footer extends Component {
    static contextTypes = {
        themeColor: PropTypes.string,
        greenColor: PropTypes.string
    }
    render () {
        return (
        <div>
            <h2 style={{color:this.context.greenColor}}>this is 内容</h2>
        </div>
        )
    }
}

export default Footer;