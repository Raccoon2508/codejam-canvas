let listLines=document.querySelectorAll("li");
let elementSize=32;

for(let item of listLines){
item.onclick=function(){


for(let item of listLines){
  if(item.classList.contains("active")){
   item.classList.remove("active");
}


}
  item.classList.add("active");
  console.log(item.classList[0]);
  
  resCan(item);
  //let res=resCan(item);
}}





let resCan=function(item){
  
  
  if(item.classList[0]=="size1"){
    res=128;
    draw4(res);}
  else if(item.classList[0]=="size2"){
    res=16;
    draw32(res);}
  else if(item.classList[0]=="size3"){
    res=1;
    imgToCanvas();
}
return res;
}



function draw4(res){
  	
	
  let canvas4 = document.getElementById('main-frame');
  canvas4.width=512;
  canvas4.height=512;	
  if (canvas4.getContext){
    var ctx = canvas4.getContext('2d');
    ctx.clearRect(0, 0, canvas4.width, canvas4.height);
  for(let i=0;i<512;i=i+res){
	  for(let j=0;j<512; j=j+res){
 		ctx.fillStyle="#"+sun[i/res][j/res];
    ctx.fillRect(i, j, res, res);
    
    console.log(res);
    }
  }
}

}

function draw32(res){

  var canvas32 = document.getElementById('main-frame');
  if (canvas32.getContext){
    var ctx32 = canvas32.getContext('2d');
    ctx32.clearRect(0, 0, 512, 512);
    fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
.then(function(resp){return resp.json();})
.then(function(data){
	canvas32.width=32;
	canvas32.height=32;

console.log(data);


const concat=(x,y)=>x.concat(y);
const rgbaColors=data.reduce(concat).reduce(concat);

const img=new ImageData(Uint8ClampedArray.from(rgbaColors),32,32);
ctx32.putImageData(img,0,0);


})
}
};



const sun=[
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];










function imgToCanvas(src){	
	let  c = document.getElementById("main-frame");
	c.width=512;
      c.height=512;	
	let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
	let img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0,512,512);
};
img.src = './data/image.png';
}







