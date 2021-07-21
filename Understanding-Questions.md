# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the one button's onClick triggers the handleClick
* the handleClick dispatches the addOne action
* the addOne action returns ADD_ONE as the case
* In the reducer for the case ADD_ONE it makes a copy of the current state as to not lose any of the other state values, and then updates the total: state.total + 1 
* TotalDisplay takes state.total via value prop and displays it as read-only.
* TotalDisplay shows the total plus 1.
