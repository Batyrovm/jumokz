import React from 'react';
import { Container, Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar'
import t1 from '../profiles/termostatyf/termostaty_dlya_m.pdf';
import t2 from '../profiles/termostatyf/vstraivaemyi_termostat.pdf';
import t3 from '../profiles/termostatyf/termostat_nm.pdf';
import t4 from '../profiles/termostatyf/termostat_pm.pdf';
import t5 from '../profiles/termostatyf/vent_termostat.pdf';
import t6 from '../profiles/termostatyf/extherm_at.pdf';
import t7 from '../profiles/termostatyf/vt_em.pdf';
import t8 from '../profiles/termostatyf/amthf.pdf';
import t9 from '../profiles/termostatyf/heattherm_at.pdf';
import t10 from '../profiles/termostatyf/frosttherm_at.pdf';
import t11 from '../profiles/termostatyf/stm_rw2.pdf';
import t12 from '../profiles/termostatyf/heattherm.pdf';





function TermostatyPage(props) {

    return (

        <div style={{ color: "#233048" }}>


            <Container fluid={true} >

                <Row>
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }}>
                        <CardDeck >

                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979383.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>Термостаты для щитового монтажа</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.2010
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Типовой ряд ETH</Card.Text>

                                            <li>Исполнение по DIN 3440 и директиве по средствам измерения давления 97/23/EG</li>
                                            <li>Термостаты для щитового монтажа</li>
                                            <p>Термостаты щитового монтажа типового ряда ЕТН предназначены для контроля
                                            тепловых процессов. Они представляют собой предохранительные устройства
                                            контроля температуры STW  и предохранительные устройства ограничения
                                            температуры. В случае неисправности.
                                           </p>


                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    
                                            <a href={t1} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294985877.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>Встраиваемый термостат</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.2026
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>

                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Типовой ряд EMf-80</Card.Text>
                                            <li>Встраиваемый термостат</li>
                                            <li>Проверен по DIN 3440 как</li>
                                            <li>STB = защитное устройство ограничения температуры</li>
                                            <li>DVGW – соответствует EG-директивам (90/396/EWG)</li>
                                            <li>Встраиваемые термостаты типа EMf-80 применяются как защитные устройства ограничения температуры
                                         в открытых и закрытых установках нагрева воды по DIN 4751</li>
                                            <li>Термостат работает по принципу расширения жидкости.</li>
                                        </ul>
                                        

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                   
                                            <a href={t2} target="_blank" rel="noopener noreferrer" download
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

                        <CardDeck>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28715.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>Термостат наружного монтажа</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.3021
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Типовой ряд АТН</Card.Text>
                                            <li>прочный корпус (Степень защиты IP 54)</li>
                                            <li>микропереключатель</li>
                                            <li>автоматический контроль (STB/STW)</li>
                                            <li> аварийное отключение (STB/STW)</li>
                                            <li>протестирован в соответствии с директивой DIN EN 14597</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    
                                            <a href={t3} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28716.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>Термостат поверхностного монтажа</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.3026
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Типовой ряд АТН</Card.Text>
                                            <li>по принципу расширения жидкости</li>
                                            <li>микропереключатель</li>
                                            <li>автоматический контроль (STB/STW)</li>
                                            <li> аварийное отключение (STB/STW)</li>
                                            <li>состоят из двух отдельных систем измерения и переключения</li>

                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    
                                            <a href={t4} target="_blank" rel="noopener noreferrer" download
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
                      <CardDeck>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967366.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>Вентиляционный термостат</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.4514
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Тип WTHc</Card.Text>
                                            <li>по принципу расширения жидкости</li>
                                            <li>микропереключатель</li>
                                            <li>из трех раздельных измерительных и коммутирующих систем</li>
                                            <li> прочный корпус</li>

                                        </ul>
                                        
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                   
                                            <a href={t5} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28722.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO exTHERM-AT</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.5055
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Типовой ряд АТН-ЕХх</Card.Text>
                                            <li>Мощность переключения 16 A стандартное исполнение, опционально 25 A</li>
                                            <li>допустимая температура окружающей среды от -55 °С до +70 °С</li>
                                            <li>эффективное энергопотребление благодаря низкому пороговому напряжению</li>
                                            </ul>
                                        
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    
                                            <a href={t6} target="_blank" rel="noopener noreferrer" download
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

                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>Встроенные термостаты EM до 500°C</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.2021
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Типовой ряд ЕМ</Card.Text>
                                            <li>по принципу расширения жидкости</li>
                                            <li>автоматический контроль</li>
                                            <li>аварийное отключение)</li>
                                            <li> с 1, 2, 3 или 4 однополюсными мгновенными выключателями  </li>
                                            <p>Термостаты предназначены для регулировки и контроля тепловых процессов.
                                            Приборы серии EM поставляются для применения в качестве регуляторов темпе-
                                            ратуры TR, устройств контроля температуры TW, ограничителей температуры TB,
                                            защитных устройств контроля температуры STW (STB) и защитных ограничителей
                                            температуры STB. При возникновении неполадок устройство STB переводит кон-
                                            тролируемую установку в безопасный режим работы. </p>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >

                                    <a href={t7} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28777.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>Встраиваемый термостат</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.3051
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Типовой ряд AMTHF</Card.Text>
                                            <li>по принципу расширения жидкости</li>
                                            <li>микропереключатель с системой сброса</li>
                                            <li>с 2, 3 или 4 однополюсными мгновенными выключателями </li>
                                            <p>Встраиваемые термостаты регулирует и контролирует термические процессы.
                                            Приборы типового ряда АМTHF поставляются с 2, 3 или 4 полюсными пружинными
                                            выключателями в качестве регулятора температуры (TR) и устройства контроля
                                            температуры (TW). По желанию заказчика может быть установлен последовательный
                                            интервал одиночного переключения в Кельвинах. Встраиваемые термостаты работают
                                      по принципу расширения жидкости; в качестве переключающего элемента служит микропереключатель.</p>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >

                                    <a href={t8} target="_blank" rel="noopener noreferrer" download
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
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28719.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO heatTHERM – AT</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.3070
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>JUMO heatTHERM-AT</Card.Text>
                                            <li>новая серия термостатов поверхностного монтажа</li>
                                            <li>по принципу расширения жидкости</li>
                                            <li>микропереключатель с системой сброса</li>
                                            <li>температурная компенсация</li>
                                            <li>с функцией «Push-in»</li>
                                            <li>возможна сертификация по стандартам UL</li>
                                            <p>Инновационные характеристики в новой серии электромеханических
                                            термостатов дают возможность широко использовать этот прибор.
                                            Гибкость применения и современная техника подключения являются
                                            существенными отличительными признаками этой серии электронных
                                            термостатов. </p>
                                        </ul>


                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >

                                    <a href={t9} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28720.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO frostTHERM-AT/-DR</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.4100
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>JUMO frostTHERM-AT</Card.Text>
                                            <li>с функцией Push-in</li>
                                            <li>макс. коммутационная способность 16 A , 230 В</li>
                                            <li>степень защиты (AT) IP 40 / IP65</li>

                                            <p>Термостат для защиты от замерзания предназначен для контроля
                                            температуры в вентиляционных установках и кондиционерах,
                                            для предотвращения повреждений, вызванных воздействием мороза.
                                            Он отличается малым гистерезисом и высокой воспроизводимостью.
                                            Возврат в исходное состояние происходит автоматически
                                            (предохранительное термореле/STW) или вручную
                                             (предохранительный ограничитель температуры/STB).</p>
                                           
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >

                                    <a href={t10} target="_blank" rel="noopener noreferrer" download
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
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967373.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>Термостат дымовых газов</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.1540
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Типовой ряд STM-RW-2</Card.Text>
                                            <li>по принципу линейного расширения стержня</li>
                                            <li>микропереключатель</li>
                                            <li>автоматический сброс</li>
                                            <li>предохранение от обрыва</li>
                                            <li>проверен в соответствии с DIN 3440, рег. номер 8 622 000</li>

                                        </ul>


                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    
                                            <a href={t11} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28713.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO heatTHERM</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 60.2031
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>JUMO heatTHERM встраиваемый термостат</Card.Text>
                                            <li>по принципу расширения жидкости</li>
                                            <li>микропереключатель с системой сброса</li>
                                            <li>температурная компенсация</li>
                                            <li>аварийное отключение</li>
                                            <li>безкадмиевый, отвечающий требованиям RoHS</li>

                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                   
                                            <a href={t12} target="_blank" rel="noopener noreferrer" download
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
                     </Col>
                         </Row>
                     </Container>
        </div>
    );
};

export default TermostatyPage;