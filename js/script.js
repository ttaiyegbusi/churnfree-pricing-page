/* Churnfree Pricing — FAQ accordion */
document.querySelectorAll('.acc-q').forEach(function(q){
  q.addEventListener('click',function(){
    var item=q.parentElement;
    var a=item.querySelector('.acc-a');
    var open=item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(function(i){
      i.classList.remove('open'); i.querySelector('.acc-a').style.maxHeight=null;
    });
    if(!open){item.classList.add('open'); a.style.maxHeight=a.scrollHeight+'px';}
  });
});
// open the pre-opened item on load
window.addEventListener('load',function(){
  var o=document.querySelector('.acc-item.open .acc-a');
  if(o) o.style.maxHeight=o.scrollHeight+'px';
});
