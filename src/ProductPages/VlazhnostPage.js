import React from 'react';
import { Container, Card, Button, CardDeck,Col,Row } from 'react-bootstrap';
import SideBar from '../components/SideBar'
import ip from '../profiles/vlazhnostf/izmeritelnye_preobrazovateli.pdf';
import ipkz from '../profiles/vlazhnostf/izmeritelnye_preobrazovatelikz.pdf';
import ip2 from '../profiles/vlazhnostf/iskrobezopasnye_promyshlennosti.pdf';
import ip2kz from '../profiles/vlazhnostf/iskrobezopasnye_promyshlennostikz.pdf';
import ip3 from '../profiles/vlazhnostf/izmeritelnye_preobrazovateli_ov.pdf';
import ip3kz from '../profiles/vlazhnostf/izmeritelnye_preobrazovateli_ovkz.pdf';
import ip4 from '../profiles/vlazhnostf/izmeritelnye_preobrazovateli_ovt.pdf';
import ip4kz from '../profiles/vlazhnostf/izmeritelnye_preobrazovateli_ovtkz.pdf';
import hydro from '../profiles/vlazhnostf/hygrostaty.pdf';
import hydrokz from '../profiles/vlazhnostf/hygrostatykz.pdf';
import ip5 from '../profiles/vlazhnostf/izmeritelnye_preobrazovateli_vl.pdf';
import ip5kz from '../profiles/vlazhnostf/izmeritelnye_preobrazovateli_vlkz.pdf';
import ip6 from '../profiles/vlazhnostf/izmeritelnue_preobrazovateli_vt.pdf';
import ip6kz from '../profiles/vlazhnostf/izmeritelnue_preobrazovateli_vtkz.pdf';




function VlazhnostPage(props) {

    return (

        <div style={{ color: "#233048" }}>


            <Container fluid={true} >
                <Row>
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }}>
                        <CardDeck>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996284.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h4>Измерительные преобразователи относительной влажности
                                     (c емкостным сенсором) и температуры для систем вентиляции и кондиционирования</h4>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 90.7020
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>Разработаны для применения в системах вентиляции и кондиционирования.
                                            Выпускаются в различных корпусах  с нормированными аналоговыми выходными сигналами (ток, напряжение).
                                            Возможен резистивный выход для канала температуры.
                                  <li>Измерение относительной влажности воздуха и температуры</li>
                                                <li>Комнатное и канальное исполнение</li>
                                                <li>Компактное стержневое исполнение для лабораторий и других задач</li>
                                                <li>Выходной сигнал в виде тока или напряжения</li>
                                                <li>Малоинерционный емкостной сенсор влажности</li>
                                            </ul>
                                            
                                            


                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row>
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={ip} target="_blank" rel="noopener noreferrer" download
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

                                        </Col>
                                        <Col className="p-0 d-flex justify-content-end">
                                            <a href={ipkz} target="_blank" rel="noopener noreferrer" download
                                                style={{ color: "#233048" }}  >
                                                <Button style={{
                                                    backgroundColor: "#50e3c2",
                                                    color: "#203367", borderColor: "#50e3c2",
                                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                                }}>
                                                    <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                            </a>

                                        </Col>
                                    </Row>
                                </Card.Footer>

                            </Card>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979684.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h4>Искробезопасные измерительные преобразователи относительной
                                     влажности, температуры и вычисляемых величин (серия с Eх-допуском)</h4>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 90.7025
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>
                                                <li>Измерительные преобразователи для измерения относительной влажности и температуры</li>
                                                <li>Вычисление точки росы, абсолютной влажности, соотношения смеси,
                                             температуры влажного термометра возможно как дополнительные опции</li>
                                                <li>Новая ориентированная на пользователя модульная концепция датчиков</li>
                                                <li>Интелелктуальные сменные датчики с прошитыми калибровочными коэффициентами</li>
                                                
                                            </ul>
                                            
                                        </ul>
                                        
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row>
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={ip2} target="_blank" rel="noopener noreferrer" download
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

                                        </Col>
                                        <Col className="p-0 d-flex justify-content-end">
                                            <a href={ip2kz} target="_blank" rel="noopener noreferrer" download
                                                style={{ color: "#233048" }}  >
                                                <Button style={{
                                                    backgroundColor: "#50e3c2",
                                                    color: "#203367", borderColor: "#50e3c2",
                                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                                }}>
                                                    <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                            </a>

                                        </Col>
                                    </Row>
                                </Card.Footer>

                            </Card>
                        </CardDeck>
                           <CardDeck>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981083.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h4>Измерительные преобразователи относительной влажности, температуры и вычисляемых величин (промышленная серия)</h4>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 90.7023
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>
                                                <li>Измерение относительной влажности в диапазоне 0 ... 100%</li>
                                                <li>Выдерживает температуры до 180°C (в зависимости от типа зонда)</li>
                                                <li>Выдерживает давления до 100 бар (в зависимости от типа датчика)</li>
                                                <li>Прочный металлический корпус, степень защиты IP 65</li>
                                                <li>Исключительная точность и стабиль-ность</li>
                                                <li>Построение графика текущего процесса и истории измерений за последний год</li>
                                                <li>Соответствует стандарту NIST</li>
                                               
                                            </ul>
                                            <p>Измерительный преобразователь влажности и температуры,
                                            управляемый микропроцессором, позволяет решать широкий
                                            круг задач даже в экстремальных условиях промышленного применения.
                                            Специальная конструкция головки датчика предусматривает его работу
                                            в условиях вакуума, избыточных давлений 0..100 бар а также при повышенных
                                            температурах (до 180°С) и зонах с высокой влажностью.</p>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row>
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={ip3} target="_blank" rel="noopener noreferrer" download
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

                                        </Col>
                                        <Col className="p-0 d-flex justify-content-end">
                                            <a href={ip3kz} target="_blank" rel="noopener noreferrer" download
                                                style={{ color: "#233048" }}  >
                                                <Button style={{
                                                    backgroundColor: "#50e3c2",
                                                    color: "#203367", borderColor: "#50e3c2",
                                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                                }}>
                                                    <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                            </a>

                                        </Col>
                                    </Row>
                                </Card.Footer>

                            </Card>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996338.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h4>Измерительные преобразователи относительной влажности
                                     (с гигрометрическими полимерными волокнами) и температуры</h4>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 90.7031
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>
                                                <li>Измерение относительной влажности воздуха и температуры</li>
                                                <li>Для монтажа внутри и вне помещений, канальное исполнение</li>
                                                <li>Выходной сигнал в виде аналогового сигнала (ток, напряжения)
                                            или с резистивным выходом по температуре</li>
                                                <li>Для постоянного использования при высокой относительной влажности до 100% (канальное исполнение)</li>
                                                <li>Отсутствие необходимости источника питания для исполнений с резистивным выходом</li>
                                                <li>Чувствительный элемент не нуждается в обслуживании (без регенерации)</li>
                                            </ul>
                                            <p>Измерительные преобразователи влажности серии 907031 для измерения
                                            влажности воздуха используют гигроскопические свойства специальных
                                            полимерных волокон. Чувствительный элемент из полимерного волокна
                                            способен абсорбировать влагу. </p>
                                            </ul>
                                        
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row>
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={ip4} target="_blank" rel="noopener noreferrer" download
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

                                        </Col>
                                        <Col className="p-0 d-flex justify-content-end">
                                            <a href={ip4kz} target="_blank" rel="noopener noreferrer" download
                                                style={{ color: "#233048" }}  >
                                                <Button style={{
                                                    backgroundColor: "#50e3c2",
                                                    color: "#203367", borderColor: "#50e3c2",
                                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                                }}>
                                                    <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                            </a>

                                        </Col>
                                    </Row>
                                </Card.Footer>

                            </Card>
                           </CardDeck>
                             <CardDeck>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28867.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h4>Гигростаты (с гигрометрическими полимерными волокнами)</h4>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 90.7032
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>
                                                <li>Простая функция ВКЛ/ВЫКЛ при достижении заданного значения относительной влажности</li>
                                                <li>Комнатное и канальное исполнение</li>
                                                <li>Переключающий контакт</li>
                                                <li>Не требует источника питания</li>
                                                <li>Чувствительный элемент не требует обслуживания при работе в нормальных условиях (незагрязненный воздух)</li>
                                            </ul>
                                            <p>Гигростаты серии 907032 основаны на принципе
                                            измерения относительной влажности с помощью
                                            специальных гигрочувствительных полимерных волокон.
                                            Элемент из полимерного волокна обладает способностью
                                            связывать молекулы воды из окружающего воздуха.</p>
                                              </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row>
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={hydro} target="_blank" rel="noopener noreferrer" download
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

                                        </Col>
                                        <Col className="p-0 d-flex justify-content-end">
                                            <a href={hydrokz} target="_blank" rel="noopener noreferrer" download
                                                style={{ color: "#233048" }}  >
                                                <Button style={{
                                                    backgroundColor: "#50e3c2",
                                                    color: "#203367", borderColor: "#50e3c2",
                                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                                }}>
                                                    <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                            </a>

                                        </Col>
                                    </Row>
                                </Card.Footer>

                            </Card>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987301.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h4>Измерительные преобразователи относительной влажности </h4>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 90.7027
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>
                                                <li>Измерение относительной влажности и температуры</li>
                                                <li>Измерительный диапазон относительной влажности 0..100 %</li>
                                                <li>Диапазон рабочих температур -40 to +80 °C</li>
                                                <li>Простая замена интеллектуальных сменных датчиков без перенастройки
                                             электронного оборудования</li>
                                                <li>Возможность использования раздельных датчиков для
                                            измерения относительной влажности и температуры</li>
                                                <li>Возможность присоединения удлинительных кабельных адаптеров 2м,
                                             5м или 10м для выноса датчиков в зону измерения</li>
                                               
                                                <li>Встроенный ЖК дисплей (дополнительная опция)</li>
                                                <li>Стандартные аналоговые выходные сигналы (ток или напряжение)</li>
                                                
                                            </ul>
                                            
                                        </ul>
                                        

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row>
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={ip5} target="_blank" rel="noopener noreferrer" download
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

                                        </Col>
                                        <Col className="p-0 d-flex justify-content-end">
                                            <a href={ip5kz} target="_blank" rel="noopener noreferrer" download
                                                style={{ color: "#233048" }}  >
                                                <Button style={{
                                                    backgroundColor: "#50e3c2",
                                                    color: "#203367", borderColor: "#50e3c2",
                                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                                }}>
                                                    <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                            </a>

                                        </Col>
                                    </Row>
                                </Card.Footer>

                            </Card>
                             </CardDeck>
                        <CardDeck >
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988425.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h4>Измерительные преобразователи относительной влажности (с емкостным сенсором),
                                     температуры и концентрации CO2 для контроля параметров воздушной среды</h4>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 90.7021
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>
                                                <li>Измерение относительной влажности воздухa, температуры и концентрации CO2</li>
                                                <li>Для применения в системах автоматизации зданий, хранилищ, управления системами вентиляции и кондиционирования</li>
                                                <li>Комнатное и канальное, настенное исполнение</li>
                                                <li>Компактное стержневое исполнение</li>
                                                <li>Аналоговый выходной сигнал в виде тока или напряжения либо с резистивным выходом по температуре</li>
                                                <li>Настольное исполнение</li>
                                            </ul>
                                            <p>Измерительные преобразователи влажности серии 907021 были специально разработаны
                                            для решения задач систем вентиляции и кондиционирования. Их отличительными
                                            особенностями является превосходная временная стабильность, высокая точность,
                                         превосходная чувствительность и хорошая химическая стойкость.</p>
                                          </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row>
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={ip6} target="_blank" rel="noopener noreferrer" download
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

                                        </Col>
                                        <Col className="p-0 d-flex justify-content-end">
                                            <a href={ip6kz} target="_blank" rel="noopener noreferrer" download
                                                style={{ color: "#233048" }}  >
                                                <Button style={{
                                                    backgroundColor: "#50e3c2",
                                                    color: "#203367", borderColor: "#50e3c2",
                                                    borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                                }}>
                                                    <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                            </a>

                                        </Col>
                                    </Row>
                                </Card.Footer>

                            </Card>
                            <Card style={{opacity:"0"}}></Card>
                        </CardDeck>
                        </Col>
                        </Row>
                  </Container>
        </div>
    );
};

export default VlazhnostPage;