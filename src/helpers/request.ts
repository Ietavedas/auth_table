import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

type mockAPIType = {
    [x: string]: any
}

const mockAPI:mockAPIType = {
    '/auth/login': {
        user: {
            id: 1,
            email: localStorage.getItem('email')
        }
    }
}

export const api = async <T>(params: string): Promise<T> => {
    try {
        return mockAPI[params];
    } catch(error) {
        throw error;
    }
};
