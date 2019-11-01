import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Project = (props) => {
    console.log(props.item)
    // return(
    //     <>
    //     <h1>{props.item.name}</h1>
    //     <h1>{props.item.description}</h1>
    //     <h1>{props.item.completed}</h1>
    //     </>
return (
  <div>
  <Card>
    <CardBody>
      <CardTitle>{props.item.name}</CardTitle>
      <CardSubtitle>{props.item.completed}</CardSubtitle>
      <CardText>{props.item.description}</CardText>
    </CardBody>
  </Card>
</div>
);
};
 
    
export default Project