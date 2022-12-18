var basketItem=JSON.parse(localStorage.getItem("basketItem"))||[];
var sephoraItemsData=JSON.parse(localStorage.getItem("sephoraItemsData"));
var beautyArr=sephoraItemsData.filter(function(ele){
    return ele.price<=20;
})
createDisplay(beautyArr);

 document.querySelector("#all").addEventListener("click",function(){
 createDisplay(beautyArr);
});
document.querySelector("#makeup").addEventListener("click",makeup);
function makeup(){
   var makeupArr=beautyArr.filter(function(ele){
       return ele.category=="makeup" && ele.price<=20 ;
   })
   createDisplay(makeupArr);
}


function createDisplay(arr){
 document.querySelector("#items").textContent="";
 document.querySelector("#total").innerHTML=arr.length+"  Results Found";
    arr.map(function(ele){
        var dv = document.createElement("div")
        dv.setAttribute("class" ,"boxClass")
     var img1=document.createElement("img");
    var head1=document.createElement("p");
    var p1=document.createElement("h4");
    var head2=document.createElement("h4");
    var p2=document.createElement("p");
    var head3=document.createElement("h3");
    var div1=document.createElement("div");
    div1.setAttribute("id","rate");
    head1.setAttribute("id","dis");
    var div2=document.createElement("div");
    var btn=document.createElement("button");
    btn.setAttribute("id","addToCart");
    img1.setAttribute("id","images");
    img1.setAttribute("src",ele.imageUrl);
    head1.textContent=ele.name;
    var i=document.createElement("i");
    p1.textContent=ele.brand;

    head2.innerHTML=ele.stars+'<i class="fas fa-star"></i>'+"   "+ele.numReviews+"   (Reviews)";
   i.setAttribute("id","i");
    head3.textContent="Price is:  $"+ele.price;
    head3.setAttribute("id","price");
    btn.textContent="Add to Cart ";
   
    btn.addEventListener("click",function(){
        addItem(ele);
    });
    head2.style.margin="20px";
    div1.append(head2);
    dv.append(img1,p1,head1,div1,head3,btn)
    div2.append(dv);
    div2.style.textAlign="center";

    document.querySelector("#items").append(div2); 
    })
 }

 function addItem(ele){
     basketItem.push(ele);
     alert("Successfully Added to the Basket");
     localStorage.setItem("basketItem",JSON.stringify(basketItem));
 }
    


 function sorting(){
      var selected=document.querySelector("#selectSort").value;
      if(selected=="")
      {
         createDisplay(beautyArr);
      }
      else{
          
      if(selected=="low"){
       var sortArr=beautyArr.sort(function(a,b){
          return a.price-b.price;
      })
      }
      if(selected=="high"){
         var sortArr=beautyArr.sort(function(a,b){
          return b.price-a.price;
      })
      }
      if(selected=="rated"){
         var sortArr=beautyArr.sort(function(a,b){
          return b.numReviews-a.numReviews;
      })
     }
      createDisplay(sortArr);
  }
 }