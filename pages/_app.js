import {ThemeContextProvider} from "../components/theme";
import {AnimateSharedLayout} from "framer-motion";
import React, {useEffect} from "react";
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
            <AnimateSharedLayout>
                <ThemeContextProvider>
                    <Component {...pageProps} />
                </ThemeContextProvider>
            </AnimateSharedLayout>
        </React.Fragment>
    )
}

export default MyApp;
