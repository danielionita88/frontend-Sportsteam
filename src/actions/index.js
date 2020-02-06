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
    return (dispatch)=>{
        dispatch({type: 'LOGOUT'})
        history.push('/login')
        localStorage.clear()
    }
}

export const checkUser=token=>{
    return (dispatch)=>{
        const reqObj= {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        
        fetch('http://localhost:3000/current_user', reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                history.push('/login')
            }
            else {
                dispatch(setUser(data))
                localStorage.setItem('token',data.token)
            }
        })
    }
}