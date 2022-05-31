// Wrap in {} so that it's not global
{
	const titles = [
		"Written in JS",
		"Welcome to the Carnival Game",
		"This took so long to make",
		"You better not walk away",
		"I'm not a fan of you",
		"Most of the subtitles are made by an AI",
		"Reload the page to change the subtitle",
		"I am disappointed in you",
		"I'm not sure if you're a human or a computer",
		"Why are you here?",
		"This isn't a game",
		"Why do you even exist?",
		"Please don't leave me alone",
		"I'm not a robot",
		"Play the game"
	];
	// Register
	window.registerHash("title", "Title", "title__main", () => {
		// Get the title
		const titleSub = document.getElementById("title__title_sub");
		// Get the random number
		const random = Math.floor(Math.random() * titles.length);
		// Set the inner text
		titleSub.innerText = titles[random === titles.length ? titles.length - 1 : random];
	});
	// Get both buttons
	const playButton = document.getElementById("title__play");
	const creditsButton = document.getElementById("title__credits");
	// Add an event listener to the play button
	playButton.addEventListener("click", function() {
		// Change the hash to game
		window.location.hash = "payment";
	});
	// Add an event listener to the credits button
	creditsButton.addEventListener("click", function() {
		// Alert the user
		alert("Credits: Made by Joshua<josh@nullified.sh> using Node, Express, and EJS.");
	});
}