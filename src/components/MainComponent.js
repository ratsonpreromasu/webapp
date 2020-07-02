import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishdetailComponent from "./DishdetailComponent";

class MainComponent extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishdetailComponent
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default MainComponent;
