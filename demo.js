// object
// cara buat
{
}

// semua data perlu kita simpan ke variable, biar punya nama
let my_object = {};

//  nama variable nya terlalu simple, kita lupa itu objek isinya apa
let andi = {};

// objek andi bisa memiliki banyak pasangan key:value, key adalah kuncinya, value nya nilainya
andi = {
  umur: 15,
  nama: 'Andhika',
  hobi: ['main bola', 'membaca fiksi', 'jalan-jalan'],
  orangtua: {
    ayah: 'Rama',
    ibu: 'Dinda',
  },
};

// di contoh diatas, objek andi memiliki 4 keys
// "umur" "nama" "hobi" dan "orangtua"
// untuk mengakses value dari masing masing key:value pair tersebut,
// kita bisa gunakan key nya

andi['umur']; // kita akan dapat value integer 15
andi['nama']; // "Andhika" key nama, value Andhika

// key selalu string, tapi value bebas, bisa integer, float, string, array, boolean, atau objek lagi
// yang lebih rumit itu saat objek isinya objek lagi, key nya jadi menumpuk

andi['orangtua']; // objek { "ayah": "Rama", "ibu": "Dinda" }

// jadi kalau kita mau ngambil nama ayahnya andi, kita perlu kasih dobel keys
// key untuk objek andi
// dan key untuk objek orangtua

andi['orangtua']['ayah'];
