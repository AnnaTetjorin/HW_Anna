const getCoins = (sum, coins) => {
    const result = [];
    const coinCount = coins.length;
  
    // Сначала сортируем монеты в порядке убывания
    coins.sort((a, b) => b - a);
  
    for (let i = 0; i < coinCount; i++) {
      while (sum >= coins[i] && result[i] < coinLimit) {
        sum -= coins[i];
        result[i] = (result[i] || 0) + 1;
      }
    }
  
    return result;
  };
  
  const main = () => {
    const penny = [1, 3, 4, 2];
    const amount = 5;
    const coinLimit = 2; // ограничение на количество монет каждого номинала
    const res = getCoins(amount, penny, coinLimit);
    console.log(res);
  };
  
  main();
  