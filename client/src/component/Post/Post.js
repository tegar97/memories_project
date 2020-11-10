import React from 'react'
import  PostItem from './Post/Post'
import useStyles from './styles'
const Post  = () =>{
    const classes = useStyles()

    return (
        <>
            <h1>Post</h1>
            <PostItem/>
        
        </>

    )
}

export default Post