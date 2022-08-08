module.exports = function reverse (n) {
    let nStroka = n.toString();
    let Array = [...nStroka];
    let newArray = [];
     if (n < 0) {
        let Array2 = Array.shift();
       for(let i = 0;i < Array.length;i++){
         newArray.unshift(Array[i]);
       } return Number(newArray.join(''));
     } else if (n > 0){
       for(let i = 0;i < Array.length; i++){
         newArray.unshift(Array[i]);
       } return  Number(newArray.join(''));
     } 
        
    
}
