document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const layanan = document.getElementById("layanan").value;
  
  const pesan = `Halo, saya ${nama}. Saya ingin memesan layanan *${layanan}* ke alamat: ${alamat}. Terima kasih.`;
  const noWA = "6281775489447"; // Ganti dengan nomor WA kamu
  const url = `https://wa.me/${noWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});