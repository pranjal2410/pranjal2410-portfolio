import {Grid, AppBar, Toolbar, Typography, IconButton, MuiThemeProvider, CssBaseline} from "@material-ui/core";
import {motion} from "framer-motion";
import {Brightness4, Brightness7} from '@material-ui/icons';
import {useContext} from "react";
import {ThemeContext} from "../components/theme";
import Initial from "../components/Initial";

const MainApp = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div style={{ flexGrow: 1, padding: '1%'}}>
            <AppBar style={{ boxShadow: 'none'}} color='transparent' position='fixed'>
                <Toolbar>
                    <IconButton color='inherit' onClick={toggleTheme}>
                        {theme.palette.type==='dark'?(<Brightness7/>):(<Brightness4/>)}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid container direction="column" alignItems="center">
                <Initial/>
            </Grid>
        </div>
    )
}

export default function Home() {
    const {theme} = useContext(ThemeContext)

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <MainApp/>
        </MuiThemeProvider>
    )
}
