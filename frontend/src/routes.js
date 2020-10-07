import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Principais
import Dashboard from './pages/Principais/Dashboard';
import Logon from './pages/Principais/Logon';

// Entidades
import Categorias from './pages/Entidades/Categorias';
import Unidades from './pages/Entidades/Unidades';
import Produtos from './pages/Entidades/Produtos';
import Usuarios from './pages/Entidades/Usuarios';

// Listas
import ListaCategoria from './pages/Listas/ListaCategoria';
import ListaUnidade from './pages/Listas/ListaUnidade';
import ListaProduto from './pages/Listas/ListaProduto';
import ListaUsuario from './pages/Listas/ListaUsuario';


const Routes = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}  />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/categorias" component={Categorias} exact />
                <Route path="/categorias/:categoriaId" component={Categorias} />
                <Route path="/unidades" component={Unidades} exact />
                <Route path="/unidades/:unidadeId" component={Unidades} />
                <Route path="/produtos" component={Produtos} exact />
                <Route path="/produtos/:produtoId" component={Produtos} />
                <Route path="/usuarios" component={Usuarios} exact />                
                <Route path="/usuarios/:usuarioId" component={Usuarios} /> 
                <Route path="/lista-categoria" component={ListaCategoria} /> 
                <Route path="/lista-unidade" component={ListaUnidade} /> 
                <Route path="/lista-produto" component={ListaProduto} /> 
                <Route path="/lista-usuario" component={ListaUsuario} /> 

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;