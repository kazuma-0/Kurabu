import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: props => ({
        body: {
            color: mode('#f4f1d0', '#fdfcf5')(props),
            bg: mode('#101014', '#101014')(props),
        },
    }),
};

const components = {};

const theme = extendTheme({
    components,
    styles,
});

export default theme;