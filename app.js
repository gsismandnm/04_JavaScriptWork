//String
var str = "string deger";
var num = 12.436

//boolean // true veya false döner
var veriGeldiMi = True;
var kontrol = false;

//object degişkenleri
//eslint => kod yazım standartları demektir. Her şirketin farklı olabilir.
//en meşhuru => airbnm eslint

var araba ={
    marka:"Audi",
    model: "A3",
    yası: 8,
    kazaliMi: false,
    caliştir: function (){
        console.log('araba çalışıyor')
    },
    koltuk:{
        renk:"kırmızı";
        adet: 4,
    }
}

//console yazdırmak için kullanılır.
console.log (araba)

//obje değiştirme örneğin araba kaza yaptıysa kazalımı yerine true
//yazınca artık kazalı olarak çıkacaktır. 

araba.kazaliMi = true;
