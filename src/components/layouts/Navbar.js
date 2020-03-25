import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Navbar extends Component {
    static defaultProps = {
        title: 'Home Inventory',
        icon: 'fas fa-home px-3'
    }

    static propTypes= {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }
    
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
