import {Grid, Typography} from "@material-ui/core";
import {motion} from "framer-motion";
import simpleIcons from "simple-icons";

const Initial = () => {
    return (
        <Grid item container direction="column" alignItems="center">
            <Grid item xs={12}>
                <motion.div
                    initial={{ y: -250 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 2, type: 'spring', stiffness: 250 }}
                >
                    <Typography component='h1' variant='h2' color='textPrimary'>
                        Pranjal Newalkar
                    </Typography>
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default Initial;