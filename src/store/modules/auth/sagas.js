import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from 'services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (user.provider) {
            Alert.alert(
                'Erro no login',
                'Usuário não pode ser prestador de serviços',
            );
            return;
        }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        // history.push('/dashboard');
    } catch (error) {
        Alert.alert(
            'Falha na autenticação',
            'Houve um erro no login, verifique seus dados',
        );

        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
        });

        // history.push('/');
    } catch (error) {
        Alert.alert(
            'Falha na autenticação',
            'Houve um erro no login, verifique seus dados',
        );

        yield put(signFailure());
    }
}

function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
