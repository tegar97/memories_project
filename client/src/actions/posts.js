import * as api from '../api'

//Action Creator
export const getPosts = () => async(dispatch) => {

    try {
        const {data} = await api.fetchPost();

        dispatch({type: 'FETCH_ALL',payload: data});

    } catch (error) {
        
    }

}

//Action Creator
export const CreatePost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE',payload: data});

    } catch (error) {
        console.log(error)
    }

}