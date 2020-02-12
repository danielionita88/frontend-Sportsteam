const user = (state={ 
    currentUser: [], 
    friends: [], 
    showFriends: false, 
    searchResults: []
    }
    , action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state,
                currentUser: action.user}
        case 'LOGOUT':
            return {...state,
            currentUser: []}
        case 'REVEAL_FRIENDS': 
                return {...state,
                showFriends: true}
        case 'SEARCH_RESULTS':
            return{...state,
            searchResults: action.users}
        default:
            return state
    }
}

export default user