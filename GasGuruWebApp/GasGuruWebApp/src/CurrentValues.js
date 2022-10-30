import React from 'react'; 

function CurrentValues(props) {
    return (
        <div>
            <h2>erc20_gas_average_usd: {props.currentData.erc20_gas_average_usd}</h2>
            <h2>erc20_gasprice_average: {props.currentData.erc20_gasprice_average}</h2>
            <h2>eth_gas_average_usd: {props.currentData.eth_gas_average_usd}</h2>
            <h2>ether_conftime_average: {props.currentData.ether_conftime_average}</h2>
            <h2>ether_confirmtime_dif: {props.currentData.ether_confirmtime_dif}</h2>
            <h2>ether_gas_usd_dif: {props.currentData.ether_gas_usd_dif}</h2>
            <h2>ether_gasprice_average: {props.currentData.ether_gasprice_average}</h2>
            <h2>ether_gasprice_dif: {props.currentData.ether_gasprice_dif}</h2>
        </div>
    )
}

export default CurrentValues;