import React, { Component } from 'react'
import Exercise from './Exercise';
import WorkoutPlanCreator from './WorkoutPlanCreator';

export default class WorkoutPlan extends Component {
    //returns what exercises at which weight/rep level i need to complete today
    // the exercises returned are fixed but the weight/reps are editable
    //workoutplan includes a submit button to confirm the completion of that day's workouts
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            //list of Exercises
            //base case: 0 exercises, button to create workoutplan
            createClicked : false
        };
    }
    createWorkoutPlan = (name, workoutId, type, value) => { //why does setState only get recognized with the arrow function
        this.setState({exercises : [name, workoutId, type, value]});
        //plus button
        //Workout A
            //form: type exercise, add current weight
                //checkmark for Rep based exercise - type exercise, add 3 rep input
        //Workout B
            //same form
    }
    getDate() {
        return Date();
    }

    addExercise(name, workoutId, type, value) {
        return <Exercise name={name} workoutId={workoutId} type={type} value={value} />;
    }

    handleCreateClick() {
        this.setState({createClicked: true});
    }

    render() {
        const exercises = this.state.exercises;
        console.log(exercises);
        //state 1: fresh user wants to create a plan but hasn't clicked create yet
        if (!exercises.length > 0 && !this.state.createClicked){
            return (
                <button onClick={() => this.handleCreateClick()}>Create Workout Plan</button>
            )
        }
        //state 2: fresh user clicks create
        else if (!exercises.length > 0 && this.state.createClicked){
            return (
                <WorkoutPlanCreator createWorkoutPlan={this.createWorkoutPlan}/>
            )
        }
        //state 3: user has submitted his workout plan and can view it on a daily basis
        else {
        //TODO states n: depending on the day user will see a plan for A, B or REST
            return ( //box will be drawn within the fragment
            <>
                <div>{this.getDate()}</div>
                <div>{exercises}</div>
                <input type="text" />
                <button>submit</button>
            </>
            )
        }
    }

    //based on date and state output today's workout plan
    getPlan(date, workoutState) {
        //if mwf, show workoutplan; else REST
        //if i did squats,bench,pullups last time, then this time i do deadlifts,rows,presses
        //plan is: exercise : weight   
    }
}