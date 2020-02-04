const user = (state={}, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.user
        case 'LOGOUT':
            return state={}
        default:
            return state
    }
}

export default user