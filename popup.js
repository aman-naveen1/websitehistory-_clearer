document.getElementById("deleteBtn").addEventListener("click", function() {
    let domain = document.getElementById("domain").value.trim();
    if (!domain) {
        document.getElementById("status").textContent = "Enter a valid website!";
        return;
    }

    let query = `*://${domain}/*`;  // Matches all URLs of the domain

    chrome.history.search({ text: domain, maxResults: 1000 }, function(results) {
        results.forEach(item => {
            if (item.url.includes(domain)) {
                chrome.history.deleteUrl({ url: item.url });
            }
        });
        document.getElementById("status").textContent = `History deleted for ${domain}!`;
    });
});
