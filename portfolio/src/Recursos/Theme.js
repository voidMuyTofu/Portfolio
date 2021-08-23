import { createTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createTheme({
    typography:{
        fontFamily: 'Prompt',
        fontWeight: 400,
        allVariants:{
            color:"#FFFEEB"
        }
        
    },
    palette:{
        background: {
            default: '#2A2F34'
        }
    }

    //'Playfair' 'Montserrat' 'Roboto Mono' 'Playfair Display'
})
theme.typography.h4 = {
    fontSize: '3vh',
    fontWeight: 400,
}
theme = responsiveFontSizes(theme);

export default theme;