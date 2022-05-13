import React, { Component } from 'react';
import {TextField, Button} from "@material-ui/core";

export default class WorkoutPlanCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom : '',
            workoutId : '', 
            type : '', 
            value : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handleWidChange = this.handleWidChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleNomChange(event) {
        this.setState({
            nom : event.target.value
        });
    }
    handleWidChange(event) {
        this.setState({
            workoutId : event.target.value
        });
    }
    handleTypeChange(event) {
        this.setState({
            type : event.target.value
        });
    }
    handleValueChange(event) {
        this.setState({
            value : event.target.value
        });
    }

    handleSubmit(event) {
        this.props.createWorkoutPlan(this.state.nom, this.state.workoutId, this.state.type, this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        <>
            <form onSubmit = {this.handleSubmit}>
                <TextField
                    label="Exercise Name"
                    type="text"
                    name="exercise"
                    value={this.state.nom}
                    onChange={this.handleNomChange}
                />
                <TextField
                    label="Workout ID"
                    type="text"
                    name="wid"
                    value={this.state.workoutId}
                    onChange={this.handleWidChange}
                />
                <TextField
                    label="Type"
                    type="text"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleTypeChange}
                />
                <TextField
                    label="Value"
                    type="text"
                    name="value"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                />
                <Button type="submit">Submit</Button>
            </form> 
        </>
        )
    }
}