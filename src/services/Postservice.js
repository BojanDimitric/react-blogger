import { BASE_ENDPOINT } from '../shared/Constants';

const createPost = (name, text, date) => {
    return fetch(`${BASE_ENDPOINT}/post`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'name': name,
            'text': text,
            'date': date
        })
    }).then(response => response.json());
};

const createPost = (name, text, date) => {
    return fetch(`${BASE_ENDPOINT}/post/create`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'name': name,
            'text': text,
            'date': date
        })
    }).then(response => response.json());
};

const updatePost = (id) => {
    return fetch(`${BASE_ENDPOINT}/post/update/:${id}`, {
        method: 'UPDATE',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'id': id
        })
    }).then(response => response.json());
};

const deletePost = (id) => {
    return fetch(`${BASE_ENDPOINT}/post/delete/:${id}`, {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'id': id
        })
    }).then(response => response.json());
};

export {
    createPost,
    updatePost,
    deletePost
};