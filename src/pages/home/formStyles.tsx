import { makeStyles} from '@material-ui/core';
import '../../styles/global.css';

  
const formStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        margin: theme.spacing(2),
        maxWidth: 800,
        maxHeight: 500,
    },       
    
    form: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',     
    },
    
    field: {
        margin: theme.spacing(1),
    },
    
    paper: {
        padding: theme.spacing(1),
        // whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    
    divider: {
        margin: theme.spacing(2, 0),
    },
    
    label: {
        textTransform: 'capitalize',
        fontWeight: 700,
    },       
    
    h1: {
        fontSize: '1.25rem',
        fontWeight: 500,
        margin: theme.spacing(1),
        padding: 5,        
    },
    
    h2: {
        fontSize: '1rem',
        fontWeight: 500,
        padding: 5,
    },

    submitButton: {
        display: 'flex',
        justifyContent: 'center',
        
    },
}));

  
export default formStyles;