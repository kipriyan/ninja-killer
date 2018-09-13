// Creating variables
var myX = 400, myY = 300,patronX=[],patronY=[],MLG=false,vragX=[],vragY=[],brvragove=100, i=0,X=800,Y=600,t,jivoti=600,jX=0,jY=0,q=0;
patronX[i]=myX+5;
patronY[i]=myY-5;
for(i=0;i<brvragove;++i){
vragX[i]=Math.random()*790;
vragY[i]=Math.random()*-10000;
}
brPatroni = 0;
var gg = new Image();
gg.src="nosht1.png";
var ggg = new Image();
ggg.src="nosht2.png";
gg.src="nosht1.png";
var g = new Image();
g.src="shuriken-1.png";
function update() {
    ++t;
    if(t==26){
        t=0;
    }
 //   console.log(vragX[i]);
  //  console.log(vragY[i]);
   // ++brvragove;
   // console.log(brvragove);
    for(i=0;i<brvragove;++i){
    ++vragY[i];
        if(vragY[i]>=600){
          vragY[i]=Math.random()*-1000;  
            vragX[i]=Math.random()*790;
        }
    }
    MLG=false;
  //    myX=mouseX;
 //   myY=mouseY; 
      if(isKeyPressed[87]){
      myY-=3;
        MLG=true;    
  }
    if(isKeyPressed[83]){
      myY+=3;
            MLG=true; 
  } 
     if(isKeyPressed[68]){
      myX+=3;
             MLG=true; 
  }
     if(isKeyPressed[65]){
      myX-=3;
             MLG=true; 
  }
      for(let i=0;i<brvragove;++i){
      if(areColliding(myX,myY,30,30,vragX[i],vragY[i],10,30)){
--jivoti;
  }
      }
    if(jivoti<=0){
        X=0;
        Y=0;
    }
          for(let d=0;d<brvragove;++d){
             //console.log(vragX[d]);
               for(let g=0;g<brPatroni;++g){
                    //console.log(vragX[g]);
          if(areColliding(patronX[g],patronY[g],20,20,vragX[d],vragY[d],10,30)){
               //console.log(vragX[i]);
   vragX[d]=8000;
              ++q;
               vragY[d]-=50;
  }
 }
 }
    
    //   if(isKeyPressed[32]){
   //     patronX[brPatroni]=myX;
  //      patronY[brPatroni]=myY; 
  //         brPatroni++;
  //}
         for(let g=0;g<brPatroni;++g){
    if(patronY[g]<=0){
         patronX[g]=1000;
    }
         }
         if(myX>=770){
    myX-=3;
  }
             if(myX<=0){
    myX+=3;
  }
                if(myY<=0){
    myY+=3;
  }
                   if(myY>=570){
    myY-=3;
  }
    //if(MLG==true){
    for(i=0;i<brPatroni;++i){
   patronY[i]-=5;
        }
   // }
}
 
function draw() {
    // This is how you draw a rectangle
    context.fillRect(jX,jY,jivoti,30);
    context.fillStyle = "blue";
        context.drawImage(gg,myX,myY,30,30);
        context.fillStyle = "black";
    for(i=0;i<brPatroni;++i){
            context.drawImage(g,patronX[i],patronY[i],20,20);
    }
        context.fillStyle = "red";
        for(i=0;i<brvragove;++i){
            context.drawImage(ggg,vragX[i],vragY[i],20,20);
    }
            context.fillRect(X,Y,800,600);
       context.font="30px Times New Roman";
           context.fillText(q,100,300); 
    if(q>=100){
        X=0;
        Y=0;
             context.fillStyle = "black";
            context.font="80px Times New Roman";
           context.fillText("you win",100,300); 
    }
    };

 
function keyup(key) {
  //  patronX[brPatroni]=myX;
//    patronY[brPatroni]=myY;
  //  brPatroni++;
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
 
function mousedown() {
       patronX[brPatroni]=myX+5;
    patronY[brPatroni]=myY-5;
    brPatroni++;
    // 
    
//Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};