import {ThemeContext} from './ThemeContext'
import {useContext} from 'react'

function Context() {

    const context = useContext(ThemeContext)

    return (
         <p className={context.theme}>
            Price is to low
        </p> 
    )
}

export default Context