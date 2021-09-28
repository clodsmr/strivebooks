import books from '../data/fantasy.json'
import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import Card from  'react-bootstrap/Card'



const Books = (props) => (

    <Container>
        <Row className="justify-content-center" style={{ marginTop: '1em' }}>
        

           { books.map(book => (
               <Col xs={12} md={4} lg={3}>
               
               <Card style={{ width: '18rem'}}>
               <Card.Img variant="top" src={book.img} />
               <Card.Body>
                   <Card.Title>{book.title}</Card.Title>
                   
               </Card.Body>
           </Card>
           </Col>

           ))
                
            }    
          
        </Row>
    </Container>
)

export default Books