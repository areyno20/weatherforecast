function GetInfo(){
  const newName = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = "--"+newName.value+"--"

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=03c9f747d082d258ab70c3e6fa82b314')
.then(response => response.json())
.then(data=>{
  //day 1
  for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)+"Min").innerHTML = "Min:" + Number(data.list[1].main.temp_min-273.15).toFixed(1)+"°";
  }
  for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)+"Max").innerHTML = "Max:" + Number(data.list[1].main.temp_max-273.15).toFixed(1)+"°";
  }
  for(i=0;i<5;i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
  }
  
  //day 2
  for(i=1;i<5;i++){
    document.getElementById("day"+(i+1)+"Min").innerHTML = "Min:" + Number(data.list[6].main.temp_min-273.15).toFixed(1)+"°";
  }
  for(i=1;i<5;i++){
    document.getElementById("day"+(i+1)+"Max").innerHTML = "Max:" + Number(data.list[6].main.temp_max-273.15).toFixed(1)+"°";
  }
  for(i=1;i<5;i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[6].weather[0].icon + ".png";
  }
  
  //day 3
  for(i=2;i<5;i++){
    document.getElementById("day"+(i+1)+"Min").innerHTML = "Min:" + Number(data.list[14].main.temp_min-273.15).toFixed(1)+"°";
  }
  for(i=2;i<5;i++){
    document.getElementById("day"+(i+1)+"Max").innerHTML = "Max:" + Number(data.list[14].main.temp_max-273.15).toFixed(1)+"°";
  }
  for(i=2;i<5;i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[14].weather[0].icon + ".png";
  }

  //day 4
  for(i=3;i<5;i++){
    document.getElementById("day"+(i+1)+"Min").innerHTML = "Min:" + Number(data.list[22].main.temp_min-273.15).toFixed(1)+"°";
  }
  for(i=3;i<5;i++){
    document.getElementById("day"+(i+1)+"Max").innerHTML = "Max:" + Number(data.list[22].main.temp_max-273.15).toFixed(1)+"°";
  }
  for(i=3;i<5;i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[22].weather[0].icon + ".png";
  }

  //day 5
  for(i=4;i<5;i++){
    document.getElementById("day"+(i+1)+"Min").innerHTML = "Min:" + Number(data.list[30].main.temp_min-273.15).toFixed(1)+"°";
  }
  for(i=4;i<5;i++){
    document.getElementById("day"+(i+1)+"Max").innerHTML = "Max:" + Number(data.list[30].main.temp_max-273.15).toFixed(1)+"°";
  }
  for(i=4;i<5;i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[30].weather[0].icon + ".png";
  }
})
.catch(err => alert("Unable to Load"))
}

function DefaultScreen(){
  document.getElementById("cityInput").defaultValue = "Adelaide";
  GetInfo();
}
