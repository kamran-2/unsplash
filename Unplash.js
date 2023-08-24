
// document.getElementById("button").addEventListener("click",function c(){
//     let s = document.getElementsByClassName("dailog_box1");
//     // if(s.style.display != 'none'){
//         s.style.display = "block";
//     // }
//     // else{
//         // s.style.display = "block";
//     // }  
//     });
function hide_bar(){
    //  let box_hide=null;
    let box_hide = document.getElementById('dailog_box1')
    //  let box_hide = document.querySelector("#dailog_box");
     if(box_hide.style.display =='none'){
        box_hide.style.display = "block";
     }
     else{
        box_hide.style.display="none";
     }

}