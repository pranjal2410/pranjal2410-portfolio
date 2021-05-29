import {Grid, AppBar, Toolbar, Typography, IconButton, MuiThemeProvider, CssBaseline, Hidden, Tabs, Tab, useTheme, useMediaQuery, useScrollTrigger} from "@material-ui/core";
import {AnimatePresence, motion} from "framer-motion";
import {ToggleButtonGroup, ToggleButton} from "@material-ui/lab";
import {Brightness4, Brightness7} from '@material-ui/icons';
import {Component, useContext, useState} from "react";
import {ThemeContext} from "../components/theme";
import simpleIcons from "simple-icons";
import {data, titles} from "../initial.json";
import {techStack} from "../techStack.json";
import Initial from "../components/Initial";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import {projects} from "../githubData.json";
import {experience} from "../experienceData.json";
import Experience from "../components/Experience";

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

    projects.map(project => {
        let projectTechStack = {};
        Object.keys(project.techStack).map(key => {
            projectTechStack[key] = [];
            project.techStack[key].map(tool => {
                projectTechStack[key].push({alt: getIconData(tool).title, ...getIconData(tool)})
            })
        })
        project.techStack = projectTechStack;
    })

    return {
        props: {
            iconData: iconData,
            titles: titles,
            techStack: obj,
            delayPeriod: iconData.length,
            experience: experience,
            projects
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
    const mdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const smDown = useMediaQuery(useTheme().breakpoints.down('sm'));
    const trigger = useScrollTrigger({disableHysteresis: true, threshold: 25})

    let tabs = [
        {Component: Initial, name: 'Intro'},
        {Component: TechStack, name: 'Skills'},
        {Component: Projects, name: 'Projects'},
        {Component: Experience, name: 'Experience'},
    ]

    const handleTabChange = (event, newTab) => {
        setTabIndex(newTab);
    }

    return (
        <motion.div style={{ flexGrow: 1, padding: '1%', overflow: "hidden" }}>
            <AppBar style={{ boxShadow: 'none'}} color={mdDown || trigger?'inherit':'transparent'} position='fixed'>
                <Toolbar>
                    <Typography variant='h6' style={{ flexGrow: mdDown?1:false}}>
                        Portfolio
                    </Typography>
                    <Hidden mdDown>
                        <Tabs
                            value={tabIndex}
                            onChange={handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            style={{ flexGrow: 3}}
                            centered
                        >
                            {tabs.map(({name}, i) => (
                                <Tab label={name} key={i}/>
                            ))}
                        </Tabs>
                    </Hidden>
                    <IconButton color='inherit' onClick={toggleTheme} edge="end">
                        {theme.palette.type==='dark'?(<Brightness7/>):(<Brightness4/>)}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Hidden lgUp>
                    <Grid item xs={12}>
                        <ToggleButtonGroup
                            size={smDown?"small":mdDown?"medium":"large"}
                            color="primary"
                            onChange={handleTabChange}
                            value={tabIndex}
                            aria-label="Navigation Buttons"
                            exclusive
                            style={{ marginTop: '2%'}}
                            variant='contained'
                        >
                            {tabs.map(({name}, i) => (
                                <ToggleButton key={i} value={i} selected={i===tabIndex}>{name}</ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </Grid>
                </Hidden>
                <AnimatePresence exitBeforeEnter>
                    {tabs.map(({Component}, i) => tabIndex===i && (
                            <Component {...props} key={i} />
                        )
                    )}
                </AnimatePresence>
            </Grid>
        </motion.div>
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
