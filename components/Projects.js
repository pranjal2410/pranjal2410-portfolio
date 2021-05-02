import {Grid, Typography, Card} from "@material-ui/core";
import {motion} from "framer-motion";

const Projects = ({ projects }) => {
    return (
        <Grid item container direction="column" alignItems="center" spacing={2}>
            <h1>{projects.map(project => project)}</h1>
        </Grid>
    )
}

export default Projects;