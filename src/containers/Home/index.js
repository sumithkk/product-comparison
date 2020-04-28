import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { ProductList } from '../../components'
import * as productActions from '../../actions/product'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  select = (p) => {
    this.props.actions.compare(p);
  }

  componentDidMount() {
    this.props.actions.getProducts()
  }


  render() {
    if (this.props.products.length === 0) return <div />
    let prods = Object.keys(this.props.products.products.compareSummary.images)

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.products.products.length === undefined &&
            prods.map((p, i) => (
              <Link key={i} to={`/compare/${p}`} onClick={() => this.select(p)}>
                <ProductList sp={p} data={this.props.products.products.compareSummary} />
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
