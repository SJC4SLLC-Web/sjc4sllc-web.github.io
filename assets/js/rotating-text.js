document.addEventListener("DOMContentLoaded", function() {
    const textArray = [
        "Our proactive process enables businesses to evaluate technology initiatives and resource constraints, and develop results-oriented plans.",
        "We provide innovative solutions to meet the unique needs of our clients.",
        "Our expertise ensures the best outcomes for your business."
    ];
    let currentIndex = 0;
    const rotatingTextElement = document.getElementById("rotating-text");

    function rotateText() {
        rotatingTextElement.textContent = textArray[currentIndex];
        currentIndex = (currentIndex + 1) % textArray.length;
    }

    setInterval(rotateText, 9000);
});