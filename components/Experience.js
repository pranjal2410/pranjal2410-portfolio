import {Grid, Typography, Card, makeStyles, useTheme, useMediaQuery} from "@material-ui/core";
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '1rem',
        flexBasis: '45%',
        padding: '1.5rem',
        textAlign: 'left',
        textDecoration: 'none',
        alignContent: 'center',
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
}))

const Experience = ({ experience }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid item container direction="row-reverse" alignItems="center">
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
                    My Experience
                </motion.h1>
            </Grid>
            <Grid item container direction="column" alignItems="center" xs={12} sm={6}>
                {experience.map((work, i) => (
                    <Grid item key={i}>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.2*i/2}}
                            animate={{ opacity: 1, scale: 1, transition: {delay: 0.5*i} }}
                            exit={{ opacity: 0, x: "50%",
                                transition: {
                                    duration: 1.5,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }
                            }}
                            inherit={false}
                        >
                            <Card className={classes.card}>
                                <Image
                                    src={work.image.src}
                                    height={work.image.height}
                                    width={work.image.width}
                                    loading='eager'
                                />
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Experience;