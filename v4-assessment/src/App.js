import React,{Component} from 'react'
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './react-starter/data'
class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render(){
  return (
    <div className="App">
      <Header/>
      <BookList data={data}/>
      <Shelf/>
      
    </div>
    );
  }
}

export default App;