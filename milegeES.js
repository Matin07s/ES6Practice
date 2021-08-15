const mileage=(dist, fuelQty, fuelPrice)=>{
    return (dist/fuelQty)*fuelPrice;
}

console.log( "Rs. ", mileage(100, 5, 105));