import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function NewsLetter() {
    return (
        <div>
            <div className='flex items-center gap-10'>
                <div className="flex flex-col gap-5 lg:flex-row">
                    <TextField
                        id="filled-basic"
                        label="Votre E-mail"
                        variant="filled"
                        sx={{
                            input: { backgroundColor: '#FFFFFF', color: '#000' },
                            width: 262,
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#BFA75C',
                            textTransform: 'none',
                            color: '#fff',
                            border: 'none',
                            width: 121,
                            '&:hover': {
                                backgroundColor: '#a98f4e',
                                border: 'none',
                            },
                        }}
                    >
                        Envoyer
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;