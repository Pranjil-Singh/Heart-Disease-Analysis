document.addEventListener("DOMContentLoaded", () => {
    console.log("Web page loaded successfully!");

    const viz = document.getElementById('tableauViz');

    // This listens for the Tableau dashboard to finish rendering on the page
    if (viz) {
        viz.addEventListener('firstinteractive', (e) => {
            console.log("Tableau Dashboard is fully loaded and interactive!");
        });
    }
});