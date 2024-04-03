
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import FormLogin from "./FormLogin/FormLogin";
import '../../assets/Fondo.css';


 function Login(){


  return (
    <>
      <div className="content-login" >
        <HeaderLogin/>
        <FormLogin/>
      </div>
    </>
  );
}

export default Login
