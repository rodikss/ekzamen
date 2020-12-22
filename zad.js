<script> 
let h = 23 
let m = 15 
let s = 46 // время в данный момент 

let h1 = 6 
let m1 = 47 
let s1 = 30 // время, которое добавится к времени выше 

let resultS1 = Math.trunc((s + s1) / 60) 
let resultS2 = (s + s1) % 60 
let sv1 = Math.trunc(resultS2 / 10) 
let sv2 = resultS2 % 10 // нахождение секунд 

let resultM1 = Math.trunc((m + m1) / 60) 
let resultM2 = (m + m1 + resultS1) % 60 
let mv1 = Math.trunc(resultM2 / 10) 
let mv2 = resultM2 % 10 // нахождение минут 

let h2 = (h + h1 + resultM1) % 24 // нахождение часов 

console.log(h2 + ':' + mv1 + mv2 + ':' + sv1 + sv2) // вывод итогового времени 
</script>