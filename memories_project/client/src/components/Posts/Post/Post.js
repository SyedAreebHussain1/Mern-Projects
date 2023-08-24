import React from 'react'
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { deletePost } from '../../../actions/posts';
import useStyles from './styles'

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        console.log('delete id', id)
        if (id) {
            dispatch(deletePost(id))
        }
    }
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post?.selectedFile} title={post?.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post?.creator}</Typography>
                <Typography variant='body2'>{moment(post?.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size='small' onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post?.tags.map((val) => `#${val} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom >{post?.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => { }}>
                    <ThumbUpIcon fontSize='small' />
                    Like
                    {post?.likeCount ? post?.likeCount : ""}
                </Button>
                <Button size='small' color='primary' onClick={() => handleDelete(post._id)}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post