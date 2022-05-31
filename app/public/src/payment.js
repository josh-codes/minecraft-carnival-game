// Wrap in {} so that it's not global
{
	// Register
	window.registerHash("payment", "Payment", "payment__main");
	// Get the next button
	const nextButton = document.getElementById("payment__next");
	// Add an event listener to the next button
	nextButton.addEventListener("click", function() {
		// Change the hash to game
		window.location.hash = "game";
	});
}