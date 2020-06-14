import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Redirect from="/messages" to="/posts"></Redirect>
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
