//For Loops + radiobutton
function calculatePrice(formData){
    let price, groupSize;
    
     for(let i = 0; i<formData.length;i++){
                if(formData[i].checked){
                    price = formData[i].value ;
                    groupSize = formData[i].parentElement.innerText;
                }
            }
            document.getElementById("result").innerHTML = 
            `You selected ${groupSize} person package. So the price is ${price}`;
    }