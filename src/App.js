import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import ItemList from './components/ItemList';
import Search from './components/Search';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
      <>
          <Container>
              <Row>
                  <Col><Header></Header></Col>
              </Row>
              <Row>
                  <Col>
                        <Search></Search>
                        <ItemList></ItemList>
                  </Col>
                  <Col>
                        <Item></Item>
                  </Col>
              </Row>
          </Container>         
      </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
