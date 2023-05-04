import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
 
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {
    const handleLogout = () => {
        // Mettre à jour le state pour déconnecter l'utilisateur
        props.setIsLoggedIn(false);
    
        // Rediriger vers la page signin 
        
        window.location.href = "/Settings";
      };

  return (
    <div style={{ display: 'flex', height: 'auto', width:"100px"}}>
      <CDBSidebar textColor="gray" backgroundColor="white" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            AutoZEN
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" style={{marginLeft:"25px"}}>
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Settings</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/Sign" activeClassName="activeClicked" onClick={handleLogout}>
              <CDBSidebarMenuItem icon="sign-out-alt">Log Out</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;