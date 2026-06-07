# Part 2 Responses

### What Worked
* **Tool Selection:** Used Codex with VS Code to successfully generate the UI template.
* **Onboarding:** The setup was easy to install and intuitively understood the project's infrastructure with minimal prompting.

---

### What Didn't Work
* **OS Limitations:** While Codex connected to Figma via MCP login, the MCP server could not be activated because Figma lacks a Desktop MCP server controller for Ubuntu.
* **Workaround:** To bypass this limitation, I had to configure Codex to access the Figma designs via HTTPS and API requests instead.

---

### What I'd Do Differently
* **Model Switch:** Next time, due to the limitations of Figma MCP on Ubuntu, I would implement Claude instead of Codex.
* **Automation:** Since this workflow can be automated, I would build a custom agentic flow to pull designs directly from Figma and automatically generate the UI components.