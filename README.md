# Cara Running Endpoint di local komputer

## Dengan Docker
1. Pastikan PC anda memiliki instalasi docker dan docker-compose
2. Buat file .env dan development.env pada root directory project dengancara copy file .env.example
3. Lalu pada terminal ketik dan jalankan kode berikut `docker-compose.dev.yml up -d` untuk menjalankan server memalui docker
4. Lalu masuk terminal docker melalui vscode dengan menginstall package docker, klik pada icon docker, dan klik kanan pada container aplikasi anda
   klik `attach shell`
5. Lalu pada terminal yang muncul ketik dan jalankan kode berikut `node utils/generateKeyPair.js` untuk mengenerate public dan private key untuk auth JWT
6. Lalu pada terminal yang sama ketik dan jalankan kode `npx sequelize-cli db:migrate` untuk migrate database
7. Lalu pada terminal yang sama ketik dan jalankan kode `npx sequelize-cli db:seed:all` untuk memberi running semua seeder
8. Lakukan integration test

## Tanpa Docker atau dengan VM local PC anda
1. Buat database menggunakan postgresql dengan nama `testmaujuteknologiinovasi`
2. Buat file .env dan development.env pada root directory project dengancara copy file .env.example
3. Ketik `npm install` pada terminal yang menunjuk pada direktori aplikasi anda
4. Jalankan migration dengan cara ketik `npx sequelize-cli db:migrate`
5. Beri seeder pada database anda dengan cara menuliskan kode berikut `npx sequelize-cli db:seed:all`
6. Lalu lakukan integration test
