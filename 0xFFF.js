const app = document.getElementById('root');
const logo = document.createElement('img');logo.src = 'https://avatars1.githubusercontent.com/u/13474314?s=32';
const container = document.createElement('div');container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/', true);
request.onload = function () {
  // @__hgd__.$Insides
  var dgggg = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    dgggg.forEach(id => {
    
      const fart = document.createElement('div');
      fart.setAttribute('class', 'fart');

      const h1 = document.createElement('h1');
      h1.textContent = 'MAX: ' + id.max_supply + id.name;
      
      const prae = document.createElement('marquee');
      prae.textContent
      
      const h2 = document.createElement('h2');
      h2.textContent = 'nOUR, ' + id.name + ' , ' + id.percent_change_7d + ' ‰:⇨ has now just ' + id.total_supply;

      ee = document.createElement('eeee');
      ee.textContent = ' …  aworc ' + id.market_cap_usd + ' vCrazy,№. » ' + id.rank + 'th this dæy!';
      
      const p = document.createElement('p');
      id.name = id.name.substring(2, 7) + " -- > - < - " + id.price_btc;
      p.textContent = `${id.name}...`;

      container.appendChild(fart);
      fart.appendChild(h1);
      fart.appendChild(h2);
      fart.appendChild(ee);
      fart.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `wuhtf ¬gg senor dgggg`;
    app.appendChild(errorMessage);
  }
}

request.send();
