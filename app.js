let colors = ["red","green","blue"];

function NumCliker(color){
    this.ele=document.createElement("div");

    this.ele.style.backgroundColor=color;
    this.ele.style.width="200px";
    this.ele.style.height="100px";
    this.ele.style.fontSize="18px";
    this.ele.style.color="white";
    this.ele.style.borderRadius="10px";
    this.ele.style.display="flex";
    this.ele.style.justifyContent="center";
    this.ele.style.alignItems="center";
    this.ele.id=color;
    this.ele.innerHTML="0";

    this.ele.addEventListener("click",function() {
        document.getElementById(color).innerHTML=Number(document.getElementById(color).innerHTML)+1;
    });

    document.body.appendChild(this.ele);
}

let numClickers=[];
for(let i=0;i<colors.length;i++){
    numClickers[i]=new NumCliker(colors[i]);
}