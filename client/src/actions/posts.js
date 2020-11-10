import * as api from '../api'

//Action Creator
export const getPosts = () => async(dispatch) => {

    try {
        const {data} = await api.fetchPost();

        dispatch({type: 'FETCH_ALL',payload: data});

    } catch (error) {
        
    }

}