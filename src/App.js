import './App.css'
import { Container, Row } from 'react-bootstrap/'
import PhoneNumberList from './components/PhoneNumberList/PhoneNumberList'
function App() {

  return (
    <div>
      <Container>
        <Row>
          <PhoneNumberList/>
        </Row>
        
      </Container>
    </div>
  )
}

export default App
