

const messageArray = [
	"thomasborgor.github.io"

]
document.addEventListener("DOMContentLoaded", () => {
	window.location.href = "./bar/index.html"; //placeholder
	document.getElementById("popupInput").addEventListener("keydown", HandleEnterKey);

    const bio = document.querySelector(".bio");
	const links = document.querySelectorAll(".links a");
    function scaleBio() {
        const rect = bio.getBoundingClientRect();
        const windowHeight = window.innerHeight;
		

        // Calculate scale based on distance from center
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
        const scaleValue = Math.max(1, 1.5 - (distanceFromCenter / windowHeight));
		const magicNumber = ((windowHeight / 2) / window.innerWidth);
		const newScaleValue = scaleValue * 1.7 - magicNumber;
		//console.log(magicNumber);
		

        bio.style.transform = `scale(${newScaleValue})`;
    }

    window.addEventListener("scroll", scaleBio);
    scaleBio(); // Run once on load
	
	const thingy = document.getElementById("top_bar");
	const thingy2 = document.getElementById("background_thingy");
	thingy.textContent = messageArray[Math.floor(Math.random() * messageArray.length)];
	
let fadeTimeout; // Declare fadeTimeout outside so it can be cleared or reset properly
let currentTimeout; // Track the current timeout


links.forEach(link => {
    link.addEventListener("mouseover", () => {
        clearTimeout(currentTimeout); // Cancel any pending fade-out reset

        // Remove previous background classes
        thingy2.classList.remove('green_bg', 'bar_and_grill_bg', 'tommyos_bg', 'assembly_bg');

        // Add the correct class based on the hovered link
        if (link.classList.contains("bar_and_grill_link")) {
            thingy2.classList.add("bar_and_grill_bg");
        } else if (link.classList.contains("tommyos_link")) {
            thingy2.classList.add("tommyos_bg");
        } else if (link.classList.contains("assembly_link")) {
            thingy2.classList.add("assembly_bg");
        }

        thingy2.style.opacity = "1"; // Start fade-in
    });

    link.addEventListener("mouseout", () => {
        thingy2.style.opacity = "0"; // Start fade-out

        // Reset styles after 500ms if no new hover has occurred
        currentTimeout = setTimeout(() => {
            thingy2.classList.remove('bar_and_grill_bg', 'tommyos_bg', 'assembly_bg');
            thingy2.classList.add('green_bg');  // Add default class back instead of inline styles
        }, 500); // Matches the fade duration
    });
});
function HandleEnterKey(event) {
            if (event.key === "Enter") {
				document.getElementById("popup").style.zIndex = "-9999";
				document.getElementById("popup").style.opacity = "0";
				return;
			}
}
});
