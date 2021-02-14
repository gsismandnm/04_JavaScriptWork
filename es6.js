//js'ta neler olması gerektiğine karar veren bir ekip var. bu ekibin yayınladığı versiyonlardan birisi es6
// let const ifadeleri geldi bunlar var yerine kullanılıyor.
// var => let olarak değişti. bundan sonra var yerine let yazılmaya başlandı. Birden fazla kez isim tanımlamanın 
// önüne geçti varda istediğin vardı. let sayı yerine string müsaade eder. yani aynı ismi veremezsin ancak içeriğini değiştirebilirsin.

//const : nedir? adı sabit olan isimleri başka yerde değiştirmeye izin vermediler.


var i = 10;
var i = "murat";
var i = true;

let a = 10;
let a = "murat"; yazmaya izin vermez.
//let a'yı yeniden tanımlamaya izin vermez. Ancak içeriği değiştirmeye izin verir


const sabit = 20;
const sabit = 20;
//const'ta sabit'i yeniden yazmaya izin vermez. İçeriği değiştirmeye de izin vermez.

const login = function () {
    console.log("merhaba")}
// const ile tanımladığını başka yerlerde değiştiremezsin yeni ad veremezsin. bunlar sabit olur.


const arrowFunction = () => 
    console.log "Merhaba arrowFunction"
//Bu yapı bize bir function olduğunu gösterir. 


//Eski versiyonlarda böyle yazılıyordu.
function login =  function (sayi1, sayi2){
    return sayi1 + sayi2; 
}

const topla =(sayi1, sayi2) =>sayi1 + sayi2;
//es6 ile bu şekilde yazılıyor.

