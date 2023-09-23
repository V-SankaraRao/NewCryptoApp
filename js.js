let b=document.getElementById("bitcoin");
let e=document.getElementById("eth");
let l=document.getElementById("lite");

async function getBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,litecoin,ethereum&vs_currencies=usd');
        const data = await response.json();
        b.innerHTML=data.bitcoin.usd;
        l.innerHTML=data.litecoin.usd;
        e.innerHTML=data.ethereum.usd;

        
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

getBitcoinPrice();
