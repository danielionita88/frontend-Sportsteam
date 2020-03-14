const network=(state={ friends: [], 
    searchResults: [],
    friendRequests: []
    },action)=>{
        switch(action.type){
            case 'SEARCH_RESULTS':
                return{...state,
                    searchResults: action.users
                }
            case 'ADD_FRIEND_REQUESTS':
                return {...state,
                    friendRequests: action.users
                }
            case 'LOGOUT':
                return {...state,
                    friends:[],
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
            case 'REMOVE_FRIEND':
                return{...state,
                    friends: state.friends.filter(friend => friend.id !==action.friendId)
                }
            case 'SET_PENDING_FRIENDS':
                return {...state,
                    pendingFriends: action.users
                }
            default:
                return state
        }
}
export default network;