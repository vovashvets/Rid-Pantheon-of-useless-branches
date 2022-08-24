var items = document.getElementsByClassName("js-delete-branch");
for (let i=0; i<=items.length; i++) {
    setTimeout(() => {
    	items[i].click()

		setTimeout(function(){
	    	document.getElementById("confirm-text").value = 'DELETE'
	    	document.getElementById("confirmation-dialog-confirm").disabled = false
		}, 500)

    	setTimeout(function(){
			document.getElementById("confirmation-dialog-confirm").click()
		}, 500)
    }, 1500 * i);
}
