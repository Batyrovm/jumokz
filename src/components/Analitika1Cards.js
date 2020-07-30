import React from 'react';
import {Container,Card,Button,CardDeck} from 'react-bootstrap';

import a1 from '../profiles/analitkaf/card1f/anc1ru.pdf';
import a2 from '../profiles/analitkaf/card1f/anc2ru.pdf';
import a3 from '../profiles/analitkaf/card1f/anc3ru.pdf';
import a4 from '../profiles/analitkaf/card1f/anc4ru.pdf';
import a5 from '../profiles/analitkaf/card1f/anc5ru.pdf';
import a6 from '../profiles/analitkaf/card1f/anc6ru.pdf';
import a7 from '../profiles/analitkaf/card1f/anc7ru.pdf';
import a8 from '../profiles/analitkaf/card1f/anc8ru.pdf';




function Analitika1Cards(props) {
    return (
        <div>
            <Container fluid={true} >
                <h1 style={{ textAlign: "center", color: "#233048" }}>pH и редокс-потенциал</h1>
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28683.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS pH 02</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 20.2551
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                       <ul>
                                        <li>Различный способ отображения на экране: большие цифры,
                                             диаграмма или указатель тенденции</li>
                                        <li>Интегрированная программа калибровки: по одной, двум или трем точкам</li>
                                        <li>Модуль математики и логики</li>
                                        <li>Журнал калибровки</li>
                                       </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a1} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", borderColor: "#50e3c2",
                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                }}>
                                    <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                            </a>

                        </Card.Footer>

                    </Card>

                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28685.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS AS 02</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  20.2553
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Индикация: мг/л, pH, мВ, мкСм/см и т.д.</li>
                                        <li>С помощью сетап-программы возможны специальные настройки</li>
                                        <li>Различный способ отображения на экране: большие цифры, диаграмма или указатель тенденции</li>
                                        <li>Интегрированная программа калибровки: по 1 и 2 точкам</li>
                                        <li>Модуль математики и логики</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a2} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", borderColor: "#50e3c2",
                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                }}>
                                    <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                            </a>


                        </Card.Footer>

                    </Card>
                </CardDeck>
                {/*row2 */}
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294968882.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Двухпроводной измерительный</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 20.2701
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Тип 202701 для величины рН:
                            Преобразует высокоомный сигнал рН-электрода (до 1000 МОм) в нормированный сигнал 4…20 мА</li>
                                        <li>Тип 202702 для редокс-потенциала:
                            Преобразует сигнал редоксметрического электрода в нормированный сигнал 4…20 мА</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a3} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", borderColor: "#50e3c2",
                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                }}>
                                    <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                            </a>

                        </Card.Footer>

                    </Card>

                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28688.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Портативные рН-метры</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  20.2710
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Сохранение минимального и максимального значений</li>
                                        <li>Функция HOLD ("замораживание" текущего значения)</li>
                                        <li>Управляемое автоматическое отключение</li>
                                        <li>Хорошо читаемый, 2-строчный ЖК-дисплей</li>
                               
                                        
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a4} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", borderColor: "#50e3c2",
                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                }}>
                                    <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                            </a>


                        </Card.Footer>

                    </Card>
                </CardDeck>
                {/*row3 */}
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294984464.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO AQUIS 500 pH</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 20.2560
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Возможность непосредственного переключения на измерение pH</li>
                                        <li>Автоматическая температурная компенсация</li>
                                        <li>Графический дисплей с подсветкой фона</li>
                                        <li>Возможности калибровки в зависимости от измеряемой величины</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a5} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", borderColor: "#50e3c2",
                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                }}>
                                    <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                            </a>

                        </Card.Footer>

                    </Card>

                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995392.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS pH 03</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  20.2723
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Возможность переключения с рН на мВ (редокс-потенциал)</li>
                                        <li>Два гальванически изолированных аналоговых выхода 0(4)…20 мА</li>
                                        <li>Релейный переключающий контакт</li>
                                        <li>Возможен контроль температуры среды</li>
                                        
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a6} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", borderColor: "#50e3c2",
                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                }}>
                                    <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                            </a>


                        </Card.Footer>

                    </Card>
                </CardDeck>
                {/*row4 */}
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/24182.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO AQUIS touch S</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  20.2581
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>До 4 аналитических входов в любой комбинации для
                                             непосредственного подключения электрохимических сенсоров</li>
                                        <li>До 15 других измерительных сигналов, подаваемых напрямую или через интерфейс</li>
                                        <li>Два счетчика импульсов для измерения расхода (макс 300 Гц или 10 кГц)</li>
                                        <li>До 17 переключающих выходов, конфигурируемых как выходы регулятора,
                                             переключающие выходы или сигнализаторы тревог</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a7} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", borderColor: "#50e3c2",
                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                }}>
                                    <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                            </a>

                        </Card.Footer>

                    </Card>

                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294984316.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO AQUIS touch P</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  20.2580
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>До 2 аналитических входов в любой комбинации для непосредственного подключения электрохимических сенсоров</li>
                                        <li>До 15 других измерительных сигналов, подаваемых напрямую или через интерфейс</li>
                                        <li>Два счетчика импульсов для измерения расхода (макс 300 Гц или 10 кГц)</li>
                                        <li>До 10 переключающих выходов, конфигурируемых как выходы регулятора, переключающие выходы или сигнализаторы тревог</li>
                                        
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a8} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", borderColor: "#50e3c2",
                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                }}>
                                    <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                            </a>


                        </Card.Footer>

                    </Card>
                </CardDeck>
            </Container>
        </div>
    );
}
export default Analitika1Cards;