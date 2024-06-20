let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
let mes = document.getElementById("tituloGrid").textContent
let i = 5
meses.toString();

function avançaMes(){

  if(i < 11 && i >= 0){
    i += 1
    document.getElementById("tituloGrid").textContent=`${meses[i]}`
    iniciaSite() 
  }else{
    document.getElementsByClassName("botaoDI").disabled = true;
    iniciaSite() 
  }
  
}
function voltaMes(){
  if(i <= 11 && i > 0){
    i -= 1
    document.getElementById("tituloGrid").textContent=`${meses[i]}`
    iniciaSite()
  }else{
    iniciaSite()
    document.getElementsByClassName("botaoDI").disabled = true;
  }
}

function caxaTexto(){
  
}





function mes1(){
if(mes == "janeiro"){
  document.getElementById("div1").textContent="";
  document.getElementById("div2").textContent="1";
  document.getElementById("div3").textContent="2";
  document.getElementById("div4").textContent="3";
  document.getElementById("div5").textContent="4";
  document.getElementById("div6").textContent="5";
  document.getElementById("div7").textContent="6";
  document.getElementById("div8").textContent="7";
  document.getElementById("div9").textContent="8";
  document.getElementById("div10").textContent="9";
  document.getElementById("div11").textContent="10";
  document.getElementById("div12").textContent="11";
  document.getElementById("div13").textContent="12";
  document.getElementById("div14").textContent="13";
  document.getElementById("div15").textContent="14";
  document.getElementById("div16").textContent="15";
  document.getElementById("div17").textContent="16";
  document.getElementById("div18").textContent="17";
  document.getElementById("div19").textContent="18";
  document.getElementById("div20").textContent="19";
  document.getElementById("div21").textContent="20";
  document.getElementById("div22").textContent="21";
  document.getElementById("div23").textContent="22";
  document.getElementById("div24").textContent="23";
  document.getElementById("div25").textContent="24";
  document.getElementById("div26").textContent="25";
  document.getElementById("div27").textContent="26";
  document.getElementById("div28").textContent="27";
  document.getElementById("div29").textContent="28";
  document.getElementById("div30").textContent="29";
  document.getElementById("div31").textContent="30";
  document.getElementById("div32").textContent="31";
  document.getElementById("div33").textContent="";
  document.getElementById("div34").textContent="";
  document.getElementById("div35").textContent="";
}

}
function mes2(){
if(mes == "fevereiro"){
  document.getElementById("div1").textContent="";
  document.getElementById("div2").textContent="";
  document.getElementById("div3").textContent="";
  document.getElementById("div4").textContent="";
  document.getElementById("div5").textContent="1";
  document.getElementById("div6").textContent="2";
  document.getElementById("div7").textContent="3";
  document.getElementById("div8").textContent="4";
  document.getElementById("div9").textContent="5";
  document.getElementById("div10").textContent="6";
  document.getElementById("div11").textContent="7";
  document.getElementById("div12").textContent="8";
  document.getElementById("div13").textContent="9";
  document.getElementById("div14").textContent="10";
  document.getElementById("div15").textContent="11";
  document.getElementById("div16").textContent="12";
  document.getElementById("div17").textContent="13";
  document.getElementById("div18").textContent="14";
  document.getElementById("div19").textContent="15";
  document.getElementById("div20").textContent="16";
  document.getElementById("div21").textContent="17";
  document.getElementById("div22").textContent="18";
  document.getElementById("div23").textContent="19";
  document.getElementById("div24").textContent="20";
  document.getElementById("div25").textContent="21";
  document.getElementById("div26").textContent="22";
  document.getElementById("div27").textContent="23";
  document.getElementById("div28").textContent="24";
  document.getElementById("div29").textContent="25";
  document.getElementById("div30").textContent="26";
  document.getElementById("div31").textContent="27";
  document.getElementById("div32").textContent="28";
  document.getElementById("div33").textContent="";
  document.getElementById("div34").textContent="";
  document.getElementById("div35").textContent="";
}

}
function mes3(){

if(mes == "março"){
  document.getElementById("div1").textContent="";
  document.getElementById("div2").textContent="";
  document.getElementById("div3").textContent="";
  document.getElementById("div4").textContent="";
  document.getElementById("div5").textContent="1";
  document.getElementById("div6").textContent="2";
  document.getElementById("div7").textContent="3";
  document.getElementById("div8").textContent="4";
  document.getElementById("div9").textContent="5";
  document.getElementById("div10").textContent="6";
  document.getElementById("div11").textContent="7";
  document.getElementById("div12").textContent="8";
  document.getElementById("div13").textContent="9";
  document.getElementById("div14").textContent="10";
  document.getElementById("div15").textContent="11";
  document.getElementById("div16").textContent="12";
  document.getElementById("div17").textContent="13";
  document.getElementById("div18").textContent="14";
  document.getElementById("div19").textContent="15";
  document.getElementById("div20").textContent="16";
  document.getElementById("div21").textContent="17";
  document.getElementById("div22").textContent="18";
  document.getElementById("div23").textContent="19";
  document.getElementById("div24").textContent="20";
  document.getElementById("div25").textContent="21";
  document.getElementById("div26").textContent="22";
  document.getElementById("div27").textContent="23";
  document.getElementById("div28").textContent="24";
  document.getElementById("div29").textContent="25";
  document.getElementById("div30").textContent="26";
  document.getElementById("div31").textContent="27";
  document.getElementById("div32").textContent="28";
  document.getElementById("div33").textContent="29";
  document.getElementById("div34").textContent="30";
  document.getElementById("div35").textContent="31";
}

}
function mes4(){
  
  if(mes == "abril"){
    document.getElementById("div1").textContent="1";
    document.getElementById("div2").textContent="2";
    document.getElementById("div3").textContent="3";
    document.getElementById("div4").textContent="4";
    document.getElementById("div5").textContent="5";
    document.getElementById("div6").textContent="6";
    document.getElementById("div7").textContent="7";
    document.getElementById("div8").textContent="8";
    document.getElementById("div9").textContent="9";
    document.getElementById("div10").textContent="10";
    document.getElementById("div11").textContent="11";
    document.getElementById("div12").textContent="12";
    document.getElementById("div13").textContent="13";
    document.getElementById("div14").textContent="14";
    document.getElementById("div15").textContent="15";
    document.getElementById("div16").textContent="16";
    document.getElementById("div17").textContent="17";
    document.getElementById("div18").textContent="18";
    document.getElementById("div19").textContent="19";
    document.getElementById("div20").textContent="20";
    document.getElementById("div21").textContent="21";
    document.getElementById("div22").textContent="22";
    document.getElementById("div23").textContent="23";
    document.getElementById("div24").textContent="24";
    document.getElementById("div25").textContent="25";
    document.getElementById("div26").textContent="26";
    document.getElementById("div27").textContent="27";
    document.getElementById("div28").textContent="28";
    document.getElementById("div29").textContent="29";
    document.getElementById("div30").textContent="30";
    document.getElementById("div31").textContent="";
    document.getElementById("div32").textContent="";
    document.getElementById("div33").textContent="";
    document.getElementById("div34").textContent="";
    document.getElementById("div35").textContent="";
}
  
}
function mes5(){
  
  if(mes == "maio"){
    document.getElementById("div1").textContent="";
    document.getElementById("div2").textContent="";
    document.getElementById("div3").textContent="1";
    document.getElementById("div4").textContent="2";
    document.getElementById("div5").textContent="3";
    document.getElementById("div6").textContent="4";
    document.getElementById("div7").textContent="5";
    document.getElementById("div8").textContent="6";
    document.getElementById("div9").textContent="7";
    document.getElementById("div10").textContent="8";
    document.getElementById("div11").textContent="9";
    document.getElementById("div12").textContent="10";
    document.getElementById("div13").textContent="11";
    document.getElementById("div14").textContent="12";
    document.getElementById("div15").textContent="13";
    document.getElementById("div16").textContent="14";
    document.getElementById("div17").textContent="15";
    document.getElementById("div18").textContent="16";
    document.getElementById("div19").textContent="17";
    document.getElementById("div20").textContent="18";
    document.getElementById("div21").textContent="19";
    document.getElementById("div22").textContent="20";
    document.getElementById("div23").textContent="21";
    document.getElementById("div24").textContent="22";
    document.getElementById("div25").textContent="23";
    document.getElementById("div26").textContent="24";
    document.getElementById("div27").textContent="25";
    document.getElementById("div28").textContent="26";
    document.getElementById("div29").textContent="27";
    document.getElementById("div30").textContent="28";
    document.getElementById("div31").textContent="29";
    document.getElementById("div32").textContent="30";
    document.getElementById("div33").textContent="31";
    document.getElementById("div34").textContent="";
    document.getElementById("div35").textContent="";
}
  
}
function mes6(){
  
  if(mes == "junho"){
    document.getElementById("div1").textContent="";
    document.getElementById("div2").textContent="";
    document.getElementById("div3").textContent="";
    document.getElementById("div4").textContent="";
    document.getElementById("div5").textContent="";
    document.getElementById("div6").textContent="1";
    document.getElementById("div7").textContent="2";
    document.getElementById("div8").textContent="3";
    document.getElementById("div9").textContent="4";
    document.getElementById("div10").textContent="5";
    document.getElementById("div11").textContent="6";
    document.getElementById("div12").textContent="7";
    document.getElementById("div13").textContent="8";
    document.getElementById("div14").textContent="9";
    document.getElementById("div15").textContent="10";
    document.getElementById("div16").textContent="11";
    document.getElementById("div17").textContent="12";
    document.getElementById("div18").textContent="13";
    document.getElementById("div19").textContent="14";
    document.getElementById("div20").textContent="15";
    document.getElementById("div21").textContent="16";
    document.getElementById("div22").textContent="17";
    document.getElementById("div23").textContent="18";
    document.getElementById("div24").textContent="19";
    document.getElementById("div25").textContent="20";
    document.getElementById("div26").textContent="21";
    document.getElementById("div27").textContent="22";
    document.getElementById("div28").textContent="23";
    document.getElementById("div29").textContent="24";
    document.getElementById("div30").textContent="25";
    document.getElementById("div31").textContent="26";
    document.getElementById("div32").textContent="27";
    document.getElementById("div33").textContent="28";
    document.getElementById("div34").textContent="29";
    document.getElementById("div35").textContent="30";
  }
  
}
function mes7(){

if(mes == "julho"){
  document.getElementById("div1").textContent="";
  document.getElementById("div2").textContent="1";
  document.getElementById("div3").textContent="2";
  document.getElementById("div4").textContent="3";
  document.getElementById("div5").textContent="4";
  document.getElementById("div6").textContent="5";
  document.getElementById("div7").textContent="6";
  document.getElementById("div8").textContent="7";
  document.getElementById("div9").textContent="8";
  document.getElementById("div10").textContent="9";
  document.getElementById("div11").textContent="10";
  document.getElementById("div12").textContent="11";
  document.getElementById("div13").textContent="12";
  document.getElementById("div14").textContent="13";
  document.getElementById("div15").textContent="14";
  document.getElementById("div16").textContent="15";
  document.getElementById("div17").textContent="16";
  document.getElementById("div18").textContent="17";
  document.getElementById("div19").textContent="18";
  document.getElementById("div20").textContent="19";
  document.getElementById("div21").textContent="20";
  document.getElementById("div22").textContent="21";
  document.getElementById("div23").textContent="22";
  document.getElementById("div24").textContent="23";
  document.getElementById("div25").textContent="24";
  document.getElementById("div26").textContent="25";
  document.getElementById("div27").textContent="26";
  document.getElementById("div28").textContent="27";
  document.getElementById("div29").textContent="28";
  document.getElementById("div30").textContent="29";
  document.getElementById("div31").textContent="30";
  document.getElementById("div32").textContent="31";
  document.getElementById("div33").textContent="";
  document.getElementById("div34").textContent="";
  document.getElementById("div35").textContent="";
}

}
function mes8(){
  
  if(mes == "agosto"){
    document.getElementById("div1").textContent="";
    document.getElementById("div2").textContent="";
    document.getElementById("div3").textContent="";
    document.getElementById("div4").textContent="";
    document.getElementById("div5").textContent="1";
    document.getElementById("div6").textContent="2";
    document.getElementById("div7").textContent="3";
    document.getElementById("div8").textContent="4";
    document.getElementById("div9").textContent="5";
    document.getElementById("div10").textContent="6";
    document.getElementById("div11").textContent="7";
    document.getElementById("div12").textContent="8";
    document.getElementById("div13").textContent="9";
    document.getElementById("div14").textContent="10";
    document.getElementById("div15").textContent="11";
    document.getElementById("div16").textContent="12";
    document.getElementById("div17").textContent="13";
    document.getElementById("div18").textContent="14";
    document.getElementById("div19").textContent="15";
    document.getElementById("div20").textContent="16";
    document.getElementById("div21").textContent="17";
    document.getElementById("div22").textContent="18";
    document.getElementById("div23").textContent="19";
    document.getElementById("div24").textContent="20";
    document.getElementById("div25").textContent="21";
    document.getElementById("div26").textContent="22";
    document.getElementById("div27").textContent="23";
    document.getElementById("div28").textContent="24";
    document.getElementById("div29").textContent="25";
    document.getElementById("div30").textContent="26";
    document.getElementById("div31").textContent="27";
    document.getElementById("div32").textContent="28";
    document.getElementById("div33").textContent="29";
    document.getElementById("div34").textContent="30";
    document.getElementById("div35").textContent="31";
  }
  
}
function mes9(){

if(mes == "setembro"){
  document.getElementById("div1").textContent="";
  document.getElementById("div2").textContent="";
  document.getElementById("div3").textContent="";
  document.getElementById("div4").textContent="";
  document.getElementById("div5").textContent="";
  document.getElementById("div6").textContent="1";
  document.getElementById("div7").textContent="2";
  document.getElementById("div8").textContent="3";
  document.getElementById("div9").textContent="4";
  document.getElementById("div10").textContent="5";
  document.getElementById("div11").textContent="6";
  document.getElementById("div12").textContent="7";
  document.getElementById("div13").textContent="8";
  document.getElementById("div14").textContent="9";
  document.getElementById("div15").textContent="10";
  document.getElementById("div16").textContent="11";
  document.getElementById("div17").textContent="12";
  document.getElementById("div18").textContent="13";
  document.getElementById("div19").textContent="14";
  document.getElementById("div20").textContent="15";
  document.getElementById("div21").textContent="16";
  document.getElementById("div22").textContent="17";
  document.getElementById("div23").textContent="18";
  document.getElementById("div24").textContent="19";
  document.getElementById("div25").textContent="20";
  document.getElementById("div26").textContent="21";
  document.getElementById("div27").textContent="22";
  document.getElementById("div28").textContent="23";
  document.getElementById("div29").textContent="24";
  document.getElementById("div30").textContent="25";
  document.getElementById("div31").textContent="26";
  document.getElementById("div32").textContent="27";
  document.getElementById("div33").textContent="28";
  document.getElementById("div34").textContent="29";
  document.getElementById("div35").textContent="30";
}

}
function mes10(){

if(mes == "outubro"){
  document.getElementById("div1").textContent="";
  document.getElementById("div2").textContent="";
  document.getElementById("div3").textContent="1";
  document.getElementById("div4").textContent="2";
  document.getElementById("div5").textContent="3";
  document.getElementById("div6").textContent="4";
  document.getElementById("div7").textContent="5";
  document.getElementById("div8").textContent="6";
  document.getElementById("div9").textContent="7";
  document.getElementById("div10").textContent="8";
  document.getElementById("div11").textContent="9";
  document.getElementById("div12").textContent="10";
  document.getElementById("div13").textContent="11";
  document.getElementById("div14").textContent="12";
  document.getElementById("div15").textContent="13";
  document.getElementById("div16").textContent="14";
  document.getElementById("div17").textContent="15";
  document.getElementById("div18").textContent="16";
  document.getElementById("div19").textContent="17";
  document.getElementById("div20").textContent="18";
  document.getElementById("div21").textContent="19";
  document.getElementById("div22").textContent="20";
  document.getElementById("div23").textContent="21";
  document.getElementById("div24").textContent="22";
  document.getElementById("div25").textContent="23";
  document.getElementById("div26").textContent="24";
  document.getElementById("div27").textContent="25";
  document.getElementById("div28").textContent="26";
  document.getElementById("div29").textContent="27";
  document.getElementById("div30").textContent="28";
  document.getElementById("div31").textContent="29";
  document.getElementById("div32").textContent="30";
  document.getElementById("div33").textContent="31";
  document.getElementById("div34").textContent="";
  document.getElementById("div35").textContent="";
}

}
function mes11(){
  
  if(mes == "novembro"){
    document.getElementById("div1").textContent="";
    document.getElementById("div2").textContent="";
    document.getElementById("div3").textContent="";
    document.getElementById("div4").textContent="";
    document.getElementById("div5").textContent="";
    document.getElementById("div6").textContent="1";
    document.getElementById("div7").textContent="2";
    document.getElementById("div8").textContent="3";
    document.getElementById("div9").textContent="4";
    document.getElementById("div10").textContent="5";
    document.getElementById("div11").textContent="6";
    document.getElementById("div12").textContent="7";
    document.getElementById("div13").textContent="8";
    document.getElementById("div14").textContent="9";
    document.getElementById("div15").textContent="10";
    document.getElementById("div16").textContent="11";
    document.getElementById("div17").textContent="12";
    document.getElementById("div18").textContent="13";
    document.getElementById("div19").textContent="14";
    document.getElementById("div20").textContent="15";
    document.getElementById("div21").textContent="16";
    document.getElementById("div22").textContent="17";
    document.getElementById("div23").textContent="18";
    document.getElementById("div24").textContent="19";
    document.getElementById("div25").textContent="20";
    document.getElementById("div26").textContent="21";
    document.getElementById("div27").textContent="22";
    document.getElementById("div28").textContent="23";
    document.getElementById("div29").textContent="24";
    document.getElementById("div30").textContent="25";
    document.getElementById("div31").textContent="26";
    document.getElementById("div32").textContent="27";
    document.getElementById("div33").textContent="28";
    document.getElementById("div34").textContent="29";
    document.getElementById("div35").textContent="30";
}
  
}
function mes12(){
  
  if(mes == "dezembro"){
    document.getElementById("div1").textContent="1";
    document.getElementById("div2").textContent="2";
    document.getElementById("div3").textContent="3";
    document.getElementById("div4").textContent="4";
    document.getElementById("div5").textContent="5";
    document.getElementById("div6").textContent="6";
    document.getElementById("div7").textContent="7";
    document.getElementById("div8").textContent="8";
    document.getElementById("div9").textContent="9";
    document.getElementById("div10").textContent="10";
    document.getElementById("div11").textContent="11";
    document.getElementById("div12").textContent="12";
    document.getElementById("div13").textContent="13";
    document.getElementById("div14").textContent="14";
    document.getElementById("div15").textContent="15";
    document.getElementById("div16").textContent="16";
    document.getElementById("div17").textContent="17";
    document.getElementById("div18").textContent="18";
    document.getElementById("div19").textContent="19";
    document.getElementById("div20").textContent="20";
    document.getElementById("div21").textContent="21";
    document.getElementById("div22").textContent="22";
    document.getElementById("div23").textContent="23";
    document.getElementById("div24").textContent="24";
    document.getElementById("div25").textContent="25";
    document.getElementById("div26").textContent="26";
    document.getElementById("div27").textContent="27";
    document.getElementById("div28").textContent="28";
    document.getElementById("div29").textContent="29";
    document.getElementById("div30").textContent="30";
    document.getElementById("div31").textContent="31";
    document.getElementById("div32").textContent="";
    document.getElementById("div33").textContent="";
    document.getElementById("div34").textContent="";
    document.getElementById("div35").textContent="";
}
}
function iniciaSite(){
mes = document.getElementById("tituloGrid").textContent
mes1()
mes2()
mes3()
mes4()
mes5()
mes6()
mes7()
mes8()
mes9()
mes10()
mes11()
mes12()
}