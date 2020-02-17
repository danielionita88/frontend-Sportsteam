const network=(state={ friends: [], 
    showFriends: false, 
    searchResults: [],
    friendRequests: []
    },action)=>{
        switch(action.type){
            case 'REVEAL_FRIENDS': 
                return {...state,
                    showFriends: true
                }
            case 'SEARCH_RESULTS':
                return{...state,
                    searchResults: action.users
                }
            case 'HIDE_FRIENDS':
                return{...state,
                    showFriends: false,
                    searchResults: []
                }
            case 'ADD_FRIEND_REQUESTS':
                return {...state,
                    friendRequests: action.users
                }
            case 'LOGOUT':
                return {...state,
                    friends:[],
                    showFriends: false,
                    searchResults: []
                }
            case 'SET_FRIENDS':
                return {...state,
                    friends: action.users
                }
            case 'ADD_FRIEND':
                return {...state,
                    friends: [...state.friends, action.user],
                    friendRequests: state.friendRequests.filter(user => user.id !== action.user.id)
                }
            default:
                return state
        }
}
export default network;