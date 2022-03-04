import { useNavigate } from "react-router-dom";
import CardVacina from "../components/cardVacina";
import Menus from "../components/menu";

function Carteirinha() {
  const navigate = useNavigate();  
 
  return (
    <>
    <Menus/>
    <div>
    <CardVacina /></div>
   </>
 );
}

export default Carteirinha;
