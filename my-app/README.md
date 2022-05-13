The first commit was just to set the structure for this workout plan app.
It will essentially function as a todo list with a few extra bells and whistles.

My goal is to show me which exercises I need to complete at which level on any given day.
Eventually I want to track my progress which I can review in a list or graphical format.
If there was no plan available I would be able to custom build my workout with exercises (given several constraints).
This plan would also be editable but that's a post-MVP feature.

I learned react very crudely after reading/following the react.js tutorial docs and watching some youtube videos for a simple todolist.

2022-05-12
After taking over a week to process and focus on other things, I returned to make progress on this app.
What really stumped me last time was changing state properly and passing updated state changes to parent components.

A couple things I still don't fully understand are: state change fundamentals, setting up components, basic JS (bind, arrow functions, etc) among others. I clearly don't know a lot, but I am taking a primarily greedy approach to this app and will worry about refactoring later for clean, error free code.

So far I managed to get rid of the uncontrolled/controlled error dealing with the inputs for creating a new workout plan.

Next round, I will need to work on the following:
1. need a tickbox for the TYPE input (weighted vs reps), which will trigger the VALUE input to either be
3 inputs (for pullup reps in 3 sets) or 1 (for weighted)
2. how to handle submitted data - I need to be able to view and edit it (if the weight is too much or wrong)
3. how to visualize it properly as a workout plan
4. how to increment things as i progress
5. confirm state is being stored and used properly
n. refactoring code/components and using hooks instead of my current react tutorial-esque setup

I know I'm missing a lot of things. It's all disorganized in my head but I know I need to continue hacking at it instead
of worrying about the order of things. In the future I'll workout a system but for now it's just pure hacking until I 
get a react MVP out.

This is my first react (also web) app so I'm not gonna pressure myself too much. In subsequent relesaes and other react apps
I'll take a more crisp approach.