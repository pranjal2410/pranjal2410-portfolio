import {Avatar, Grid, makeStyles, Tooltip, Typography, useTheme, useMediaQuery} from "@material-ui/core";
import {motion} from "framer-motion";
import React from "react";

const useStyles = makeStyles(theme => ({
    container: {
        padding: '1%',
        textAlign: 'center',
    },
    title: {
        margin: '2%',
        lineHeight: '1.15',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '6.5rem'
        },
    }
}));

const TechStack = ({techStack, delayPeriod}) => {
    const classes = useStyles();
    const theme = useTheme();
    const breakpoint = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Grid item container direction="row" alignItems="center" xs={12}>
            <Grid item xs={12} sm={6}>
                <motion.h1
                    className={classes.title}
                    initial={{ opacity: 0, x: "50%" }}
                    animate={{ opacity: 1, x: "0%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    }
                    exit={{ opacity: 0, x: "50%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                >
                    The tools and Technologies I have worked with
                </motion.h1>
            </Grid>
            <Grid item container direction="column" alignItems="center" spacing={1} xs={12} sm={6}>
                {Object.keys(techStack).map((key, i) => (
                    <React.Fragment key={key}>
                        <Grid item xs={12}>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: {delay: 0.3*i} }}
                                exit={{ opacity: 0, x: "50%",
                                    transition: {
                                        duration: 1.5,
                                        ease: [0.43, 0.13, 0.23, 0.96]
                                    }
                                }}
                            >
                                {key}
                            </motion.h3>
                        </Grid>
                        <Grid item container direction="row" justify="center" spacing={2} xs={12}>
                            {techStack[key].map(({alt, path, hex, title }, j) => (
                                <Grid item key={title}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1.2*i/2}}
                                        animate={{ opacity: 1, scale: 1, transition: {delay: 0.05*i+0.2*j} }}
                                        whileHover={{ scale: 1.2 }}
                                        exit={{ opacity: 0, x: "50%",
                                            transition: {
                                                duration: 1.5,
                                                ease: [0.43, 0.13, 0.23, 0.96]
                                            }
                                        }}
                                        inherit={false}
                                    >
                                        <Tooltip title={alt}>
                                            <Avatar variant='rounded' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title>{alt}</title>
                                                    <path d={path} fill="white"/>
                                                </svg>
                                            </Avatar>
                                        </Tooltip>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Grid>
    )
}

export default TechStack;
