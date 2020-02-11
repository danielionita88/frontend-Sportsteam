const events = (state={usersEvents: [], clickedEvent:[], showEvent: false}, action)=>{
    switch(action.type){
        case 'ADD_EVENT':
            return {...state,
            usersEvents: [...state.usersEvents, action.event]}
        case 'ADD_USERS_EVENTS':
            return {...state,
            usersEvents: action.events}
        case 'SET_CLICKED_EVENT':
            return {...state,
            clickedEvent: action.event,
            showEvent: true
            }
        case 'REMOVE_EVENT':
            return {...state,
            usersEvents: state.usersEvents.filter(event => event.id !== action.id),
            showEvent: false
            }
        default:
            return state
    }
}

export default events;