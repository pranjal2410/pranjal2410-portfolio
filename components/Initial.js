import {Grid, Typography, makeStyles, Avatar, Zoom, Tooltip, useTheme} from "@material-ui/core";
import {motion, AnimatePresence} from "framer-motion";
import React, {useEffect, useState} from "react";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    container: {
        padding: '2%',
        textAlign: 'center',
    },
    title: {
        margin: '0',
        lineHeight: '1.15',
        fontSize: '4.5rem'
    }
}));

const Initial = ({ iconData, titles }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => setIndex((index+1)%titles.length), 6000);
        return () => clearInterval(interval);
    })

    return (
        <Grid item container direction="column" justify="center" alignItems="center" className={classes.container} spacing={3}>
            <Grid item xs={12}>
                <motion.div
                    initial={{ y: -250, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ x: "50%", opacity: 0,
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                    transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 250 }}
                >
                    <h1 className={classes.title}>
                        Hello! This is Pranjal Newalkar
                    </h1>
                </motion.div>
            </Grid>
            <Grid item xs={12}>
                <AnimatePresence exitBeforeEnter={true}>
                    {titles.map((title, i) => index===i && (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: "-50%" }}
                            animate={{ opacity: 1, x: "0%", transition: {delay: 0.7, duration: 1.5,
                                    ease: [0.43, 0.13, 0.23, 0.96]} }}
                            exit={{ opacity: 0, x: "50%",
                                transition: {
                                    duration: 1.5,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }
                            }}
                            inherit={false}
                        >
                            <Typography variant='h5'>{title}</Typography>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Grid>
            <Grid item container direction="row" justify="center" spacing={2} xs={12}>
                {iconData.map(({alt, url, path, hex, title }, i) => {
                    return (
                        <Grid item key={i}>
                            <motion.div
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1, transition: {delay: 0.5+0.3*(i+1) }}}
                                exit={{ opacity: 0, x: "50%",
                                    transition: {
                                        duration: 1.5,
                                        ease: [0.43, 0.13, 0.23, 0.96]
                                    }
                                }}
                                whileHover={{ scale: 1.3 }}
                            >
                                <a href={url} target='_blank' rel='noopener noreferrer'>
                                    <Tooltip title={alt}>
                                        <Avatar variant='rounded' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <title>{alt}</title>
                                                <path d={path} fill="white"/>
                                            </svg>
                                        </Avatar>
                                    </Tooltip>
                                </a>
                            </motion.div>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid item xs={12}>
                <motion.div
                    initial={{ opacity: 0, x: "50%",
                        transition: {
                        duration: 1.5,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }
                    }}
                    animate={{ opacity: 1, x: "0%", transition: {delay: 0.3*(iconData.length+1), duration: 1}}}
                    exit={{ opacity: 0, x: "50%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                    inherit={false}
                >
                    <Avatar variant='circle' style={{ width: theme.spacing(35), height: theme.spacing(40)}}>
                        <Image src='/me.jpg' width={300} height={400} loading='eager'/>
                    </Avatar>
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default Initial;