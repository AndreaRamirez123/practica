import logo from './logo.svg';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import './App.css';


function App() {
  return (
    <Container maxWidth="sm">
      <Grid>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
      </Grid>
      <Grid>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      </Grid>
    </Container>
  );
}

export default App;
