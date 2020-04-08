import { React } from "react";
import "./Cart.css";
import { CartItemList } from "../CartItemList/CartItemList";

export const Cart = (props) => {
    const USCurrencyFormat = props.USCurrencyFormat;
    const total = props.total;
    const selected = props.selected;

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <CartItemList selected={selected} USCurrencyFormat={props.USCurrencyFormat}/>
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
                </div>
            </div>
        </section>
    ) 
}