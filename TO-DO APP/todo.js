document.querySelector('#insert').onclick= function(){
    if(document.querySelector('#newitems input').value.length==0){
        alert("Empty! Enter an item");
    }
    else{
        document.querySelector('#items').innerHTML+=`<div class="task">
        <span id="taskname">
        ${document.querySelector('#newitems input').value}
        </span>
        
        <button class="delete"> Delete</button>
        </div>`;

        var cur_item= document.querySelectorAll('.delete');

        for(var i=0;i<cur_item.length;i++)
        {
            cur_item[i].onclick = function(){
                this.parentNode.remove();
            } 
        }
        
        

        var item = document.querySelectorAll('#taskname');

        for(var i=0;i<item.length;i++)
        {
            item[i].onclick = function(){
                this.classList.toggle('done');
            } 
        }
        document.querySelector('#newitems input').value=" ";
    }
}
function todayDate(){
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth()+1;
    var d = today.getDate();
    var date =d+"-"+m+"-"+y;
    document.getElementById("date").innerText = date; 
  }

  function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0) { hh = 12; }
    if(hh > 12) { hh = hh - 12; session = "PM"; }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;  
    let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
