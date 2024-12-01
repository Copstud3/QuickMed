# `QuickMed Website`

`QuickMed Website` is a responsive and modern web application built with `React` and `Tailwind CSS`. It is designed for healthcare providers, offering seamless navigation, visually appealing `UI` components, and a responsive design that adapts to all devices. The website includes sections like a `hero banner`, `pricing plans`, and a responsive `navigation bar`, along with interactive elements like a `"Back to Top"` button and an accordion `FAQ` section.

---

## `Table of Contents`

- [`Features`](#features)
- [`Technologies Used`](#technologies-used)
- [`Getting Started`](#getting-started)
  - [`Installation`](#installation)
  - [`Running Locally`](#running-locally)
- [`Folder Structure`](#folder-structure)
- [`Responsive Design`](#responsive-design)
- [`Interactive Components`](#interactive-components)
- [`License`](#license)
- [`Contributing`](#contributing)
- [`Author`](#author)

---

## `Features`

- **`Responsive Design:`** Adapts seamlessly across all screen sizes.
- **`Dynamic Navigation Bar:`** Includes a hamburger menu and dropdown for mobile screens.
- **`Pricing Section:`** Interactive cards with selectable states and real-time updates.
- **`FAQ Section:`** Accordion-style questions with animations.
- **`Back to Top Button:`** Smooth scrolling functionality to navigate back to the hero section.
- **`Custom Animations:`** Fade-in effects on page load for enhanced user experience.

---

## `Technologies Used`

- **`Frontend Framework:`** `React`
- **`Styling:`** `Tailwind CSS`
- **`State Management:`** `React Hooks` (`useState`, `useEffect`)
- **`Icons and Images:`** Custom assets for logos, icons, and visual elements.

---

## `Getting Started`

### `Installation`

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/quickmed-website.git
   cd quickmed-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### `Running Locally`

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## `Folder Structure`

```
quickmed-website/
├── public/
│   ├── index.html
│   └── assets/           # Static assets like images and icons
├── src/
│   ├── components/       # Reusable React components (e.g., Button, Nav, PriceCard)
│   ├── pages/            # Page components for each section
│   ├── constants/        # Static data for navigation and pricing
│   ├── styles/           # Global Tailwind configuration
│   ├── App.jsx           # Main application entry
│   └── index.js          # React DOM rendering
└── README.md             # Project documentation
```

---

## `Responsive Design`

This project uses `Tailwind CSS` to implement a fully responsive design:

- **`Navigation Bar:`** Dynamically switches between desktop and mobile layouts with a hamburger menu.
- **`Pricing Section:`** Cards scale and adjust for smaller screens.
- **`Animations:`** Elements fade in dynamically based on scroll position or page load.

---

## `Interactive Components`

- **`Accordion FAQ:`** Expand and collapse questions with smooth animations.
- **`Back to Top Button:`** Appears after scrolling past the hero section, enabling quick navigation.
- **`Pricing Cards:`** Change appearance based on selection to improve user interactivity.

---


## `License`

This project is licensed under the [`MIT License`](LICENSE). Feel free to use and modify the code as needed.

---

## `Contributing`

Contributions are welcome! Please fork the repository and create a pull request for any feature or bug fixes. Follow the guidelines below:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push the changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## `Author`

Created by [Chris](https://linktr.ee/iam_chris). If you have any questions, feel free to reach out.

---

## `Designer`

The project design was created by [Ayolaw](https://x.com/ayodeji_law). Follow him for more amazing work!
```
