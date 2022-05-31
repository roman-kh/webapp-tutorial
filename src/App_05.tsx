import * as React from 'react';
import { useState } from 'react';


import { Button, Card, CardContent, CardHeader, CardMedia, Checkbox, CssBaseline, FormControlLabel, Grid, Rating, Stack, TextField, Typography } from '@mui/material';
import { ThumbUp } from '@mui/icons-material';
import { SxProps } from '@mui/system';


export function App() : JSX.Element {
    return (<>
        <CssBaseline />
        <MainView />
    </>)
}


function MainView() : JSX.Element {
    const [name, setName] = useState("My Name");
    const [checked, setChecked] = useState(false);

    return (<>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>Hello World!</Typography>
        <Grid container spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={6} sm={4} lg={3} >
                <LeftCard name={name} onName={setName} checked={checked} onCheck={setChecked} />
            </Grid>
            <Grid item xs={4} sm={4} lg={3} >
                <RightCard name={name} checked={checked} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} />
            </Grid>
        </Grid>
    </>)
}


function RightCard(props: { name: string, checked: boolean, sx: SxProps }) : JSX.Element {
    return (
    <Card sx={{ p: 2 , ...props.sx }} >
        <CardHeader title={"Right Panel"} />
        <CardContent>
            <Typography>{'Name: ' + props.name}</Typography>
            <Typography>{'Checkbox is ' + (props.checked? 'checked' : 'unchecked')}</Typography>
        </CardContent>
    </Card>
    )
}


type TextCallback = (value: string) => void;
type CheckCallback = (value: boolean) => void;


function LeftCard(props: { name: string, onName: TextCallback, checked: boolean, onCheck: CheckCallback }) : JSX.Element {

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => props.onName(event.target.value);

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => props.onCheck(event.target.checked);

    return (
    <Card sx={{ p: 2 }}>
        <CardContent>
        <Stack direction={'column'} >
            <CardMedia component="img" image="https://analysiscenter.github.io/images/qb.jpg" sx={{ m: 'auto', width: "75%" }} />

            <TextField value={props.name} label="Enter your name" onChange={handleName} />

            <FormControlLabel checked={props.checked} control={<Checkbox onChange={handleChecked} />} label="Click me if you can" />

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
    );
}
