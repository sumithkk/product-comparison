import React, { Component } from 'react'
import './compare.css'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'
import { getProducts } from "../../actions/product"
import ProductList from '../../components/ProductList';
import { Category } from '../../components/Category';
import { connect } from 'react-redux';

class ComparePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProducts: [],
            showDrop: false,
            showDiff: false
        }
    }

    async componentDidMount() {
        await (this.props.actions.getProducts());
        if (this.props.data.products !== undefined) {
            this.setState({
                products: Object.keys(this.props.data.products.products.featuresList[0].features[0].values),
                // selectedProducts: this.props.data.selectedProducts
            })

            if (this.props.data.selectedProducts.length === 0) {
                this.props.history.push("/")
            }
        }

    }

    toggleDrop = () => {
        this.setState({
            showDrop: !this.state.showDrop
        })
    }
    toggleDiff = () => {
        this.setState({
            showDiff: !this.state.showDiff
        })
    }
    render() {
        if (this.props.data.products.length === 0 || this.props.data.selectedProducts.length === 0) return <div />
        else return (
            <div className="leftPanel">
                <div style={{
                    display: "flex", paddingTop: "15px",
                    background: "#fff"
                }}>
                    <div className="header">
                        <div>
                            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Compare</div>
                            <div>{this.props.data.selectedProducts.length} items selected</div>
                        </div>

                        <div>
                            <label className="checkboxWrap">
                                <input
                                    name="diff"
                                    type="checkbox"
                                    checked={this.state.showDiff}
                                    onChange={() => this.toggleDiff()} />
                                Show only difference
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    {this.props.data.selectedProducts.map((sp, i) => (
                        <ProductList key={i} sp={sp}
                            remove={this.props.actions.remove}
                            data={this.props.data.products.products.compareSummary}
                        />
                    ))}
                    {this.props.data.selectedProducts.length < 2 && (
                        <div className="prodWrap">
                            <div className="imgPlaceholder">
                                Add
                            </div>

                            <div>
                                <strong>Add a product</strong>
                                <div className="selectBox" onClick={() => this.toggleDrop()}>
                                    <span>Choose a Product</span>
                                    <span style={{ float: "right" }}>▾</span>
                                </div>
                                {this.state.showDrop && (
                                    <div className="selectDrop">
                                        {Object.keys(this.props.data.products.products.featuresList[0].features[0].values).filter(n => !this.props.data.selectedProducts.includes(n)).map(sp => (
                                            <div key={sp} onClick={() => this.props.actions.compare(sp)}>{sp}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div style={{ display: "flex" }}>
                    <CategoryHeading data={this.props.data.products.products.featuresList} />
                    {this.props.data.selectedProducts.map((sp, i) => (
                        <div key={i} style={{ width: "100%" }}>
                            <Category isToggleDiff={this.state.showDiff} data={this.props.data.products.products.featuresList} selectedProduct={sp} index={i} />
                        </div>
                    ))}
                    {this.props.data.selectedProducts.length < 2 && (
                        <div>
                            <CategoryHeading dummy data={this.props.data.products.products.featuresList} />
                        </div>
                    )}
                </div>
            </div >
        )
    }
}

const CategoryHeading = (props) => {
    return (
        <div className="categories" style={{ fontWeight: "bold" }}>
            {props.data.map((f, i) => (
                <div key={i} style={{ width: "100%" }}>
                    <h1 style={{ height: "36px", fontWeight: "bold" }}>{props.dummy ? "" : f.title}</h1>
                    {f.features.map((fl, idx) => (
                        <div key={idx} className="cat" style={{ height: "44px" }}>{props.dummy ? " " : fl.featureName}</div>
                    ))}
                </div>
            ))}

        </div>
    )
}

// export default ComparePage
export default connect(
    state => ({
        data: state.product
    }),
    dispatch => ({
        actions: bindActionCreators(productActions, dispatch),
        getProducts: () => dispatch(getProducts())
    })
)(ComparePage)

