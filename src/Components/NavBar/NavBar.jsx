import * as React from 'react';
// import Box from '@mui/material/Box';
import AutoRenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";
// import { makeStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(theme => ({
    nav: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    }
}));

export default function ButtonAppBar() {
    const handleClick = () => {
        console.log('refresh');
    }

    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.nav}>
                {/* hello */}
                 <Button 
                    variant="outlined" 
                    size="small"
                    endIcon={<AutoRenewIcon />} 
                    onClick={handleClick}>
                    Refresh
                </Button>
            </Toolbar>
        </AppBar>
    );
}
