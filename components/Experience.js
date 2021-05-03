import {Grid, Typography, Card, makeStyles, useTheme, Paper} from "@material-ui/core";
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '1.5rem',
        padding: '1.5rem',
        textAlign: 'center',
        textDecoration: 'none',
        justifyContent: 'center',
        border: '1px solid #eaeaea',
        borderRadius: '5%',
        transition: 'color 0.15s ease, border-color 0.15s ease',
        '&:hover, &:active, &:focus': {
            color: theme.palette.type === 'light'?'#0070f3': '#00c0ff',
            borderColor: theme.palette.type === 'light'?'#0070f3': '#00c0ff'
        },
        '& p': {
            margin: 0,
            fontSize: '1.25rem',
            lineHeight: '1.5'
        },
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
    },
}))

const Experience = ({ experience }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid item container direction="row-reverse" alignItems="center" style={{ height: "100%"}}>
            <Grid item xs={12} sm={6}>
                <motion.h1
                    className={classes.title}
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "0%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    }
                    exit={{ opacity: 0, y: "50%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                >
                    Work Experience
                </motion.h1>
            </Grid>
            <Grid item container direction="row" justify="center" alignItems="flex-start" xs={12} sm={6} spacing={1}>
                {experience.map((work, i) => (
                    <Grid item key={i} xs={12} sm={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.2, y: `${-50*Math.pow(-1, i)}%`}}
                            animate={{ opacity: 1, scale: 1, y: "0%", transition: {delay: 0.5*i, duration: 1} }}
                            exit={{ opacity: 0, x: "-50%",
                                transition: {
                                    delay: 0.5*i,
                                    duration: 1.5,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }
                            }}
                            inherit={false}
                        >
                            <a href={work.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                <Card className={classes.card} component={Paper} elevation={5}>
                                    <Image
                                        src={work.image.src}
                                        width={work.image.width}
                                        height={work.image.height}
                                        loading='eager'
                                    />
                                    <Typography variant='h5'>
                                        {work.organization}
                                    </Typography>
                                    <Typography variant='h6'>
                                        {work.role}
                                    </Typography>
                                    <Typography variant='subtitle1' gutterBottom>
                                        {work.startDate} - {work.endDate}
                                    </Typography>
                                    <Typography variant='subtitle2' gutterBottom>
                                        {work.location}
                                    </Typography>
                                </Card>
                            </a>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Experience;