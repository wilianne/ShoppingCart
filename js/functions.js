

function Add(product){
    const quantity = document.getElementById('qtd_'+product);
    const value = document.getElementById('value_'+product);
    const total = document.getElementById('total_'+product);
    
    quantity.innerHTML++;
    
    const result = (quantity.innerHTML* value.innerHTML);

    total.innerHTML = result;
    
}
function Remove(product){
    const quantity = document.getElementById('qtd_'+product);
    const value = document.getElementById('value_'+product);
    const total = document.getElementById('total_'+product);
    
    if(quantity.innerHTML > 1){
        quantity.innerHTML--;
    }
    
    
    let result = (total.innerHTML - value.innerHTML);
    
    

    total.innerHTML = result;
}

