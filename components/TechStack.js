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
        color: theme.palette.type==='dark'?'#00c0ff':'#0070f3'
    }
}));

const TechStack = ({techStack}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid item container direction="column" alignItems="flex-start">
            <Grid item xs={12}>
                <h1 className={classes.title}>
                    Tech-Stack
                </h1>
            </Grid>
            <Grid item xs={6} sm={3}>
                <h3 className={classes.title}>
                    Languages known
                </h3>
            </Grid>
            <Grid item container direction="row" justify="flex-start" spacing={2}>
                {techStack.languages.map(({alt, path, hex, title }, i) => (
                    <Grid item key={i}>
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1, rotate: 360, transition: {delay: 0.8*(i+1)} }}
                            whileHover={{ scale: 1.3 }}
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
        </Grid>
    )
}

export default TechStack;
