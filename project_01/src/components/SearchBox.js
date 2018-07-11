import React, { Component } from 'react';

class SearchBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchName: '',
            searchPrice: ''
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.props.filterSearch(name, value);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <input type = "text" name = "searchName" value = {this.state.searchName} placeholder = "name" onChange = {this.handleChange}/>
                <input type = "number" name = "searchPrice" value = {this.state.searchPrice} placeholder = "price" onChange = {this.handleChange}/>
            </div>
        );
    }
}

export default SearchBox;