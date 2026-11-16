const threatInput = document.getElementById("threat-input");
const scanBtn = document.getElementById("scan-btn");
const clearBtn = document.getElementById("clear-btn");
const verdictEl = document.getElementById("verdict-el");

scanBtn.addEventListener("click", () => {
    let text = threatInput.value.toLowerCase();
    let riskScore = 0;

    if (text.length === 0) {
        verdictEl.textContent = "Please paste a URL or message to scan.";
        verdictEl.style.color = "#facc15";
        return;
    }

    // Independent 'if' checks add points for EVERY red flag found
    if (text.includes("@") && text.includes("http")) {
        riskScore += 50;
    }

    if (text.includes("http://")) {
        riskScore += 30;
    }

    if (text.includes("urgent") || text.includes("verify your account") || text.includes("suspended")) {
        riskScore += 30;
    }

    if (text.includes(".xyz") || text.includes(".top") || text.includes("bit.ly")) {
        riskScore += 25;
    }

    // Cap the maximum score at 100
    if (riskScore > 100) {
        riskScore = 100;
    }

    // Final verdict based on total accumulated score
    if (riskScore >= 70) {
        verdictEl.textContent = "CRITICAL RISK (" + riskScore + "/100): Multiple phishing indicators!";
        verdictEl.style.color = "#ef4444";
    } else if (riskScore >= 30) {
        verdictEl.textContent = "SUSPICIOUS (" + riskScore + "/100): Treat with caution.";
        verdictEl.style.color = "#f97316";
    } else {
        verdictEl.textContent = "LOW RISK (" + riskScore + "/100): No obvious red flags.";
        verdictEl.style.color = "#22c55e";
    }
});

clearBtn.addEventListener("click", () => {
    threatInput.value = "";
    verdictEl.textContent = "Awaiting input...";
    verdictEl.style.color = "#e2e8f0";
});