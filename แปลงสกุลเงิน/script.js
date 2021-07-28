const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const ratetext  = document.getElementById('rate');
const swap  = document.getElementById('btn');

currency_one.addEventListener('change',calculatemoney);
currency_two.addEventListener('change',calculatemoney);

// call api data
function calculatemoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    let url =`https://v6.exchangerate-api.com/v6/6d8e2e5a69f2dbb41a9793aa/latest/${one}`;
    fetch(url).then(res=>res.json()).then(data=>{
        const rate = data.conversion_rates[two];
        ratetext.innerText=`1 = ${one}=${rate}${two}`;
    })
}
calculatemoney();
