
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

let pod1 =[];
let pod2 = [];
let pod3 = [];
let pod4 = [];

let pods = {
  one: [],
  two: [],
  three: [],
  four: []
};


  // console.log(student);
  while(wdi.length>0){
  for(let pod in pods){
    if(pods[pod].length <5){
    pods[pod].push(wdi.shift());
    // console.log(pod + " " + pods[pod]);
    // console.log(pods[pod].findIndex(4))
    // if(pods[pod][4] === "undefined"){
    //   pods[pod].pop();
    // }
  }
  }
  }
