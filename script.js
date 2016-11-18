
let wdi = ["alyassa", "anusone", "ara", "cliff", "dara", "david f", "david m",  "erik",  "jesse", "julie", "madlyn", "matt", "mason", "neil", "patrick", "rafael", "sandy"];

function shuffle(a){
  for(let i=a.length; i>0; i--){
    let j = Math.floor(Math.random()*i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  console.log(a);
  return a;
}

wdi = shuffle(wdi);

let pods = {
  one: [],
  two: [],
  three: [],
  four: []
};


while(wdi.length>0){
  for(let pod in pods){

    if(pods[pod].length <5){
      pods[pod].push(wdi.shift());

      if(pods[pod].lastIndexOf()> 0){
        pods[pod].pop();
      }
    }
     document.getElementById(pod).innerHTML = pods[pod].join(", ");
  }
}

console.log(`pod 1: ${pods.one} pod 2: ${pods.two} pod 3: ${pods.three} pod 4: ${pods.four} `)
