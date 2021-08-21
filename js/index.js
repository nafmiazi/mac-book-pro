//  Function for receiving customize tools request
function customizeTools(tools, cost){
    if(tools == 'memory'){
        document.getElementById(tools + '-cost').innerText = cost;
    }
    else if(tools == 'storage'){
        document.getElementById(tools + '-cost').innerText = cost;
    }
    else if(tools == 'delivery'){
        document.getElementById(tools + '-cost').innerText = cost;
    }
    // calling for total price
    totalPrice();
}

//  Function for calculating customize tools cost
function customizeToolsCost(product){
    const productAmount = document.getElementById(product).innerText;
    const productCost = parseInt(productAmount);
    return productCost;
}

// Function for calculating total cost
function calculateTotalCost(priceArea, memoryCost, storageCost, deliveryCost){
    const totalCost = document.getElementById(priceArea);
    totalCost.innerText = 1299 + memoryCost + storageCost + deliveryCost;
}

// Function for total price
function totalPrice(){
    //  calling function for customize tools cost
    const memoryCost = customizeToolsCost('memory-cost');
    const storageCost = customizeToolsCost('storage-cost');
    const deliveryCost = customizeToolsCost('delivery-cost');

    //  calling function for calculating total cost
    calculateTotalCost('total-price', memoryCost, storageCost, deliveryCost);
    calculateTotalCost('net-price', memoryCost, storageCost, deliveryCost);
 }

// Adding Event Handler for Promo Code 
document.getElementById('promo-btn').addEventListener('click', function(){
    const promoCode = document.getElementById('promo-code').value;
    const netPresentAmount = document.getElementById('total-price');
    const netPrice = netPresentAmount.innerText;
    const netAmount = parseInt(netPrice);
    if(promoCode.toLowerCase() == 'stevekaku'){
        const netdiscount = netAmount * 0.2;
        document.getElementById('net-price').innerText = netAmount - netdiscount;
    }
    document.getElementById('promo-code').value = '';
});