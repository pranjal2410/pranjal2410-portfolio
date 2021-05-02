import {Paper, CardActionArea, makeStyles, Grid, CardHeader, CardContent, Typography} from "@material-ui/core";
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '1rem',
        flexBasis: '45%',
        padding: '1.5rem',
        textAlign: 'left',
        textDecoration: 'none',
        border: '1px solid #eaeaea',
        borderRadius: '10px',
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
    }
}))

const Projects = ({ projects }) => {
    const classes = useStyles();

    return (
        <Grid item container direction="row" justify="center" style={{ maxWidth: 650}}>
            <Grid item xs={12}>
                <Typography variant='h1' className={classes.title}>
                    Projects
                </Typography>
            </Grid>
            {projects.map((project, i) => {
                return (
                    <Grid item key={i} xs={12} sm={6}>
                        <a href={project.project_link} style={{ textDecoration: "none" }}>
                            <Paper className={classes.card} elevation={5}>
                                <Typography variant='h6' component='h3' style={{ margin: '0 0 1rem 0', fontSize: '2.5rem'}}>
                                    {project.name}
                                </Typography>
                                <Typography variant='body1' component='p'>
                                    {project.description}
                                </Typography>
                            </Paper>
                        </a>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Projects;