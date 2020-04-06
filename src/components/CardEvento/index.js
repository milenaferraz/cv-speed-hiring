
import React, {Component, Children} from 'react';
import firebase from '../../fireConection';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import './style.css'

export default class ListaEventos extends Component {

  constructor(props){
    super(props);
    this.state = {
        eventos: []
    };
  
         
      firebase.database().ref('empresas').child("0").child("eventos").on('value', (snapshot)=> {
        let state = this.state;
        state.eventos = [];
        
        snapshot.forEach((childItem)=> {
           state.eventos.push({
            key:childItem.key,
            id: childItem.val().id,
            img: childItem.val().img,
            nomeEvento: childItem.val().nomeEvento,
            categoria: childItem.val().categoria,
            descricao: childItem.val().descricao
          })
        });

        this.setState(state);
      });


  
};

    render() {
     
        return (
            <div>
              {this.state.eventos.map((e) => {
                return(
                  <div>
                  <CardDeck className="card-deck">
                  <Card key={e.id}>
                      <CardImg top width="100%" src={e.img} alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="title">{e.nomeEvento}</CardTitle>
                        <CardSubtitle className="sub-titulo"></CardSubtitle>
                        <CardText>{e.categoria}</CardText>
                        <CardText>{e.descricao}</CardText>
                        <Button>Saber mais</Button>
                      </CardBody>
                    </Card>
              </CardDeck>
                  
                  </div>
                );
              })}
            </div>
    );
    }
  };