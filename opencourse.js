function startVideo() {
    url = document.getElementById("url").value;
    hora = document.getElementById("hora").value;
    min = document.getElementById("minuto").value;
    sec = document.getElementById("segundo").value;
    let timeSec = hora* 3600 + min * 60 + sec*1;

    console.log("Time: ", timeSec);
    console.log(560 * 1.5, 315 * 1.5);
    video = document.getElementById("video");

    let arrayDeCadenas = url.split("/");
    let arrayDeCadenas2 = arrayDeCadenas[3].split("?");

    video.src = "https://www.youtube.com/embed/"+arrayDeCadenas2[0]+"?start=" + timeSec;
}

