function getLyrics(callback, url) {
  const request = new XMLHttpRequest();
  request.open("GET", url);

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(undefined, data);
    }

    if (this.status === 200) {
      callback("Error get data", undefined);
    }
  };

  request.send;
}

getLyrics(funcction (error, data){
    const lyrics = document.getElementById('lyrics')
})
