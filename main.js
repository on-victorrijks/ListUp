/*
MADE BY Victor Rijks
ListUp v1.0

MIT License

Copyright (c) 2017 Victor Rijks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Thanks !

*/



var doneF = 0;
var debug = 0;
var searchbar = 0;
var title = 0;
var frameId = 0;

$( document ).ready(function() {
  $("select").each(function( i ) { // are they select ?
if ($(this).is("[data-listup]")) { // do they have the "data-listup" attr ?
//found a listup case

//Detect all params
if ($(this).is("[data-debug]")) { // need debug ?
var debug = 1;
}
if ($(this).is("[data-listup-searchbar]")) { // need searchbar ?
var searchbar = 1;
}
if ($(this).is("[data-listup-title]")) { // need title ?
var title = 1;
}
if ($(this).is("[data-listup-doneF]")) { // need done function ?
var doneF = 1;
}
var idElm = $(this).attr('id');

if(debug == 1){console.log('found a listup case : #' + idElm);}

var options = []; // array of options
var optionsVal = []; // array of options values
$("#" + idElm + " option").each(function(){ // get content of each option
options.push($(this).text()); 
optionsVal.push($(this).val()); 
});

if ($(this).is("[data-listup-content]")) { // get frame id

var frameId = this.getAttribute("data-listup-content");
$('#'+idElm).css('display', 'none');// hiding default select
if (title == 1) {
	var titleText = '<h1 class="listup-maintitle">'+this.getAttribute("data-listup-title")+'</h1>';
} else {
	var titleText = 'Select an option';
}

var optionsLGT = options.length;

var listOptionHTML = "";
var i = 0;
while (i < optionsLGT) {
    var rV = i + 1; 
    listOptionHTML += '<p valHtm="'+rV+'" id="listup-OPTION-'+frameId+i+'">'+options[i]+'</p>';
    i++;
}

if (searchbar == 1) {
var searchbarHTML =  '<input id="listup-dynSrcb-'+frameId+'" placeholder="'+this.getAttribute("data-listup-searchbar")+'">';
} else {
var searchbarHTML =  '';
}



var fIDC = String(frameId);

$('#'+frameId).html(
'<div class="listup-maincontent"><div class="listup-actBtn" id="listup-BUTTON-'+frameId+'">'+titleText+'</div><div class="listup-drop">'+searchbarHTML+listOptionHTML+'</div></div>'
);
$("#"+frameId+" .listup-drop").slideToggle(0);

$("#listup-BUTTON-"+frameId).click(function() {
$("#"+frameId+" .listup-drop").slideToggle();
});

var chArray = options.slice();
$("#listup-dynSrcb-"+frameId).change(function() {
var valInpDyn = $("#listup-dynSrcb-"+frameId).val();
if(jQuery.inArray(valInpDyn, chArray) !== -1){

 $("#"+frameId+" .listup-drop p").each(function(){
     var cache_t=$(this).text();
     var cache_elm = this;
     var cache_elm_ID = cache_elm.getAttribute("id");
     if(cache_t==valInpDyn){
$("#"+frameId+" .listup-drop").animate({
    scrollTop: $("#"+cache_elm_ID).offset().top - $("#"+frameId+" .listup-drop").offset().top + $("#"+frameId+" .listup-drop").scrollTop()
});
$("#listup-dynSrcb-"+frameId).val('');
setTimeout(function(){
$(cache_elm).css('background-color','rgba(255,255,255,0.2)');
setTimeout(function(){
$(cache_elm).css('background-color','rgba(255,255,255,0)')
}, 560);
}, 360);
}
   })
}
});


$("#"+frameId+" .listup-drop p").each(function(index) {
    $(this).on("click", function(){
        var textcacheRST = $(this).text();
        var slOpt = this.getAttribute("valHtm");
if (doneF == 1) {
    listup_Frst(textcacheRST, frameId, optionsVal, slOpt);
}

    });
});


}

}
});
});



function listup_toggle(fID, speed){
    if (typeof fID !== "undefined") {
if (speed == 0) {
$("#"+fID+" .listup-drop").slideToggle(0);    
} else if(speed == 'default'){
$("#"+fID+" .listup-drop").slideToggle();  
} else {
$("#"+fID+" .listup-drop").slideToggle(speed);        
}
    } else {
        console.log("ListUp : listup_toggle function didn't receive a frameId");
    }
}

