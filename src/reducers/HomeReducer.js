import { RECIVE_TRIP , TRIP_ACCEPT_SUCCESS, TRIP_ACCEPT_FAIL, 
    TRIP_REJECT_FAIL ,TRIP_REJECT_SUCCESS,
TRIP_COMPLETE_FAIL, TRIP_COMPLETE_SUCCESS,
TRIP_START_FAIL,TRIP_START_SUCCESS,
GO_OFFLINE_FAIL,GO_OFFLINE_SUCCESS,
GO_ONLINE_FAIL,GO_ONLINE_SUCCESS , UPDATE_LOCATION,
 RATE_TRIP_SUCCESS ,RATE_TRIP_FAIL, COMPLETE
} from '../actions/Home/HomeActionTypes';

const initialState = {
    RecivedTrip:{},
    error: '',
    step:0,
    aliveState: false,
    animation: 0,
    myLocation: 0,
    TripAccept:false,
    TripStart: false,
    TripComplete: false,
    Total : 0,
    Completed: false
    
};

const homeReducer = function post(state = initialState , action) {
    
    switch(action.type) {
        case UPDATE_LOCATION: 
        return {
            ...state,
            myLocation: action.payLoad
        }
        //RECIVE Trip
        case RECIVE_TRIP: 
        return {
            ...state,
            RecivedTrip: action.payLoad?.data,
            step:1
        }
        //Online
        case GO_ONLINE_FAIL: 
        return {
            ...state,
            error: action.payLoad
        }
        case GO_ONLINE_SUCCESS: 
        return {
            ...state,
            aliveState: true
        }
        //Offline
        case GO_OFFLINE_FAIL: 
        return {
            ...state,
            error: false
        }
        case GO_OFFLINE_SUCCESS: 
        return {
            ...state,
            aliveState: false
        }
        //Accept
        case TRIP_ACCEPT_SUCCESS: 
        return {
            ...state,
            TripAccept: true,
            step:2
        }
        case TRIP_ACCEPT_FAIL: 
        return {
            ...state,
            error: action.payLoad
        }
        //REJCET
        case TRIP_REJECT_SUCCESS: 
        return {
            ...state,
            error: action.payLoad
        }

        
        case TRIP_REJECT_FAIL: 
        return {
            ...state,
            error: action.payLoad
        }
        
        //Complete
        case TRIP_COMPLETE_SUCCESS: 
        debugger
        return {
            ...state,
            Total : action.payLoad.data.receipt.subtotal,
            TripComplete: true,
            step:4
        }
        case TRIP_COMPLETE_FAIL: 
        debugger
        return {
            ...state,
            error: action.payLoad
        }
        //Start
        case TRIP_START_SUCCESS: 
        debugger
        return {
            ...state,
            TripStart: true,
            step:3
        }
        case TRIP_START_FAIL: 
        return {
            ...state,
            error: action.payLoad
        }

        case RATE_TRIP_SUCCESS: 
        debugger
        return {
            ...state,
            TripRated: true,
            step:3
        }
        case RATE_TRIP_FAIL: 
        return {
            ...state,
            error: action.payLoad
        }
        case COMPLETE :
            debugger
            return {
                ...state,
                Completed: true,
                step:5
            }

    default:
        return state;
    }
}

export default homeReducer;