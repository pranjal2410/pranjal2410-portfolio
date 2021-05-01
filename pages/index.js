import {Grid, AppBar, Toolbar, Typography, IconButton, MuiThemeProvider, CssBaseline} from "@material-ui/core";
import {motion} from "framer-motion";
import {Brightness4, Brightness7} from '@material-ui/icons';
import {useContext} from "react";
import {ThemeContext} from "../components/theme";
import simpleIcons from "simple-icons";
import {data, titles} from "../components/initial.json";
import {techStack} from "../components/techStack.json";
import Initial from "../components/Initial";
import TechStack from "../components/TechStack";

const getIconData = (slug) => {
    let icon = simpleIcons.get(slug);
    return {
        path: icon.path,
        hex: icon.hex,
        title: icon.title
    }
}

export async function getStaticProps() {
    let iconData = data.map(({ alt, slug, url}, i) => {
        return {
            alt: alt,
            url: url,
            ...getIconData(slug)
        };
    });

    let languages = techStack.languages.map(({alt, slug}, i) => {
        return {
            alt: alt,
            ...getIconData(slug)
        }
    })

    return {
        props: {
            iconData: iconData,
            titles: titles,
            techStack: {
                languages: languages
            }
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
                <TechStack techStack={props.techStack} delayPeriod={props.iconData.length}/>
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
