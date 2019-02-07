import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchBlogs } from '../../services/BlogsService';

class DisplayBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    mapBlogsToRows = () => {
        const blogs = fetchBlogs();
        const mappedBlogs = blogs.map((blog) => {
            return  <tr>
                        <th scope='row'>{blogs.id}</th>
                        <th>{blog.name}</th>
                        <td>{blog.state}</td>
                        <th>{blog.zip}</th>
                        <td>{blog.country}</td>
                        <td>Create</td>
                        <th>Update</th>
                        <td>Delete</td>
                    </tr>
        });
        return mappedBlogs;
    };    

    render() {
        const mappedBlogs = this.mapBlogsToRows();
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
                            <Link href='/createblog'>
                                <button type="button" class="btn btn-success">Create</button>
                            </Link>
                        </th>
                        <th scope='col'>
                            <Link href='/updateblog'>
                                <button type="button" class="btn btn-warning">Update</button>
                            </Link>
                        </th>
                        <th scope='col'>
                            <Link href='/deleteblog'>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mappedBlogs}                    
                </tbody>
            </table>
        );
    };
}

export default DisplayBlogs;