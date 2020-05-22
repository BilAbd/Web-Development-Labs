  
  function load()
  {
  var display = document.getElementById('display');
  var body = document.getElementById('body');
  var calc = new Calculator();
  calc.display(body);
  
 

 


  calc.btn0.onclick = function()
  {
    calc.btn(0);
  }

  calc.btn1.onclick = function()
  {
    calc.btn(1);
  }
  calc.btn2.onclick = function()
  {
    calc.btn(2);
  }
  calc.btn3.onclick = function()
  {
    calc.btn(3);
  }
  
  calc.btn4.onclick = function()
  {
    calc.btn(4);
  }
  calc.btn5.onclick = function()
  {
    calc.btn(5);
  }
  calc.btn6.onclick = function()
  {
    calc.btn(6);
  }
  calc.btn7.onclick = function()
  {
    calc.btn(7);
  }
  calc.btn8.onclick = function()
  {
    calc.btn(8);
  }
  calc.btn9.onclick = function()
  {
    calc.btn(9);
  }
  calc.btnC.onclick = function()
  {
    calc.clear();
  }

  calc.btnPlus.onclick = function()
  {
    calc.oper('+');
  }
  calc.btnMin.onclick = function()
  {
    calc.oper('-');
  }
  calc.btnMult.onclick = function()
  {
    calc.oper('*');
  }
  calc.btnDiv.onclick = function()
  {
    calc.oper('/');
  }
  calc.btnE.onclick = function()
  {
    calc.equal();
  }
  calc.btnBin.onclick = function()
  {
    calc.convertBin();
  }
  calc.btnOct.onclick = function()
  {
    calc.convertOct();
  }
  calc.btnHex.onclick = function()
  {
    calc.convertHex();
  }

}

class Calculator 
{
  constructor() 
  {

    this.cur = "";
    this.memory = "";
    this.operation = "";
    this.cont = document.createElement('div');
    this.box = document.createElement('div');
    this.disp = document.createElement('input');
 

    this.btn0 = document.createElement('button');
    this.btn0.innerHTML = "0";
    this.btn1 = document.createElement('button');
    this.btn1.innerHTML = "1";
    this.btn2 = document.createElement('button');
    this.btn2.innerHTML = "2";
    this.btn3 = document.createElement('button');
    this.btn3.innerHTML = "3";
    this.btn4 = document.createElement('button');
    this.btn4.innerHTML = "4";
    this.btn5 = document.createElement('button');
    this.btn5.innerHTML = "5";
    this.btn6 = document.createElement('button');
    this.btn6.innerHTML = "6";
    this.btn7 = document.createElement('button');
    this.btn7.innerHTML = "7";
    this.btn8 = document.createElement('button');
    this.btn8.innerHTML = "8";
    this.btn9 = document.createElement('button');
    this.btn9.innerHTML = "9";

    this.btnPlus = document.createElement('button');
    this.btnPlus.innerHTML = "+";
    this.btnMin = document.createElement('button');
    this.btnMin.innerHTML = "-";
    this.btnMult = document.createElement('button');
    this.btnMult.innerHTML = "*";
    this.btnDiv = document.createElement('button');
    this.btnDiv.innerHTML = "/";
    this.btnC = document.createElement('button');
    this.btnC.innerHTML = "C";
    this.btnE = document.createElement('button');
    this.btnE.innerHTML = "=";
    this.btnBin = document.createElement('button');
    this.btnBin.innerHTML = "BIN";
    this.btnOct = document.createElement('button');
    this.btnOct.innerHTML = "OCT";
    this.btnHex = document.createElement('button');
    this.btnHex.innerHTML = "HEX";

    
  }

}
 


Calculator.prototype.display = function (body) 
{   
    body.appendChild(this.cont);
    body.appendChild(this.box);
    this.cont.appendChild(this.disp);
    this.box.appendChild(this.btn7);
    this.box.appendChild(this.btn8);
    this.box.appendChild(this.btn9);
    this.box.appendChild(this.btnMult);
    this.box.appendChild(this.btn4);
    this.box.appendChild(this.btn5);
    this.box.appendChild(this.btn6);
    this.box.appendChild(this.btnDiv);
    this.box.appendChild(this.btn1);
    this.box.appendChild(this.btn2);
    this.box.appendChild(this.btn3);
    this.box.appendChild(this.btnMin);
    this.box.appendChild(this.btnC);
    this.box.appendChild(this.btn0);
    this.box.appendChild(this.btnE);
    this.box.appendChild(this.btnPlus);
    this.box.appendChild(this.btnBin);
    this.box.appendChild(this.btnOct);
    this.box.appendChild(this.btnHex);
};

Calculator.prototype.btn = function (num) 
{
  this.cur+=num;
  this.disp.value=this.cur;
};

Calculator.prototype.clear = function () 
{
  this.cur="";
  this.disp.value=this.cur;
};

Calculator.prototype.oper = function (opera) 
{
  this.memory = this.cur;
  this.disp.value=this.cur;
  this.cur = "";
  this.operation=opera;
};

Calculator.prototype.equal = function () 
{
  var result;
  switch (this.operation) 
  {
    case '+':
      result = this.memory * 1 + this.cur * 1;
      break;
    case '-':
      result = this.memory - this.cur;
      break;
    case '*':
      result = this.memory * this.cur;
      break;
    case '/':
      result = this.memory / this.cur;
      break;
  }

  Calculator.prototype.convertBin = function()
  {
    var result;
    if (this.cur < 0) 
    {
      this.disp.value = 0xFFFFFFFF + this.cur + 1;
    }  
    this.disp.value = parseInt(this.cur, 10).toString(2);
    this.cur = this.disp.value;
  }

  Calculator.prototype.convertOct = function()
  {
    var result;
    if (this.cur < 0) 
    {
      this.disp.value = 0xFFFFFFFF + this.cur + 1;
    }  
    this.disp.value = parseInt(this.cur, 10).toString(8);
    this.cur = this.disp.value;
  }

  Calculator.prototype.convertHex = function()
  {
    var result;
    if (this.cur < 0) 
    {
      this.disp.value = 0xFFFFFFFF + this.cur + 1;
    }  
    this.disp.value = parseInt(this.cur, 10).toString(16);
    this.cur = this.disp.value;
  }
 

  this.disp.value=result;
  this.cur = result;
  this.operation="";
  this.memory="";
  
};





