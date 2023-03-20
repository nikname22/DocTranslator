import React, { useState, useEffect } from 'react';
import { Grid, Paper, TextField, Button, Typography, Stack, Rating } from '@mui/material';
import Menu from './Menu';
import Hero from '../../src/images/hero_section.png'
import MedicCategory from '../../src/images/medic_category.png'
import StudyCategory from '../../src/images/study_category.png'
import RandonCategory from '../../src/images/randon_category.png'
import StarIcon from '@mui/icons-material/Star';
import api from '../../src/api'

type Documents = {
    id: string,
    createdAt: string,
    description: String,
    level: number,
    title: string,
    category: string,
}

export default function Home() {
    const [searchTitle, setSearchTitle] = useState<string>('')
    const [searchCategory, setSearchCategory] = useState<string>('')
    const [searchLevel, setSearchLevel] = useState<string>('')   
    const [response, setResponse] = useState<Documents[]>([])     
    
    useEffect(() => {
        api.get("/documents").then((res) => {
          setResponse(res.data);         
        });
      }, []);    

    const handleImage = (category: string) => {
        return category === 'Médica' ? MedicCategory :
        category === 'Educação' ? StudyCategory : RandonCategory
    }

    const handleColor = (category: string) => {
        return category === 'Médica' ? '#4169E1' :
        category === 'Educação' ? '#8D021F' : '#E1C340'       
    }

    return (
        <>
            <Menu />
            <Grid container sx={{ padding: { xs: '20px', sm: '80px' } }} spacing={7}>
                <Grid item xs={12}>
                    <img src={Hero} alt="" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-around'} alignItems={'center'} spacing={{ xs: 3, sm: 1 }}>
                        <TextField
                            fullWidth
                            value={searchTitle}
                            sx={{
                                "& .MuiFilledInput-input": { border: '2px solid #E1C340', borderRadius: 1, backgroundColor: 'white' },
                                width: { xs: '90%', sm: '25%' }
                            }}
                            InputProps={{ disableUnderline: true, color: 'primary' }}
                            label="Digite seu email"
                            variant="filled"
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            value={searchCategory}
                            sx={{
                                "& .MuiFilledInput-input": { border: '2px solid #E1C340', borderRadius: 1, backgroundColor: 'white' },
                                width: { xs: '90%', sm: '25%' }
                            }}
                            InputProps={{ disableUnderline: true, color: 'primary' }}
                            label="Digite seu email"
                            variant="filled"
                            onChange={(e) => setSearchCategory(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            value={searchLevel}
                            sx={{
                                "& .MuiFilledInput-input": { border: '2px solid #E1C340', borderRadius: 1, backgroundColor: 'white' },
                                width: { xs: '90%', sm: '25%' }
                            }}
                            InputProps={{ disableUnderline: true, color: 'primary' }}
                            label="Digite seu email"
                            variant="filled"
                            onChange={(e) => setSearchLevel(e.target.value)}
                        />
                    </Stack>
                </Grid>
                {response.map((document:any) => (
                    <Grid item xs={12} sm={6}>
                        <Paper sx={{ borderRadius: '14px', maxHeight: '100%' }}>
                            <Stack direction={'row'}>
                                <Stack width={'40%'}>
                                    <img src={handleImage(document.category)} alt="" style={{ width: '100%', minHeight: '100%' }} />
                                </Stack>
                                <Stack padding={'20px'} width={'70%'} spacing={1}>
                                    <Stack direction={'row'} justifyContent={'space-between'} >
                                        <Typography sx={{ opacity: '0.6' }}>{document.category}</Typography>
                                        <Typography sx={{ opacity: '0.6' }}>3 dias atrás</Typography>
                                    </Stack>
                                    <Stack direction={'column'}>
                                        <Typography variant='h5' fontWeight={'bold'} sx={{ width: '100%' }}>{document.title}</Typography>
                                        <Typography>{document.description}</Typography>
                                    </Stack>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} spacing={1}>
                                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                            <Typography sx={{ opacity: '0.6' }}>Nível</Typography>
                                            <Rating
                                                name="text-feedback"
                                                value={document.level}
                                                readOnly
                                                max={3}
                                                precision={0.5}
                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                        </Stack>
                                        <Button variant='contained' sx={{ backgroundColor: handleColor(document.category), width: { xs: '60%', sm: '30%' } }}>Saiba mais</Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}