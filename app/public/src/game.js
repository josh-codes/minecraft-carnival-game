// Wrap in {} so that it's not global
{
	// Get all the items
	const itemName = document.getElementById("game__item_name");
	const itemImg = document.getElementById("game__item_img");
	const itemStop = document.getElementById("game__item_stop");
	const mobName = document.getElementById("game__mob_name");
	const mobImg = document.getElementById("game__mob_img");
	const mobStop = document.getElementById("game__mob_stop");
	const next = document.getElementById("game__next");
	// Reset
	const reset = () => {
		// Set the item and mob in game to undefined
		game.item = undefined;
		game.mob = undefined;
		// Clear the next button
		next.disabled = true;
		// Clear the item name and image
		itemName.innerText = "";
		itemImg.src = "";
		itemImg.setAttribute("alt", "");
		itemStop.disabled = false;
		// Clear the mob name and image
		mobName.innerText = "";
		mobImg.src = "";
		mobImg.setAttribute("alt", "");
		mobStop.disabled = false;
	}
	// Game vars
	const game = {
		item: undefined,
		mob: undefined
	};
	// Register
	window.registerHash("game", "Game", "game__main", reset);
	// Lookup
	const lookup = {
		0: {
			id: 0,
			reward: 20,
			mob: "Ender Dragon",
			mobImg: "/assets/game/mob_0.gif",
			item: "Dragon Egg",
			itemImg: "/assets/game/item_0.png"
		},
		1: {
			id: 1,
			reward: 5,
			mob: "Wither",
			mobImg: "/assets/game/mob_1.png",
			item: "Nether Star",
			itemImg: "/assets/game/item_1.gif"
		},
		2: {
			id: 2,
			reward: 2,
			mob: "Spider",
			mobImg: "/assets/game/mob_2.png",
			item: "String",
			itemImg: "/assets/game/item_2.png"
		},
		3: {
			id: 3,
			reward: 2,
			mob: "Creeper",
			mobImg: "/assets/game/mob_3.png",
			item: "Gunpowder",
			itemImg: "/assets/game/item_3.png"
		},
		4: {
			id: 4,
			reward: 2,
			mob: "Skeleton",
			mobImg: "/assets/game/mob_4.png",
			item: "Bone",
			itemImg: "/assets/game/item_4.png"
		},
		5: {
			id: 5,
			reward: 1,
			mob: "Zombie",
			mobImg: "/assets/game/mob_5.png",
			item: "Rotten Flesh",
			itemImg: "/assets/game/item_5.png"
		}
	};
	// Probability
	const probability = [
		0,
		1, 1,
		2, 2, 2,
		3, 3, 3,
		4, 4, 4,
		5, 5, 5, 5
	];
	/** Gets a random probability */
	const randomItem = () => {
		// Get a random number from zero to the length of the probability array
		const random = Math.floor(Math.random() * (probability.length));
		// Return the probability at the random index
		return lookup[probability[random === probability.length ? probability.length - 1 : random]] || lookup[0];
	};
	window.ri = randomItem;
	// The game loop
	setInterval(() => {
		// If the game item is undefined, randomize it
		if (!game.item) {
			const item = randomItem();
			// Change the inner text of the item name
			itemName.innerText = item.item;
			// Change the image source
			itemImg.src = item.itemImg;
			itemImg.setAttribute("alt", item.item);
			// Enable the stop button
			itemStop.disabled = false;
		}
		// If the game mob is undefined, randomize it
		if (!game.mob) {
			const mob = randomItem();
			// Change the inner text of the mob name
			mobName.innerText = mob.mob;
			// Change the image source
			mobImg.src = mob.mobImg;
			mobImg.setAttribute("alt", mob.mob);
			// Enable the stop button
			mobStop.disabled = false;
		}
		// If both the game item and mob are defined, enable the next button
		if (game.item && game.mob) {
			next.disabled = false;
		}

	}, 100);
	// When the item stop button is clicked
	itemStop.addEventListener("click", () => {
		// Set the item to random
		game.item = randomItem();
		// Change the inner text of the item name
		itemName.innerText = game.item.item;
		// Change the image source
		itemImg.src = game.item.itemImg;
		itemImg.setAttribute("alt", game.item.item);
		// Disable the stop button
		itemStop.disabled = true;
	});
	// When the mob stop button is clicked
	mobStop.addEventListener("click", () => {
		// Set the mob to random
		game.mob = randomItem();
		// Change the inner text of the mob name
		mobName.innerText = game.mob.mob;
		// Change the image source
		mobImg.src = game.mob.mobImg;
		mobImg.setAttribute("alt", game.mob.mob);
		// Disable the stop button
		mobStop.disabled = true;
	});
	// When the next button is clicked
	next.addEventListener("click", () => {
		// Make sure both are defined
		if (game.item && game.mob) {
			// Check if win
			if (game.item.id === game.mob.id) {
				// Redirect to reward
				const search = `?earn=${encodeURIComponent(game.item.reward)}&type=${encodeURIComponent(game.item.id)}`;
				// Change the url
				history.pushState({}, null, `/${search}#game`);
				// Redirect
				location.hash = "reward";
				return;
			} else {
				// Go to lose
				window.location.hash = "lose";
			}
		}
	});
}