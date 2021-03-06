import React from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from "reactstrap";

import ListaCardParticipante from '../../components/Cards/CardParticipante/ListaCardParticipante';
import useData from '../../hooks/useData';
import './evento.css';

const Evento = () => {
    const {eventoId} = useParams();
    const evento = useData(`https://speedhiring-8423b.firebaseio.com/eventos/${eventoId}.json`);
    const {idEmpresa, idEvento} = evento; 
    const participantes = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${idEmpresa}/${idEvento}.json`);

    return(
        <>
        <div className="section section-dark section-nucleo-icons image-top">
            <Container>
            <Row>
                <Col lg="6" md="12">
                <h1 className="title">{evento.nomeEvento}</h1>
                <hr />
                <div className="description">
                    <p>{evento.descricao}</p>
                    <hr />
                    <p><i className="nc-icon nc-tag-content" />
                    <b> Categoria: </b> {evento.categoria}</p>
                    <p><i className="nc-icon nc-button-play" />
                    <b> Início: </b> {evento.dataInicio}</p>
                    <p><i className="nc-icon nc-button-power" />
                    <b> Conclusão: </b> {evento.dataFim}</p>
                </div>
                </Col>
                <Col>
                    <img src={evento.img} className="col-md-12" alt="banner com a divulgação do evento"></img>
                </Col>
            </Row>
            </Container>
        </div>{" "}
        <div className="image-top-participante text-center">
            <h2>Participantes</h2>
            <hr />
            <ListaCardParticipante participantes={participantes} />
        </div>
        </>
    )
}

export default Evento;
