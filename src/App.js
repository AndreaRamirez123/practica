import React from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      campo:'',
      operacion:'',
      resultado:''
    }
  }

  clear() {
    this.setState({
      campo:'',
      operacion:'',
      resultado:''
    });
  }

  addNumber(number) {
    if(this.state.resultado === 'pendiente'){
      this.setState({
        campo:this.state.campo+number
      });
    } else {
      this.clear();
      this.setState({
        campo:number,
        resultado: 'pendiente'
      });
    }
  }

  setOperation(symbol) {
    // console.log(`Simbolo de operacion ${symbol}`);
    if(this.state.operacion === ''){
      this.setState({
        campo: this.state.campo + symbol,
        operacion: symbol
      })
    } else {
      alert('Ya ha seleccionado una operación matemática!');
    }
  }

  getResult() {
    if(this.state.operacion !== ''){
      let numeros = this.state.campo.split(this.state.operacion);
      console.log(numeros);
      if(numeros[1] === ''){
        alert('Ingrese el segundo numero a operar!');
      } else {
        let resultado = this.executeOperation(parseInt(numeros[0]), parseInt(numeros[1]));
        this.setState({campo: this.state.campo + ' = ' + resultado});
      }

    } else {
      // No ha seleccionado ningun operador
      alert('Seleccione una operación matemática!');
    }
  }
  
  executeOperation(num1, num2) {
    let resultado = 0;
    switch(this.state.operacion) {
      case 'X':
        resultado = (num1 * num2);
        break;
      case '-':
        resultado = (num1 - num2);
        break;
      case '+':
        resultado = (num1 + num2);
        break;
      case '/':
        resultado = (num2 > 0) ? (num1 / num2) : num1;
        break;
      default:
        console.log('default');
        break;
    }
    this.setState({resultado:'obtenido'});
    return resultado;
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Grid>
          <TextField id="outlined-basic" label="Ingrese un valor" variant="outlined" value={this.state.campo} fullWidth/>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('7')}}>
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('8')}}>
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('9')}}>
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.setOperation('X')}}>
              X
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('4')}}>
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('5')}}>
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('6')}}>
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.setOperation('-')}}>
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('1')}}>
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('2')}}>
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('3')}}>
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.setOperation('+')}}>
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.clear()}}>
              CE
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.addNumber('0')}}>
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.getResult()}}>
              =
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{this.setOperation('/')}}>
              /
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

// App;
