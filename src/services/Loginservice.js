import { BASE_ENDPOINT } from '../shared/Constants';

const loginUser = (user, pass) => {
    return fetch(`${BASE_ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'user': user,
            'pass': pass
        })
    }).then(response => response.json());
};

const registerUser = (id) => {
    return fetch(`${BASE_ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'userID': id
        })
    }).then(response => response.json());
};

export {
    loginUser,
    registerUser
};