import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchComments } from '../../services/BlogsService';

class DisplayComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    mapCommentsToRows = () => {
        const comments = fetchComments();
        const mappedComments = comments.map((comment) => {
            return  <tr>
                        <th scope='row'>{comment.id}</th>
                        <th>{comment.name}</th>
                        <td>{comment.state}</td>
                        <th>{comment.zip}</th>
                        <td>{comment.country}</td>
                        <td>Create</td>
                        <th>Update</th>
                        <td>Delete</td>
                    </tr>
        });
        return mappedComments;
    };    

    render() {
        const mappedComments = this.mapCommentsToRows();
        return (
            <table class="table table-bordered table-striped table-hover text-light bg-primary">
                <thead>
                    <tr>                    
                        <th scope='col'>Address ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>State</th>
                        <th scope='col'>Zip</th>
                        <th scope='col'>Country</th>
                        <th scope='col'>
                            <Link href='/createcomment'>
                                <button type="button" class="btn btn-success">Create</button>
                            </Link>
                        </th>
                        <th scope='col'>
                            <Link href='/updatecomment'>
                                <button type="button" class="btn btn-warning">Update</button>
                            </Link>
                        </th>
                        <th scope='col'>
                            <Link href='/deletecomment'>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mappedComments}                    
                </tbody>
            </table>
        );
    };
}

export default DisplayComments;