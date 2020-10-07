import React from 'react';
import { FiBell, FiSearch, FiChevronDown } from 'react-icons/fi'; //pacote feather icons dentro do react
import './styles.css';


const Header = (props) => {
    return (
        <header>
            <div>
              <div className="grid-header">
                    <div className="search">
                      <input type="text"/>
                      <button><FiSearch size={18} color="#000000" /></button>
                    </div>
                    

                    <div className="notifications">
                          <FiBell className="bell" size={28} color="#000000" />
                        <span>3</span>
                    </div>
              </div>

              <div className="grid-header">
                <div className="menu-item-a">
                    <a href="#">Produtos</a>
                    <FiChevronDown className="icon" size={14} color="#707070" />
                    {/* <ul className="submenu">
                      <li><a href="/produtos-lista">Lista de Produtos</a></li>
                      <li><a href="/produtos-categorias">Lista de Categorias</a></li>
                    </ul> */}
                </div>
                <div className="menu-item-b">
                    <a href="#">Usuários</a>
                    <FiChevronDown className="icon" size={14} color="#707070" />
                    {/* <ul className="submenu">
                      <li><a href="/usuarios-lista">Lista de Usuários</a></li>
                    </ul> */}
                </div>
                <div className="menu-item-c">
                    <a href="#">Relatórios</a>
                    <FiChevronDown className="icon" size={14} color="#707070" />
                    {/* <ul className="submenu">
                      <li><a href="/rel-produtos-categoria">Produtos por Categoria</a></li>
                      <li><a href="/rel-compras-por-produto">Compras por Produto</a></li>
                    </ul> */}
                </div>
              </div>

            </div>
        </header>
    )
};

export default Header;