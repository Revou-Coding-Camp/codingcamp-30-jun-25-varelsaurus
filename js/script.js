const sesiwelcome = document.getElementById('welcome-section');
const gambarawal = document.getElementById('gambarwelcome');
const salam = document.getElementById('salaman');

gambarawal.onload = function() {
    sesiwelcome.style.visibility = 'visible';
} 

window.onload = function() {
    let namauser = prompt('Siapa nama kamu?');
    salam.textContent = `Hi ${namauser}, Welcome To Website`;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const aside = document.querySelector('aside');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman default

        // Ambil nilai dari input
        const nama = document.getElementById('input-nama').value.trim();
        const tanggal = document.getElementById('input-tanggal').value;
        const jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked')?.value || '[Tidak Dipilih]';
        const pesan = document.getElementById('input-pesan').value.trim();

        // Format waktu saat ini
        const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour12: false });
        const formattedDate = new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Jakarta', weekday: 'short', day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB';

        // Update teks di aside
        aside.innerHTML = `
            <p class="font-bold">Current Time: ${formattedDate}</p>
            <p><span class="font-bold">Nama:</span> ${nama || '[Nama]'}</p>
            <p><span class="font-bold">Tanggal Lahir:</span> ${tanggal || '[Tanggal]'}</p>
            <p><span class="font-bold">Jenis Kelamin:</span> ${jeniskelamin}</p>
            <p><span class="font-bold">Pesan:</span> ${pesan || '[Pesan]'}</p>
        `;

        // Reset form setelah submit (opsional)
        form.reset();
    });
});