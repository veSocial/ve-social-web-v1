import React from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from '@material-ui/core';

// loading icon to display as the DOM loads
const LoadingPage = () => {
    
    const theme = useTheme();

    return (
        <div style={{height: '100vh', width: '100vw', margin: 'auto', lineHeight: '100vh'}}>
            <ReactLoading type='bars' color={theme.palette.secondary.main}/>
        </div>
    );
}

export default LoadingPage;