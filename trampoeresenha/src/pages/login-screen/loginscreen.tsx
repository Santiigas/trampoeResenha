import "./loginscreen.css"

function LoginHome() {

  function EnviarDadosUsuario(){
    console.log("testando")
  }

  return (
    <div className="contentLoginHome">
        <div className="headerLoginHome">
          <h1>Login</h1>
        </div>
        <div className="squarelogin">
          <div className="userdata">
            <label className="nome">Nome:</label>
            <input className="x_nome_usuario" placeholder=""></input>
          </div>
          <div className="userdata">
            <label className="nome">Data Aniversario:</label>
            <input className="x_data_aniversario" placeholder=""></input>
          </div>
          <div className="userdata">
            <label className="nome">Email:</label>
            <input className="x_email_usuario" placeholder=""></input>
          </div>
          <div className="userdata">
            <label className="nome">Senha:</label>
            <input className="x_senha" placeholder=""></input>
          </div>
          <button className="ButtonEnviar" onClick={EnviarDadosUsuario}>Enviar</button>
        </div>
    </div>
  )
}

export default LoginHome
