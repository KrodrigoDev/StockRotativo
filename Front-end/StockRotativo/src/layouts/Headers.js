import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Headers = () => {

  // Define o estado para controlar se o menu está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div>

      {/* Componente de barra de navegação */}
      <Navbar color="dark" dark expand="lg">

        {/* Marca da barra de navegação */}
        <NavbarBrand href="/">
          <img
            src="https://github.com/Kakau007/AgroStock/blob/main/Logotipo.png?raw=true"
            alt="StockRotativo Logo"
            width="30"
            height="30"
            className="mr-2"
          />
          StockRotativo
        </NavbarBrand>

        {/* Botão para alternar o menu em dispositivos móveis */}
        <NavbarToggler onClick={toggle} />

        {/* Conteúdo do menu */}
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

            {/* Itens do menu */}
            <NavItem>
             <NavLink href="/user/lista">Serviços Disponíveis</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/admin">Administração</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/user/logout">Sair</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
};

export default Headers;
