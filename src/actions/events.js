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
    }
}

export const setClickedEvent=event=>{
    return (dispatch) => dispatch({type: 'SET_CLICKED_EVENT', event})
}