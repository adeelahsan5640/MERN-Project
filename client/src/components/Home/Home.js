import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.js';
import useStyles from '../../styles.js';
import Form from '../Form/Form.js';
import Posts from '../Posts/Posts.js';


const Home = () => {
    const [currentId, setcurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setcurrentId={setcurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setcurrentId={setcurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
