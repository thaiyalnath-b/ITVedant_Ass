import React, {createContext, useState, useContext, Children} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({Children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = (newTheme) => setTheme(newTheme);

    const value = {theme, toggleTheme};

    return(
        <ThemeContext.Provider value={value}>
            {Children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);