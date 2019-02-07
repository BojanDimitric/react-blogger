import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchUsers } from '../../services/UserServices';

class DisplayUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    mapUsersToRows = () => {
        const users = fetchUsers();
        const mappedUsers = users.map((user) => {
            return  <tr>
                        <th scope='row'>{user.id}</th>
                        <th>{user.firstname}</th>
                        <th>{user.lastname}</th>
                        <th>
                            <Link href='/createuser'>
                                <button type="button" class="btn btn-success">Update</button>
                            </Link>
                        </th>
                        <th>
                            <Link href='/updateuser'>
                                <button type="button" class="btn btn-warning">Update</button>
                            </Link>
                        </th>
                        <th>
                            <Link href='/deleteuser'>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </Link>
                        </th>
                    </tr>
        });
        return mappedUsers;
    };    

    render() {
        const mappedUsers = this.mappedUsers();
        return (
            <table class="table table-bordered table-striped table-hover text-white bg-primary">
                <thead>
                    <tr>                    
                        <th scope='col'>User ID</th>
                        <th scope='col'>First name</th>
                        <th scope='col'>Last name</th>
                        <th scope='col'>Create</th>
                        <th scope='col'>Update</th>
                        <th scope='col'>Delete</th>                        
                    </tr>
                </thead>
                <tbody>
                    {mappedUsers}                    
                </tbody>
            </table>
        );
    };
}

export default DisplayUsers;