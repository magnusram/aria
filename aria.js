document.getElementById("person").addEventListener("keyup", function(e){
    if(e.keyCode == 13)
	{
			var searchText = e.target.value.trim();			
			var isNumber = new RegExp('^\\d+$').test(searchText);
			if (isNumber)
			{
				browser.tabs.query(
				{
				active: true, currentWindow: true}, function(tabs) 
					{
						var tab = tabs[0];
						browser.tabs.update(tab.id, {url: 'https://bug.com/pls/bug/webbug_edit.edit_info_top?rptno='+encodeURIComponent(searchText)});
					}
				);
			}
			else
			{
				browser.tabs.query(
				{
				active: true, currentWindow: true}, function(tabs) 
					{
						var tab = tabs[0];
						browser.tabs.update(tab.id, {url: 'https://people.us.com/pls/oracle/f?p='+8000+':1:'+4098291047319+':::RP,RIR:P1_SEARCH,P1_SEARCH_TYPE:'+encodeURIComponent(searchText)});						
					}
					
				);	
				
			}	
	}
});


document.addEventListener("DOMContentLoaded", function(event) { 
			window.setTimeout(function () { 
					document.getElementById("person").focus();
			}, 0); 
		});
		
browser.runtime.onMessage.addListener(notify);

function notify(message) {
	alert(message.title);
	document.getElementById("title").text = message.title;
}
