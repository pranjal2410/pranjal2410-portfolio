import {Avatar, Grid, makeStyles, Tooltip, Typography, useTheme} from "@material-ui/core";
import {motion} from "framer-motion";
import React from "react";

const useStyles = makeStyles(theme => ({
    container: {
        padding: '1%',
        textAlign: 'center',
    },
    title: {
        margin: '0',
        lineHeight: '1.15',
        fontSize: '4rem',
        textAlign: 'center'
    }
}));

const TechStack = ({techStack, delayPeriod}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid item container direction="row" alignItems="center" xs={12}>
            <Grid item xs={12} sm={6}>
                <h1 className={classes.title}>
                    The tools and Technologies I have worked with
                </h1>
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" spacing={2} xs={12} sm={6}>
                {Object.keys(techStack).map((key, i) => (
                    <React.Fragment key={i}>
                        <Grid item xs={12} sm={6}>
                            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 0.8*i} }}>
                                {key}
                            </motion.h3>
                        </Grid>
                        <Grid item container direction="row" justify="flex-end" spacing={2}>
                            {techStack[key].map(({alt, path, hex, title }, j) => (
                                <Grid item key={`${i}${j}`}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1.2*i/2}}
                                        animate={{ opacity: 1, scale: 1, transition: {delay: 0.05*i+0.2*j} }}
                                        whileHover={{ scale: 1.2 }}
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
