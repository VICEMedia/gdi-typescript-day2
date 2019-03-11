import React, { Component } from 'react';
import './App.css';
import { OrderComponent, FlowerType } from './OrderComponent';
import { Vase } from './Vase';
import { Flower, Rose, Tulip } from './flowers';

interface AppState {
  flowers: Flower[];
}

interface Order {
  type: FlowerType;
  amount: number;
  color: string;
}

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      flowers: [],
    };
  }

  createBouquet = (order: Order) => {
    const bouquet: Flower[] = [];

    for (let i = 0; i < order.amount; i++) {
      switch(order.type){
        case('rose'):
          for (let i = 0; i < order.amount; i++) {
            bouquet.push(new Rose(order.color));
          }
          break;

        case('tulip'):
          for (let i = 0; i < order.amount; i++) {
            bouquet.push(new Tulip(order.color));
          }
          break;
      }
    }

    this.setState({
      flowers: [...this.state.flowers, ...bouquet],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My Flowershop</h1>
        <OrderComponent handleSubmit={this.createBouquet}/>
        <Vase flowers={this.state.flowers} />
      </div>
    );
  }
}

export default App;
