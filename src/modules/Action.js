const Types = {
    CREATE_USER: 'CREATE_USER',
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'DELETE_USER',
    CREATE_BLOG: 'CREATE_BLOG',
    UPDATE_BLOG: 'UPDATE_BLOG',
    DELETE_BLOG: 'DELETE_BLOG',
    CREATE_POST: 'CREATE_POST',
    UPDATE_POST: 'UPDATE_POST',
    DELETE_POST: 'DELETE_POST',
    CREATE_COMMENT: 'CREATE_COMMENT',
    UPDATE_COMMENT: 'UPDATE_COMMENT',
    DELETE_COMMENT: 'DELETE_COMMENT'
};

const createUser = (create) => ({
    type: Types.CREATE_USER,
    payload: create
});

const updateUser = (update) => ({
    type: Types.UPDATE_USER,
    payload: update
});

const deleteUser = (remove) => ({
    type: Types.DELETE_USER,
    payload: remove
});

const createBlog = (create) => ({
    type: Types.CREATE_ADDRESS,
    payload: create
});

const updateBlog = (update) => ({
    type: Types.UPDATE_ADDRESS,
    payload: update
});

const deleteBlog = (remove) => ({
    type: Types.DELETE_ADDRESS,
    payload: remove
});

const createPost = (create) => ({
    type: Types.CREATE_PHONE,
    payload: create
});

const updatePost = (update) => ({
    type: Types.UPDATE_PHONE,
    payload: update
});

const deletePost = (remove) => ({
    type: Types.DELETE_PHONE,
    payload: remove
});

const createComment = (create) => ({
    type: Types.CREATE_PHONE,
    payload: create
});

const updateComment = (update) => ({
    type: Types.UPDATE_PHONE,
    payload: update
});

const deleteComment = (remove) => ({
    type: Types.DELETE_PHONE,
    payload: remove
});


export {
    Types,
    createUser,
    updateUser,
    deleteUser,
    createBlog,
    updateBlog,
    deleteBlog,
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment
};