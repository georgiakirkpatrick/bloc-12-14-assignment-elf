import { React } from "react";
import { CartItem } from "../CartItem/CartItem";

export const CartItemList = (props) => {
    const selected = props.selected;
    const USCurrencyFormat = props.USCurrencyFormat;

    Object.keys(selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = selected[feature];
    
        return (
            <CartItem 
                feature={feature} 
                USCurrencyFormat={USCurrencyFormat}
                featureHash={featureHash} 
                selectedOption={selectedOption}
            />
        );
    })
}