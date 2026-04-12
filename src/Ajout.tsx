import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import UploadMedia from './UploadeMedia';
import { ScrollFadeIn } from './ScrollFadeIn';
import Button from "@mui/material/Button";

function Ajout() {

  const currencies = [
    {
      value: 'USD',
      label: 'Ngaliema',
    },
    {
      value: 'EUR',
      label: 'Limete',
    },
    {
      value: 'BTC',
      label: 'Kitambo',
    },
    {
      value: 'JPY',
      label: 'Masina',
    },
  ];


  return (
    <div>
      <ScrollFadeIn>
        <h2 className='text-3xl text-center my-15'>Ajout d'informations</h2>
      </ScrollFadeIn>
      <div className='bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] mx-4 py-4 lg:mx-20 lg:py-20'>
        <div className='px-5 flex lg:gap-30 flex-wrap items-center justify-center gap-5'>
          <div className='flex flex-col gap-3 lg:flex lg:flex-row lg:h-[250px] lg:w-[600px] lg:flex-wrap'>
            <ScrollFadeIn>
              <TextField
                id="outlined-multiline-flexible"
                label="Noms"
                multiline
                maxRows={4}
                sx={{

                  width: 250,
                }}
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <TextField
                id="outlined-select-currency"
                select
                label="Commune"
                sx={{

                  width: 250,
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <TextField
                id="outlined-multiline-flexible"
                label="Quartier"
                multiline
                maxRows={4}
                sx={{

                  width: 250,
                }}
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <TextField
                id="outlined-multiline-flexible"
                label="Avenue"
                multiline
                maxRows={4}
                sx={{

                  width: 250,
                }}
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <TextField
                id="outlined-multiline-flexible"
                label="Numéro"
                multiline
                maxRows={4}
                sx={{

                  width: 250,
                }}
              />
            </ScrollFadeIn>
          </div>
          <div>
            <ScrollFadeIn>
              <UploadMedia />
            </ScrollFadeIn>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-5'>
        <Button
          variant="contained"
          component="label"
          sx={{
            bgcolor: "#008B8B",
            textTransform: "capitalize",
            transition: "transform 0.2s",
            fontSize: "20px",
            width: 250,
            "&:hover": {
              bgcolor: "#0f7880",
              transform: "scale(1.05)"
            }
          }}
        >
          enregistrer
        </Button>
      </div>
    </div>
  )
}

export default Ajout;