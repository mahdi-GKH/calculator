const btn_list = document.getElementsByTagName('button');
const textNumber = document.getElementById('number');
const result = document.getElementById('last_res');
var last_res ;
var last_op ;




for(let b of btn_list){
    b.addEventListener('click' , function(){handelClick(this.innerText)} );
}


function handelClick(btn){
    if(Number(btn)){
        textNumber.innerText += btn;
    }else{
        if(last_res && last_op && btn == '=' && textNumber.innerText != ''){
            
            
            let res = eval(`${last_res} ${last_op} ${textNumber.innerText}`);
            
            
            last_res = res;
            textNumber.innerText = '';
            result.innerText = last_res;
            last_op = undefined;
            
        }else if (btn === 'c'){
            textNumber.innerText = '';
            result.innerText = '';
            last_op = undefined;
            last_res = undefined;
        }
        
        else if(!last_res && btn != '='){
            last_res = textNumber.innerText;
            textNumber.innerText = '';
            last_op = btn;
            result.innerText = last_res + last_op;
        }
        
        else if (last_res && btn != '=' && textNumber.innerText != '' && !last_op){
            last_op = btn;
            let res = eval(`${last_res} ${last_op} ${textNumber.innerText}`);
            last_res = res;
            textNumber.innerText = '';
            result.innerText = last_res ;
            last_op = undefined;
        }
        
        else if(textNumber.innerText == '' && last_res && btn != '='){
            last_op = btn;
            result.innerText = last_res + last_op;
            
        }
        
        else if(last_res && btn != '=' && textNumber.innerText != '' && last_op){
            let res = eval(`${last_res} ${last_op} ${textNumber.innerText}`);
            last_op = btn;
            
            last_res = res;
            textNumber.innerText = '';
            
            result.innerText = last_res + last_op;

        }
        
        else if(btn == '=' && last_op == undefined && last_res == undefined){
            alert('i can not!');
        }
        
        else if(last_res && last_op && btn === '=' && textNumber.innerText === ''){
        
            alert(' i can not !');
        }
        
    }
    
}