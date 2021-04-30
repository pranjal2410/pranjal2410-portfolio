import {ThemeContext, ThemeContextProvider} from "../components/theme";
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import React, {useContext, useEffect} from "react";
import Head from "next/head";

function MyApp({Component, pageProps}){

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Pranjal Newalkar</title>
            </Head>
            <ThemeContextProvider>
                <Component {...pageProps} />
            </ThemeContextProvider>
        </React.Fragment>
    )
}

export default MyApp;
