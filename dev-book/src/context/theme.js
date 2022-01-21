import { createContext, useState } from 'react';

export const ThemeContext = createContext([]);

export const ThemeProvider = (props) => {
    const [color, setColor] = useState(true);

    const dark = {
        primary: '#6C80EA',
        secondary: '#A7A5EC',
        bgMain: '#000000',
        bgPaper: '#404043',
        textColor: '#FFFFFF',
        bgUsers: '#27272E',
        bgCard: '#5D5D64'
    };

    const light = {
        primary: '#6C80EA',
        secondary: '#A7A5EC',
        bgMain: '#ffffff',
        bgPaper: '#EEEEEE',
        textColor: '#212121',
        bgUsers: '#cccccc',
        bgCard: '#212121'
    };
    const theme = color ? dark : light;

    function handleTheme() {
        setColor(!color);
    }

    return(
        <ThemeContext.Provider value={[theme, handleTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};
