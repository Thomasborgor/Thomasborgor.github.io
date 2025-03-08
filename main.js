

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
	const links = document.querySelectorAll(".links a");
	

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
	const thingy2 = document.getElementById("background_thingy");
	thingy.textContent = messageArray[Math.floor(Math.random() * messageArray.length)];
	
	let fadeTimeout; // Tracks the pending background reset

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        clearTimeout(fadeTimeout); // Cancel any pending fade-out reset
        
        if (link.classList.contains("bar_and_grill_link")) {
            thingy2.style.backgroundImage = "url('./bar/space.jpg')";
        } else if (link.classList.contains("tommyos_link")) {
            thingy2.style.backgroundImage = "url('./tommyos/logo.jpg')";
        } else if (link.classList.contains("assembly_link")) {
            thingy2.style.backgroundImage = "url('./assembly/assembly.jpg')";
        }

        thingy2.style.backgroundRepeat = "no-repeat";
        thingy2.style.backgroundPosition = "center";
        thingy2.style.opacity = "1"; // Start fade-in
		thingy2.style.left = "-8px;";
    });

    link.addEventListener("mouseout", () => {
		thingy2.style.opacity = "0"; // Start fade-out
        fadeTimeout = setTimeout(() => {
            thingy2.style.backgroundImage = "url('green.jpg')";
            thingy2.style.backgroundRepeat = "repeat";
            thingy2.style.backgroundSize = "auto";
			thingy2.style.left = "-8px;";
            
        }, 500); // Matches the fade duration
    });
});

});

