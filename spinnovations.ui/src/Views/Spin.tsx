import React from 'react';
import { ProductCategoryBar } from '../Components/ProductCategoryBar';
import productCategoryData from '../Helpers/Data/ProductCategoryData';
import productData from '../Helpers/Data/ProductData';
import { Product } from '../Helpers/Interfaces/ProductInterfaces';
import { ProductCategory } from '../Helpers/Interfaces/ProductCategoryInterfaces';
import Wheel from '../Components/Wheel';

type SpinState = {
    products: Product[],
    filteredProducts: Product[],
    categories: ProductCategory[]
}

class Spin extends React.Component {

    state: SpinState = {
        products: [],
        filteredProducts: [],
        categories: []
    };

    componentDidMount(): void {
        productCategoryData.getProductCategories().then((response: ProductCategory[]) => {
            this.setState({
                categories: response
            })
        });
        productData.getProducts().then((response: Product[]) => {
            this.setState({
                products: response,
                filteredProducts: response,
            })
        });
    }

    componentDidUpdate(): void {
        const { products } = this.state;
        console.log("products before filter", this.state.filteredProducts);
        const filteredProducts = products?.filter((product: Product) => product?.Quantity_In_Stock > product?.quantity);
        console.log("products after filter", filteredProducts);
        this.setState({ filteredProducts });
    }

    filterByCategory = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const category = e.target.id;
        const { products } = this.state;
        const filteredProducts = products?.filter((product: Product) => product.category_Id == category);
        this.setState({ filteredProducts });
    }

    filterAll = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let { filteredProducts } = this.state;
        const { products } = this.state;
        if (e.target.id == "all-products"){
            filteredProducts = products;
            this.setState({ filteredProducts });
        }
    }

    render(): JSX.Element {
        const { categories, filteredProducts } = this.state;
        return (
            <>
            <ProductCategoryBar categories={categories} filter={this.filterByCategory} all={this.filterAll} updateForQuantity={}/>
            <Wheel products={filteredProducts}/>
            </>
        )
    }
}

export default Spin;
