import React, {useContext} from 'react';
import Template from "./template.jsx";
import { useNavigate } from "react-router-dom";
import GlobalContext from '../../context/global/globalContext';

const Header = () => {

	const globalContext = useContext(GlobalContext);
	const {
		loading,
	} = globalContext;

	const navigate = useNavigate();

	const onTitleClick =  () =>{
		navigate('/')
	}

 	return (
    	<Template {
      		...{onTitleClick, loading}}
    	/>
  	)
}

Header.displayName = "Header";

export default Header;
