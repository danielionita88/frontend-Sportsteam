import {combineReducers} from 'redux'
import user from './user'
import events from './events'
import network from './network'


export default combineReducers({
    user,
    events,
    network
})

