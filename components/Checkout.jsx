import {selectProducts} from "../store/choosedProductsState";
import {useSelector} from "react-redux";
import CheckoutItemCard from "./CheckoutItemCard";

const Checkout = () => {
    const products = useSelector(selectProducts);
    return (
        <div>
            <div className={'mt-10 justify-center flex'}>
                <h1 className={'text-xl'}>Final Checkout</h1>
            </div>
            <div className={'flex flex-wrap w-11/12 mx-auto justify-center'}>
                {
                    products.map((product, index) => <CheckoutItemCard key={index} item={product}/>)
                }
            </div>
        </div>

    )
}

export default Checkout;