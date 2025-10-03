# Monal Portfolio

A personal portfolio website showcasing my projects, skills, and creative work (web apps, mobile apps, AI-powered games, etc.). Built with React, TypeScript, Tailwind CSS, and shadcn-ui.

---

## 🚀 Features

- Responsive and modern UI  
- Showcase of **projects** with details, tech stacks, and links  
- Section for **games built using AI** with images and *Play Now* links  
- Animated transitions, hover effects, and dark/light mode support  
- Easy to extend and maintain  

---

## 🧰 Tech Stack

| Category      | Technologies / Libraries                              |
|---------------|--------------------------------------------------------|
| Framework     | React, Vite, TypeScript                                |
| Styling       | Tailwind CSS, shadcn-ui                                |
| Animations    | CSS transitions / custom utilities                     |
| Deployment    | (Your deployment platform, e.g., Vercel, Netlify, GitHub Pages) |
| Others        | (Add any additional tools, e.g. ESLint, Prettier)     |

---

## 📁 Project Structure

```

/
├── public/                     # Static assets (images, favicon, etc.)
├── src/
│   ├── components/             # Reusable UI components
│   ├── pages/                  # Page-level components or sections
│   ├── styles/                 # Global styles, Tailwind config, etc.
│   └── index.tsx, App.tsx      # Entry point
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vite.config.ts

````

---

## 🛠️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/monalsutar/Monal_Portfolio.git
   cd Monal_Portfolio


2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173` (or as shown in the console) to see the site in action.

---

## 📸 Screenshots / Preview

*(You can insert images here — e.g., portfolio home, project section, games section, responsive views.)*

---

## 🧩 How to Add New Projects or Games

### Adding a New Project

1. Open `src/components/Projects.tsx` (or wherever your projects array is defined).
2. Add a new object to the `projects` array with the following shape:

   ```ts
   {
     title: "Project Name",
     description: "What it does",
     techStack: ["React", "Node.js", ...],
     category: "Web Application" | "Mobile App" | ...,
     status: "Completed" | "In Progress",
     detailsLink: "https://…",
     repoLink: "https://…"
   }
   ```

### Adding a New Game (AI Games Section)

1. In the same file (or a separate file if you separated it), add to the `games` array:

   ```ts
   {
     title: "Game Name",
     description: "Short game description",
     image: "/images/game-image.png",
     playLink: "https://…"
   }
   ```

2. Add the corresponding image in `public/images/` folder.

3. The UI will automatically show the game with the image, title centered, and a “Play Now” button.

---

## 🔗 Links

* Portfolio Live Site: *(Your deployed URL, e.g. [https://monalsutar.github.io](https://monalsutar.github.io))*
* GitHub Profile: [monalsutar](https://github.com/monalsutar)
* Projects & Games source code: in this repo

---

## 📬 Contact

* LinkedIn : https://monal-portfolio.onrender.com/
* Git : https://github.com/monalsutar
* Youtube : https://youtube.com/@programming_the_life_monal?si=Dxjd0y1Ldc5crFI8
* Portfolio : https://monal-portfolio.onrender.com/


---

## 📝 License

This project is open source and available under the **[MIT License](LICENSE)** (you can include a `LICENSE` file).

---

Thanks for checking out my portfolio! 🙂
