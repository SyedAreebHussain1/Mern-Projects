import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const form = useRef(null);
  const navigate = useNavigate();
  let [msg, setMsg] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const statePosts = useSelector((state) =>
    currentId ? state?.posts?.posts?.find((val) => val?._id === currentId) : ""
  );
  const classes = useStyles();
  useEffect(() => {
    if (statePosts) {
      setPostData(statePosts);
    }
  }, [statePosts, currentId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    } else {
      if (postData?.title && postData?.message && postData?.tags) {
        dispatch(
          createPost(
            { ...postData, name: user?.result?.name },
            onSuccess,
            navigate
          )
        );
        form.current.reset();
      } else {
        setMsg("All field are requried");
      }
    }
  };
  function onSuccess(msg) {
    clear();
  }
  function clear() {
    setCurrentId(null);
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
    form.current.reset();
  }

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        ref={form}
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing ${postData?.title}` : "Creating a Memory"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <Typography variant="h6">{msg}</Typography>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
