# SadarSehat Backend API

Backend API untuk aplikasi SadarSehat - Platform analitik kesehatan untuk memetakan hoaks kesehatan, meningkatkan literasi masyarakat, dan mendeteksi risiko informasi kesehatan di Indonesia.

## 📋 Deskripsi

SadarSehat Backend adalah RESTful API yang dibangun dengan Fastify dan TypeScript. API ini menyediakan berbagai fitur untuk:

- **Quiz Hoaks atau Fakta**: Kuis interaktif untuk menguji pengetahuan masyarakat tentang hoaks kesehatan
- **Chatbot Kesehatan**: Asisten kesehatan AI untuk menjawab pertanyaan kesehatan umum
- **Dashboard Analitik**: Dashboard komprehensif untuk memantau tren hoaks, literasi kesehatan, dan insight fasilitas kesehatan

## ✨ Fitur

### 1. Quiz Module
- **GET `/v1/quiz`** - Mendapatkan daftar pertanyaan kuis
- **POST `/v1/quiz/submit`** - Submit jawaban kuis dan mendapatkan hasil dengan penjelasan

### 2. Chatbot Module
- **POST `/v1/chatbot`** - Mengirim pesan ke chatbot kesehatan dan mendapatkan respons

### 3. Dashboard Module
Dashboard analitik dengan 8 endpoint terpisah:

- **GET `/v1/dashboard/hoax-trends`** - Tren hoaks kesehatan nasional
- **GET `/v1/dashboard/heatmap`** - Peta persebaran hoaks (heatmap Indonesia)
- **GET `/v1/dashboard/literacy`** - Skor literasi kesehatan publik
- **GET `/v1/dashboard/facility-insights`** - Insight fasilitas kesehatan
- **GET `/v1/dashboard/emerging-threats`** - Deteksi ancaman baru (AI Alert)
- **GET `/v1/dashboard/library-insights`** - Insight library (Myth–Fact Trends)
- **GET `/v1/dashboard/verification-stats`** - Statistik verifikasi AI
- **GET `/v1/dashboard/policy-recommendations`** - Rekomendasi kebijakan berbasis AI
- **GET `/v1/dashboard`** - Summary lengkap semua data dashboard

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Fastify 5.x
- **Language**: TypeScript 5.x
- **Database**: Prisma ORM
- **Documentation**: Swagger/OpenAPI
- **Code Quality**: ESLint

## 📦 Prerequisites

- Node.js >= 18.x
- npm atau yarn
- Database (jika menggunakan Prisma)

## 🚀 Installation

1. Clone repository:
```bash
git clone <repository-url>
cd sadarsehat-be
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env
```

Edit `.env` file dengan konfigurasi yang sesuai:
```env
NODE_ENV=development
HOST=localhost:3000
LOGGER=true
DATABASE_URL=your_database_url
```

4. Setup database (jika menggunakan Prisma):
```bash
npm run db:push
```

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000` dengan hot-reload.

### Production Mode
```bash
npm start
```

## 📚 API Documentation

Setelah server berjalan, akses dokumentasi API di:
- **Swagger UI**: `http://localhost:3000/documentation`

## 📁 Project Structure

```
sadarsehat-be/
├── app/
│   ├── configs/          # Konfigurasi aplikasi
│   │   └── swagger_config.ts
│   ├── exceptions/       # Custom exceptions
│   │   ├── app_exception.ts
│   │   └── error_codes.ts
│   ├── modules/          # Modul aplikasi
│   │   ├── chatbot/     # Chatbot module
│   │   ├── dashboard/    # Dashboard module
│   │   ├── quiz/         # Quiz module
│   │   └── main_route.ts
│   └── routes/           # Route definitions
│       ├── index.ts
│       └── v1.ts
├── prisma/               # Prisma schema dan migrations
├── types/                # TypeScript type definitions
├── index.ts              # Entry point
└── package.json
```

## 📝 Available Scripts

- `npm run dev` - Menjalankan server dalam mode development dengan hot-reload
- `npm start` - Menjalankan server dalam mode production
- `npm run lint` - Menjalankan ESLint untuk mengecek kode
- `npm run format` - Memperbaiki kode secara otomatis dengan ESLint
- `npm run db:push` - Push schema Prisma ke database
- `npm run db:fresh` - Reset database dan push schema baru
- `npm run db:reset` - Reset database, push schema, dan jalankan seeders

## 🔌 API Endpoints

### Quiz Endpoints

#### Get Quiz Questions
```http
GET /v1/quiz
```

**Response:**
```json
{
  "status": 200,
  "code": null,
  "message": "Quiz questions retrieved successfully",
  "data": {
    "questions": [
      {
        "number": 1,
        "question": "Virus HIV ditularkan melalui keringat"
      }
    ]
  }
}
```

#### Submit Quiz
```http
POST /v1/quiz/submit
Content-Type: application/json

{
  "answers": [
    {
      "number": 1,
      "answer": "Myth"
    }
  ]
}
```

**Response:**
```json
{
  "status": 200,
  "code": null,
  "message": "Quiz submitted successfully",
  "data": {
    "totalQuestions": 10,
    "correctAnswers": 7,
    "incorrectAnswers": 3,
    "score": 70,
    "results": [...]
  }
}
```

### Chatbot Endpoints

#### Send Message
```http
POST /v1/chatbot
Content-Type: application/json

{
  "message": "Halo, apa itu COVID-19?",
  "conversationId": "optional_conversation_id"
}
```

**Response:**
```json
{
  "status": 200,
  "code": null,
  "message": "Message processed successfully",
  "data": {
    "message": "COVID-19 adalah penyakit menular...",
    "conversationId": "conv_1234567890_abc123",
    "timestamp": "2025-01-15T10:30:00.000Z"
  }
}
```

### Dashboard Endpoints

#### Get Hoax Trends
```http
GET /v1/dashboard/hoax-trends?period=daily&startDate=2025-01-01&endDate=2025-01-31
```

#### Get Heatmap
```http
GET /v1/dashboard/heatmap?region=Jawa Barat
```

#### Get Literacy Data
```http
GET /v1/dashboard/literacy?region=DKI Jakarta
```

#### Get Facility Insights
```http
GET /v1/dashboard/facility-insights?facilityId=faskes_001
```

#### Get Emerging Threats
```http
GET /v1/dashboard/emerging-threats
```

#### Get Library Insights
```http
GET /v1/dashboard/library-insights
```

#### Get Verification Stats
```http
GET /v1/dashboard/verification-stats?startDate=2025-01-01&endDate=2025-01-31
```

#### Get Policy Recommendations
```http
GET /v1/dashboard/policy-recommendations
```

#### Get Dashboard Summary
```http
GET /v1/dashboard?period=weekly&region=Jawa Barat
```

**Query Parameters (semua endpoint dashboard mendukung):**
- `period`: `daily` | `weekly` | `monthly` - Periode waktu untuk tren
- `region`: string - Filter berdasarkan provinsi/wilayah
- `facilityId`: string - Filter berdasarkan ID fasilitas
- `startDate`: string (YYYY-MM-DD) - Tanggal mulai
- `endDate`: string (YYYY-MM-DD) - Tanggal akhir

## 🔒 Error Handling

API menggunakan format response yang konsisten:

```json
{
  "status": 400,
  "code": "VALIDATION_ERROR",
  "message": "Error message",
  "data": null
}
```

**Error Codes:**
- `SYSTEM_ERROR` - Kesalahan sistem
- `PARSING_ERROR` - Kesalahan parsing JSON
- `VALIDATION_ERROR` - Kesalahan validasi input

## 🧪 Development

### Code Style
Proyek menggunakan ESLint dengan konfigurasi ketat. Pastikan kode mengikuti standar:
- Single quotes untuk strings
- No semicolons
- 2 spaces untuk indentation
- Newline sebelum return statement

### Adding New Modules

1. Buat folder baru di `app/modules/`
2. Buat file:
   - `{module}_types.ts` - Type definitions
   - `{module}_service.ts` - Business logic
   - `{module}_controller.ts` - Request handlers
   - `{module}_schema.ts` - Swagger schemas
   - `{module}_route.ts` - Route definitions

3. Register route di `app/routes/v1.ts`
4. Tambahkan tag di `app/configs/swagger_config.ts`

## 📄 License

MIT License

## 👤 Author

SadarAI

## 📞 Support

Untuk pertanyaan atau dukungan, silakan buat issue di repository ini.

