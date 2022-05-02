import React, { Component } from 'react'

export default class WorkoutPlanCreator extends Component {
    handleClick() {
        console.log("BUTTON PRESSED");
        this.props.createWorkoutPlan();
    }

    render() {
        return (
            <>
            <div>WorkoutPlanCreator</div>
            <button onClick={() => this.handleClick()}>yo</button>
            </>
        )
    }
}
