# VS Code, but Better — Kurukshetra Hackathon Project

## 🚀 Overview

**Kurukshetra Hackathon** is your next-generation coding environment—think **VS Code, but better**.  

We integrated **AI-driven enhancements** to make development smarter and faster:

- **🔎 Retrieval-Augmented Generation (RAG):**  
  We built a custom RAG model that retrieves relevant snippets from documentation and codebases before generating completions, making coding assistance context-aware and reliable.

- **🖧 MCP (Model-Container Protocol) Server:**  
  Our MCP Server manages model serving, context routing, and multi-session orchestration—ensuring fast and scalable AI support.

- **⚡ Context Refinement Pipeline:**  
  Each response is passed through a multi-step refinement process that filters noise and improves precision so developers get only the **most relevant suggestions**.

---

## 📂 Directory Structure

A simple overview of the repository layout:


| Directory / File        | Purpose |
|-------------------------|---------|
| `.config`, `.configurations` | Dev environment and custom settings |
| `.devcontainer`         | Configuration for VS Code dev containers |
| `build/`                | Compiled artifacts ready for distribution |
| `cli/`                  | Command-line tools and utilities |
| `codeshetra_icons/`, `void_icons/` | Custom icon assets |
| `extensions/`           | Plugin or extension implementations |
| `remote/`               | Remote collaboration/development tooling |
| `resources/`            | Static resources (e.g., docs, media) |
| `scripts/`              | Build or deployment helper scripts |
| `src/`                  | Primary TypeScript application code |
| `test/`                 | Automated test suites |
| `package.json`, `gulpfile.js` | Build and dependency configuration |
| `LICENSE-VS-Code.txt`, `LICENSE.txt` | Licensing and attribution |

---

##  How to Run the Final Build

Follow these steps to set up and launch the project:
```bash
# 1. Install dependencies

   npm install

# 2. Compile the source

  npm run compile

# 3. Build production (optional, for optimized build)

  npm run compile-build

# 4. Launch the application (Electron)

  npm run electron
```
