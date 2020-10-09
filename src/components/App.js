import React, { Component } from 'react';

import '../App.css';

import Contact from './Contacts';

class App extends Component{
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state={
    contact: [{
        name: 'Mehmet Taner Turan',
        phone: '12154623'
    }, {
        name: 'Aziz Mesut Turan',
        phone: '596113547'
    },{
      name: 'Sümeyye Turan',
      phone: '1875632'
  },{
      name: 'Metin Ahmet Turan',
      phone: '895447520'
  }]
  };

  //formdan add butonuna basıldığında arayüze eklemesi için
  addContact(contacts){
     //state güncellemesi yapmak için
     const{contact} = this.state;
     contact.push(contacts);

     this.setState({
      contact
     });
  }

  render(){
    return(
      <div className="App">
        <Contact 
        addContact={this.addContact}
        contact={this.state.contact}/>
      </div>
    );
  }
}

export default App;
