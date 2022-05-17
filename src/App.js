import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Components/ProfilePhoto';
import Adresse from './Components/Adresse';
import FullName from './Components/FullName';
import {Card } from 'react-bootstrap'

function App() {
  return (
    <>



    
      <div className='profile'>
      <ProfilePhoto></ProfilePhoto>
      
      <Card style={{ width: '18rem'  }}>

  <Card.Body>
    <Card.Title><FullName/></Card.Title>
    <Card.Text>
    <Adresse></Adresse>
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
</>

    
    
  );
}

export default App;
