const root = document.getElementById('root')


class App extends React.Component {
    state = { 
        num1: '',
        num2: '',
        result: '',
    }

    handleChangeNum1 = e => this.setState({num1: e.target.value});

    handleChangeNum2 = e => this.setState({num2: e.target.value});

    calculate = e => {
        const { sign } = e.target.dataset;
        this.setState({result: eval(`${this.state.num1} ${sign} ${this.state.num2}`)});
    }

    render() {
        return <section>
                <input type="number" value={this.state.num1} onChange={this.handleChangeNum1}/>
                <button data-sign='+' onClick={this.calculate}>+</button>
                <button data-sign='-' onClick={this.calculate}>-</button>
                <button data-sign='*' onClick={this.calculate}>*</button>
                <button data-sign='/' onClick={this.calculate}>/</button>
                <input type="number" value={this.state.num2} onChange={this.handleChangeNum2}/>
                <input type="result" disabled value={this.state.result}/>
                <h1>{this.state.num1}</h1>
        </section>
    }
}

ReactDOM.render(<App />, root)


