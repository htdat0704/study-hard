import {useState, createContext} from 'react'

const ThemeContext = createContext()

function ThemeProvider({children}){
    const [theme, setTheme] = useState('dark')

    const handleTheme = () =>{
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    const value ={
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider} 