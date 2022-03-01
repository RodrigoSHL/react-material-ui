import { createTheme } from "@material-ui/core/styles";

const atmBlue = "#0B72B9"
const atmOrange = "#FFBA60"

export default createTheme({
    palette: {
        common: {
            blue: `${atmBlue}`,
            orange: `${atmOrange}`
        },
        primary: {
            main: `${atmBlue}`
        },
        secondary: {
            main: `${atmOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: "700",
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        }
    }
})