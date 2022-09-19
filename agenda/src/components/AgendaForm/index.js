import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const AgendaForm = () => {
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <Box component="form" sx={{ mt: 1 }}>

                <TextField
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome"
                name="Nome"
                autoComplete="Tarefa"
                autoFocus
                />

                <TextField
                margin="normal"
                required
                fullWidth
                id="data"
                label="Data"
                name="Data"
                autoComplete="16/12/2000"
                autoFocus
                />

                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Adicionar
                </Button>

            </Box>
        </Container>
    )
}

export default AgendaForm