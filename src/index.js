import React, {Component} from "react";
import ReactDOM from "react-dom";
function Greeting() {
  return <section>
    <Book></Book>
  </section>;
}


const Book = () => {
  return  <article>
    <Image></Image>
    <Title></Title>
    <Author></Author>
    <Input></Input>
    <App></App>

  </article>
}

const Image = () => {
  return <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlWR55VTSq5rQ5bjdm9bjNtT75d0KZcd8Lv1Jn72v-GGxQPJaa"></img>
}
const Title = () => <h1> Book Title</h1>
const Author = () => <h4> Author</h4>
const Input = () => <input type="text" onChange={()=>console.log('hi')}/>

class App extends Component {
  state = {
    name: ''
  };
  render() {
    return (
      <div>
        <p>Updated name: {this.state.name}</p>
        <p>Change name:</p>
        <input
          type="text"
          onChange={e => {
            this.setState({
              name: e.target.value
            });
          }}
        />
      </div>
    );
  }
}



ReactDOM.render(<Greeting />, document.getElementById("root"));
