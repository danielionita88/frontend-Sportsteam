const user = (state={ currentUser: [], friends: []}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state,
                currentUser: action.user}
        case 'LOGOUT':
            return {...state,
            currentUser: []}
        default:
            return state
    }
}

export default user