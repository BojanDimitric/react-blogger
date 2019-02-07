import { BASE_ENDPOINT } from '../shared/Constants';

const fetchComments = () => {
    return fetch(`${BASE_ENDPOINT}/comment`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        }
    }).then(response => response.json());
};

const createComment = (name, content, date) => {
    return fetch(`${BASE_ENDPOINT}/comment/create`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'name': name,
            'content': content,
            'date': date
        })
    }).then(response => response.json());
};

const updateComment = (id) => {
    return fetch(`${BASE_ENDPOINT}/comment/update`, {
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

const deleteComment = (id) => {
    return fetch(`${BASE_ENDPOINT}/login`, {
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
    createComment,
    updateComment,
    deleteComment
};