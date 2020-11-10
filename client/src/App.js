import React,{useEffect} from 'react'
import logo from './logo.svg';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import memories from './images/memories.png'
import Post from './component/Post/Post'
import Form from './component/Form/Form';
import useStyle from './styles'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
function App() {
  const classes = useStyle()
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getPosts())
  },[dispatch])
  return (
   <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories </Typography>
        <img className={classes.image} src={memories} alt="Memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing>
            <Grid item xs={6} sm={7}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
   </Container>
  );
}

export default App;
