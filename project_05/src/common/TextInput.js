import React from 'react';

const TextInput = (props) => {

    return (
        <div>
        <label>{props.label}: </label>
        <input 
            type = {props.type}
            value = {props.value}
            onChange = {
                (e) => props.onChange(e.target.value)
            }
        />
        </div>

    )
}

export default TextInput;
