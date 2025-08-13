# 🦷 SahihSejahtera Backend

## 📖 About the Project

**SahihSejahtera** adalah platform daring untuk layanan kesehatan gigi yang memudahkan pengguna mencari informasi dan memesan janji temu dengan tenaga medis gigi.
Proyek ini menyediakan **RESTful API** untuk aplikasi frontend, dengan fitur booking, manajemen data dokter, perawat, pasien, kontak, dan autentikasi pengguna.

---

## ✨ Fitur Utama

* 📅 **Booking Janji Temu**
* 👩‍⚕ **Pengelolaan Data Dokter & Perawat**
* 🧑‍🦱 **Pengelolaan Data Pasien**
* 📬 **Pesan Kontak**
* 🔐 **Registrasi & Login Pengguna**

---

## 💻 Tech Stack

* **Node.js** dengan **Express.js**
* **Sequelize ORM**
* **MySQL / PostgreSQL** (sesuai environment)
* **dotenv** untuk konfigurasi environment
* **(Opsional)** JWT untuk autentikasi

---

## 🖼 Screenshot

![Tampilan Aplikasi](./home.png)

---

## 📌 API Routes

### **Authentication**

| Method | Endpoint    | Deskripsi            |
| ------ | ----------- | -------------------- |
| POST   | `/register` | Registrasi user baru |
| POST   | `/login`    | Login user           |

### **Booking**

| Method | Endpoint        | Deskripsi                               |
| ------ | --------------- | --------------------------------------- |
| POST   | `/bookings`     | Membuat booking baru                    |
| GET    | `/bookings/:id` | Mengambil detail booking berdasarkan ID |
| GET    | `/bookings`     | Mengambil semua booking                 |
| PUT    | `/bookings/:id` | Memperbarui booking berdasarkan ID      |
| DELETE | `/bookings/:id` | Menghapus booking berdasarkan ID        |

### **Contact**

| Method | Endpoint        | Deskripsi                                    |
| ------ | --------------- | -------------------------------------------- |
| POST   | `/contacts`     | Membuat pesan kontak baru                    |
| GET    | `/contacts/:id` | Mengambil detail pesan kontak berdasarkan ID |
| GET    | `/contacts`     | Mengambil semua pesan kontak                 |
| PUT    | `/contacts/:id` | Memperbarui pesan kontak berdasarkan ID      |
| DELETE | `/contacts/:id` | Menghapus pesan kontak berdasarkan ID        |

### **Doctor**

| Method | Endpoint       | Deskripsi                              |
| ------ | -------------- | -------------------------------------- |
| POST   | `/doctors`     | Menambahkan data dokter baru           |
| GET    | `/doctors/:id` | Mengambil detail dokter berdasarkan ID |
| GET    | `/doctors`     | Mengambil semua data dokter            |
| PUT    | `/doctors/:id` | Memperbarui data dokter berdasarkan ID |
| DELETE | `/doctors/:id` | Menghapus data dokter berdasarkan ID   |

### **Nurse**

| Method | Endpoint      | Deskripsi                               |
| ------ | ------------- | --------------------------------------- |
| POST   | `/nurses`     | Menambahkan data perawat baru           |
| GET    | `/nurses/:id` | Mengambil detail perawat berdasarkan ID |
| GET    | `/nurses`     | Mengambil semua data perawat            |
| PUT    | `/nurses/:id` | Memperbarui data perawat berdasarkan ID |
| DELETE | `/nurses/:id` | Menghapus data perawat berdasarkan ID   |

### **Patient**

| Method | Endpoint        | Deskripsi                              |
| ------ | --------------- | -------------------------------------- |
| POST   | `/patients`     | Menambahkan data pasien baru           |
| GET    | `/patients/:id` | Mengambil detail pasien berdasarkan ID |
| GET    | `/patients`     | Mengambil semua data pasien            |
| PUT    | `/patients/:id` | Memperbarui data pasien berdasarkan ID |
| DELETE | `/patients/:id` | Menghapus data pasien berdasarkan ID   |

---

## 📬 Example Request & Response

**Register User**

```http
POST /register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response**

```json
{
  "id": 1,
  "email": "user@example.com",
  "password": "password123",
  "updatedAt": "2025-08-13T10:00:00.000Z",
  "createdAt": "2025-08-13T10:00:00.000Z"
}
```

**Login User**

```http
POST /login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response**

```json
{
  "message": "Berhasil login"
}
```
