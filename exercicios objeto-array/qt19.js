let nums1 = [1,2,3,4,5]
let nums2 = [0,10]

media = numeros => numeros.reduce((valorAnterior,atual) => valorAnterior+atual,0)/(numeros.length)


console.log(media(nums1))
console.log(media(nums2))