function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);
    console.log(length);

    
    for (let i = 0; i < length; i++) {
        console.log(discounted[i]);
    }
    

    return discounted;
}

discountPrices([100,200,300], 0.5);