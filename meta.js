// Define the GitHub username
const githubUsername = "GameJae";

// Get the GitHub avatar using the GitHub API
fetch(`https://api.github.com/users/${githubUsername}`)
  .then((response) => response.json())
  .then((data) => {
    // Extract the avatar URL from the response data
    const avatarUrl = data.avatar_url;

    // Create meta tags for Open Graph properties
    const ogTitleTag = document.createElement("meta");
    ogTitleTag.setAttribute("property", "og:title");
    ogTitleTag.setAttribute("content", "GameJae Social Links");

    const ogTypeTag = document.createElement("meta");
    ogTypeTag.setAttribute("property", "og:type");
    ogTypeTag.setAttribute("content", "profile");

    const ogUrlTag = document.createElement("meta");
    ogUrlTag.setAttribute("property", "og:url");
    ogUrlTag.setAttribute("content", "https://GameJae.github.io");

    const ogImageTag = document.createElement("meta");
    ogImageTag.setAttribute("property", "og:image");
    ogImageTag.setAttribute("content", avatarUrl);

    // Append the meta tags to the document's head
    document.head.appendChild(ogTitleTag);
    document.head.appendChild(ogTypeTag);
    document.head.appendChild(ogUrlTag);
    document.head.appendChild(ogImageTag);

    // Create a link element for the favicon
    const faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = avatarUrl;

    // Append the link element to the document's head for the favicon
    document.head.appendChild(faviconLink);
  })
  .catch((error) => {
    console.error("Error fetching GitHub data:", error);
  });
