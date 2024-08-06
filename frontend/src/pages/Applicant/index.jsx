import { useState } from 'react';

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Avatar, Box, Button, Container, CssBaseline, Typography } from '@mui/material';

// Components
import { SuccessfulSignUp } from 'components/SignUp/SuccessfulSignUp';

// Services
import { register } from 'services/ApplicantService';


const defaultTheme = createTheme();


function Applicant(props) {
    const personalId = sessionStorage.getItem('username');
    const [data, setData] = useState({
        phone: '',
        address: '',
        program: '',
        mathScore: '',
        highSchool: '',
        personalId: '',
        globalScore: '',
        socialScore: '',
        englishScore: '',
        readingScore: '',
        scienceScore: '',
        inscriptionType: '',
        userId: sessionStorage.getItem('userId')
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);

        if (data.personalId !== personalId) {
            console.log("El número de identificación no coincide con el usuario actual.");
            return;
        }

        register(data)
            .then((response) => {
                if (response.status === 201) {
                    console.log('Nice');
                }
            })
            .catch((error) => { console.error(error.message) });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component='main' maxWidth='xs' style={{ paddingBottom: '5rem' }} >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <SuccessfulSignUp />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Applicant;
export { Applicant };