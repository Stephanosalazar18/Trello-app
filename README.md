
<div align="center">
	<img src="/logo.svg" alt="Trello App Logo" width="120" />
  
	<h1 align="center">Trello App</h1>
	<p align="center">
		<b>Modern Kanban board for teams</b><br>
		<i>Built with Next.js, React, TypeScript, Prisma, Clerk, Stripe & TailwindCSS</i>
	</p>
	<p align="center">
		<img src="https://img.shields.io/badge/Next.js-14-blue?logo=nextdotjs" />
		<img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" />
		<img src="https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss" />
		<img src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma" />
		<img src="https://img.shields.io/badge/Clerk-Auth-3B82F6?logo=clerk" />
		<img src="https://img.shields.io/badge/Stripe-Subscriptions-635BFF?logo=stripe" />
	</p>
</div>

---

<div align="center">
	<img src="/slide-img-1.jpg" alt="Main Screenshot" width="700" />
</div>

## 🚀 Descripción

Trello App es una aplicación web moderna para gestión de tareas y proyectos, inspirada en el clásico tablero Kanban. Permite crear organizaciones, tableros, listas y tarjetas, con soporte para drag & drop, suscripciones premium, límites por plan y una interfaz responsiva y atractiva.

## 🛠️ Tecnologías

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Prisma ORM & PostgreSQL**
- **Clerk (autenticación y organizaciones)**
- **Stripe (suscripciones)**
- **TailwindCSS**
- **Zod**
- **React Hook Form**
- **TanStack Query**
- **Server Actions**
- **Unsplash API**
- **Lucide Icons**

## ✨ Características

- Gestión de organizaciones y tableros
- Listas y tarjetas con drag & drop
- Suscripciones premium (Stripe)
- Límite de tableros por plan
- Actividad y logs de auditoría
- UI responsiva y moderna
- Autenticación y roles con Clerk
- Imágenes de Unsplash para tableros

## 📸 Imágenes

<div align="center">
		<img src="/featured-1-3.jpg" alt="Screenshot 2" width="700" />
		<br>
		<img src="/featured-1.jpg" alt="Thumb 1" width="340" />
		<video src="/featured-1.mp4" width="340" controls loop muted poster="/featured-1.jpg" style="border-radius:12px;margin:0 8px;box-shadow:0 2px 8px #0002;">
			Tu navegador no soporta video embebido.
		</video>
</div>

## ⚡ Instalación y uso

1. Clona el repositorio:
	 ```bash
	 git clone https://github.com/Stephanosalazar18/Trello-app.git
	 cd Trello-app
	 ```
2. Instala dependencias:
	 ```bash
	 npm install
	 # o
	 yarn install
	 ```
3. Configura las variables de entorno en `.env.local`:
	 - `DATABASE_URL` (Postgres)
	 - `CLERK_SECRET_KEY`, `CLERK_PUBLISHABLE_KEY`
	 - `STRIPE_SECRET_KEY`, etc.
4. Ejecuta migraciones y genera Prisma Client:
	 ```bash
	 npx prisma generate
	 npx prisma db push
	 ```
5. Inicia el servidor de desarrollo:
	 ```bash
	 npm run dev
	 ```
6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

<div align="center">
	<img src="/logo.svg" alt="Logo" width="60" />
	<br>
	<b>Crafted by Stephano Salazar · 2025</b>
</div>
