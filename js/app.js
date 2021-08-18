function updateProductNumber(product, price, isIncrasing){
    const productInput = document.getElementById(product +'-input');
    let productInputField = productInput.value;
    if(isIncrasing == true){
        productInputField = parseInt(productInputField) + 1;
    }
    else if(productInputField > 0){
        productInputField = parseInt(productInputField) - 1;
    }
    productInput.value = productInputField;
    const phoneTotal = document.getElementById(product +'-total');
    phoneTotal.innerText = productInputField * price;

    calculateTotalPrice();

}
function getInputValue(product){
    const productInput = document.getElementById(product +'-input');
    const productNumberText = productInput.value;
    const productNumber = parseInt(productNumberText);
    return productNumber;
}
function calculateTotalPrice(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function(){
   updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false); 
})
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})