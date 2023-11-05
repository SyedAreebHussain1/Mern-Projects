import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, getPosts, likePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"))
  function deleteSuccessfully(msg) {
    if (msg) {
      dispatch(getPosts());
    }
  }
  const Likes = () => {
    if (post?.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) ? (
        <>   <ThumbUpIcon fontSize="small" />
          {post.likes.length > 2 ? `You and ${post?.likes?.length - 1} other` : `${post?.likes?.length} like${post?.likes?.length > 1 ? 's' : ''}`}</>
      ) : (
        <>   <ThumbUpOutlinedIcon fontSize="small" />&nbsp;{post?.likes?.length} {post?.likes?.length === 1 ? "Like" : "Likes"}
        </>
      )
    }
    return <><ThumbUpOutlinedIcon fontSize="small" />&nbsp;Like</>
  }
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post?.selectedFile}
        title={post?.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post?.name}</Typography>
        <Typography variant="body2">
          {moment(post?.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post?.tags?.map((val) => `#${val} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post?.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post?.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post?._id))}
          disabled={!user?.result}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post?._id, deleteSuccessfully))}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )
        }
      </CardActions>
    </Card>
  );
};

export default Post;
