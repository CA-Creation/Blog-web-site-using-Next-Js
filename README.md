# 📝 Blogging Platform

A full-stack blogging platform where users can register, create, edit, and delete their blog posts. Each user has access to a personal dashboard to manage their content. This application combines modern web technologies to deliver a secure, scalable, and user-friendly experience.

## 🚀 Features

- 🔐 **User Authentication** — Powered by [Clerk](https://clerk.dev) for a seamless auth experience.
- ✍️ **Create, Edit, and Delete Blogs** — Users can manage their content with ease.
- 📊 **User Dashboard** — Each user has a personal dashboard to manage their blog posts.
- 🧰 **Form Validation** — Ensured by [Zod](https://zod.dev) for safe and structured data input.
- 📱 **Responsive UI** — Built with React and styled for all screen sizes.
- 🗃️ **Database Integration** — Robust data management using Prisma with PostgreSQL.
-  🔍 **Search Functionality**: Easily search through published blogs
- 💬 **Comments**: Engage in discussions by commenting on blog posts
- ❤️ **Likes**: Show appreciation by liking posts

## 🧑‍💻 Technologies Used

- [Next.js 15](https://nextjs.org/) — Framework for building server-side rendered React applications
- [React](https://reactjs.org/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Typed JavaScript for better maintainability
- [Prisma](https://www.prisma.io/) — ORM for database management
- [PostgreSQL](https://www.postgresql.org/) — SQL database
- [Zod](https://zod.dev/) — Schema validation
- [Clerk](https://clerk.dev/) — Authentication and user management

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CA-Creation/blog-web-site-using-next-js.git
cd blog-web-site-using-next-js.git
```
## 2. Install dependencies
```bash
npm install
# or
yarn install
```
## 3. Set up environment variables
Create a .env.local file in the root directory and add the following:
```bash
DATABASE_URL=your_postgresql_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

## 4. Run database migrations
```bash
npx prisma migrate dev --name init
```
## 5. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 🛠️ Development Notes

- The project uses Next.js App Router (introduced in v13+).
- Authentication is fully managed by Clerk, which handles sign-in, sign-up, and user sessions.
- Prisma connects to a PostgreSQL database and handles queries efficiently.
- Zod schemas are used both server- and client-side for consistent validation.

## Made with ❤️ using Next.js, Prisma, and Clerk
