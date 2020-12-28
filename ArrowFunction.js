const play1 = (funky) => {return funky + " music";}
const play2 = funky => {return funky + " music";}
const play3 = funky => funky + " music";
console.log(play1('hi'));
console.log(play2('hi'));
console.log(play3('hi'));

// Arrow function without argument
const f1 = () => "hi";
const f2 = () => {return "hi";}
const f3 = () => {
    return "hi";
}
console.log(f1());
console.log(f2());
console.log(f3());