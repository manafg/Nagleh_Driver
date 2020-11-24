import { takeLatest ,take, put, call, takeEvery } from 'redux-saga/effects';

import { RegisterApi } from '../client/RegApi';
import { LoginApi } from '../client/LoginApi';
import { OTPApi } from '../client/OTP';
import {rejecttTripApi ,acceptTripApi , rateTripApi, completetripApi, startTripApi, goOnlineApi , goOfflineApi } from '../client/Home'

import {REQUEST_REGISTER} from '../actions/Reg/registreTypes';
import {REQUEST_LOGIN} from '../actions/Login/LoginTypes';
import { REQUEST_OTP } from '../actions/OTP/OTPTypes';
import {TRIP_COMPLETE, TRIP_START , RATE_TRIP, TRIP_REJECT , TRIP_ACCEPT, GO_OFFLINE , GO_ONLINE, TRIP_COMPLETE_SUCCESS} from '../actions/Home/HomeActionTypes'

import {successRegister, failRegister} from '../actions/Reg/registerAction';
import {successLogin, failLogin} from '../actions/Login/LoginActions';
import {successOTP , failOTP} from '../actions/OTP/OTPActions';
import {tripAcceptFail, tripAcceptSuccess ,tripRateFail,tripRateSuccess, tripCompleteFail ,
    tripCompleteSuccess, tripRejectFail, tripRejectSuccess, 
    tripStartSuccess, tripStarteFail, goOnlineSuccess, goOfflineSuccess,
    goOfflineFail, goOnlineFail} from '../actions/Home/HomeActions'




function* registerSaga(action){
    try {
        const data = yield call(RegisterApi,action.payLoad)
        yield put(successRegister(data));
    } catch (err){
        yield put(failRegister(err));
    }
}
//setOnline
function* onlineSaga(action) {
    try {
        const data = yield call(goOnlineApi)
        yield put(goOnlineSuccess(data))
    }catch (err) {
        yield put(goOnlineFail(err));
    }
}
//SetOffline
function*  offlineSaga(action) {
    try {
        const data = yield call(goOfflineApi)
        yield put(goOfflineSuccess(data))
    }catch (err) {
        yield put(goOfflineFail(err));
    }
}
//tripStart
function*  tripStartSaga(action) {
    try {
        const data = yield call(startTripApi,action.payLoad)
        yield put(tripStartSuccess(data))
    }catch (err) {
        yield put(tripStarteFail(err));
    }
}
//TripAccept
function* tripAcceptSaga (action) {
    try {
        const data = yield call(acceptTripApi,action.payLoad)
        yield put(tripAcceptSuccess(data))
    }catch (err) {
        yield put(tripAcceptFail(err));
    }
}
// TripReject
function* tripRejectSaga (action) {
    try {
        const data = yield call(rejecttTripApi,action.payLoad)
        yield put(tripRejectSuccess(data))
    }catch (err) {
        yield put(tripRejectFail(err));
    }
}
//TripComplete
function* tripCompleteSaga (action) {
    try {
        const data = yield call(completetripApi,action.payLoad)
        yield put(tripCompleteSuccess(data))
    }catch (err) {
        yield put(tripCompleteFail(err));
    }
}
function* loginSaga(action){
    try {
        const data = yield call(LoginApi,action.payLoad)
        yield put(successLogin(data));
    } catch (err){
        yield put(failLogin(err));
    }
}

function* OTPSaga(action){
    try {
        const data = yield call(OTPApi,action.payLoad)
        yield put(successOTP(data));
    } catch (err){
        yield put(failOTP(err));
    }
}

function* rateSaga(action){
    try {
        const data = yield call(rateTripApi,action.payLoad)
        yield put(tripRateSuccess(data));
    } catch (err){
        yield put(tripRateFail(err));
    }
}



export const sagas = [
        takeEvery(REQUEST_REGISTER, registerSaga),
        takeEvery(REQUEST_LOGIN, loginSaga),
        takeEvery(REQUEST_OTP, OTPSaga),
        takeEvery(GO_ONLINE, onlineSaga),
        takeEvery(GO_OFFLINE, offlineSaga),
        takeEvery(TRIP_START, tripStartSaga),
        takeEvery(TRIP_ACCEPT, tripAcceptSaga),
        takeEvery(TRIP_REJECT, tripRejectSaga),
        takeEvery(TRIP_COMPLETE, tripCompleteSaga),
        takeEvery (RATE_TRIP, rateSaga)
]