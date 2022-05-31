// Wrap in {} so that it's not global
{
	// Register
	window.registerHash("lose", "Lose", "lose__main");
	// Get the next button
	const homeButton = document.getElementById("lose__gohome");
	// Add an event listener to the home button
	homeButton.addEventListener("click", function() {
		// Change the hash to nil
		window.location.hash = "";
	});
}