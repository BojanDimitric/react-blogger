import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Facebook from 'react-oauth2';
import { Google } from 'react-oauth2';

import { Privider as ReduxProvider } from 'react-redux';

import  configureStore from '../modules/Store';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';

import '../../node_modules/jquery/dist/jquery';
import '../../node_modules/popper/client';
import '../../node_modules/bootstrap/dist/js/bootstrap';

import Header from '../view/partials/Header';
import Footer from '../view/partials/Footer';

import About from '../view/components/About';
import Contact from '../view/components/Contact';
import DisplayUsers from '../view/components/DisplayUsers';
import CreateUser from '../view/components/CreateUser';
import UpdateUser from '../view/components/UpdateUser';
import DeleteUser from '../view/components/DeleteUser';
import DisplayBlogs from '../view/components/DisplayBlogs';
import CreateBlog from '../view/components/CreateBlog';
import UpdateBlog from '../view/components/UpdateBlog';
import DeleteBlog from '../view/components/DeleteBlog';
import DisplayPosts from '../view/components/DisplayPosts';
import CreatePost from '../view/components/CreatePost';
import UpdatePost from '../view/components/UpdatePost';
import DeletePost from '../view/components/DeletePost';
import DisplayComments from '../view/components/DisplayComments';
import CreateComment from '../view/components/CreateComment';
import UpdateComment from '../view/components/UpdateComment';
import DeleteComment from '../view/components/DeleteComment';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    facebook = (err, res) => {
        if (!err) {
            this.setState({ data: res.profile })
        } else {
            this.setState({ data: 'Something happen wrong!' })
        }
    };

    google = (err, res) => {
        if (!err) {
            this.setState({ data: res.profile })
        } else {
            this.setState({ data: 'Something happen wrong!' })
        }
    };

    render() {
        return (
            <ReduxProvider provider={reduxStore}>
                <Fragment>
                    <Header />
                    <Facebook 
                        url={ 'http://localhost:3000/' }
                        clientId={ '' }
                        clientSecret={ '' }
                        redirectUri={ 'http://localhost:3000/' }
                        scope={ 'email,user_location' }
                        width={ 300 }
                        height={ 300 }
                        callback={ facebook }
                        style={{ color: '#5bc0de' }}>
                            Login With Facebook!
                    </Facebook>
                    <Google
                        url={ 'http://localhost:3000' }
                        clientId={ '' }
                        clientSecret={ '' }
                        redirectUri={ 'http://localhost:3000' }
                        scope={[ 'https://www.googleapis.com/auth/userinfo.email' ]}
                        width={ 300 }
                        height={ 300 }
                        callback={ google }
                        style={{ color: '#d9534f' }}>
                        Login With Google!
                    </Google>
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/login' component={Login} />
                        <Route path='/' component={Home} />
                        <Redirect from='/home' to='/' />
                        <Route path='/users' component={DisplayUsers} />
                        <Route path='/user/create' component={CreateUser} />
                        <Route path='/user/update/:id' component={UpdateUser} />
                        <Route path='/user/delete/:id' component={DeleteUser} />
                        <Route path='/blogs' component={DisplayBlogs} />
                        <Route path='/blog/create' component={CreateBlog} />
                        <Route path='/blog/update/:id' component={UpdateBlog} />
                        <Route path='/blog/delete/:id' component={DeleteBlog} />
                        <Route path='/posts' component={DisplayPosts} />
                        <Route path='/post/create' component={CreatePost} />
                        <Route path='/post/update/:id' component={UpdatePost} />
                        <Route path='/post/delete/:id' component={DeletePost} />
                        <Route path='/comments' component={DisplayComments} />
                        <Route path='/comment/create' component={CreateComment} />
                        <Route path='/comment/update/:id' component={UpdateComment} />
                        <Route path='/comment/delete/:id' component={DeleteComment} />
                    </Switch>
                    <Footer />
                </Fragment>
            </ReduxProvider>
        );
    }
}

export default App;
