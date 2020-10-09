import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './List.css';
import Contacts from './Contacts';

class List extends Component{
    static propTypes ={
        contact: PropTypes.array.isRequired,  
    };

    state={
        filterText: ''
    };

    onChangeFilterText = (e) => {
        this.setState({
            filterText: e.target.value
        })
    };

    render(){
        //filtreleme işlemleri
        const filteredContacts = this.props.contact.filter(
            contacts => {
                return contacts.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        );

        return(
            <div className={"listArea"}>
                <input 
                value={this.state.filterText}
                onChange={this.onChangeFilterText}
                name={"filter"} 
                id={"filter"} 
                placeholder={"lütfen isim giriniz"}/>

                <ul className={"list"}>
                    {
                        filteredContacts.map(contact => {
                            return(
                                <li key={contact.phone}>
                                    <span className={"name"}>{contact.name}</span>
                                    <span className={"phone"}>{contact.phone}</span>
                                    <span className={"clearfix"}></span>      
                                </li>    
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;