const network=(state={ friends: [], 
    showFriends: false, 
    searchResults: [],
    friendRequests: []
    },action)=>{
        switch(action.type){
            case 'REVEAL_FRIENDS': 
                return {...state,
                showFriends: true}
            case 'SEARCH_RESULTS':
                return{...state,
                searchResults: action.users}
            case 'HIDE_FRIENDS':
                return{...state,
                showFriends: false,
                searchResults: []}
            case 'ADD_FRIEND_REQUESTS':
                return {...state,
                friendRequests: action.users}
            default:
                return state
        }
}
export default network;