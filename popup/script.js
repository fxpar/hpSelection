

function listenForClicks() {
  document.addEventListener("click", (e) => {



    function Actions(tabs) {


		switch (e.target.id) {
			
			case "action1":
				var myAlert = chrome.i18n.getMessage("action1");
				console.log('**ALERT**:'+myAlert);
			  chrome.tabs.executeScript(tabs[0].id, {
			  code: `document.getElementById("div").classList.remove("NePasImprimer"); document.getElementById("div").classList.remove("ThemeEmeraude"); document.getElementById("div").classList.remove("SansSelectionTexte"); document.getElementById("div").classList.remove("BloquerInterface"); document.body.innerHTML += '<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"></div>'; window.alert('`+myAlert+`');`
			});
			break;
			
			case "action2":
				var myAlert = browser.i18n.getMessage("action2");
				console.log('**ALERT**:'+myAlert);
			  chrome.tabs.executeScript(tabs[0].id, {
			  code: `document.querySelectorAll(".NePasImprimer").forEach(function (element ,index) {element.classList.remove("NePasImprimer");}); document.querySelectorAll(".ThemeEmeraude").forEach(function (element ,index) {element.classList.remove("ThemeEmeraude");}); document.querySelectorAll(".SansSelectionTexte").forEach(function (element ,index) {element.classList.remove("SansSelectionTexte");}); document.querySelectorAll(".BloquerInterface").forEach(function (element ,index) {element.classList.remove("BloquerInterface");}); document.body.innerHTML += '<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"></div>'; window.alert('`+myAlert+`');`
			});
			break;
			
			case "action3":
				var myAlert = chrome.i18n.getMessage("action3");
				console.log('**ALERT**:'+myAlert);
			  chrome.tabs.executeScript(tabs[0].id, {
			  code: `document.getElementsByTagName("BODY")[0].innerHTML = document.getElementById("GInterface.Instances[1].Instances[10]").innerHTML; document.getElementById("GInterface.Instances[1].Instances[10]_Zone_0").style.height =""; window.alert('`+myAlert+`');`
			});
			break;
			


		}
		

	  //alert("ok!");
    }


    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.log(`Could not Select courses : ${error} `);
    }

    /**
     * Get the active tab,
     * then call "courseActions()" or "reset()" as appropriate.
     */
	 
   // if (e.target.classList.contains("button")) {
		/*
      browser.tabs.query({active: true, currentWindow: true})
        .then(courseActions)
        .then(courseActions)
        .catch(reportError);
		*/
		browser.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    Actions(tabs);
    //console.log(tabURL);
});
		
    //}

	
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  //document.querySelector("#popup-content").classList.add("hidden");
  //document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute HPsel content script: ${error.message}`);
  return "ok";
}




try{
//internationalizePopup();
//initialize();
listenForClicks();
}
catch(error){
	reportExecuteScriptError(error);
}

