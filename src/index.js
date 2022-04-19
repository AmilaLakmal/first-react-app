import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css'
function Greeting() {
  return <section className="booklist">
    <Book></Book>
    <Book></Book>
    <Book></Book>
    <Book></Book>
  </section>;
}



const Book = () => {
  return <article className="book">
    <Image></Image>
    <Title></Title>
    <Author></Author>


  </article>
}

const Image = () => {
  return <img src="https://m.media-amazon.com/images/I/71BfRFOKDiL._AC_UY327_FMwebp_QL65_.jpg"></img>
}
const Title = () => <h1> Book Title</h1>
const Author = () => <h4 > Author</h4>
// const Author = () => <h4 style={{ color: '#617d98', fontSize: 'o.75rem', marginTop: '0.25rem' }}> Author</h4>
const Input = () => <input type="text" onChange={() => console.log('hi')} />

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
