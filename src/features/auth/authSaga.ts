import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { loginRequest, loginSucsess, loginFailure } from './authSlice';
import { api } from '../../helpers/request';
import { User } from './types';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  acsess_token: string;
}

const loginApi = (credentials: LoginRequest) => api('/auth/login');

function* handleLogin(
  action: PayloadAction<LoginRequest>
): SagaIterator {
  try {
    const response:LoginResponse = yield call(loginApi, action.payload);

    console.log(response)

    yield put(loginSucsess(response.user));
  } catch (error) {
    yield put(loginFailure(error instanceof Error ? error.message : "Unknown error"))
  }
}


export function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin)
}