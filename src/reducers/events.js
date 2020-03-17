const events = (state={
        usersEvents: [],
        friendsEvents:[],
        joinedEvents: [],
        clickedEvent:[], 
        showEvent: false, 
        editEvent: false
        },action)=>{
            switch(action.type){
                case 'ADD_EVENT':
                    return {...state,
                        usersEvents: [...state.usersEvents, action.event]
                    }
                case 'ADD_USERS_EVENTS':
                    return {...state,
                        usersEvents: action.events
                    }
                case 'SET_CLICKED_EVENT':
                    return {...state,
                        clickedEvent: action.event,
                        showEvent: true,
                        editEvent: false
                    }
                case 'EDIT_EVENT':
                    return {...state,
                        editEvent: true,
                    }
                case 'REMOVE_EVENT':
                    return {...state,
                        usersEvents: state.usersEvents.filter(event => event.id !== action.id),
                        showEvent: false
                    }
                case 'REPLACE_EVENT':
                    return {...state,
                        usersEvents: state.usersEvents.map(event => event.id === action.event.id ? action.event : event),
                        showEvent: false,
                        editEvent: false,
                    }
                case 'CLOSE_EDIT':
                    return {...state,
                        editEvent: false,
                        showEvent: false,
                    }
                case 'SET_FRIENDS':
                    let events=action.users.map(user=>user.events).flat()
                    return {...state,
                        friendsEvents: events
                    }
                case 'ADD_JOINED_EVENT':
                    let event=state.friendsEvents.find(event => event.id===action.eventId)
                    return{...state,
                        joinedEvents: [...state.joinedEvents, event]
                    }
                default:
                    return state
            }
}

export default events;