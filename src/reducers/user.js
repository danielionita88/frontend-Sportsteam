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
            currentUser: [],
            friends: [],
            showFriends:false,
            searchResults:[]
        }
        case 'REVEAL_FRIENDS': 
            return {...state,
            showFriends: true}
        case 'SEARCH_RESULTS':
            return{...state,
            searchResults: action.users.filter(user => user.id !== state.currentUser.id)}
        case 'HIDE_FRIENDS':
            return{...state,
            showFriends: false,
            searchResults: []}
        default:
            return state
    }
}

export default user