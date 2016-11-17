
let wdi = ["alyassa", "ara", "anusone", "cliff", "dara", "david f", "david m", "julie", "jesse", "matt", "erik", "mason", "madlyn", "rafael", "patrick", "neil", "sandy"];

function shuffle(a){
  for(let i=a.length; i>0; i--){
    let j = Math.floor(Math.random()*i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  console.log(a)
}

shuffle(wdi);
