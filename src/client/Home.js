import client from './client';

export const goOnlineApi  = async(data) => {
    const response = await client.patch(`/account/user/status?status=online`, data);
    const result = await response;
    return result;
}

export const rateTripApi  = async(data) => {
    const response = await client.patch(`/account/user/status?status=online`, data);
    const result = await response;
    return result;
}


export const goOfflineApi  = async(data) => {
    const response = await client.patch(`/account/user/status?status=offline`,data);
    const result = await response;
    return result;
}


export const acceptTripApi = async(data) => {
    const response = await client.patch(`/requests/truck/${data.requestId}/accept`,data.obj)
    const result = await response;
    return result;
}

export const rejecttTripApi = async(data) => {
    const response = await client.patch(`/requests/truck/${data.requestId}/reject`,data.ob)
    const result = await response;
    return result;
}

export const startTripApi = async(data) => {
    const response = await client.patch(`/requests/truck/${data.requestId}/start`,data.obj)
    const result = await response;
    return result;
}

export const completetripApi = async(data) => {
    const response = await client.patch(`/requests/truck/${data.requestId}/complete`,data.obj)
    const result = await response;
    return result;
}


