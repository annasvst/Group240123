# Installation
Run `npm install @reduxjs/toolkit react-redux` to add Redux to existing React project. More information here: https://redux.js.org/tutorials/quick-start#install-redux-toolkit-and-react-redux

# What is Redux?
Redux is a popular JavaScript library for managing and centralizing application state. It's commonly used with libraries like React, but it can be used with any other JavaScript UI library.

# Redux is more useful when:

You have large amounts of application state that are needed in many places in the app
The app state is updated frequently over time
The logic to update that state may be complex
The app has a medium or large-sized codebase, and might be worked on by many people

https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif

# Important notes:
- The center of every Redux application is the store. A "store" is a container that holds your application's global state.
- You must never directly modify or change the state that is kept inside the Redux store. Instead, the only way to cause an update to the state is to create a plain action object that describes "something that happened in the application", and then dispatch the action to the store to tell it what happened.
- When an action is dispatched, the store runs the root reducer function, and lets it calculate the new state based on the old state and the action.
- Finally, the store notifies subscribers that the state has been updated so the UI can be updated with the new data.
- Redux expects that all state updates are done immutably.
- *An action* is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.
- *A reducer* is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

# Reducers must always follow some specific rules:
- They should only calculate the new state value based on the state and action arguments
- They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

