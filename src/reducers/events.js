const events = (state={usersEvents: []}, action)=>{
    switch(action.type){
        case 'ADD_EVENT':
            return {...state,
            usersEvents: [...state.usersEvents, action.event]}
        case 'ADD_USERS_EVENTS':
            return {...state,
            usersEvents: action.events}
        default:
            return state
    }
}

export default events;