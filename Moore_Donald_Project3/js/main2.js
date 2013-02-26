//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){
	
	
	
	//getElementByID
	function $(x){
	var theElement = document.getElementById("form");
	return theElement
	}
	
	//Create select field element
	function makeInfo(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("group"),
			makeSelect = document.createElement("group");
			makeSelect.setAttribute("id", "group");
		for(var i=0, j=itemGroup.length; i<j; i++){
		var makeOption = document.createElement("option");
		var optText = itemGroup[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect)
	}
	
	function getSelectedRadio(){
        var radios = document.form[0].store;
        for(var i=0; i<radios.length; i++){
            if(radios[i].checked){
             storeValue = radios[i].value;
            }
            
        }
        
   }
   
	function getCheckboxValue(){
        if($("yes").checked){
             favValue = $("yes").value;
        }else{
             favValue = "No"            
        }
   };
   
	function toggleControls(n){
	switch(n){
		case "on":
			$("form").style.display = "none";
			$("clearLink").style.display = "inline";
			$("viewLink").style.display = "none";
			$("addNew").style.display = "inline";
		break;
		case "off":
			$("form").style.display = "block";
			$("clearLink").style.display = "inline";
			$("viewLink").style.display = "none";
			$('addNew').style.display = "none";
			$("items").style.display = "none";
			break;
		default:
			return false;
	}
   }
   
	
	function storeData(){
	    var id   		= Math.floor(Math.random()*100000001);
	    //Gather up all data
	    getCheckboxValue();
	    getSelectedRadio();
	    var item 		={};
	        item.group                 =["Group:", $("group").value];
	        item.iname                 =["Item Name:", $("iName").value];
		item.getByDate             =["Date:", $("getByDate").value];
		item.location              =["Location:", storeValue];
		item.amount                =["Amount Needed:", $("range").value];
		item.fav                   =["Is a Favorite:", favoriteValue];
		item.info                  =["Additional Info", $("additionalInfo").value];
		item.store                 =["Store:", storeValue];
		item.saveToFavs            =["Fav:", favValue];
	    localStorage.setItem(id, JSON.stringify(item));
	    alert("Contact is Saved!");
	    
	}
	
	function getData(){
		toggleControls("on");
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
			}
		}
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear")
		}else{
			localStorage.clear();
			alert("All items are cleared!");
			window.location.reload();
			return false;
		}
	}
	//Variable defaults
	var itemGroup = ["--Choose A Group--", "Food", "Clothes", "Housewares", "Electronics"],
	storeValue,
	favValue = "No"
	;
	
	//Set link & Submit Click Events
	var displayLink = $("viewLink");
	displayLink.addEventListener("click", getData);
	var clearlink = $("clearLink");
	clearlink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);
	var checkbox.addEventListener("click", setCheckboxValue);
	var radio  = document.form[0].store;
	for (var i=0; i<radio.length; i++){
		radio[i].addEventLitsener("click", getSelectedRadio);
	};
	makeInfo();
	
	
	
});