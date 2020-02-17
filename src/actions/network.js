export const revealFriends=()=>{
    return (dispatch) => {
        dispatch({type: 'REVEAL_FRIENDS'})
        dispatch({type: 'CLOSE_EDIT'})
    }
}

export const hideFriends=()=>{
    return(dispatch) => dispatch({type: 'HIDE_FRIENDS'})
}

const searchResults=users=>{
    return {type:'SEARCH_RESULTS', users}
}
export const searchFriends=name=>{
    return (dispatch)=>{
        fetch(`http://localhost:3000/users/search/${name}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch(searchResults(data))
        })
    }
}

const setFriends=users=>{
    return {type: 'SET_FRIENDS', users}
}

export const getFriends=userId=>{
    return (dispatch)=>{
        fetch(`http://localhost:3000/users/${userId}/friends`)
        .then(resp => resp.json())
        .then(data => dispatch(setFriends(data)))
    }
}

export const requestFriendship=(requestorId, receiverId)=>{
    return (dispatch)=>{
        const reqObj ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                requestor_id: requestorId,
                receiver_id: receiverId
            })
        }

        fetch('http://localhost:3000/friend_requests', reqObj)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}

const addFriendRequests=users=>{
    return({type:'ADD_FRIEND_REQUESTS', users})
}

export const getFriendRequests=userId=>{
    return (dispatch)=>{
        fetch(`http://localhost:3000/users/${userId}/friend_requests`)
        .then(resp => resp.json())
        .then(data => {
            dispatch(addFriendRequests(data))
        })
    }
}

const addFriend=user=>{
    return({type: 'ADD_FRIEND', user})
}

export const acceptFriend=(userId,friendId)=>{
    return (dispatch)=>{
        const reqObj ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                friend_id: friendId
            })
        }
        fetch(`http://localhost:3000/friendships`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            }
            else
            dispatch(addFriend(data))
        })
    }
}

