# 🎉 Orgnyse Event Management Module

A full-stack event management module, supporting event creation, ticketing, and a public landing page. This system is designed with a clean architecture approach and a modern UI/UX following Figma designs.

---

## 🚀 Tech Stack

### 👥 Frontend (`client`)
- **Framework:** React (with TypeScript)
- **State Management:** React Context API
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Validation:** Zod
- **API Layer:** Axios
- **Icons:** React Icons
- **Bundler:** Vite

### ⚙️ Backend (`server`)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Validation:** Zod
- **Architecture:** Repository-Service-Controller pattern

---

## 📁 Folder Structure

```bash
🔹 client
│   ├── src
│   │   ├── components
│   │   │   ├── createEvent
│   │   │   ├── eventLanding
│   │   ├── context
│   │   ├── interface
│   │   ├── pages
│   │   ├── routes
│   │   ├── shared/components
│   │   ├── validations
│   │   └── api
│   ├── public
│   └── ...
🔹 server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── interfaces
│   │   ├── models
│   │   ├── repositories
│   │   ├── routes
│   │   ├── services
│   │   └── validation
│   └── ...
```

---

## ✅ Features

### 🔹 Event List Page
- Shows all created events in card view
- Each card includes event info and a "View Landing Page" button

### 🔹 Multi-Step Event Creation
1. **Basic Info**: Event name, date, location, etc.
2. **Cover Image & Summary**: Visual and textual overview of the event
3. **Tickets**: Create/Edit tickets with options for pricing, capacity, and description

### 🔹 Ticketing System
- Add, edit, and delete ticket types using a modal
- Supports:
  - Name
  - Price
  - Max seats
  - One/Multiple attendees
  - Ticket description

### 🔹 Event Landing Page
- Publicly accessible
- Scrollable layout
- Clickable "Tickets" anchor scroll

---

## 🧐 Architecture Notes

### 📂 Backend Architecture
- **Modular layers**: Routes → Controller → Service → Repository → Model
- **Zod validation** on all input
- **TypeScript interfaces** for every layer

### 🧩️ Frontend Structure
- Fully componentized with separation of concerns
- Global state handled through Context (`EventContext`)
- UI logic decoupled into reusable components: `Input`, `Button`, `Datepicker`, etc.

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/moideenshacp/Orgnyse.git

```

### 2. Install dependencies

```bash
# For client
cd client
npm install

# For server
cd ../server
npm install
```

### 3. Set up environment

Create a `.env` file in both `client` and `server` folders and add necessary config (e.g. MongoDB URI, base API URL).

### 4. Run the project

```bash
# Start backend
cd server
npm start

# Start frontend
cd client
npm run dev
```

---

## 🛡️ Validation Rules

Zod schemas are defined in:

- Frontend: `src/validations/eventValidation.ts`
- Backend: `src/validation/eventValidation.ts`

---

## 📄 License

This module is developed for **Orgnyse** as a test assignment and not intended for production use.


