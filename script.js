var items = document.getElementsByClassName("js-delete-branch");
for (let i=0; i<=items.length; i++) {
    setTimeout(() => {
	// Click on "Delete Git Branch"
    	items[i].click()
	// Enter validation value in the text field and enable submit btn
	setTimeout(function(){
		document.getElementById("confirm-text").value = 'DELETE'
		document.getElementById("confirmation-dialog-confirm").disabled = false
	}, 500)
	// Click on sumbit btn
	setTimeout(function(){
		document.getElementById("confirmation-dialog-confirm").click()
	}, 500)
    }, 1500 * i);
}
