function convertToJson(response) {
  return response.json();
}

function showInfo(data) {
  const coin_img = document.getElementById("coin_img");
  const coin_name = document.getElementById("coin_name");
  const text = document.getElementById("text");

  text.innerHTML = data.description.en;
  coin_name.innerText = data.name;
  coin_img.src = data.image.large;
}

function showPrices(data) {
  const inr_price = document.getElementById("inr_price");
  const usd_price = document.getElementById("usd_price");
  const eur_price = document.getElementById("eur_price");

  inr_price.innerText = data[coin_id].inr;
  usd_price.innerText = data[coin_id].usd;
  eur_price.innerText = data[coin_id].eur;
}

function showHistory(data) {
 //  console.log(data);
  showGraph(data);
}
 var url  = new URL(window.location.href);
 var params = new URLSearchParams(url.search);
 let coin_id = params.get("coin");
 
fetch(
  `https://api.coingecko.com/api/v3/coins/${coin_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`).then(convertToJson).then(showInfo);

fetch(
  `https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=inr%2Cusd%2Ceur`).then(convertToJson).then(showPrices);

fetch(
  `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=inr&days=14&interval=daily`).then(convertToJson).then(showHistory);

function convertUnixTime(time){

const date = new Date(time);
const date_day = date.getDate();
const month = "0" + date.getMonth() +1;

const readable = date_day + '_' + month;
return readable;
}

function showGraph(history_data){

  let lables =[];
  let prices =[];
  
   for(let i=0; i<history_data.prices.length; i +=1){
    const single_price = history_data.prices[i];

    const readable = convertUnixTime(single_price[0]);
    lables.push(readable[0]);
    prices.push(single_price[1]);
  
   }
   console.log(history_data.prices);
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data:{
      labels:lables,
      datasets: [
        {
          label:  'price (in INR)',
          data: prices,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  
}

