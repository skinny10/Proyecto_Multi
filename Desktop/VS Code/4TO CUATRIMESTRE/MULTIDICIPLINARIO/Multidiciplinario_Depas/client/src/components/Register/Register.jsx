
import HeaderRegister from "./HeaderRegister/HeaderRegister";
import FormRegister from "./FormRegister/FormRegister";
import "../../assets/Fondo.css"

function Register(){
    return(
        <>
        <div className="content-form">
            <HeaderRegister/>
            <FormRegister/>
        </div>
        </>
    )
}

export default Register;