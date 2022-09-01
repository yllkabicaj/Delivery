import './Navigation.css';
import Logo from "./navbar/Logo";
import Menu from "./navbar/Menu";


function Navigation(){
return(
    <div className='nav'>
        <Logo></Logo>
        <Menu></Menu>
    </div>
);
}
export default Navigation;