import {Grid, AppBar, Toolbar, Typography, IconButton, MuiThemeProvider, CssBaseline} from "@material-ui/core";
import {motion} from "framer-motion";
import {Brightness4, Brightness7} from '@material-ui/icons';
import {useContext} from "react";
import {ThemeContext} from "../components/theme";
import simpleIcons from "simple-icons";
import {data, titles} from "../components/initial.json";
import {repos} from "../components/githubData.json";
import Initial from "../components/Initial";

export async function getStaticProps() {
    let iconData = data.map(({ alt, slug, url}, i) => {
        let icon = simpleIcons.get(slug);
        return {
            alt: alt,
            url: url,
            path: icon.path,
            hex: icon.hex,
            title: icon.title
        };
    });

    return {
        props: {
            iconData: iconData,
            titles: titles,
        }
    }
}

const MainApp = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div style={{ flexGrow: 1, padding: '1%'}}>
            <AppBar style={{ boxShadow: 'none'}} color='inherit' position='fixed'>
                <Toolbar>
                    <Typography variant='h6' style={{ flexGrow: 1}}>
                        Portfolio
                    </Typography>
                    <IconButton color='inherit' onClick={toggleTheme} edge="end">
                        {theme.palette.type==='dark'?(<Brightness7/>):(<Brightness4/>)}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Grid container direction="column" alignItems="center">
                <Initial iconData={props.iconData} titles={props.titles}/>
            </Grid>
        </div>
    )
}

export default function Home(props) {
    const {theme} = useContext(ThemeContext)

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <MainApp {...props}/>
        </MuiThemeProvider>
    )
}
