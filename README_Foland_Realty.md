# Foland Realty

**Smart Property Rental & Management Platform**

Foland Realty is a modern web platform built to simplify property rental, tenant-landlord communication, and rent payment. Built with scalability and real estate intelligence in mind, it bridges the gap between landlords and tenants with powerful tools for chat, rent automation, and property tracking.

---

## Features

- **User Authentication (JWT)** — Secure sign up & login
- **Role-Based Dashboards** — Landlord and Tenant views
- **Property Listings** — Add, view, and manage properties
- **One-on-One Chat** — Private messaging tied to specific property-tenancy pairs
- **Rent Payments** — Integrated Paystack for secure rent transactions
- **PDF Receipts** — Generate and view transaction history
- **Session Management** — Secure logout and session handling

---

## Tech Stack

**Frontend**
- React + TypeScript
- Tailwind CSS
- React Router
- React Query (optional)

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Auth
- Paystack Integration

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB instance
- Paystack API keys
- Vite (for frontend)

---

### Run Locally

#### 1. Clone the repo:
```bash
git clone https://github.com/Sharkolly/foland-realty.git
cd foland-realty
```

#### 2. Set up the backend:
```bash
cd backend
npm install
# then fill in your environment variables
npm run dev
```

#### 3. Set up the frontend:
```bash
cd ../frontend
npm install
npm run dev
```

---

## API Overview

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/login` | POST | Login a user |
| `/api/users/me` | GET | Get current user info |
| `/api/properties` | GET/POST | Fetch or create properties |
| `/api/chats/:propertyId` | GET | Get messages for a property |
| `/api/payment/paystack` | POST | Initiate payment via Paystack |

> Full API documentation available soon via Swagger.

---

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feat/something`)
3. Commit your changes (`git commit -m 'feat: added something'`)
4. Push to the branch (`git push origin feat/something`)
5. Open a Pull Request

---

## License

[MIT](LICENSE)

---

## Contact

Built by [Adesanya Mofeoluwa Folajimi](https://github.com/Sharkolly) — feel free to reach out or contribute!