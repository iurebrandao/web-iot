import React, {Component} from 'react';
import './App.css';
var mqtt = require('mqtt');

let client;

class App extends Component {

  state={
    connected: false,
    loading: false,
    startTest: false,
    ip: '172.20.0.3',
    username: 'iure',
    password: 'iure',
    client: {}
  };

  componentDidMount(){

  };

  connect(){
    let options={
      clientId:"application",
      username:this.state.username,
      password:this.state.password
    };
    let client = mqtt.connect('mqtt://'+this.state.ip+':9001/ws', options);

    client.on('connect', this.onConnect.bind(this));

    client.on("error",this.onConnectionLost.bind(this));
    this.setState({client});
  }

  onConnect() {
    this.setState({connected: true, loading: false});
  }

  onConnectionLost(){
    this.setState({loading: false, connected: false});
  }

  handleChange(target, event) {
    this.setState({[target]: event.target.value});
  }

  changeStatus (e) {
    let newValue = !this.state.startTest;
    this.setState({startTest: newValue});
    let start = newValue ? "True" : "False";
    this.state.client.publish("semaforo", start);
  }


  render() {
    return (
        <div className="App">
          <div className="left">
            <h5>Insira os parâmetros de conexão para se conectar ao broker</h5>
            <label>
              IP:
              <input type="text" value={this.state.ip} onChange={this.handleChange.bind(this, 'ip')} />
            </label>
            <label>
              Username:
              <input type="text" value={this.state.username} onChange={this.handleChange.bind(this, 'username')} />
            </label>
            <label>
              Password:
              <input type="password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
            </label>

            <button className="button" onClick={() => this.connect()}>Conectar</button>


            {
              this.state.loading ?
                  (<p>loading...</p>) :
                  (
                      <p>
                        {this.state.connected ? ('Conectado!'): ('Desconectado')}
                      </p>
                  )
            }
          </div>
          <div className="right">
            {
              this.state.connected ?
                  (
                      <div>
                        <p>Clique no botão abaixo para iniciar/parar os testes:</p>
                        <div className="button-switch">
                          <label className="switch">
                            <input type="checkbox" onChange={ () => this.changeStatus()} value={this.state.startTest}/>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                  ) : null
            }
          </div>


        </div>
    );
  }


}

export default App;
