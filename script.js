function shuffle(a){
  for(let i=a.length; i>0; i--){
    let j = Math.floor(Math.random()*i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  console.log(a);
  return a;
}

let node = document.createElement("h4");
let textnode = document.createTextNode("(Click title to sort class)");
node.appendChild(textnode);
let element = document.getElementsByTagName("header")[0];
element.appendChild(node);
// element.insertBefore(node, element.childNodes[2])

document.getElementsByTagName("h1")[0].addEventListener("click", function(){

  let wdi = ["alyssa", "anusone", "ara", "clifton", "dara", "david f", "david m",  "erik",  "jesse", "julie", "madlyn", "matthew", "mason", "neil", "patrick", "rafael", "sandy"];

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

});

// console.log(`pod 1: ${pods.one} pod 2: ${pods.two} pod 3: ${pods.three} pod 4: ${pods.four} `)
