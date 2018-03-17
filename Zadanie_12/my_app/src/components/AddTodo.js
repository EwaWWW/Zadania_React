import React from 'react';

export default class AddTodo extends React.Component {

    state = {
        currentValueInput: '',
        todos: []
    };

    inputOnChange = (inputText) => {
        this.setState({
            currentValueInput: inputText.target.value
    });
        console.log(this.state.currentValueInput);
    };

    buttonOnClick = () => {
        this.props.inputOnChange(this.state.currentValueInput);
    };

    render()
    {
        return <React.Fragment>
            <input value={this.state.currentValueInput}
                   onChange={this.inputOnChange}
                   type={'text'}/>
            <button onClick={this.buttonOnClick}
            disabled={!this.state.currentValueInput}>Add</button>
        </React.Fragment>
    }
};



