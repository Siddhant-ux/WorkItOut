import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

import Logo from '../assets/images/Logo.png'

const Footer = () => {
    return (
        <Box mt='80px' bgcolor='#fff3f4'>
            <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
                <Stack direction='row' alignItems='center' gap='10px'>
                <Typography color='#FF2625' fontSize='2rem'>Stay Strong</Typography>
                <img src={Logo} alt='logo' width='48px' height='48px'/>
                <Typography color='#FF2625' fontSize='2rem'>WorkItOut</Typography>
                </Stack>
                <Typography variant='h5' pb='40px' mt='20px'>
                    Made By Siddhant Khanna
                </Typography>
            </Stack>
        </Box>
    );
}

export default Footer;