// GitHub Pages SPA redirect script
// This script handles client-side routing on GitHub Pages
(function handleGitHubPagesRedirect(location) {
  // Check if there's a redirect needed (first char in search is '/')
  if (location.search[1] === '/') {
    // Decode the URL properly
    const decoded = location.search
      .slice(1)
      .split('&')
      .map(function decodeParam(s) {
        return s.replace(/~and~/g, '&');
      })
      .join('?');
      
    // Replace the current URL state without reloading the page
    window.history.replaceState(
      null, 
      null,
      location.pathname.slice(0, -1) + decoded + location.hash
    );
  }
})(window.location);