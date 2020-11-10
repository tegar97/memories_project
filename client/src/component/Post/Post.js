import React from 'react'
import  PostItem from './Post/Post'
import useStyles from './styles'
import {useSelector} from 'react-redux'

const Post  = () =>{
    const posts = useSelector(state => state.posts);
    console.log(posts)
    const classes = useStyles()

    return (
        <>
            <h1>Post</h1>
            <PostItem/>
        
        </>

    )
}

export default Post