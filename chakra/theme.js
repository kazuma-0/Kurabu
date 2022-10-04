import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: props => ({
        body: {
            color: mode('#f4f1d0', '#f4f1d0')(props),
            bg: mode('#101014', '#101014')(props),
        },
    }),
};

const components = {
    Drawer: {
        // setup light/dark mode component defaults
        baseStyle: props => ({
            dialog: {
                bg: mode('white', '#141214')(props),
            },
        }),
    },
    Alert: {
        variants:{
            solid:{
                bg:"black"
            },
            leftAccent:{
                bg:"black !important"
            }
        }

    },
    Toast:{

    }
};

const theme = extendTheme({
    components,
    styles,
});

export default theme;