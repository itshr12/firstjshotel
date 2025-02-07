var htl={
    name: 'AMAN',
    prz: 120,
    dsc: 11,
    offrt: function(){
        var rt=this.prz*((100-this.dsc)/100);
        return rt;
    }
}
var htn,rtp,dstr,lloo;
htn=document.getElementById('x1');
rtp=document.getElementById('x2');
dstr=document.getElementById('x3');
lloo=document.getElementById('x4');

htn.textContent=': '+htl.name;
rtp.textContent=': $'+ htl.prz.toFixed(3);
dstr.textContent=': '+htl.dsc +'%';
lloo.textContent=': $'+htl.offrt();

const exp=new Date();
exp.setDate(exp.getDate() +1);
function clck(){
    const n=new Date();
    const remti=exp-n;
    if(remti<=0){
        var lo= document.getElementById('lo6');
        lo.textContent='EXPIRE!!!';
        clearInterval(clck);
    }
    else{
        const day=Math.floor(remti/(1000*60*60*24));
        const hours=Math.floor((remti%(1000*60*60*24))/(1000*60*60));
        const min=Math.floor((remti%(1000*60*60))/(1000*60));
        const sec=Math.floor((remti%(1000*60))/(1000));
        document.getElementById('lo6').innerHTML=`${day}d ${hours}h ${min}m ${sec}s `;
    }
}
clck();
setInterval(clck,1000);

function sol(){
    var q,w,e,ek;
    q=parseFloat(document.getElementById('b2').value);
    w=htl.offrt();
    if(q<=0)
    {
        document.getElementById('b5').textContent=`Enter valid Number`;
    }
    else
    {
        if(q>100)
        {
            document.getElementById('b5').textContent=`Only 100 rooms avilable`;
        }
        else{
        ek=(q*w);
        e=ek.toFixed(2);
        document.getElementById('b5').textContent=`$${e}`;
        }
    }

}