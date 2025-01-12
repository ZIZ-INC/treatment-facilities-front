[![Live Demo](https://img.shields.io/badge/demo-online-green)](https://next-intl-auth-mu.vercel.app/)

# Next.js 15 Boilerplate with Next-Auth, TypeScript, and Internationalization

A modern boilerplate for building scalable web applications with **Next.js 15**, **TypeScript**, and integrated **i18n** (internationalization). Perfect for developers looking for authentication (Next-Auth), schema validation (Zod), and responsive designs (Tailwind CSS).

---

## Deployment

This project is live and deployed on **Vercel**!  
Visit the live demo: **[Next.js Boilerplate Live](https://next-intl-auth-mu.vercel.app/)**

### How to Deploy on Vercel

1. Install the [Vercel CLI](https://vercel.com/docs/cli):
   ```bash
   npm install -g vercel
   ```
   

## Features

- **Next.js**: React framework for server-side rendering and optimized performance.
- **TypeScript**: Strongly-typed development for enhanced code reliability.
- **Next-Auth**: Simplified authentication with OAuth and JWT support.
- **shadcn/ui**: Modular, accessible UI components built on top of Radix UI and styled with Tailwind CSS.
- **Zod**: Type-safe schema validation for forms and APIs.
- **next-intl**: Internationalization support with dynamic locale management.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Lucide Icons**: A modern and consistent icon library for React.
- **Light/Dark Mode**: Customizable themes with user preference persistence.

---

## Quick Start

### Prerequisites

Make sure you have the following installed:

- Node.js >= 18.x
- Yarn (preferred) or npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sayyat/next-intl-auth.git
   cd next-intl-auth
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   API_URL=<Your API URL>
   NEXTAUTH_SECRET=<Your NextAuth Secret>
   NEXTAUTH_URL=http://localhost:3000
   API_URL=http://127.0.0.1:8000
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

---

## File Structure

<details>
<summary>Click to expand the file structure</summary>

```plaintext
src/
├── app/
│   ├── (authentication)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (ui)/
│   │   ├── _components/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   └── layout.tsx
├── core/
│   ├── data/
│   │   └── env/
│   │       ├── client.ts
│   │       └── server.ts
│   ├── providers/
│   │   └── AllProviders.tsx
│   ├── styles/
│   │   └── globals.css
│   └── utils/
│       └── case.ts
├── features/
│   ├── authentication/
│   │   └── lib/
│   │       └── zod.ts
│   ├── services/
│   │   ├── authService.ts
│   │   └── tokenHelpers.ts
│   └── type.d.ts
├── locales/
│   ├── config/
│   │   ├── locales.ts
│   │   ├── request.ts
│   │   ├── server.ts
│   │   └── translation.ts
│   └── messages/
│       ├── en.json
│       ├── kk.json
│       └── ru.json
├── services/
│   └── apiClient.ts
├── shared/
│   └── components/
│   │   │   └── Loading.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── select.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Input.tsx
│   │   ├── LanguageSelect.tsx
│   │   └── Select.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   └── lib/
│       └── utils.ts
├── types/
│   ├── api.d.ts
│   ├── user.d.ts
│   └── next-auth.d.ts
├── auth.ts
└── middleware.ts
```

</details>

---

## How to Use

### Authentication

- **Sign Up**: Use the `/register` page to create a new account. The backend API handles user registration and returns access and refresh tokens.
- **Log In**: Access `/login` to authenticate users. Tokens are stored securely, and JWT is decoded for user details.

### Localization

- The project uses `next-intl` for localization.
- Languages supported: `English`, `Russian`, and `Kazakh`.
- The language can be changed using the dropdown in the header.

### Toast Notifications

- Feedback is provided using `react-toastify`.
- Example: Error messages during authentication or form validation feedback.

### Zod Validation

- Zod is used for client-side schema validation for forms.
- Errors are displayed with translations based on the current locale.

---

## Customization

### Add New Languages

1. Create a new JSON file in the `locales/messages/` directory, e.g., `fr.json` for French.
2. Add translations for the keys in the JSON file.
3. Update the `locales` array in `locales/config/locales.ts`:

   ```typescript
   export const locales = ['en', 'ru', 'kk', 'fr'];
   ```

4. The language will automatically be added to the selector.

### Add New Pages

1. Create a new folder under the `app` directory, e.g., `app/dashboard`.
2. Add a new `page.tsx` file inside the folder.
3. Use the existing components for layout and styles.

---

## Built With

- **[Next.js](https://nextjs.org/)** - React framework for server-rendered applications
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Next-Auth](https://authjs.dev/)** - Authentication for Next.js
- **[Next-Intl](https://next-intl-docs.vercel.app/)** - Internationalization and localization
- **[shadcn/ui](https://ui.shadcn.com/)**: Modular, accessible UI components built on top of Radix UI and styled with Tailwind CSS.
- **[Lucide Icons](https://lucide.dev/)**: A modern and consistent icon library for React.
- **[Zod](https://zod.dev/)** - Schema validation
- **[React-Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications
- **[@t3-oss/env-nextjs](https://github.com/t3-oss/t3-env)** - Type-safe environment variable management for Next.js
- **[@tanstack/react-query](https://tanstack.com/query/latest)** - Optimized data fetching and caching for React

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the **GNU General Public License v3.0**.  
See the [LICENSE](https://github.com/Sayyat/next-intl-auth/blob/main/LICENSE) file for details.

---

## Author

Created with ❤ by [ZIZ INC.](https://github.com/Sayyat/next-intl-auth)
