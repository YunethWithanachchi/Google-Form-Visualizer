async function fetchResponseCount() {
    try {
        const response = await fetch("YOUR_WEB_APP_URL"); // Replace with the Apps Script URL
        const data = await response.json();
        document.getElementById("counter").textContent = data.responses;
    } catch (error) {
        document.getElementById("counter").textContent = "Error loading data!";
        console.error("Error fetching response count:", error);
    }
}

// Refresh the counter every 5 seconds
setInterval(fetchResponseCount, 5000);
fetchResponseCount(); // Initial load