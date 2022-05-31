import * as React from 'react';
import { useState } from 'react';


import { Button, Card, CardContent, CardMedia, Checkbox, CssBaseline, FormControlLabel, Grid, Rating, Stack, TextField, Typography } from '@mui/material';
import { ThumbUp } from '@mui/icons-material';


export function App() : JSX.Element {
    const [name, setName] = useState("My Name");
    const [checked, setChecked] = useState(false);

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);

    return (<>
    <CssBaseline />
    <Typography variant="h2" sx={{ textAlign: 'center' }}>Hello World!</Typography>
    <Grid container spacing={2}>
        <Grid item xs={2} />
        <Grid item xs={6} sm={4} lg={3} >
            <Card sx={{ p: 2 }}>
                <CardContent>
                <Stack direction={'column'} >
                    <CardMedia component="img" image="https://analysiscenter.github.io/images/qb.jpg" sx={{ m: 'auto', width: "75%" }} />

                    <TextField value={name} label="Enter your name" onChange={handleName} />

                    <FormControlLabel checked={checked} control={<Checkbox onChange={handleChecked} />} label="Click me if you can" />

                    <Stack direction={'row'} >
                        <Typography component="legend">Rate</Typography>
                        <Rating defaultValue={3} />
                    </Stack>

                    <Button variant="contained" onClick={() => alert('Attention')} style={{ marginTop: 10, float: "right" }}>
                        <ThumbUp />
                        <Typography sx={{ ml: 1, mt: .7 }}>OK</Typography>
                    </Button>
                </Stack>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    </>);
}
