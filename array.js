var arr = ["murat", "ahmet", "mehmet"];
var arr2 =["murat", 12.3, false,{marka:"Audi", [1, 2, 3]}]

//arraylerin içinde indexler vardır. 
//arr için Sıfıran başlar 0 murata 1 ahmete 2 mehmete karşıllık gelir.
//arraylerin içinde her türden değer bulunabilir.

console.log (arr[0]);
// bu console murat değerini getirir.

console.log("array içindeki eleman sayısı:"+ arr.length);
// bu console 3 değerini getirir.

console.log(arr2)
//arr2 içindeki her şeyi yazdırır.

console.log(arr2[4][1])
//arr2 içindeki 4 indeksteki elemanın (ilki sıfır olduğu için) 2'nci elemanını getirir yani 2 getirir.

arr.forEach(x=>console.log(x));
//yukarıdakinin aynısını for döngüsü ile de yapılabilir

//for (let index = 0; index <arr2.length; index++)
//burada eksiklik var.
//NOT:  arrayler kşeli parantez ile başlar ve biter.  İçinde her cinsten veriyi tutabilir.