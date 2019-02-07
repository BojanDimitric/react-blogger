import { BASE_ENDPOINT } from '../shared/Constants';

const fetchBlogs = () => {
    return fetch(`${BASE_ENDPOINT}/login`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        }
    }).then(response => response.json());
};

const createBlog = (name, date) => {
    return fetch(`${BASE_ENDPOINT}/blog`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'name': name,
            'date': date
        })
    }).then(response => response.json());
};

const updateBlog = (id) => {
    return fetch(`${BASE_ENDPOINT}/blog/update/:${id}`, {
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

const deleteBlog = (id) => {
    return fetch(`${BASE_ENDPOINT}/blog/delete/:${id}`, {
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
    fetchBlogs,
    createBlog,
    updateBlog,
    deleteBlog
};