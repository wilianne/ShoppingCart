function changeQuantity(product, action) {
    const quantity = document.getElementById('qtd_' + product);
    const value = document.getElementById('value_' + product);
    const total = document.getElementById('total_' + product);
    
    let currentQuantity = parseInt(quantity.innerHTML);
    if (action == '-' && currentQuantity == 0) {
        alert("Attention! The quantity cannot be less than 0.");
    } else {
        if (action == "+") {
            currentQuantity++;
        } else {
            currentQuantity--;
        }
        quantity.innerHTML = currentQuantity;
        
        const valueNumber = numberOnly(value.innerHTML);
        const totalValue = currentQuantity * valueNumber;
        total.innerHTML = valueFormat(totalValue);
        Sum();
    }
}

function Sum() {
    let sum = 0;
    
    for (let i = 1; i < 4; i++) {
        let number = numberOnly(document.getElementById('total_' + i).innerHTML);
        sum += number;
    }
    document.getElementById('subtotal').innerHTML = valueFormat(sum);
}

function numberOnly(n) {
    return parseFloat(n.replace(/[^\d]/g, ''));
}

function valueFormat(n) {
    return 'R$ ' + n.toLocaleString('pt-BR');
}
