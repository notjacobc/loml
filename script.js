function generateRandomNumber(topBound){
    return Math.floor(Math.random() * topBound) + 1
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const titleText = document.getElementById("title")
    const lyricText = document.getElementById("lyric-text")
    const img = document.querySelector("img")
    const artistText = document.getElementById("artist")
  
    document.addEventListener("click", () => {
      console.log("click")
      fetch("loml/data.json")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        const lyricNumber = Object.keys(data).length
        let selectedSong = data[Object.keys(data)[generateRandomNumber(lyricNumber)-1]]
        console.log(selectedSong)
  
        titleText.innerHTML = selectedSong.title
        lyricText.innerHTML = selectedSong.lyrics
        artistText.innerHTML = selectedSong.artist
        img.src = selectedSong.imgSrc
      })
    })
    document.querySelector("body").click()
  }) 