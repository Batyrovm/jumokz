import React from 'react';
import { Container, Card, Button,  CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import tm1 from '../profiles/tmf/70.9010r.pdf';
import tm2 from '../profiles/tmf/70.9020r.pdf';
//import tm3 from '../profiles/tmf/70.9050r.pdf';
import tm4 from '../profiles/tmf/tya201.pdf';
import tm5 from '../profiles/tmf/tya202.pdf';



function TmPage(props) {

    return (

        <div style={{ color: "#233048" }}>


            <Container fluid={true} >

                <CardDeck style={{ marginTop: "2rem" }}>
                    <div style={{ top: "0" }}>
                        <SideBar />
                    </div>
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294989599.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO TYA-432-45</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 70.9010
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                               
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        Тиристорный переключатель мощности
                                        <li>Ток нагрузки 25 А и 50 А</li>
                                        <li>Напряжение нагрузки 280 В и 350 В</li>
                                       <li> Управляющее напряжение 4…32 В DC</li>
                                        <li>Без радиатора охлаждения</li>
                                    </ul>
                                    <p>Тиристорные переключатели мощности необходимы для бесконтактного
                                         переключения потребителей переменного тока. Типичная область применения
                                          – переключение потребителей с активно-индуктивной нагрузкой при высокой 
                                          частоте переключения, особенно в области промышленности, например,
                                           при изготовлении пластмассовой упаковки, в теплотехнике и технике
                                            кондиционирования воздуха, а также при производстве промышленных печей.</p>
                                    <p>Управляющая и силовая части схемы гальванически разделены за счёт оптопары.</p>
                                    <p>Диапазон управляющих сигналов совместим с логическими выходами регуляторов JUMO.</p>
                                    <p>Силовая часть действует как нулевой выключатель, т. е. в принципе переключение
                                         происходит при прохождении напряжения через нулевое значение, независимо от
                                          момента изменения управляющего сигнала. Благодаря этому, удаётся избежать
                                    напряжений помех. Изнутри, со стороны выхода встроен варистор для защиты от пиков напряжения.</p>
                                    <p>Состояние входа индицируется с помощью светодиода.</p>
                                   

                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                           
                                    <a href={tm1} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28744.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO TYA-432-100</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 70.9020
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>

                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        Тиристорный переключатель мощности
                                        <li>Ток нагрузки 20 А, 30 А и 45 А</li>
                                        <li>Напряжение нагрузки 265 В и 660 В</li>
                                        <li>Управляющее напряжение 4…32 В DC</li>
                                        <li>Однофазное и 3-х фазное исполнение</li>
                                        <li>С радиатором охлаждения</li>
                                    </ul>
                                    <p>Тиристорные силовые выключатели необходимы для бесконтактного
                                         переключения нагрузок переменного тока. Они применяются для
                                          переключения активных нагрузок при высоких частотах переключения, 
                                          особенно при применении в промышленности. Цепи регулирования
                                           и питания разделяются оптопарой.</p>
                                    <p>Тиристорные силовые выключатели логически совместимы,
                                         так как имеют широкий диапазон управляющего сигнала
                                          3... 32 В. Цепь питания действует как переключатель
                                           нулевого напряжения, то есть она всегда включается,
                                            когда напряжение проходит через нулевую точку, независимо
                                             от момента поступления сигнала. Это предотвращает мешающие 
                                             напряжения. Тиристорные силовые выключатели монтируются на
                                              радиаторе из алюминия, чтобы обеспечить оптимальную теплоотдачу.</p>
                                  <br></br>
                                  <br></br>
                                    <br></br>
                                    <br></br>

                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={tm2} target="_blank" rel="noopener noreferrer" download
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
                <CardDeck >
                   {/* <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28744.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Тиристорный силовой выключатель</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 70.9050
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>

                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        
                                        <li>Бережный режим сетевого питания при больших активных нагрузках (мерцание)</li>
                                        <li>Использование низковольтных нагревательных элементов непосредственно от
                                             сети электроснабжения без согласующего трансформатора</li>
                                        <li>Минимальные высшие гармоники в сети установки и небольшой вес (нет силового трансформатора)</li>
                                        <li>Контроль тока короткого замыкания во время включения</li>
                                        <li>Сетевой ток пропорционален требуемой мощности (амплитудное регулирование)</li>
                                        <li>Управление независимо от характеристик сопротивления нагревательных элементов</li>
                                        <li>Минимальная управляющая реактивная мощность</li>
                                        <li>Малые габариты</li>
                                    </ul>
                                    <p>Преобразователь мощности IPC производства компании JUMO предназначен для регулирования
                                         тепловых нагрузок, для чего до сих пор использовался трансформатор (трансформатор 
                                         положения или трансформатор в комбинации с тиристорным регулятором мощности). 
                                         Исходя из принципа работы устройства, его называют электронным трансформаторо
                                         м с пульсирующим напряжением постоянного тока на выходе.
                                   </p>

                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={tm3} target="_blank" rel="noopener noreferrer" download
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

                    </Card>*/}
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294980107.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO TYA 201</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 70.9061
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>

                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        Однофазный тиристорный регулятор мощности
                                        <li>Простая конфигурация устройства через обычный текстовый дисплей</li>
                                        <li>Программа установки для конфигурации через интерфейс USB</li>
                                        <li>Программирование Регулятора мощности через интерфейс USB возможно без его подключения к сети питания</li>
                                        <li>Оптимизация сети нагрузки посредством принципа сдвоенного управления</li>
                                        <li>Доступны RS422/485 интерфейс или PROFIBUS-DP</li>
                                        <li>Определение сдвига фаз, пакетная коммутация, однополупериодное управление</li>
                                        <li>Функция плавного пуска </li>
                                        <li>Ограничение по току</li>
                                        <li>Контроль и ограничение сопротивления для MoSi2 нагревательных элементов</li>
                                        <li>Функция самообучения по определению отказа частичной нагрузки</li>
                                        <li>Интегрированные системы диагностики (например обнаружение вращения поля)</li>
                                    </ul>
                                    
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={tm4} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294980108.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO TYA 202</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 70.9062
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>

                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        Трёхфазный тиристорный регулятор мощности
                                        <li>Простая конфигурация устройства через обычный текстовый дисплей</li>
                                        <li>Программа установки для конфигурации через интерфейс USB</li>
                                        <li>Программирование Регулятора мощности через интерфейс USB возможно без его подключения к сети питания</li>
                                        <li>Оптимизация сети нагрузки посредством принципа сдвоенного управления</li>
                                        <li>Доступны RS422/485 интерфейс или PROFIBUS-DP</li>
                                        <li>Пакетная коммутация</li>
                                        <li>Функция плавного пуска с импульсными группами</li>
                                        <li>Ограничение по току</li>
                                        <li>Контроль и ограничение сопротивления для MoSi2 нагревательных элементов</li>
                                        <li>Функция самообучения по определению отказа частичной нагрузки</li>
                                        <li>Интегрированные системы диагностики (например обнаружение вращения поля)</li>
                                    </ul>
                                    
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={tm5} target="_blank" rel="noopener noreferrer" download
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
};

export default TmPage;