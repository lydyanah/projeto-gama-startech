import { makeStyles} from '@material-ui/core';
import '../../styles/global.css';

  
const formStyles = makeStyles(theme => ({  
    root: {
        display: 'flex',
        flexDirection:'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 20,
        margin: theme.spacing(1),
    },
    
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',     
    },
    
    field: {
        margin: theme.spacing(0.3),
    },

    input:{           
        padding: '0 10px',
        height: 35,
  },
    
    label: {
        textTransform: 'capitalize',
        fontWeight: 700,
    },       
    
    h1: {
        fontSize: '1.25rem',
        fontWeight: 500,
        margin: theme.spacing(1),
    },
    
    h2: {
        fontSize: '1rem',
        fontWeight: 500,
        padding: 5,
    },

    submitButton: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(1)
    },
}));

  
export default formStyles;