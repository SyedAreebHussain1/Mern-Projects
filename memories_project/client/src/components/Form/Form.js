import React, { useState, useRef } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/posts';
import useStyles from './styles'

const Form = () => {
    const dispatch = useDispatch()
    const form = useRef(null)
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    let [msg, setMsg] = useState('')
    const classes = useStyles()
    const handleSubmit = (event) => {
        event.preventDefault()
        if (postData.creator && postData.title && postData.message && postData.tags && postData.selectedFile) {
            dispatch(createPost(postData, onSuccess))
            form.current.reset();
        } else {
            console.log('All field are requried')
            setMsg('All field are requried')
        }
    }
    function onSuccess(msg) {
        // console.log('msg',msg);
        setPostData({
            creator: '', title: '', message: '', tags: '', selectedFile: ''
        })
    }
    const handleClear = (ev) => {
        ev.preventDefault();
        form.current.reset();
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' ref={form} noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Memory</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    <Typography variant='h6'>{msg}</Typography>
                    <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                    <Button variant='contained' color='secondary' size='small' onClick={handleClear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    )
}

export default Form