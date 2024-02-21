let display=document.getElementById('display-output');

let buttons=document.querySelectorAll('.btn');

buttons.forEach((item)=>{
    item.addEventListener('click',({target:{value}})=>{
        if(['0','00','1','2','3','4','5','6','7','8','9'].includes(item.value)){
            display.value+=value;
        }

        if(item.value==='clear'){
            display.value='';
        }

        if(item.value==='delete'){
            display.value=display.value.slice(0,-1)
        }

        if(['+','-','*','/','%'].includes(item.value)){
            display.value+=value;
        }

        if(item.value==='='){
           try {
            display.value= eval(display.value)
           } catch (error) {
            display.value='error'
           }
        }

        if(item.value==='.' && display.value.split('').includes('.')){
            display.value;
        }else if(item.value==='.'){
            display.value+=value;
        }

        // here there is a problem 798.35 after that it will not print '.' anymore
        // but when you add next num means like these 798.35+653 'here when you want to add'
        // '.' again it will not add again

       
    })
})

