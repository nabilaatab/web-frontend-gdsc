// TODO 1: Kita mau ambil elemen input beserta nilainya ✅
// TODO 2: Memproses inputnya supaya bisa menghasilkan pesan ✅
// TODO 3: Pastikan input dari user tidak kosong ✅
// TODO 4: Memasukkan pesan ke list riwayat pesan✅

const inputNama = document.querySelector("#input-nama");
const inputAngka = document.querySelector("#input-angka");
const tombolNasib = document.querySelector("#tombol-nasib");

const riwayatPesan = document.querySelector(".riwayat-pesan");

// Menghandle event untuk tombol nasib ketika di tekan
tombolNasib.addEventListener("click", function () {
  const nama = inputNama.value;
  const angka = inputAngka.valueAsNumber;

  // Ngecek apakah inputnya kosong
  if (nama === "" || isNaN(angka)) {
    alert("Input tidak boleh kosong");
    return;
  }

  const pesan = fortuneTeller(nama, angka);
  tambahPesanKeRiwayat(pesan);

  inputNama.value = "";
  inputAngka.value = "";
});

function fortuneTeller(nama, angkaInput) {
  let pesan;
  const angkaPrediksi = Math.floor(Math.random() * 10 + 1);

  if (angkaInput > angkaPrediksi) {
    pesan = `Selamat ${nama}, Kamu akan hoki!`;
  } else if (angkaInput < angkaPrediksi) {
    pesan = `Waduh ${nama}, Kamu tidak hoki!`;
  } else {
    pesan = `Yah ${nama}, Kamu akan merasa bosan!`;
  }

  return pesan;
}

function tambahPesanKeRiwayat(pesan) {
  const liPesan = document.createElement("li");
  liPesan.setAttribute("class", "pesan");
  // atau
  // liPesan.classList.add("pesan");
  liPesan.innerText = pesan;

  riwayatPesan.appendChild(liPesan);
}