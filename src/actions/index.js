import history from '../history'
const setUser=user=>{
    return {type: 'LOGIN', user}
}

export const createUser= data=>{
    return (dispatch)=>{
        const reqObj={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: data})
        }

        fetch('http://localhost:3000/signup', reqObj)
        .then(resp=> resp.json())
        .then(data => {console.log(data)
            if(data.error){
                alert(data.error)
            }
            else {
                dispatch(setUser(data))
                localStorage.setItem('token',data.token)
                history.push('/')
            }
        })
        .catch(err => console.log(err))
    }
}

export const login=data=>{
    return (dispatch)=>{
        const reqObj={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if(data.error){
                alert(data.error)
            }
            else {
                dispatch(setUser(data))
                localStorage.setItem('token',data.token)
                history.push('/')
            }
        })
        .catch(err => console.log(err))
    }
}

export const logout=()=>{
    return{type: 'LOGOUT'}
}