import React, {Component} from 'react'
import { createStore } from 'redux'



class ReduxDemo extends Component {

  render() {




// Step 2 -> Create Reducer ( Action & State ) --- Needs a seperate Folder

const reducer = function(state, action){
  if (action.type === "ATTACK" ){
    return action.payload
  }
  if (action.type === "GREENATTACK" ){
    return action.payload
}
return state;
}


// Step 1 -> Create Store ( Reducer & State )

const store = createStore(reducer, "Peace")


// Step 3 -> Subscribe

store.subscribe( () => {
  console.log("Store is now" , store.getState());
})

// Step 4 -> Dispatch Action   -------- Needs a seperate Folder

store.dispatch( {
  type : "ATTACK",
  payload: "Iron Man"
})

store.dispatch( {
  type : "GREENATTACK",
  payload: "HULK"
})

    return (
      <div>
        Redux Demo Component
      </div>
    );
  }

}

export default ReduxDemo;
