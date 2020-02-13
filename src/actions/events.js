import history from '../history'


const addEvent = event=>{
    return {type:'ADD_EVENTS', event}
}

export const newEvent=data=>{
    return (dispatch)=>{
        const reqObj={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({event: data})
        }

        fetch('http://localhost:3000/events', reqObj)
        .then(resp => resp.json())
        .then(data =>{
            if(data.error){
                alert(data.error)
            }
            else {
                dispatch(addEvent(data))
                history.push('/')
            }
        })
    }
}

const addUsersEvents=events=>{
    return{type: 'ADD_USERS_EVENTS', events}
}

export const getUsersEvents=userId=>{
    return (dispatch)=>{
        fetch(`http://localhost:3000/users/${userId}/events`)
        .then(resp => resp.json())
        .then(data=>{
            dispatch(addUsersEvents(data))
        })
        .catch(err => console.log(err))
    }
}

export const setClickedEvent=event=>{
    return (dispatch) => {
        dispatch({type: 'SET_CLICKED_EVENT', event})
        dispatch({type: 'HIDE_FRIENDS'})
    }
}

export const editEvent=()=>{
    return (dispatch) => dispatch({type: 'EDIT_EVENT'})
}

export const closeEdit=()=>{
    return(dispatch) => dispatch({type: 'CLOSE_EDIT'})
}

const removeEvent = id =>{
    return {type: 'REMOVE_EVENT', id}
}

export const deleteEvent=id=>{
    return (dispatch) =>{
        fetch(`http://localhost:3000/events/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            if(data.message === 'event deleted successfully'){
                dispatch(removeEvent(id))
            }
            else {
                alert('Could not delete !')
            }
        })
    }
}

const replaceEvent=event=>{
    return{type: 'REPLACE_EVENT', event}
}

export const updateEvent=(event, eventId)=>{
    return (dispatch) => {
        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(event)
        }

        fetch(`http://localhost:3000/events/${eventId}`, reqObj)
        .then(resp => resp.json())
        .then((event) => {
            dispatch(replaceEvent(event))
        })
    }
}