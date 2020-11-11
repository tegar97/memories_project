import React from 'react'
import  PostItem from './Post/Post'
import useStyles from './styles'
import {useSelector} from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core'

const Post  = () =>{
    const posts = useSelector(state => state.posts);
    console.log(posts)
    const classes = useStyles()

    return (
       !posts.length ? <CircularProgress/> : (
           <Grid className={classes.container} container alignsItems="stretch" spacing={3} >
            {posts.map(post => (
                <Grid key={post._id} item xs={12} sm={6}> 
                    <PostItem post={post}/>
                </Grid>
            ))}
           </Grid>
       )

    )
}

export default Post