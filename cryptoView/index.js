function convetToJson(response){
return response.json();
}

function showData(data){
  const  bitcoin_price =document.getElementById('bitcoin_price');
  const ethereum_price = document.getElementById('ethereum_price');
  const tether_price = document.getElementById('tether_price');
  const solana_price     = document.getElementById('solana_price');
  const binancecoin_price = document.getElementById('binancecoin_price');
  const cardano_price  = document.getElementById('cardano_price');
  const vechain_price = document.getElementById('vechain_price');
  const filecoin_price = document.getElementById('filecoin_price');
  const monero_price   = document.getElementById('monero_price');
  const fantom_price  = document.getElementById('fantom_price');
  const apecoin_price   = document.getElementById('apecoin_price');
  const waves_price  = document.getElementById('waves_price');
  const polkadot_price  = document.getElementById('polkadot_price');
  const dogecoin_price  = document.getElementById('dogecoin_price');
  const terrausd_price  = document.getElementById('terrausd_price');
  const cronos_price  = document.getElementById('cronos_price');
  const dai_price  = document.getElementById('dai_price');
  const tron_price  = document.getElementById('tron_price');
  const algorand_price  = document.getElementById('algorand_price');
  const stellar_price  = document.getElementById('stellar_price');
  const okb_price  = document.getElementById('okb_price');
  const uniswap_price  = document.getElementById('uniswap_price');
 

  bitcoin_price.innerText  = data.bitcoin.usd;
  ethereum_price.innerText = data.ethereum.usd;
  tether_price.innerText  = data.tether.usd;
  solana_price.innerText  = data.solana.usd;
  binancecoin_price.innerText = data.binancecoin.usd;
  cardano_price.innerText   = data.cardano.usd;
  vechain_price.innerText = data.vechain.usd;
  filecoin_price.innerText = data.filecoin.usd;
  monero_price.innerText   = data.monero.usd;
  fantom_price.innerText  = data.fantom.usd;
  uniswap_price .innerText   = data.uniswap.usd;
  okb_price.innerText   = data.okb.usd;
  stellar_price.innerText   = data.stellar.usd;
  algorand_price.innerText   = data.algorand.usd;
  tron_price.innerText   = data.tron.usd;
  dai_price.innerText   = data.dai.usd;
  cronos_price.innerText   = data.cronos.usd;
  terrausd_price.innerText   = data.terrausd.usd;
  dogecoin_price.innerText   = data.dogecoin.usd;
  polkadot_price.innerText   = data.polkadot.usd;
  waves_price.innerText   = data.waves.usd;
  apecoin_price.innerText=data.apecoin.usd;

console.log(data);
}
fetch( "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cwaves%2Capecoin%2Cfantom%2Cmonero%2Cfilecoin%2Cvechain%2Ctether%2Cuniswap%2Cokb%2Cstellar%2Calgorand%2Ctron%2Cdai%2Csolana%2Ccronos%2Cbinancecoin%2Ccardano%2Cpolkadot%2Cdogecoin%2Cterrausd%2C&vs_currencies=USD").then(convetToJson).then(showData)