import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles'

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    console.log(postData);
    const dispatch = useDispatch()
    const classes = useStyles()
    function handleSubmit() {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Memory</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
            </form>
        </Paper>
    )
}

export default Form