import React from 'react';
import './styles.css';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import entregaIcon from '../../../assets/images/delivery-man.png';
import encomendaIcon from '../../../assets/images/lunch-box.png';
import accountingIcon from '../../../assets/images/accounting.png';
import clockIcon from '../../../assets/images/clock.png';
import rankingIcon from '../../../assets/images/ranking.png';

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <Header />
            <div className="grid">
                <div className="section-a">
                    <div className="card">
                        <div className="title">
                            <p>1050 Entregas</p>
                        </div>
                        <div className="card-icon">
                            <img src={entregaIcon} alt="Entregas"/>
                        </div>
                    </div>

                    <div className="card-content">
                      <div className="content-title">
                        <img src={clockIcon} alt="Relógio"/>
                        <h1>Atividades Recentes</h1>
                      </div>
                      <div className="card-text duas-colunas">
                          <div className="horario">
                            <p>19h30</p>
                          </div>
                          <div className="cliente">
                            <p>Danilo Aparecido Fogaça</p>
                            <p>Avenida dos Imarés, 336</p>
                          </div>
                          <div className="horario">
                            <p>19h30</p>
                          </div>
                          <div className="cliente">
                            <p>Danilo Aparecido Fogaça</p>
                            <p>Avenida dos Imarés, 336</p>
                          </div>
                          <div className="horario">
                            <p>19h30</p>
                          </div>
                          <div className="cliente">
                            <p>Danilo Aparecido Fogaça</p>
                            <p>Avenida dos Imarés, 336</p>
                          </div>
                          <div className="horario">
                            <p>19h30</p>
                          </div>
                          <div className="cliente">
                            <p>Danilo Aparecido Fogaça</p>
                            <p>Avenida dos Imarés, 336</p>
                          </div>
                          <div className="horario">
                            <p>19h30</p>
                          </div>
                          <div className="cliente">
                            <p>Danilo Aparecido Fogaça</p>
                            <p>Avenida dos Imarés, 336</p>
                          </div>
                          <div className="horario">
                            <p>19h30</p>
                          </div>
                          <div className="cliente">
                            <p>Danilo Aparecido Fogaça</p>
                            <p>Avenida dos Imarés, 336</p>
                          </div>
                      </div>
                    </div>
                </div>
                
                <div className="section-b">
                    <div className="card">
                        <div className="title">
                            <p>1200 Encomendas</p>
                        </div>
                        <div className="card-icon">
                            <img src={encomendaIcon} alt="Encomendas"/>
                        </div>
                    </div>

                    <div className="card-content">
                      <div className="content-title">
                        <img src={rankingIcon} alt="Ranking"/>
                        <h1>Top Produtos</h1>
                      </div>
                      <div className="card-text tres-colunas">
                          <div>
                            <p>PRODUTO</p>
                          </div>
                          <div>
                            <p>PEDIDOS</p>
                          </div>
                          <div>
                            <p>ENCOMENDADOS</p>
                          </div>
                          <div>
                            <p>Americano</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Americano</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Americano</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Americano</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Americano</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Americano</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Americano</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                      </div>
                    </div>
                </div>

                <div className="section-c">
                    <div className="card">
                        <div className="title">
                            <p>2250 Totais</p>
                        </div>
                        <div className="card-icon">
                            <img src={accountingIcon} alt="Totais"/>
                        </div>
                    </div>

                    <div className="card-content">
                        <div className="content-title">
                            <img src={rankingIcon} alt="Ranking"/>
                            <h1>Top Categorias</h1>
                        </div>
                        <div className="card-text tres-colunas">
                          <div>
                            <p>CATEGORIA</p>
                          </div>
                          <div>
                            <p>PEDIDOS</p>
                          </div>
                          <div>
                            <p>ENCOMENDADOS</p>
                          </div>
                          <div>
                            <p>Lanches</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Lanches</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Lanches</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Lanches</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Lanches</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Lanches</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Lanches</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>200</p>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Dashboard;