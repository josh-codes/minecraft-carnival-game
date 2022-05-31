// Wrap in {} so that it's not global
{
	// Register
	window.registerHash("reward", "Reward", "reward__main", () => {
		const itemLookup = {
			0: "Dragon Egg",
			1: "Nether Star",
			2: "String",
			3: "Gunpowder",
			4: "Bone",
			5: "Rotten Flesh"
		};
		const mobLookup = {
			0: "Ender Dragon",
			1: "Nether Star",
			2: "Spider",
			3: "Creeper",
			4: "Skeleton",
			5: "Zombie"
		};
		// Get the items
		const itemMoney = document.getElementById("reward__money_item");
		const descMoney = document.getElementById("reward__money_desc");
		const moneySingular = document.getElementById("reward__currency_singular");
		const moneyPlural = document.getElementById("reward__currency_plural");
		const rewardItem = document.getElementById("reward__match_item");
		const rewardMob = document.getElementById("reward__match_mob");
		// Get the query strings
		const search = new URLSearchParams(location.search);
		// Get the money
		const money = isNaN(parseInt(search.get("earn") || "1"))
			? 1
			: parseInt(search.get("earn") || "1");
		// Get the item and mob
		const item = itemLookup[search.get("type")]|| itemLookup[0];
		const mob = mobLookup[search.get("type")] || mobLookup[0];
		// Set the innerText of the money to it
		itemMoney.innerText = money.toString();
		descMoney.innerText = money.toString();
		// If money is one hide the plural else, hide singular
		if (money === 1) {
			moneySingular.classList.remove("global--frame-hidden");
			moneyPlural.classList.add("global--frame-hidden");
		} else {
			moneySingular.classList.add("global--frame-hidden");
			moneyPlural.classList.remove("global--frame-hidden");
		}
		// Set the matches
		rewardItem.innerText = item;
		rewardMob.innerText = mob;
	});
	// Get the home
	const homeButton = document.getElementById("reward__gohome");
	// Add an event listener to the home button
	homeButton.addEventListener("click", function() {
		// Change the hash to nil
		window.location.hash = "";
	});
}