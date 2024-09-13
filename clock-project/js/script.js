let hr = document.getElementById('hour');
let m = document.getElementById('mints');
let s = document.getElementById('sec');

function displaytime() {
   let date = new Date();
   
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   let hR = 30 * hh + mm / 2;
   let mR = 6 * mm;
   let sR = 6 * ss; 

   hr.style.transform = 'rotate('+hR+'deg)';
   m.style.transform = `rotate(${mR}deg)`;
   s.style.transform = `rotate(${sR}deg)`;
}

setInterval(displaytime, 1000);
