




//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

//Get Element By Id    
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
    
//Create select fiend element
    function makeList(){
        var formTag = document.getElementsByTagName("form"),
        selectLi = $("select"),
        makeSelect = document.createElement("select");
        makeSelect.setAttribute("id", "groups");
        for(var i=0, j=itemGroup.length; i<j; i++){
            var makeOption = document.createElement("option");
            var optText = itemGroup[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    function getSelectedRadio(){
        var radio = document.forms[0].store;
        for(var i=0; i<radio.length; i++){
            if(radio[i].checked){
                storeValue = radio[i].value;
            }
        }
    }
    
    function getCheckboxValue(){
        if($("saveToFavs").checked){
            favoriteValue = $("saveToFavs").value;
        } else {
            favoriteValue = "No"
        }
    }
    
    function storeData(){
        var id = Math.floor(Math.random()*10000001);
        getSelectedRadio();
        getCheckboxValue();
        var item            ={};
            item.group      =["Group:", $("groups").value];
            item.iname      =["Item Name:", $("iName").value];
            item.getByDate  =["Date:", $("getByDate").value];
            item.location   =["Location:", storeValue];
            item.amount     =["Amount Needed:", $("range").value];
            item.fav        =["Is a Favorite:", favoriteValue];
            item.info       =["Additional Info", $("additionalInfo").value];
//Save data into Local Storage            
        localStorage.setItem(id, JSON.stringify(item));
        alert("Item Saved!");
            
    }
    
    function getData(){
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeList);
        for (var i-0, len=localStorage.length; i<len;i++){
            var makeLi = document.createElement("li");
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeLi.appendChild(makeSubList);
            for(var n in obj){
                var makeSubli = document.createElement("li");
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
            }
        }
    }
    
//Variable defaults
    var itemGroup = ["--Choose A Group--", "Food", "Clothes", "Housewares", "Electronics"];
    makeList();
    
//Set link & Click Events
    var displayLink = $("viewList");
    displayLink.addEventListener("click", getData);
    var clearLink = $("clearList");
    clearLink.addEventListener("click", clearLocal);
    var save = $("submit");
    save.addEventListener("click", storeData);
    
});