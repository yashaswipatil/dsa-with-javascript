//* write a function to buy and sell stocks

function BuyAndSellStocks(prices){
   let min = prices[0];
   let maxProfit = 0;

   for(let i =0; i< prices.length;i++){
    if(prices[i]-min > maxProfit){
        maxProfit = prices[i]-min;
    }
    if(prices[i] < min){
        min = prices[i]
    }
   }
}

let prices = [7, 1, 5, 3, 6, 4];

let res = BuyAndSellStocks(prices);

console.log(res)

//!Output => 5