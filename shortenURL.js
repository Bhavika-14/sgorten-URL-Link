let btnShorten=document.getElementById('button-shorten')
btnShorten.addEventListener('click',shortenLink)
function shortenLink(e){
let current=document.getElementById("addon")
let long_Url=document.getElementById("Url_link")
let longUrl=long_Url.value
let currElement=document.createElement('div')
currElement.className="container"
console.log(longUrl)
      fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
       headers: {
       Authorization': 'Bearer TOKEN-NUMBER',
       'Content-Type': 'application/json'
       },
        body: JSON.stringify({ "long_url": longUrl, "domain": "bit.ly" })
       })
        .then(function(response){
         response.json().then(function(json){
               console.log(json.link)
               currElement.innerHTML=json.link
             })
         })
            
 let newElement=document.createElement('div')
 newElement.className="card"
 newElement.innerHTML=`<div class="card">
          <div class="card-body margin:10pt padding:2pt">
             New Shortened Link:
           </div>
         </div>`
   current.appendChild(newElement)
   newElement.appendChild(currElement)
   }
