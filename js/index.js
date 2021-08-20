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

function customizeToolsCost(product){
    const memoryAmount = document.getElementById(product).innerText;
    const memoryCost = parseInt(memoryAmount);
    return memoryCost;
}

function totalPrice(){
    //  calculating customize tools cost
    const memoryCost = customizeToolsCost('memory-cost');
    const storageCost = customizeToolsCost('storage-cost');
    const deliveryCost = customizeToolsCost('delivery-cost');
    // calculating total cost 
    const totalCost = document.getElementById('total-price');
    totalCost.innerText = 1299 + memoryCost + storageCost + deliveryCost;
    // calculating net cost
    const netAmount = document.getElementById('net-price');
    netAmount.innerText = 1299 + memoryCost + storageCost + deliveryCost;
 }

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