import { useNavigate } from "react-router-dom";
import Menus from "../components/menu";

function TelaInicial() {
  const navigate = useNavigate();  
 
  return (
    

    <div>
      <Menus/>
    </div>
    
   
   
 );
}

export default TelaInicial;
