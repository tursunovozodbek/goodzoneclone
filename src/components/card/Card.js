import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({name, img, title, price}) {
  return (
    <div className='box-carusel'>
      <Card style={{ width: '24rem', height:340, textAlign: 'center'}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <img width={150} src={img} alt="Image of product" />
          <Card.Text>
            {name}
          </Card.Text>
          <span><b>{price}</b></span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;