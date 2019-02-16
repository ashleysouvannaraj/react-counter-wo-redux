const { Component } = React;

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
    increaseNum() {
        this.setState({
            num: this.state.num +1
        })
    }

    render () {
        return (
        <div>
            <h1>{this.state.num}</h1>
            <button onClick={() => this.increaseNum() }>ADD</button>
        </div> )
    }
}


ReactDOM.render(<Counter />, document.getElementById('root'))