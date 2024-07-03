document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
    .then((resp) => {
      return resp.json()
    })
    .then((data) =>{
      const holder = document.querySelector("#card-holder")
      const cards = Object.values(data)
      for(i = 0; i<cards.length; i++){
        holder.innerHTML += `
          <div id="ind-song-card">
            <img src="${cards[i].imgSrc}">
            <div id="ind-song-card-text">
              <h1>${cards[i].title}</h1>
              <h4>${cards[i].lyrics}</h4>
            </div>
          </div>
        ` 
      }
    })
  })