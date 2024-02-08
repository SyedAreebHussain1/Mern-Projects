import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination.jsx";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  console.log(Pagination)
  return (
    <Grow in>
      <Container>
        <Grid
          container
          // className={classes.mainContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} 
            elevation={6}>
            <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
