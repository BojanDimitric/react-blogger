import * as ACTIONS from './Action';
import _ from 'lodash';

const defaultState = {
    items: []
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.CREATE_USER: {
            let user = action.payload;
            let newUser = {
                id: state.items.length + 1, 
                description: user
            };
            let newState = _.cloneDeep(state);
            newState.items.push(newUser);
            return newState;
        }
        case ACTIONS.Types.UPDATE_USER: {
            let user = action.payload;
            let newUser = {
                id: state.items.length + 1, 
                description: user
            };
            let index = _.findIndex(newState.items, { id: action.payload });
            let newState = _.cloneDeep(state);
            newState.items.splice(index, 0, newUser);
            return newState;
        }
        case ACTIONS.Types.DELETE_USER: {
            let newState = _.cloneDeep(state);
            let index = _.findIndex(newState.items, { id: action.payload });
            newState.items.splice(index, 1);
            return newState;
        }        
        case ACTIONS.Types.CREATE_BLOG: {
            let address = action.payload;
            let newAddress = {
                id: state.items.length + 1, description: address
            };
            let newState = _.cloneDeep(state);
            newState.items.push(newAddress);
            return newState;
        }
        case ACTIONS.Types.UPDATE_BLOG: {
            let address = action.payload;
            let newAddress = {
                id: state.items.length + 1, description: address
            };
            let index = _.findIndex(newAddress.items, { id: action.payload });
            let newState = _.cloneDeep(state);
            newState.items.splice(index, 0, newAddress);
            return newState;
        }
        case ACTIONS.Types.DELETE_BLOG: {
            let newState = _.cloneDeep(state);
            let index = _.findIndex(newState.items, { id: action.payload });
            newState.items.splice(index, 1);
            return newState;
        }
        case ACTIONS.Types.CREATE_POST: {
            let phone = action.payload;
            let newPhone = {
                id: state.items.length + 1, description: phone
            };
            let newState = _.cloneDeep(state);
            newState.items.push(newPhone);
            return newState;
        }
        case ACTIONS.Types.UPDATE_POST: {
            let phone = action.payload;
            let newPhone = {
                id: state.items.length + 1, description: phone
            };
            let index = _.findIndex(newState.items, { id: action.payload });
            let newState = _.cloneDeep(state);
            newState.items.splice(index, 0, newPhone);
            return newState;
        }
        case ACTIONS.Types.DELETE_POST: {
            let newState = _.cloneDeep(state);
            let index = _.findIndex(newState.items, { id: action.payload });
            newState.items.splice(index, 1);
            return newState;
        }
        case ACTIONS.Types.CREATE_COMMENT: {
            let phone = action.payload;
            let newPhone = {
                id: state.items.length + 1, description: phone
            };
            let newState = _.cloneDeep(state);
            newState.items.push(newPhone);
            return newState;
        }
        case ACTIONS.Types.UPDATE_COMMENT: {
            let phone = action.payload;
            let newPhone = {
                id: state.items.length + 1, description: phone
            };
            let index = _.findIndex(newState.items, { id: action.payload });
            let newState = _.cloneDeep(state);
            newState.items.splice(index, 0, newPhone);
            return newState;
        }
        case ACTIONS.Types.DELETE_COMMENT: {
            let newState = _.cloneDeep(state);
            let index = _.findIndex(newState.items, { id: action.payload });
            newState.items.splice(index, 1);
            return newState;
        }
        default: 
            return state;
    };
};

export default reducer;