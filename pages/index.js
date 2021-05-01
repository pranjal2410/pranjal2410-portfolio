import {Grid, AppBar, Toolbar, Typography, IconButton, MuiThemeProvider, CssBaseline} from "@material-ui/core";
import {AnimatePresence} from "framer-motion";
import {Brightness4, Brightness7} from '@material-ui/icons';
import {Component, useContext, useState} from "react";
import {ThemeContext} from "../components/theme";
import simpleIcons from "simple-icons";
import {data, titles} from "../initial.json";
import {techStack} from "../techStack.json";
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

    let obj = {};
    Object.keys(techStack).map((key, i) => {
        obj[key] = techStack[key].map(({alt, slug}, i) => {
            return {
                alt: alt,
                ...getIconData(slug)
            }
        })
    })

    return {
        props: {
            iconData: iconData,
            titles: titles,
            techStack: obj,
            delayPeriod: iconData.length,
        }
    }
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const tabVariants = {
    initial: {
        x: "50%",
        opacity: 0,
    },
    enter: {
        x: "0%",
        opacity: 1,
        transition
    },
    exit: {
        x: "50%",
        opacity: 0,
        transition: { duration: 1.5, ...transition}
    }
}

const MainApp = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [tabIndex, setTabIndex] = useState(0);

    let tabs = [
        Initial,
        TechStack
    ]

    const handleClick = () => {
        setTabIndex((tabIndex+1)%tabs.length);
    }

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
                <AnimatePresence exitBeforeEnter>
                    {tabs.map((Component, i) => tabIndex===i && (
                            <TechStack {...props} />
                        )
                    )}
                </AnimatePresence>
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
