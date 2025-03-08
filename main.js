

const messageArray = [
	"Creator of TommyOS!",
	"Constructor of A's Bar and Grill!",
	"Actually Ivan!",
	"The Bartender!",
	"thomasborgor.github.io",
	"mov ax, 0x0e01 int 0x10",
	"dramatic",
	"did YOU sign up for leap win time this week?"
]
document.addEventListener("DOMContentLoaded", () => {
    const bio = document.querySelector(".bio");

    function scaleBio() {
        const rect = bio.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scale based on distance from center
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
        const scaleValue = Math.max(1, 1.5 - (distanceFromCenter / windowHeight));
		const newScaleValue = scaleValue * 1.7;

        bio.style.transform = `scale(${newScaleValue})`;
    }

    window.addEventListener("scroll", scaleBio);
    scaleBio(); // Run once on load
	
	const thingy = document.getElementById("top_bar");
	thingy.textContent = messageArray[Math.floor(Math.random() * messageArray.length)];
	

});

