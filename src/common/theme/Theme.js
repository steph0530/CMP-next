import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#256153',
            dark: '#161A26',
        },
        secondary: {
            light: '#E3FFC6',
            main: '#2759EF',
        },
        custom: {
            light: '#FFFFFF',
            dark: '#DFE3ED',
        }
    },
    typography: {
        fontFamily: ["Merriweather", "sans-serif"].join(","),
        fontSize: 14,
    },
});