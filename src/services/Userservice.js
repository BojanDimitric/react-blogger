import { BASE_ENDPOINT } from '../shared/Constants';

const fetchUsers = () => {
    return fetch(`${BASE_ENDPOINT}/user`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        }
    }).then(response => response.json());
};

const createUser = (name, surname, logged, username, password, address, zip, city, country, phone, email, imagesrc, about, date) => {
    return fetch(`${BASE_ENDPOINT}/user/create`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'name': name,
            'surname': surname,
            'logged': logged,
            'username': username,
            'password': password,
            'address': address,
            'zip': zip,
            'city': city,
            'country': country,
            'phone': phone,
            'email': email,
            'imagesrc': imagesrc,
            'about': about,
            'date': date
        })
    }).then(response => response.json());
};

const updateUser = (id, name, surname, logged, username, password, address, zip, city, country, phone, email, imagesrc, about, date) => {
    return fetch(`${BASE_ENDPOINT}/user/update/:${id}`, {
        method: 'UPDATE',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'id': id,
            'name': name,
            'surname': surname,
            'logged': logged,
            'username': username,
            'password': password,
            'address': address,
            'zip': zip,
            'city': city,
            'country': country,
            'phone': phone,
            'email': email,
            'imagesrc': imagesrc,
            'about': about,
            'date': date
        })
    }).then(response => response.json());
};

const deleteUser = (id, name, surname, logged, username, password, address, zip, city, country, phone, email, imagesrc, about, date) => {
    return fetch(`${BASE_ENDPOINT}/user/delete/:${id}`, {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bojandimitric',
            'SessionId': '88888888-4444-4444-4444-121212121212'
        },
        body: JSON.stringify({
            'userID': id,
            'name': name,
            'surname': surname,
            'logged': logged,
            'username': username,
            'password': password,
            'address': address,
            'zip': zip,
            'city': city,
            'country': country,
            'phone': phone,
            'email': email,
            'imagesrc': imagesrc,
            'about': about,
            'date': date
        })
    }).then(response => response.json());
};

export {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
};