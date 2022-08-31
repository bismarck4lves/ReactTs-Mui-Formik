const a = {
    home: "Home",
    buttons: "Buttons",
  };

const arr = Object.keys(a).map(item=> (
     a[item]
))
  
console.log(arr)