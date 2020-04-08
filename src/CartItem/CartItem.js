import React from "react";
import './CartItem.css'

export const CartItem = (props) => {
    const feature = props.feature;
    const USCurrencyFormat = props.USCurrencyFormat
    const selectedOption = props.selectedOption;
    const featureHash = props.featureHash;    

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
}

