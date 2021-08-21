import { makeStyles} from '@material-ui/core';
import '../../styles/global.css';

  
const formStyles = makeStyles(theme => ({
    root: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
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
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: 700,
    },       
    
}));

  
export default formStyles;