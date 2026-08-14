/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let min = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) { //we are starting the loop from 1 because we cannot buy or sell the stock on the first date.
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
};

//need to return the maximum profit.
//if I do not achieve any profit I will return 0