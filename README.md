#  User Management System

## 👥 Team
- Poland Diosana
- Franz Adrian Nacar
---

## Live Demos
- **Frontend**: [https://user-management-system-angular-master-delta.vercel.app/account/login?returnUrl=%2F](https://user-management-system-angular-master-delta.vercel.app/)
- **Backend API**: [https://postgres-production-a08f8.up.railway.app/](https://user-management-system-angular-master-production-08a9.up.railway.app)
- **API Docs**: [https://user-management-system-angular-master-production.up.railway.app/api-docs](https://user-management-system-angular-master-production.up.railway.app/api-docs)

### Frontend
- **Framework**: Angular 17.3.12
- **UI Library**: Bootstrap 5
- **Icons**: Font Awesome 6
- **HTTP Client**: Angular HttpClient
- **Forms**: Reactive Forms
- **Routing**: Angular Router
- **Hosting**: Vercel

### Backend
- **Runtime**: Node.js 22+
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT with express-jwt v7+
- **Email**: Nodemailer (Gmail SMTP)
- **Validation**: Joi
- **Documentation**: Swagger UI
- **Hosting**: Railway

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn
- Angular CLI
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/franzadrian/user-management-system-angular-master.git
   cd User-Management-System-Angular-master
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```
## 🌐 Deployment

### Backend Deployment (Railway)
1. Connect your GitHub repository to Railway
2. Select the backend directory
3. Configure environment variables from `.env`
4. Deploy

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Select the frontend directory
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist/user-management-system`
4. Deploy

## 🔑 First Login
- The system automatically creates an admin account on first launch
- Subsequent accounts require email verification
- Email notifications are sent via Gmail SMTP (sender: achives1@gmail.com)

## ⚙️ Configuration

### Backend Configuration
Create `.env` file in the backend directory:
```env
DATABASE_URL=postgresql://postgres:your_password@your_host:5432/your_database
JWT_SECRET=your_jwt_secret
EMAIL_FROM=your_email@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Email Configuration
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security → App Passwords
   - Select 'Mail' and your device
   - Copy the generated password
4. Update the `SMTP_PASS` in your `.env` file

## Database Access
To access the production database:
1. Contact repository owner (franzadrian) for access permissions
2. Login to [Railway](https://railway.app) using GitHub account
3. Navigate to "aware-appreciation" project
4. Select PostgreSQL database
5. Go to "Data" tab to view tables

## API Documentation

### Accounts

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /accounts/register        | Register new user                | None           |
| POST   | /accounts/verify-email    | Verify email with token          | None           |
| POST   | /accounts/authenticate    | Authenticate user and get JWT    | None           |
| POST   | /accounts/refresh-token   | Refresh JWT token                | None           |
| POST   | /accounts/revoke-token    | Revoke refresh token             | Authenticated  |
| GET    | /accounts                 | Get all accounts                 | Admin          |
| GET    | /accounts/:id             | Get account by ID                | Authenticated  |
| PUT    | /accounts/:id             | Update account                   | Authenticated  |

**Example Request (POST /accounts/register):**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "Password123!"
}
```

### Employees

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /employees                | Create new employee              | Admin          |
| GET    | /employees                | Get all employees               | Authenticated  |
| GET    | /employees/:id            | Get employee by ID              | Authenticated  |
| PUT    | /employees/:id            | Update employee                 | Admin          |
| DELETE | /employees/:id            | Delete employee                 | Admin          |
| POST   | /employees/:id/transfer   | Transfer employee department    | Admin          |

**Example Request (POST /employees):**
```json
{
  "employeeId": "EMP001",
  "userId": 1,
  "position": "Developer",
  "hireDate": "2025-01-01",
  "departmentId": 1
}
```

### Departments

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /departments              | Create new department            | Admin          |
| GET    | /departments              | Get all departments             | Authenticated  |
| GET    | /departments/:id          | Get department by ID            | Authenticated  |
| PUT    | /departments/:id          | Update department               | Admin          |
| DELETE | /departments/:id          | Delete department               | Admin          |

**Example Request (POST /departments):**
```json
{
  "name": "Engineering",
  "description": "Software development team"
}
```

### Workflows

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /workflows                | Create new workflow              | Admin          |
| GET    | /workflows/employee/:id   | Get workflows for employee       | Authenticated  |
| PUT    | /workflows/:id/status     | Update workflow status           | Admin          |
| POST   | /workflows/onboarding     | Initiate employee onboarding     | Admin          |

**Example Request (POST /workflows):**
```json
{
  "employeeId": 1,
  "type": "Onboarding",
  "details": { "task": "Setup workstation" }
}
```

### Requests

| Method | Endpoint                  | Description                      | Authentication |
|--------|---------------------------|----------------------------------|----------------|
| POST   | /requests                 | Create new request               | Authenticated  |
| GET    | /requests                 | Get all requests                | Admin          |
| GET    | /requests/:id             | Get request by ID               | Authenticated  |
| GET    | /requests/employee/:id    | Get requests for employee       | Authenticated  |
| PUT    | /requests/:id             | Update request                  | Admin          |
| DELETE | /requests/:id             | Delete request                  | Admin          |

**Example Request (POST /requests):**
```json
{
  "employeeId": 1,
  "type": "Equipment",
  "items": [
    { "name": "Laptop", "quantity": 1 },
    { "name": "Monitor", "quantity": 2 }
  ]
}
```
