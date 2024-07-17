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

    
    setInterval(() => {
      const countdownHolder = document.querySelector("#count")
      
      let countdownDate = 1723914000000 - Date.now()
      let days = Math.floor(countdownDate / 86400000)
      countdownDate -= (days * 86400000)
      let hours = Math.floor(countdownDate / 3600000)
      countdownDate -= (hours * 3600000)
      let minutes = Math.floor(countdownDate / 60000)
      countdownDate -= (minutes * 60000)
      let seconds = Math.floor(countdownDate / 1000)

      countdownHolder.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    }, 1000)
  })