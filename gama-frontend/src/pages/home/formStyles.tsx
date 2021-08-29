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
        padding: '8px',
    },

    helperText: {
        margin: '0px',
    },

    MuiIconButton:{
        padding: '0px',
    },

    adornedEnd: {
        paddingRight: '5px',
    },
    
    positionEnd: {
        margin: '0px'
    },
    
    label: {
        textTransform: 'capitalize',
        fontWeight: 700,
    },       
    
    h1: {
        fontSize: '1.25rem',
        fontWeight: 500,
        margin: '8px 0px',
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