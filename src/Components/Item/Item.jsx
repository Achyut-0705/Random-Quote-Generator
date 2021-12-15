import React from 'react'
// import { ThemeProvider } from '@mui/styles'
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import theme from '../../Theme';

const useStyles = makeStyles(() => ({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'red',
        [theme.breakpoints.down("sm")]:{
        }
    },
}));

function Item() {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="md">

        </Container>
    )
}

export default Item
