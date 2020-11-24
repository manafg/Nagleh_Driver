import {TRIP_START,
    TRIP_START_SUCCESS,
    TRIP_START_FAIL,
    TRIP_ACCEPT,
    TRIP_ACCEPT_SUCCESS,
    TRIP_ACCEPT_FAIL,
    TRIP_REJECT,
    TRIP_REJECT_SUCCESS,
    TRIP_REJECT_FAIL,
    TRIP_COMPLETE,
    TRIP_COMPLETE_SUCCESS,
    TRIP_COMPLETE_FAIL,
    RECIVE_TRIP,
    GO_ONLINE,
    GO_ONLINE_SUCCESS,
    GO_ONLINE_FAIL,
    GO_OFFLINE_SUCCESS,
    GO_OFFLINE_FAIL,
    GO_OFFLINE,
    UPDATE_LOCATION,
    RATE_TRIP,
    RATE_TRIP_FAIL,
    RATE_TRIP_SUCCESS,
    COMPLETE
} from './HomeActionTypes';

export function updateMyLocation (data) {
    return {
        type: UPDATE_LOCATION,
        payLoad: data
    }
}

export function reciveTrip(data){
    return {
        type:RECIVE_TRIP,
        payLoad:data
    }
}


//---------------- go Online

export function goOnLINE (data) {
    return {
        type: GO_ONLINE,
        payLoad:data
    }
}

export function goOnlineFail (data) {
    return {
        type: GO_ONLINE_FAIL,
        payLoad:data
    }
}

export function goOnlineSuccess (data) {
    return {
        type: GO_ONLINE_SUCCESS,
        payLoad:data
    }
}
//---------------go OFline


export function goOffline (data) {
    return {
        type: GO_OFFLINE,
        payLoad:data
    }
}

export function goOfflineSuccess (data) {
    return {
        type: GO_OFFLINE_SUCCESS,
        payLoad:data
    }
}

export function goOfflineFail (data) {
    return {
        type: GO_OFFLINE_FAIL,
        payLoad:data
    }
}

//---------------- trip start 


export function tripStart (data) {
    return {
        type: TRIP_START,
        payLoad:data
    }
}

export function tripStartSuccess (data) {
    return {
        type: TRIP_START_SUCCESS,
        payLoad:data
    }
}

export function tripStarteFail (data) {
    return {
        type: TRIP_START_FAIL,
        payLoad:data
    }
}

//---------------- tripAccept 

export function tripAccept (data) {
    return {
        type: TRIP_ACCEPT,
        payLoad:data
    }
}

export function tripAcceptSuccess (data) {
    return {
        type: TRIP_ACCEPT_SUCCESS,
        payLoad:data
    }
}

export function tripAcceptFail (data) {
    return {
        type: TRIP_ACCEPT_FAIL,
        payLoad:data
    }
}

//--------------- tripReject 

export function tripReject (data) {
    return {
        type: TRIP_REJECT,
        payLoad:data
    }
}

export function tripRejectSuccess (data) {
    return {
        type: TRIP_REJECT_SUCCESS,
        payLoad:data
    }
}

export function tripRejectFail (data) {
    return {
        type: TRIP_REJECT_FAIL,
        payLoad:data
    }
}

//------------ tripComplete

export function tripComplete (data) {
    return {
        type: TRIP_COMPLETE,
        payLoad:data
    }
}

export function tripCompleteSuccess (data) {
    return {
        type: TRIP_COMPLETE_SUCCESS,
        payLoad:data
    }
}

export function tripCompleteFail (data) {
    return {
        type: TRIP_COMPLETE_FAIL,
        payLoad:data
    }
}

//RateTrip 
export function tripRate (data) {
    return {
        type: RATE_TRIP,
        payLoad:data
    }
}

export function tripRateSuccess (data) {
    return {
        type: RATE_TRIP_SUCCESS,
        payLoad:data
    }
}

export function tripRateFail (data) {
    return {
        type: RATE_TRIP_FAIL,
        payLoad:data
    }
}
// COMPLETE 
export function Complete (data) {
    return {
        type: COMPLETE,
        payLoad:data
    }
}