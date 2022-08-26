const foo = {
  name: "bismarck",
  idade: 18,
  endereco:  "alameda dos anjos 666"
};

const foo2 = {...foo, ...{name:"alameda dos anjos" }}


const  {name, ...rest} = foo

console.log(
    name,
    rest
    
)