import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ACTIONS from '../../modules/Action';

class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null
        };
    }
    
    mapStateToProps = (state) => ({
        items: state.comment
    });

    mapDispatchToProps = (dispatch) => ({
        createComment: (item) => dispatch(ACTIONS.createComment(item))
    });
    
    handleCreateComment = (event) => {
        this.setState({
            comment: ''
        });
        if (this.state.comment !== null) {
            this.props.createComment(this.state.comment);
        };
        event.preventDefault();
    };

    render() {
        return (
            <div class="modal fade" id="create-comment" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Create comment</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <label for="state">State</label>
                                    <input type="text" class="form-control" id="state" placeholder="State" />
                                </div>
                                <div class="form-group">
                                    <label for="zip">Zip</label>
                                    <input type="text" class="form-control" id="zip" placeholder="Zip" />
                                </div>
                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <input type="text" class="form-control" id="country" placeholder="Country" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-warning" onSubmit={this.handleCreateComment}>CREATE</button>
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
)(CreateComment);