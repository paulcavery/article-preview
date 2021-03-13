let footer = document.getElementById("footer");
let share = document.getElementById("share");
let footerDisplay = footer.style.display;
let shareClick = document.getElementsByClassName("shareClick");

const toggleShare = () => {
	console.log("clicked");
	if ((footerDisplay = "none" && share.style.display === "flex")) {
		console.log("none");
		footer.style.display = "block";
		share.style.display = "none";
	} else if ((footerDisplay = "block")) {
		console.log("block");
		share.style.display = "flex";
		footer.style.display = "none";
	} else {
		console.log("Error");
	}
};
for (var i = 0; i < shareClick.length; i++) {
	shareClick[i].addEventListener("click", toggleShare);
}
