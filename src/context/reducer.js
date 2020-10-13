export const initialState = {
  placeStateHere: '',
}

// state -> anything inside of reducer, action -> manipulating the data layer
export default function reducer(state, action) {
  switch(action.type) {
    case 'ADD_STATE':
      // Logic for adding desired state
      break;
    case 'REMOVE_FROM_BASKET':
      // Logic for removing desired state
      break;
    default:
      return state;
  }
}