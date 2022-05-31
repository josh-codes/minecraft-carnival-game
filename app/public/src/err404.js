// Wrap in {} so that it's not global
{
	// Valid pages
	const pages = [];
	// Get the main frame
	const main = document.getElementById("err404__main");
	// Get the return button
	const returnButton = document.getElementById("err404__return_home");
	// Get the title
	const title = document.getElementById("global__title");
	// Hide all frames
	const hideAll = () => pages.forEach(page => page.element.classList.add("global--frame-hidden"));
	// Check if the hash is not in the pages array
	const checkHash = () => {
		// Get the index of the hash
		const index = pages.findIndex(page => window.location.hash === page.hash);
		// If the hash is not in the pages array
		if (index === -1) {
			// Hide all frames
			hideAll();
			// Unhide the main frame
			main.classList.remove("global--frame-hidden");
			// Change the title
			title.innerHTML = "Carnival Game: 404";
		} else {
			// Hide all the frames
			hideAll();
			// Hide the main frame
			main.classList.add("global--frame-hidden");
			// Show the title
			pages[index].element.classList.remove("global--frame-hidden");
			pages[index].call()
			// Change the title
			title.innerHTML = "Carnival Game: " + pages[index].title;
		}
	};
	// Call the checkHash function on page load
	checkHash();
	// When the url changes, check the hash
	window.addEventListener("hashchange", checkHash);
	// Create a registerHash function
	const registerHash = (hash, title, id, call = () => undefined) => {
		// Add the hash to the pages array if it's not already there
		if (!pages.includes("#" + hash)) {
			// Get the element
			const element = document.getElementById(id);
			// Hide the element
			element.classList.add("global--frame-hidden");
			// Add the hash to the pages array
			pages.push({
				hash: "#" + hash,
				title: title,
				element: element,
				call
			});
			checkHash();
		}
	};
	// Add it to the window
	window.registerHash = registerHash;
	// Add an event listener to the return button
	returnButton.addEventListener("click", function() {
		// Change the hash to /
		window.location.hash = "";
	});
}