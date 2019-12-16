import React, { Component } from 'react';
import Clock from './Clock';

import {Form, FormControl, Button, Jumbotron, Spinner} from 'react-bootstrap';
import './App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2019',
            newDeadline:''
        }
    }

    changeDeadline() {
        this.setState({deadline:this.state.newDeadline});
    }

    render() {
        return(
            <Jumbotron className='App'>
                <div className='App-title'>Countdown to {this.state.deadline}</div>
                <Clock 
                deadline={this.state.deadline}
                />
                <Form >
                    <FormControl 
                    type="text"
                    className='Deadline-input'
                    placeholder='new date'
                    onChange={event => this.setState({newDeadline:event.target.value})}
                    />
                    <Button 
                    variant="outline-primary"
                    onClick={() => this.changeDeadline()}
                    > 
                    Submit 
                    </Button>
                </Form>
                <Spinner animation="border" />
            </Jumbotron>
        )
    }
}

export default App;
