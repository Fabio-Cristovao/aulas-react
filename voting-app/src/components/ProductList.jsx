import React, { Component } from "react";
import Product from "./Product";
import { products } from "../seeds";

export class ProductList extends Component {
  state = {
    products: [],
    descendent: true,
  };

  toggleSort = () => {
    this.setState({
      descendent: !this.state.descendent,
    });
  };

  handleProductUpVote = (id, vote) => {
    const nextProducts = this.state.products.map((p) => {
      if (p.id === id) {
        return { ...p, votes: p.votes + vote };
      } else {
        return p;
      }
    });

    this.setState({ products: nextProducts });

    /* products.forEach( p => {
      if(p.id === productId){
        p.votes = p.votes + 1;
        debugger;
      }
    }) */
  };

  componentDidMount() {
    this.setState({ products });
  }

  render() {
    /* const sortedProducts = this.state.products.sort( (a, b) => {
      if(this.state.descendent){
        return (b.votes - a.votes)
      } else {
        return (a.votes - b.votes)
      }
    } ) */

    const sortedProducts = this.state.products.sort((a, b) =>
      this.state.descendent ? b.votes - a.votes : a.votes - b.votes
    );

    const productComponents = sortedProducts.map((p) => (
      <Product
        key={"productID-" + p.id}
        id={p.id}
        title={p.title}
        description={p.description}
        url={p.url}
        votes={p.votes}
        submitterAvatarUrl={p.submitterAvatarUrl}
        productImageUrl={p.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));

    // const product = products[1];
    /* const {id, title, description, url, votes, submitterAvatarUrl, productImageUrl} = products[0]; */
    //console.log(product);

    return (
      <div className="ui unstackable items">
        <button onClick={this.toggleSort}>UP / DOWN</button>
        {productComponents}
      </div>
    );
  }
}

export default ProductList;
