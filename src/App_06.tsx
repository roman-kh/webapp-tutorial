import * as React from 'react';
import { useContext } from 'react';
import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';


import { Button, Card, CardContent, CardHeader, CardMedia, Checkbox, CssBaseline, FormControlLabel, Grid, Rating, Stack, TextField, Typography } from '@mui/material';
import { ThumbUp } from '@mui/icons-material';
import { SxProps } from '@mui/system';


// -------------------------------
//
//           Observable
//
// -------------------------------
class CardData {
    name = "My name";
    checked = false;

    constructor() {
        makeObservable(this, {
            name: observable,
            checked: observable,
            setName: action,
            setChecked: action,
        });
    }

    setName(name: string) : void {
        this.name = name;
    }

    setChecked(value: boolean) : void {
        this.checked = value;
    }
}

// -------------------------------
//
//            Context
//
// -------------------------------
class AppContextType {
    card : CardData;

    constructor() {
        this.card = new CardData();
    }
}

export const AppContext = React.createContext({} as AppContextType);


// -------------------------------
//
//              App
//
// -------------------------------

export function App() : JSX.Element {
    const globalState = new AppContextType();

    return (
        <AppContext.Provider value={globalState} >
            <CssBaseline />
            <MainView />
        </AppContext.Provider>
    )
}


function MainView() : JSX.Element {
    return (<>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>Hello World!</Typography>
        <Grid container spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={6} sm={4} lg={3} >
                <LeftCard />
            </Grid>
            <Grid item xs={4} sm={4} lg={3} >
                <RightCard sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} />
            </Grid>
        </Grid>
    </>)
}


const RightCard = observer((props: { sx: SxProps }) => {
    const context = useContext(AppContext);

    return (
    <Card sx={{ p: 2 , ...props.sx }} >
        <CardHeader title={"Right Panel"} />
        <CardContent>
            <Typography>{'Name: ' + context.card.name}</Typography>
            <Typography>{'Checkbox is ' + (context.card.checked? 'checked' : 'unchecked')}</Typography>
        </CardContent>
    </Card>
    )
})



const LeftCard = observer(() => {
    const context = useContext(AppContext);

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => context.card.setName(event.target.value);

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => context.card.setChecked(event.target.checked);

    return (
    <Card sx={{ p: 2 }}>
        <CardContent>
        <Stack direction={'column'} >
            <CardMedia component="img" image="https://analysiscenter.github.io/images/qb.jpg" sx={{ m: 'auto', width: "75%" }} />

            <TextField value={context.card.name} label="Enter your name" onChange={handleName} />

            <FormControlLabel checked={context.card.checked} control={<Checkbox onChange={handleChecked} />} label="Click me if you can" />

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
})
