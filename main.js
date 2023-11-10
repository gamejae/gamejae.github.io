function fetchAndRenderSocialLinks() {
    // Fetch the social links from the JSON file
    fetch("links.json")
        .then((response) => response.json())
        .then((data) => {
            const socialLinksSection = document.getElementById("social-links");

            // Clear existing social links
            socialLinksSection.innerHTML = '';

            // Check if there are any social links
            if (data.socialLinks.length > 0) {
                // Generate buttons for each social link
                data.socialLinks.forEach((link) => {
                    const socialButton = document.createElement("a");
                    socialButton.href = link.url;
                    socialButton.target = "_blank";
                    socialButton.className = "btn btn-primary mr-2 mb-2";
                    socialButton.innerHTML = `${link.name} <i class="${link.icon}"></i>`;

                    socialLinksSection.appendChild(socialButton);
                });
            } else {
                // No social links, hide the social section
                socialLinksSection.style.display = 'none';
            }
        })
        .catch((error) => {
            console.error("Error loading social links:", error);
        });
}

// Fetch and render social links initially
fetchAndRenderSocialLinks();

// Automatically refresh social links every 3 minutes (180,000 milliseconds)
setInterval(fetchAndRenderSocialLinks, 3 * 60 * 1000); // 3 minutes in milliseconds
