

var index = 0;
scroll();
function scroll() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "block";  
  setTimeout(scroll, 4000); // Change image every 2 seconds
}
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function mOver(obj) {
obj.innerHTML = "H"
}
function mOut(obj) {
obj.innerHTML = "ह"
}

function colorchange(){
var col=["#922B21","#9B59B6","#5DADE2","#2ECC71","#F1C40F","#E67E22","#283747","#17202A"];


var  randomNum = (Math.floor(Math.random()*10))%8;
var randomColor = col[randomNum];
document.getElementsByClassName("heading")[0].style.color=randomColor;
}
setInterval(colorchange,2000);








function north(){
location.href="north-indian.html";
}

function south(){
location.href="south.html";
}

function chinese(){
location.href="chinese.html";
}

function itlan(){
location.href="itlan.html";
}























function strip(firstDish){
let len=firstDish.length;
firstDish=firstDish.split(" ");
console.log(firstDish);
let s="";
for(let i=0;i<firstDish.length-1;i++){
s=s+firstDish[i]+" ";
}
return s;
};














function show() {
var a = document.getElementById("search2").value;
console.log(a);
var o, firstDish, secondDish, thirdDish, firstLink, secondLink, thirdLink, size, fourthDish, fifthDish, sixthDish, fourthLink, fifthLink, sixthhLink;
var xhr = new XMLHttpRequest;
xhr.addEventListener('load', function () {
o = JSON.parse(this.responseText);
console.log(o);

size = o.results.length;
console.log(size);

if (size == 0) {
var z = `<div class="container-fluid" style = "padding: 20px;background-color: #E8E8E8" id = "drop2">
        <center><h1>No recipes with following ingredients found ! Try refreshing the page and searching again. :)</h1></center></div>`
document.getElementById("dropVideo2").innerHTML = z;
}
else {

firstLink = o.results[0].href;
secondLink = o.results[1].href;
thirdLink = o.results[2].href;
fourthLink = o.results[3].href;
fifthLink = o.results[4].href;
sixthLink = o.results[5].href;





firstDish = o.results[0].title;
secondDish = o.results[1].title;
thirdDish = o.results[2].title;
fourthDish = o.results[3].title;
fifthDish = o.results[4].title;
sixthDish = o.results[5].title;
// console.log(firstDish);


//console.log(firstDish.length);
//firstDish.length=firstDish.length-1;







firstDish = strip(firstDish);
secondDish = strip(secondDish);
thirdDish = strip(thirdDish);
fourthDish = strip(fourthDish);
fifthDish = strip(fifthDish);
sixthDish = strip(sixthDish);





var y = `<div class="container-fluid" style = "padding: 20px;background-color: #E8E8E8" id = "drop2">
        <div class="section-title text-center" style = "margin-bottom: 30px">
          <span></span>
<h2>Instructions</h2><p><br></p>

        </div>


      <div class = "row">
        <div class = "col-md-4">
          <div class="card">
              <div class="card-body" style="border-style: 1px solid black margin-bottom:100px">
                <h1 id="head1"></h1><br>
           <br>
           <div class="item active">
            <iframe id="if1" src = "" height=180px; width=350px;></iframe>
          </div>
        </div>
      </div>
    </div>


    <span><br><br>
    </span>
    <br>  <br>


    <div class = "col-md-4">
      <div class="card">
        <div class="card-body" style="border-style: 1px solid black">
          <h1 id = "head2"></h1><br>
           <br>
           <div class="item active">
            <iframe id="if2" src = "" height=180px; width=350px;></iframe>
          </div>
        </div>
      </div>
    </div>


    <span><br><br></span>
    <br> <br> <br>



    <div class = "col-md-4">
      <div class="card">
        <div class="card-body" style="border-style: 1px solid black margin-bottom:100px">
          <h1 id = "head3"></h1><br>
           <br>
           <div class="item active">
            <iframe id="if3" src = "" height=180px; width=350px;></iframe>
          </div>
        </div>
      </div>
    </div>


    <span><br><br>
    </span>
    <br> <br> <br>

    <div class = "col-md-4">
      <div class="card">
        <div class="card-body" style="border-style: 1px solid black">
          <h1 id = "head4"></h1><br>
           <br>
           <div class="item active">
            <iframe id="if4" src = "" height=180px; width=350px;></iframe>
          </div>
        </div>
      </div>
    </div>


    <span><br><br>
    </span>
    <br> <br> <br>


    <div class = "col-md-4">
      <div class="card">
        <div class="card-body" style="border-style: 1px solid black">
          <h1 id = "head5"></h1><br>
           <br>
           <div class="item active">
            <iframe id="if5" src = "" height=180px; width=350px;></iframe>
          </div>
        </div>
      </div>
    </div>



    <span><br><br>
    </span>
    


    <div class = "col-md-4">
      <div class="card">
        <div class="card-body" style="border-style: 1px solid black">
          <h1 id = "head6"></h1><br>
           <br>
           <div class="item active">
            <iframe id="if6" src = "" height=180px; width=350px;></iframe>
          </div>
        </div>
      </div>
    </div>
<span><p><br><br></p></span>



  </div>
</div>`

document.getElementById("dropVideo2").innerHTML = y;
document.getElementById("head1").innerText = firstDish;
document.getElementById("head2").innerText = secondDish;
document.getElementById("head3").innerText = thirdDish;
document.getElementById("head4").innerText = fourthDish;
document.getElementById("head5").innerText = fifthDish;
document.getElementById("head6").innerText = sixthDish;



document.getElementById("head1").href = firstLink;
document.getElementById("head2").href = secondLink;
document.getElementById("head3").href = thirdLink;
document.getElementById("head1").href = fourthLink;
document.getElementById("head2").href = fifthLink;
document.getElementById("head3").href = sixthLink;








// var a = firstDish;
// var d = secondDish;
// var e = thirdDish;
// var f = fourthDish;
// var g = fifthDish;
// var h = sixthDish;
//console.log(a);
//console.log(a);
//console.log(b);
// for(let d = 0 ; d < b.length - 1; d++){
//   c = c + b[d] + "+";
// }
// //console.log(c);
// c = c + b[b.length-1] + "+";
// //console.log(c);



firstDish = firstDish + "recipe";
secondDish = secondDish + "recipe";
thirdDish = thirdDish + "recipe";
fourthDish = fourthDish + "recipe";
fifthDish = fifthDish +"recipe";
sixthDish = sixthDish + "recipe";


console.log(firstDish);

var dishes = [firstDish, secondDish, thirdDish, fourthDish, fifthDish, sixthDish];

//console.log(dishes);
//console.log(c);


var videoID, response;
// var iframe = 1;
for (let i = 0; i < dishes.length; i++) {

  let xhr = new XMLHttpRequest;

  xhr.addEventListener('load', function () {
      response = JSON.parse(xhr.responseText);
      videoID = response.items[0].id.videoId;


      //console.log(r);
      //  s = z.items[1].id.videoId;
      //  //console.log(s);
      //  t = z.items[2].id.videoId;
      //console.log(t);
      //console.log('i>>>>', i)


      document.getElementById("if" + (i+1).toString()).src = "https://www.youtube.com/embed/" + videoID;



  //     let xh = new XMLHttpRequest;

  // xh.addEventListener('load', function () {







      
  });
  xhr.open('GET', "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + dishes[i] + "&type=video&key=AIzaSyCZ_5XgAG57bTv3FiIB97bBNFvEvASW7G0")
  xhr.send();
}
}
});

xhr.open('GET', "https://cors-anywhere.herokuapp.com/" + "http://www.recipepuppy.com/api/?i=" + a + "&q=&p=1")
xhr.send();
}








