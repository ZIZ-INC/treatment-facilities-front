# Next.js 15 Boilerplate with Next-Auth, TypeScript, and Internationalization

This is a fully functional Next.js 15 boilerplate project built with modern technologies, offering authentication, internationalization, form validation, and styled UI using Tailwind CSS. The project serves as a solid foundation for building scalable web applications.

---

## Features

- **Next.js 15**: Leveraging the latest features of Next.js, including the App Router.
- **TypeScript**: Strongly typed JavaScript for better developer experience and reliability.
- **Next-Auth v5**: Seamless authentication with JWT support.
- **JWT Decode**: Decoding and validating JSON Web Tokens for secure user management.
- **Next-Intl**: Fully integrated internationalization and localization support.
- **Zod**: Schema-based form validation.
- **React-Toastify**: Elegant toast notifications for user feedback.
- **Tailwind CSS**: Utility-first CSS for building modern responsive designs.

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
│   ├── global.css
│   └── layout.tsx
├── components/
│   ├── svg/
│   │   └── SignOut.tsx
│   └── LanguageSelector.tsx
├── data/
│   └── env/
│       ├── client.ts
│       └── server.ts
├── i18n/
│   ├── locales.ts
│   ├── request.ts
│   ├── server.ts
│   └── translation.ts
├── lib/
│   └── zod.ts
├── messages/
│   ├── en.json
│   ├── kk.json
│   └── ru.json
├── providers/
│   └── NextAuthSessionProvider.tsx
├── services/
│   ├── apiClient.ts
│   ├── authService.ts
│   └── tokenHelpers.ts
├── types/
│   ├── api.d.ts
│   ├── user.d.ts
│   └── next-auth.d.ts
├── auth.ts
├── middleware.ts
```

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

1. Create a new JSON file in the `messages/` directory, e.g., `fr.json` for French.
2. Add translations for the keys in the JSON file.
3. Update the `locales` array in `i18n/locales.ts`:

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

- **[Next.js](https://nextjs.org/)** - The React Framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-First CSS Framework
- **[Next-Auth](https://authjs.dev/)** - Authentication for Next.js
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[React-Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications
- **[JWT Decode](https://www.npmjs.com/package/jwt-decode)** - Decode JWT tokens
- **[Next-Intl](https://next-intl-docs.vercel.app/)** - Internationalization for Next.js

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
