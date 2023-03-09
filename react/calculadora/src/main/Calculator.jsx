import React, { Component } from "react";
import './Calculator.css'
import Display from "../components/Display";

import Button from "../components/Button";
import { values } from "lodash";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.setDigit = this.setDigit.bind(this)
        this.state = { ...initialState }


    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        }
    }

    setDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        if (n === '<-') {
            let valorAtual = this.state.displayValue
            if (valorAtual === '0') return
            valorAtual = valorAtual.slice(0, -1)
            if (valorAtual === '') valorAtual = '0'
            this.setState({ displayValue: valorAtual })
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label='AC' click={this.clearMemory} />
                <Button label='<-' click={this.setDigit} />
                <Button label='/' click={this.setOperation} />
                <Button label='7' click={this.setDigit} />
                <Button label='8' click={this.setDigit} />
                <Button label='9' click={this.setDigit} />
                <Button label='*' click={this.setOperation} />
                <Button label='4' click={this.setDigit} />
                <Button label='5' click={this.setDigit} />
                <Button label='6' click={this.setDigit} />
                <Button label='-' click={this.setOperation} />
                <Button label='1' click={this.setDigit} />
                <Button label='2' click={this.setDigit} />
                <Button label='3' click={this.setDigit} />
                <Button label='+' click={this.setOperation} />
                <Button label='0' click={this.setDigit} />
                <Button label='.' click={this.setDigit} />
                <Button label='=' click={this.setOperation} />
            </div>
        )
    }
}