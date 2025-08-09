
//زرار الضريبة وال3% وكله 

function all1() {
 const a = Number(document.getElementById("T-am").value);
 
const b=Number(document.getElementById("com1").value) /100;
const vat =(a/1.11)*.14;
const wi =  (a/1.11)*.03;

const neta = a-vat+wi;

const charge = ( neta / (1+b));
const com=charge*b;

document.getElementById("RES1").innerHTML="Vat is :" +" "+ vat.toLocaleString() + "<br>"+ "withholding 3% : " + wi.toLocaleString() +"<br>"+"Net amount without vat : "+ neta.toLocaleString() +"<br>" + "Commission : " + com.toLocaleString() +"<br>"+ "Amount to Charge : " + charge.toLocaleString();


document.getElementById("RES1").style.color="white";
document.getElementById("RES1").style.backgroundColor="blue";

//document.getElementById("RES1").style.color="black";
//document.getElementById("RES1").style.backgroundColor="goldenrod";
  
}

//زرار من غير ال 3% 

function Onvat() {
 const a = Number(document.getElementById("T-am").value);
 
const b=Number(document.getElementById("com1").value) /100;
const vat =(a/1.14)*.14;
const wi =  0;

const neta = a-vat+wi;

const charge = ( neta / (1+b));
const com=charge*b;

document.getElementById("RES1").innerHTML="Vat is :" +" "+ vat.toLocaleString() + "<br>"+ "withholding 3% : " + wi.toLocaleString() +"<br>"+"Net amount without vat : "+ neta.toLocaleString() +"<br>" + "Commission : " + com.toLocaleString() +"<br>"+ "Amount to Charge : " + charge.toLocaleString();


document.getElementById("RES1").style.color="white";
document.getElementById("RES1").style.backgroundColor="blue";

//document.getElementById("RES1").style.color="black";
//document.getElementById("RES1").style.backgroundColor="goldenrod";
  
}

//زرار منغير فات ولا 3%

function Novat1() {
 const a = Number(document.getElementById("T-am").value);
 
const b=Number(document.getElementById("com1").value) /100;
const vat = 0;
const wi =  0;

const neta = a-vat+wi;

const charge = ( neta / (1+b));
const com=charge*b;

document.getElementById("RES1").innerHTML="Vat is :" +" "+ vat.toLocaleString() + "<br>"+ "withholding 3% : " + wi.toLocaleString() +"<br>"+"Net amount without vat : "+ neta.toLocaleString() +"<br>" + "Commission : " + com.toLocaleString() +"<br>"+ "Amount to Charge : " + charge.toLocaleString();


document.getElementById("RES1").style.color="white";
document.getElementById("RES1").style.backgroundColor="blue";

//document.getElementById("RES1").style.color="black";
//document.getElementById("RES1").style.backgroundColor="goldenrod";
  
}

//سعودي
function SAD() {
 const a = Number(document.getElementById("T-am").value);
 
const b=Number(document.getElementById("com1").value) /100;
const vat =(a/1.15)*.15;
const wi =  0;

const neta = a-vat+wi;

const charge = ( neta / (1+b));
const com=charge*b;

document.getElementById("RES1").innerHTML="Vat is :" +" "+ vat.toLocaleString() + "<br>"+ "withholding 3% : " + wi.toLocaleString() +"<br>"+"Net amount without vat : "+ neta.toLocaleString() +"<br>" + "Commission : " + com.toLocaleString() +"<br>"+ "Amount to Charge : " + charge.toLocaleString();


document.getElementById("RES1").style.color="white";
document.getElementById("RES1").style.backgroundColor="blue";

//document.getElementById("RES1").style.color="black";
//document.getElementById("RES1").style.backgroundColor="goldenrod";
  
}


//المبلغ الصافي

//حالة 1
function Netwithall() {
 const a =Number(document.getElementById("T-am").value);
 
const b=Number(document.getElementById("com1").value) /100;
const com= a*b;
const vat =(a*0.14)+(com*0.14);
const wi =  (a*0.03)+(com*0.03);

const neta = a+com;
const charge = ( neta)+vat-wi;


document.getElementById("RES1").innerHTML="Vat is :" +" "+ vat.toLocaleString() + "<br>"+ "withholding 3% : " + wi.toLocaleString() +"<br>"+"Amount without vat : "+ neta.toLocaleString() +"<br>" + "Commission : " + com.toLocaleString() +"<br>"+ "Amount to Transfare : " + charge.toLocaleString();


document.getElementById("RES1").style.color="white";
document.getElementById("RES1").style.backgroundColor="blue";

//document.getElementById("RES1").style.color="black";
//document.getElementById("RES1").style.backgroundColor="goldenrod";
 
}

//حالة 2
function no3() {
 const a =Number(document.getElementById("T-am").value);
 
const b=Number(document.getElementById("com1").value) /100;
const com= a*b;
const vat =(a*0.14)+(com*0.14);
const wi =  0;

const neta = a+com;
const charge = ( neta)+vat-wi;


document.getElementById("RES1").innerHTML="Vat is :" +" "+ vat.toLocaleString() + "<br>"+ "withholding 3% : " + wi.toLocaleString() +"<br>"+"Amount without vat : "+ neta.toLocaleString() +"<br>" + "Commission : " + com.toLocaleString() +"<br>"+ "Amount to Transfare : " + charge.toLocaleString();


document.getElementById("RES1").style.color="white";
document.getElementById("RES1").style.backgroundColor="blue";

//document.getElementById("RES1").style.color="black";
//document.getElementById("RES1").style.backgroundColor="goldenrod";
 
}

//حالة3
function NOnovat() {
 const a =Number(document.getElementById("T-am").value);
 
const b=Number(document.getElementById("com1").value) /100;
const com= a*b;
const vat =0;
const wi =  0;

const neta = a+com;
const charge = ( neta)+vat-wi;


document.getElementById("RES1").innerHTML="Vat is :" +" "+ vat.toLocaleString() + "<br>"+ "withholding 3% : " + wi.toLocaleString() +"<br>"+"Amount without vat : "+ neta.toLocaleString() +"<br>" + "Commission : " + com.toLocaleString() +"<br>"+ "Amount to Transfare : " + charge.toLocaleString();


document.getElementById("RES1").style.color="white";
document.getElementById("RES1").style.backgroundColor="blue";

//document.getElementById("RES1").style.color="black";
//document.getElementById("RES1").style.backgroundColor="goldenrod";
 
}



//سعودي
function SADnet() {
 const a =Number(document.getElementById("T-am").value);
 
const b=Number(document.getElementById("com1").value) /100;
const com= a*b;
const vat =(a*0.15)+(com*0.15);
const wi =  0;

const neta = a+com;
const charge = ( neta)+vat-wi;


document.getElementById("RES1").innerHTML="Vat is :" +" "+ vat.toLocaleString() + "<br>"+ "withholding 3% : " + wi.toLocaleString() +"<br>"+" Amount without vat : "+ neta.toLocaleString() +"<br>" + "Commission : " + com.toLocaleString() +"<br>"+ "Amount to Transfare : " + charge.toLocaleString();

document.getElementById("RES1").style.color="white";
document.getElementById("RES1").style.backgroundColor="blue";

//document.getElementById("RES1").style.color="black";
//document.getElementById("RES1").style.backgroundColor="goldenrod";

 
}

//function Dark() {

    

    //document.getElementsByTagName("body")[0].style.backgroundColor="white";
    //document.getElementsByTagName("body")[0].style.color="blue";

    

