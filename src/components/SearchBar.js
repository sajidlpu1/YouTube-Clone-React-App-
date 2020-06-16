import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    //In react if we declare a normal method in a class then we need to bind it to the class seperately
    //Bcz this. in the method usually means to class but here in react normal function this means to function itself
    //So we use arrow functions as they are special bcz they dont have their own this.
    //React binding -> https://reactjs.org/docs/handling-events.html
    handleChange = (event) => {
        //event.target.value --> cathes what ever we enter on textfield

        this.setState({ searchTerm: event.target.value });
    }
    handleSubmit = (event) => {
        //destructur the state ES6 --> below code means [ this.state.searctTerm ]
        const { searchTerm } = this.state;
        //To connect with SearchBar component in App.js file using props
        const { onFormSubmit } = this.props;
        //props data transfer
        onFormSubmit(searchTerm);
        //To prevent from default properties of webpage like refresh entire page on sumiting some search text
        event.preventDefault();
    }

    render(){
        return(
            <div style={{ padding:'5px', backgroundColor:'#EAF0F1', width:'50%', marginLeft:'40px'}}>
            <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="🔍 Search..." onChange={this.handleChange} />
                </form>
            </div>


        )
    }
}

export default SearchBar;