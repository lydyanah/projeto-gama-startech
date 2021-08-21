import { makeStyles} from '@material-ui/core';
import '../../styles/global.css';

  
const formStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 20,
        margin: theme.spacing(2),
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
       
    },

    field: {
        margin: theme.spacing(1),
    },

    submitButton: {
        marginTop: theme.spacing(2),
    },

    label: {
        textTransform: 'capitalize',
        fontWeight: 700,
    },       
    
}));

  
export default formStyles;