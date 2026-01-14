const features = [
    {
        title: "AI Analytics",
        desc: "Analyze user behavior and predict trends automatically."
    },
    {
        title: "Smart Automation",
        desc: "Automate workflows using intelligent decision engines."
    },
    {
        title: "Adaptive UI",
        desc: "Interface adapts based on user interaction patterns."
    },
    {
        title: "Real-Time Insights",
        desc: "Instant insights powered by AI-driven data processing."
    },
    {
        title: "Secure AI Core",
        desc: "Advanced security with AI-based threat detection."
    }
];

const generateBtn = document.getElementById("generateBtn");
const featureContainer = document.getElementById("featureContainer");

generateBtn.addEventListener("click", () => {
    featureContainer.innerHTML = "";

    const shuffled = features.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(feature => {
        const card = document.createElement("div");
        card.classList.add("feature-card");

        card.innerHTML = `
            <h4>${feature.title}</h4>
            <p>${feature.desc}</p>
        `;

        featureContainer.appendChild(card);
    });
});
