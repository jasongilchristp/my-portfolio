npm install

npm run build

---

---

---

---

---

---

---


# Jason Gilchrist P — Portfolio

A responsive personal portfolio website built with React.

The portfolio presents my professional background in CRM application development and my transition towards Generative AI, Agentic AI systems, RAG applications and AI automation.

## Live Portfolio

[Add portfolio URL after deployment](https://jasongilchristp.github.io/my-portfolio/)

## About

This portfolio includes:

- Professional introduction and current AI focus
- Background in CRM application development and workflow automation
- Technical skills across Python, Generative AI, RAG, LangChain and LangGraph
- Work experience timeline
- Professional contact links for email, LinkedIn and GitHub
- Responsive layout for desktop and mobile devices

## Tech Stack

- React
- Wouter for client-side routing
- CSS Grid and Flexbox
- GitHub Pages for deployment

## Pages

| Page | Description |
|---|---|
| Home | Introduction, current direction and availability |
| About | Professional background, AI transition and target opportunities |
| Skills | Technical toolkit and focus areas |
| Works | Work experience and technical upskilling journey |
| Contact | Professional contact details and profile links |

## Project Structure

```text
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Home/
│   ├── NavBar/
│   ├── Skills/
│   └── Works/
├── App.css
├── App.jsx
└── index.js

public/
├── circle.png
└── jason.png
```

## Run Locally

### Prerequisites

Install the following before starting:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/jasongilchristp/my-portfolio.git
```

Open the project folder:

```bash
cd my-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the local URL shown in the terminal, commonly:

```text
http://localhost:3000
```

## Production Build

Create an optimised production build:

```bash
npm run build
```

This creates a `build` directory containing the production-ready static files. [web:149]

## GitHub Pages Deployment

### 1. Install `gh-pages`

Install the deployment package as a development dependency:

```bash
npm install --save-dev gh-pages
```

### 2. Update `package.json`

Add this `homepage` value at the top level of `package.json`:

```json
"homepage": "https://jasongilchristp.github.io/my-portfolio"
```

Add these scripts inside the existing `"scripts"` object:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Example:

```json
{
  "homepage": "https://jasongilchristp.github.io/my-portfolio",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

The `predeploy` command creates the build automatically before deployment, while `gh-pages -d build` publishes the contents of the `build` directory to the `gh-pages` branch. [web:153][web:155]

### 3. Deploy

You can run the commands individually:

```bash
npm install
npm run build
gh-pages -d build
```

Or, after adding the `predeploy` and `deploy` scripts, use:

```bash
npm run deploy
```

### 4. Enable GitHub Pages

In the GitHub repository:

1. Open **Settings**
2. Select **Pages**
3. Under **Build and deployment**, choose **Deploy from a branch**
4. Select branch: `gh-pages`
5. Select folder: `/ (root)`
6. Click **Save**

Your deployment URL should be:

```text
https://jasongilchristp.github.io/my-portfolio/
```

GitHub Pages serves the built site from the configured deployment branch. [web:153]

## Routing Note

This project uses:

```jsx
<Router base="/my-portfolio">
```

Keep this base path if the portfolio is deployed at:

```text
https://jasongilchristp.github.io/my-portfolio/
```

If you deploy to a custom domain or to the root domain, remove the `base` prop:

```jsx
<Router>
```

## Before Publishing

- Replace any remaining placeholder URLs in the footer
- Verify LinkedIn and GitHub links
- Confirm the portfolio image is clear and professional
- Test every navigation link on desktop and mobile
- Do not publish your home address, private phone number or confidential employer/client details
- Add GitHub repositories and project demos as your Agentic AI portfolio develops

## Contact

- LinkedIn: [paladugujasongilchrist](https://www.linkedin.com/in/paladugujasongilchrist)
- GitHub: [jasongilchristp](https://github.com/jasongilchristp)
- Email: [jason.gilchrist.p@gmail.com](mailto:jason.gilchrist.p@gmail.com)

---

Built by Jason Gilchrist P using React.
