import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../../services/PostsService';

class DisplayPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    mapPostsToRows = () => {
        const posts = fetchPosts();
        const mappedPosts = posts.map((post) => {
            return  <tr>
                        <th scope='row'>{post.id}</th>
                        <th>{post.name}</th>
                        <td>{post.state}</td>
                        <th>{post.zip}</th>
                        <td>{post.country}</td>
                        <td>Create</td>
                        <th>Update</th>
                        <td>Delete</td>
                    </tr>
        });
        return mappedPosts;
    };    

    render() {
        const mappedPosts = this.mapPostsToRows();
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
                            <Link href='/createpost'>
                                <button type="button" class="btn btn-success">Create</button>
                            </Link>
                        </th>
                        <th scope='col'>
                            <Link href='/updatepost'>
                                <button type="button" class="btn btn-warning">Update</button>
                            </Link>
                        </th>
                        <th scope='col'>
                            <Link href='/deletepost'>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mappedPosts}                    
                </tbody>
            </table>
        );
    };
}

export default DisplayPosts;