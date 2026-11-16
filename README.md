# Phishing Threat Scanner

A browser-based triage tool built with HTML, CSS, and JavaScript that evaluates suspicious URLs and email snippets using a cumulative risk scoring engine.

## Detection Capabilities
* *URL Spoofing Detection:* Flags @ redirect tricks inside links (https://malicious.com).
* *Unencrypted Protocol Alerts:* Identifies http:// links lacking HTTPS encryption.
* *Social Engineering Analysis:* Detects urgency triggers (urgent, verify your account, suspended).
* *High-Risk TLD & Shortener Checks:* Flags .xyz, .top, and bit.ly links.
* *Cumulative Risk Scoring:* Uses independent conditional checks to calculate a threat score out of 100.

## Live Demo
Test the tool here: [Phishing Threat Scanner](https://github.io)
