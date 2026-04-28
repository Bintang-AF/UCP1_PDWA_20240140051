// Inisialisasi Array Data Anggota 
// Menggunakan localStorage agar data array tidak hilang saat pindah halaman [cite: 9, 11]
let anggotaList = JSON.parse(localStorage.getItem('anggotaTechCommunity')) || [
    { nama: "John Doe", email: "john@example.com", minat: "Software Development" } // Data statis awal [cite: 20]
];

// --- LOGIKA HALAMAN FORM ---
const form = document.getElementById('registrationForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman

        // Menangkap data dari input [cite: 23]
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const minat = document.getElementById('minat').value;

        const anggotaBaru = { nama, email, minat };
        
        // Menyimpan ke array dan localStorage [cite: 25]
        anggotaList.push(anggotaBaru);
        localStorage.setItem('anggotaTechCommunity', JSON.stringify(anggotaList));

        // Menampilkan alert [cite: 24]
        alert(`Sukses! Anggota baru bernama ${nama} telah terdaftar.`);

        // Menampilkan di bagian bawah form [cite: 24]
        const resultArea = document.getElementById('resultArea');
        const resultText = document.getElementById('resultText');
        resultText.innerHTML = `<strong>Nama:</strong> ${nama} <br> <strong>Email:</strong> ${email} <br> <strong>Minat:</strong> ${minat}`;
        resultArea.classList.remove('d-none');

        form.reset(); // Mengosongkan form
    });
}

// --- LOGIKA HALAMAN UTAMA ---
const tableBody = document.getElementById('memberTableBody');
if (tableBody) {
    // Merender isi array ke dalam tabel [cite: 20]
    tableBody.innerHTML = '';
    anggotaList.forEach((anggota, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${anggota.nama}</td>
                <td>${anggota.email}</td>
                <td><span class="badge bg-primary">${anggota.minat}</span></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// --- LOGIKA HALAMAN MULTIMEDIA ---
// Interaksi Gambar [cite: 32]
const btnGantiGambar = document.getElementById('btnGantiGambar');
const gambar = document.getElementById('komunitasImg');
if (btnGantiGambar && gambar) {
    btnGantiGambar.addEventListener('click', () => {
        // Mengganti gambar secara acak antara dua URL
        const currentSrc = gambar.src;
        if (currentSrc.includes('1517048676732')) {
            gambar.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"; 
        } else {
            gambar.src = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop";
        }
    });
}

// Interaksi Audio [cite: 32]
const audio = document.getElementById('podcastAudio');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnInfo = document.getElementById('btnInfo');

if (audio) {
    btnPlay.addEventListener('click', () => audio.play());
    btnPause.addEventListener('click', () => audio.pause());
    btnInfo.addEventListener('click', () => {
        alert("Ini adalah audio podcast komunitas. Durasi sedang berjalan...");
    });
}