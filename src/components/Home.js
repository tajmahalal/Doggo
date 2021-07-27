
import React from "react";
import { Link, } from "react-router-dom";


class App extends React.Component {
  state = {
    breeds: {},
    input: '',
  }

  componentDidMount() {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ breeds: data })
    })
  }

  onChangeHandler(e){
    this.setState({
      input: e.target.value,
    })
  }




  render(){
    const breeds = this.state.breeds.message;
    console.log(breeds)
    return (
    <div>
      <header>DOG BREEDS:</header>
      <form>
        <label>
          Breed:
          <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
          </label>
        </form>
        {/* Below has a filter to match the substring so the more you type the better the results */}
      {breeds ? Object.keys(breeds).filter(d => this.state.input === '' || d.includes(this.state.input)).map((item, index) => {
        return (
          <Link to={{
            pathname: "/SpecificBreed",
            state: {
              breed: item,
            },
          }} key={index}>{item} <br></br></Link>
        )}): <p></p> }
    </div>
  );
  }

}

export default App;
