import React, { Component } from 'react';
import { Tulip, Rose } from './flowers';

export type FlowerType = 'tulip' | 'rose';

interface Order {
  type: FlowerType;
  amount: number;
  color: string;
}

interface OrderComponentProps {
  handleSubmit: (order: Order) => void;
}

interface OrderComponentState {
  type: FlowerType;
  amount: string;
  color: string;
}

export class OrderComponent extends Component<OrderComponentProps, OrderComponentState>{
  constructor(props: OrderComponentProps) {
    super(props);
    this.state = {
      type: 'tulip',
      amount: '1',
      color: '',
    };
  }

  handleAmountChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ amount: event.currentTarget.value });
  }

  handleColorChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      color: event.currentTarget.value,
    });
  }

  handleFlowerChange = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({
      type: event.currentTarget.value as FlowerType,
    });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.handleSubmit({
      type: this.state.type,
      amount: parseInt(this.state.amount),
      color: this.state.color,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.type} onChange={this.handleFlowerChange}>
          <option value='tulip'>Tulip</option>
          <option value='rose'>Rose</option>
        </select>
        <br/>
        <label>Amount: </label>
        <input type="number" placeholder="amount" value={this.state.amount} onChange={this.handleAmountChange} />
        <br/>
        <label>Color: </label>
        <input placeholder="color" value={this.state.color} onChange={this.handleColorChange}/>
        <br/>
        <button>submit</button>
      </form>
    )
  }
}