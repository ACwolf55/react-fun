
import './App.css';
import React, {Component} from 'react'

class App2 extends Component {
    constructor(){
        super()
        //state is where to put variables
        this.state={
            colors:['orange','blue','black'],
            number:1,
            word:'word'
        }
    }

    //put your functions between the contructor & render
add=()=>{
    this.setState({number:this.state.number+1})
}




//the render&return is where you put all your everything to be displayed/html
render(){
  return (
    <div className="App2">
 <p>app2</p>
 <button onClick={this.add}>Add</button>
 <p>{this.state.number}</p>
<input onChange={(e)=>{this.setState({word:e.target.value})}}></input>
<p>{this.state.word}</p>
<p>{this.state.colors[0]}</p>

    </div>
  );
}
}

export default App2;
