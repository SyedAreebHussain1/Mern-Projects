import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import Post from './Post/Post'
import useStyles from './styles'
const Posts = () => {
    const statePosts = useSelector((state) => state.posts)
    const classes = useStyles()
    console.log('statePosts', statePosts)
    return (
        !statePosts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {statePosts.map((val, i) => (
                    <Grid key={val?._id} item xs={12} sm={6}>
                        <Post post={val} />
                    </Grid>
                )
                )}
            </Grid>
        )
    )
}

export default Posts