'use strcit'
import React, { Component } from 'react';
import { View } from 'react-native';

class LazyView extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            load: this.props.initial
        }
    }
    load(load) {
        this.setState({load})
    }
    render() {
        var child = this.props.children;
        if (React.Children.count(this.props.children) > 1) {
            throw new Error('LazyView can only have one child');
        }
        if (this.state.load) {
            return child;
        } else {
            return <View
                    {...this.props}
                    style={this.props.style || (child && child.props.style)}/>
        }

    }
}

export default LazyView;