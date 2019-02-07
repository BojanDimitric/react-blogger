import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ACTIONS from '../../modules/Action';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }
    
    mapStateToProps = (state) => ({
        items: state.user
    });

    mapDispatchToProps = (dispatch) => ({
        createUser: (item) => dispatch(ACTIONS.createUser(item))
    });
    
    handleCreateUser = (event) => {
        this.setState({
            user: null
        });
        if (this.state.user !== '') {
            this.props.createUser(this.state.user);
        };
        event.preventDefault();
    };

    render() {
        return (
            <div class="modal fade" id="create-user" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Create user</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" class="form-control" id="username" placeholder="Username" />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label for="firstname">First name</label>
                                    <input type="text" class="form-control" id="firstname" placeholder="First name" />
                                </div>
                                <div class="form-group">
                                    <label for="lastname">Last name</label>
                                    <input type="text" class="form-control" id="lastname" placeholder="Last name" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-warning" onSubmit={this.handleCreateUser}>CREATE</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUser);