const events = (state={usersEvents: [], clickedEvent:[]}, action)=>{
    switch(action.type){
        case 'ADD_EVENT':
            return {...state,
            usersEvents: [...state.usersEvents, action.event]}
        case 'ADD_USERS_EVENTS':
            return {...state,
            usersEvents: action.events}
        case 'SET_CLICKED_EVENT':
            return {...state,
            clickedEvent: action.event}
        default:
            return state
    }
}

export default events;