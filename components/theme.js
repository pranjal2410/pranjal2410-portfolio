import {createContext, useState} from 'react';
import {createMuiTheme} from "@material-ui/core";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const dark = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#00c0ff'
            }
        }
    });

    const light = createMuiTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#0070f3'
            }
        }
    });

    const [theme, setTheme] = useState(dark);

    const toggleTheme = () => {
        setTheme(theme.palette.type === 'light'? dark : light);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider};