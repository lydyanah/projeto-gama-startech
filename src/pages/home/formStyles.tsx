import { makeStyles} from '@material-ui/core';
import '../../styles/global.css';

  
const formStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
       
    },

    field: {
        marginTop: theme.spacing(2),
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