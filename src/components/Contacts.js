import React, {Component} from 'react';
import List from '../components/List';
import Form from '../components/Form';
import PropTypes from 'prop-types';

class Contacts extends Component{
    static propTypes ={
        contact: PropTypes.array.isRequired,  
        addContact: PropTypes.func
    };
    render(){
        return(
            <div>
                <List contact={this.props.contact}/>
                <Form addContact= {this.props.addContact}/>
            </div>
        );
    }
}

export default Contacts;

