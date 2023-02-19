// mendeklarasikan variabel
// variabel itu ibarat wadah yg bisa diisi nilai
// nilainya bisa berupa string, integer, number, array (kumpulan data), object (satu data berisikan informasi), boolean(true/false)

// 1. const
// tipe data string
const nama = 'Marzuki'; // string
// tipe data number / integer
const umur = 23;
// tipe data float (number tapi berkoma)
// camelCase
const tinggiBadan = 160.58;
// boolean
const sudahMenikah = false;
// array, tipe data yg isinya kumpulan data
// kumpulan data itu terdiri dari beberapa tipe data
const makananFavorit = ['Bakso', 'Sate', 'Nasi Padang'];

// object
// object ini berisi sekumpulan informasi terkait suatu data
const pengguna = {
  // field => value
  nama: 'Marzuki',
  umur: 23,
  tinggiBadan: 160.58,
  sudahMenikah: false,
  sosialMedia: [
    {
      id: 1,
      name: 'facebook',
      link: 'http://www.facebook.com/marzukiberg',
    },
    {
      id: 2,
      name: 'instagram',
      link: 'http://www.instagram.com/ukay.fs',
    },
  ],
};

// console.log('ini pesan');

// console.log(nama);
// console.log(umur);
// console.log(tinggiBadan);
// console.log(sudahMenikah);
// console.log(makananFavorit);
// console.log(pengguna);

// console.log("================================================")

// // cek variabel type
// // console.log(typeof umur);
// console.log(typeof nama);
// console.log(typeof umur);
// console.log(typeof tinggiBadan);
// console.log(typeof sudahMenikah);
// console.log(typeof makananFavorit);
// console.log(typeof pengguna);

// membaca data array spesifik
const firstFavouriteFood = makananFavorit[0];
const secondFavouriteFood = makananFavorit[1];
const thirdFavouriteFood = makananFavorit[2];
const notFoundFavouriteFood = makananFavorit[100];
// console.log(notFoundFavouriteFood);
// makananFavorit.forEach(makanan => {
//     console.log(makanan)
// })

// membaca object
// console.log(pengguna.nama);
// console.log(pengguna.umur);
// console.log(pengguna.sosialMedia[2]);

// 2. let
let myName = 'Marzuki';

// memperbarui nilai const akan menimbulkan error
// Uncaught TypeError: Assignment to constant variable.
// nama = 'Uki';

// myName = 'Uki';
// myName = 'Uki';
// myName = 'Uki';
// myName = 'Uki';
// myName = 'Uki';
// myName = 'Uki Keren';

// console.log(myName);

// kalau array dan object itu isinya bisa diubah meskipun dia constanta
// cara ngubah isi array dengan menggunakan method yg udah ada
// makananFavorit[0] = 'Bakso Urat';
// makananFavorit[1] = 'Sate Padang';
// makananFavorit[2] = 'Nasi Goreng';

// console.log(makananFavorit);

// error Uncaught TypeError: Assignment to constant variable.
// pengguna = {
//   nama: 'Uki',
// };

// untuk object itu bisa diubah hanya nilai dari propertynya
// pengguna.nama = 'Uki';
// pengguna.umur = 24;
// console.log(pengguna);

// operator matematika
let x = 5;
const y = 8;

// +
const penjumlahan = x + y;
// -
const pengurangan = x - y;
// * perkalian
const perkalian = x * y;
// / pembagian
const pembagian = x / y;
// penggabungan
const penggabungan = x * y + 10;

// pemangkatan (**)
const pangkat = x ** 2;

// increment (peningkatan)
// x = x + 1;
x++; // 6
x++; // 7
x++; // 8
x++; // 9

// decrement (pengurangan)
// x = x - 1;
x--;
x--;
x--;
x--;

// console.log(penjumlahan);
// console.log(pengurangan);
// console.log(perkalian);
// console.log(pembagian);
// console.log(penggabungan);
// console.log(x);

// modulus (%)
// hasil sisa bagi
// const a = 10;
// const b = 4;

// const modulus = a % b; // 2
// console.log(modulus);

// FUNCTIONS
// function adalah cara menyingkat kode dalam pemrograman
function printHello() {
  // isikan kode dari fungsi ini
  console.log('hello world');
}

// printHello();

// argument
// nilai yg dilempar ke function dari tempat pemanggilannya
function add(first, second) {
  const result = first + second;
  return result;
}

const hasil1 = add(1, 2);
// console.log(hasil1);

// if else, logika jika suatu kondisi terpenuhi maka ekseskusi kode
const hargaBaju = 100; // 1000 dollar

// jika dia di atas 200 dollar, kita sebut dia mahal
// kondisi ini boolean (true / false)
// if (hargaBaju > 200) {
//   // jika true pasti masuk ke sini
//   console.log('harga baju mahal, harganya = ' + hargaBaju);
// } else {
//   // jika false pasti masuk ke sini
//   console.log('harga baju murah, harganya = ' + hargaBaju);
// }

const nilaiSiswa = 70.1;

// dibawah 50 = E
// 51 - 60 = D
// 61 - 70 = C
// 71 - 80 = B
// 81 - 100 = A
// if (nilaiSiswa <= 50) {
//   console.log('nilai E');
// } else if (nilaiSiswa > 50 && nilaiSiswa <= 60) {
//   console.log('nilai D');
// } else if (nilaiSiswa > 60 && nilaiSiswa <= 70) {
//   console.log('nilai C');
// } else if (nilaiSiswa > 70 && nilaiSiswa <= 80) {
//   console.log('nilai B');
// } else {
//   console.log('nilai A');
// }

// SWITCH
const month = 'january';

switch (month) {
  case 'january':
    // console.log('Januari');
    break;
  case 'february':
    console.log('Februari');
    break;
  case 'march':
    console.log('Maret');
    break;
  default:
    // ketika nilainya gk ada
    console.log('Bulan tersebut tidak ada.');
    break;
}

// soal nomor 1
const data = [
  {
    animeId:
      'dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-fuka-shou-yakusai-hen',
    animeTitle:
      'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen',
    animeImg:
      'https://gogocdn.net/cover/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-fuka-shou-yakusai-hen.png',
    releasedDate: '2023',
    animeUrl:
      'https://gogoanime.film///category/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-fuka-shou-yakusai-hen',
  },
  {
    animeId: 'boruto-naruto-next-generations',
    animeTitle: 'Boruto: Naruto Next Generations',
    animeImg: 'https://gogocdn.net/cover/boruto-naruto-next-generations.png',
    releasedDate: '2017',
    animeUrl:
      'https://gogoanime.film///category/boruto-naruto-next-generations',
  },
  {
    animeId: 'nierautomata-ver1-1a',
    animeTitle: 'NieR:Automata Ver1.1a',
    animeImg: 'https://gogocdn.net/cover/nierautomata-ver1-1a-1672331611.png',
    releasedDate: '2023',
    animeUrl: 'https://gogoanime.film///category/nierautomata-ver1-1a',
  },
  {
    animeId: 'spy-kyoushitsu',
    animeTitle: 'Spy Kyoushitsu',
    animeImg: 'https://gogocdn.net/cover/spy-kyoushitsu-1672332673.png',
    releasedDate: '2023',
    animeUrl: 'https://gogoanime.film///category/spy-kyoushitsu',
  },
  {
    animeId: 'tomo-chan-wa-onnanoko',
    animeTitle: 'Tomo-chan wa Onnanoko!',
    animeImg: 'https://gogocdn.net/cover/tomo-chan-wa-onnanoko-1672333039.png',
    releasedDate: '2023',
    animeUrl: 'https://gogoanime.film///category/tomo-chan-wa-onnanoko',
  },
  {
    animeId: 'detective-conan',
    animeTitle: 'Detective Conan',
    animeImg: 'https://gogocdn.net/cover/detective-conan.png',
    releasedDate: '1996',
    animeUrl: 'https://gogoanime.film///category/detective-conan',
  },
  {
    animeId: 'one-piece',
    animeTitle: 'One Piece',
    animeImg: 'https://gogocdn.net/images/anime/One-piece.jpg',
    releasedDate: '1999',
    animeUrl: 'https://gogoanime.film///category/one-piece',
  },
  {
    animeId: 'boku-no-hero-academia-6th-season',
    animeTitle: 'Boku no Hero Academia 6th Season',
    animeImg:
      'https://gogocdn.net/cover/boku-no-hero-academia-6th-season-1664387814.png',
    releasedDate: '2022',
    animeUrl:
      'https://gogoanime.film///category/boku-no-hero-academia-6th-season',
  },
  {
    animeId: 'ijiranaide-nagatoro-san-2nd-attack',
    animeTitle: 'Ijiranaide, Nagatoro-san 2nd Attack',
    animeImg:
      'https://gogocdn.net/cover/ijiranaide-nagatoro-san-2nd-attack-1672330313.png',
    releasedDate: '2023',
    animeUrl:
      'https://gogoanime.film///category/ijiranaide-nagatoro-san-2nd-attack',
  },
  {
    animeId: 'vinland-saga-season-2',
    animeTitle: 'Vinland Saga Season 2',
    animeImg: 'https://gogocdn.net/cover/vinland-saga-season-2-1672333695.png',
    releasedDate: '2023',
    animeUrl: 'https://gogoanime.film///category/vinland-saga-season-2',
  },
  {
    animeId: 'fumetsu-no-anata-e-2nd-season',
    animeTitle: 'Fumetsu no Anata e 2nd Season',
    animeImg:
      'https://gogocdn.net/cover/fumetsu-no-anata-e-2nd-season-1662695170.png',
    releasedDate: '2022',
    animeUrl: 'https://gogoanime.film///category/fumetsu-no-anata-e-2nd-season',
  },
  {
    animeId: 'bungou-stray-dogs-4th-season',
    animeTitle: 'Bungou Stray Dogs 4th Season',
    animeImg: 'https://gogocdn.net/cover/bungou-stray-dogs-4th-season.png',
    releasedDate: '2023',
    animeUrl: 'https://gogoanime.film///category/bungou-stray-dogs-4th-season',
  },
  {
    animeId: 'tokyo-revengers-seiya-kessen-hen',
    animeTitle: 'Tokyo Revengers: Seiya Kessen-hen',
    animeImg:
      'https://gogocdn.net/cover/tokyo-revengers-seiya-kessen-hen-1672332928.png',
    releasedDate: '2023',
    animeUrl:
      'https://gogoanime.film///category/tokyo-revengers-seiya-kessen-hen',
  },
  {
    animeId: 'blue-lock',
    animeTitle: 'Blue Lock',
    animeImg: 'https://gogocdn.net/cover/blue-lock-1664387634.png',
    releasedDate: '2022',
    animeUrl: 'https://gogoanime.film///category/blue-lock',
  },
  {
    animeId:
      'maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-2nd-season-part-2',
    animeTitle:
      'Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II',
    animeImg:
      'https://gogocdn.net/cover/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-2nd-season-part-2-1672331388.png',
    releasedDate: '2023',
    animeUrl:
      'https://gogoanime.film///category/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-2nd-season-part-2',
  },
  {
    animeId: 'kage-no-jitsuryokusha-ni-naritakute',
    animeTitle: 'Kage no Jitsuryokusha ni Naritakute!',
    animeImg:
      'https://gogocdn.net/cover/kage-no-jitsuryokusha-ni-naritakute-1664388804.png',
    releasedDate: '2022',
    animeUrl:
      'https://gogoanime.film///category/kage-no-jitsuryokusha-ni-naritakute',
  },
  {
    animeId: 'mairimashita-iruma-kun-3rd-season',
    animeTitle: 'Mairimashita! Iruma-kun 3rd Season',
    animeImg: 'https://gogocdn.net/cover/mairimashita-iruma-kun-3rd-season.png',
    releasedDate: '2022',
    animeUrl:
      'https://gogoanime.film///category/mairimashita-iruma-kun-3rd-season',
  },
  {
    animeId:
      'itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-ii',
    animeTitle:
      'Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. 2',
    animeImg:
      'https://gogocdn.net/cover/itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-ii-1671337143.png',
    releasedDate: '2023',
    animeUrl:
      'https://gogoanime.film///category/itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-ii',
  },
  {
    animeId: 'kyokou-suiri-2nd-season',
    animeTitle: 'Kyokou Suiri Season 2',
    animeImg:
      'https://gogocdn.net/cover/kyokou-suiri-2nd-season-1672331068.png',
    releasedDate: '2023',
    animeUrl: 'https://gogoanime.film///category/kyokou-suiri-2nd-season',
  },
  {
    animeId: 'horimiya',
    animeTitle: 'Horimiya',
    animeImg: 'https://gogocdn.net/cover/horimiya.png',
    releasedDate: '2021',
    animeUrl: 'https://gogoanime.film///category/horimiya',
  },
];

// soal 2
const dataTiga = data[2];

// soal 3
const dataEmpat = data[3].animeTitle;

// soal 4
const anime2022 = data.filter(function (item) {
  // return kondisi filternya
  return item.releasedDate === '2023';
});

// console.log(data);
// console.log(dataTiga);
// console.log(dataEmpat);
// console.log(anime2022);

// DOCUMENT OBJECT MODEL
// cara javascript agar dapat memanipulasi element HTML

// memilih element, hampir sama seperti css
const judulWebsite = document.querySelector('.navbar-brand');
// milh id
// const searchBar = document.querySelector('#searchbar');

// const section = document.querySelector('section')
// <section>

// mengubah isi teks pada elemen
// 1. innerHTML, itu bisa element HTML
// judulWebsite.innerHTML = '<p>Coba diubah</p>';
// 2. innerText, harus string saja
// judulWebsite.innerText = 'Coba Diubah dengan innerText';
// judulWebsite.textContent = 'Coba Diubah dengan innerText';

// ngubah style element
// judulWebsite.style.color = 'red';
// judulWebsite.style.backgroundColor = 'blue';

// jika benyek element yg sama, yg terpilih dengan querySelector hanya elemen pertama
const tableData = document.querySelector('td');

// tableData.style.backgroundColor = 'red';

// kalau kita mau milih semua element td, kita harus menggunakan querySelectorAll
// sekarang bentuknya adalah Array yang isinya element td
const tableDataAll = document.querySelectorAll('td');
// tableDataAll.forEach(td => {
//   td.style.background = 'red';
// });

// template literal ` ` (backtick)
function template(no, title, image, link, releasedDate) {
  const index = no - 1;
  return `<tr>
    <th scope="row">${no}</th>
    <td>${title}</td>
    <td>
      <img src="${image}" class="img-thumbnail anime-img" alt="Gambar">
    </td>
    <td>
      <a href="${link}" target="_blank">Buka Link</a>
    </td>
    <td>${releasedDate}</td>
    <td>
      <button class="btn btn-info btn-edit" data-index="${index}" data-bs-toggle="modal" data-bs-target="#modal-add">Edit</button>
      <button class="btn btn-danger btn-delete" data-index="${index}">Hapus</button>
    </td>
  </tr>`;
}

// milih tbody
const animeList = document.querySelector('#anime-list');
const judul = document.querySelector('#judul');
const judulError = document.querySelector('#judul-error');
const gambar = document.querySelector('#gambar');
const gambarError = document.querySelector('#gambar-error');
const gambarEdit = document.querySelector('#gambar-edit');
const url = document.querySelector('#url');
const urlError = document.querySelector('#url-error');
const tahun = document.querySelector('#year');
const tahunError = document.querySelector('#year-error');
const btnAdd = document.querySelector('#btn-add');
const modalTitle = document.querySelector('.modal-title');
const btnSubmit = document.querySelector('#btn-submit');

let isEdit = false;
let indexEdit = null;

btnAdd.addEventListener('click', () => {
  modalTitle.innerText = 'Tambah data anime';
  btnSubmit.innerText = 'Tambah';
  judul.value = '';
  gambarEdit.innerHTML = '';
  url.value = '';
  tahun.value = '';
  isEdit = false;
  indexEdit = null;
});

// melakukan perulangan dari data yg ada dengan template (mengulangi template)
function render(dataList) {
  return dataList
    .map((anime, index) => {
      const number = index + 1;
      // const anime = { animeId: '', etc... }
      // anime itu sekarang adalah object per item yg ada di dalam array
      return template(
        number,
        anime.animeTitle,
        anime.animeImg,
        anime.animeUrl,
        anime.releasedDate
      );
    })
    .join('');
}

// kita render tbody yg udah dipilih dengan variabel render
// render ini berisi sekumpulan data dengan template yg sudah dibuat
animeList.innerHTML = render(data);
function watchButtonEdits() {
  const btnEdits = document.querySelectorAll('.btn-edit');
  btnEdits.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      modalTitle.innerText = 'Edit data anime';
      btnSubmit.innerText = 'Edit';

      const index = e.target.dataset.index;
      const selected = data[index];
      console.log(selected);
      judul.value = selected.animeTitle;
      gambarEdit.innerHTML = `<img src="${selected.animeImg}" alt="${selected.animeTitle}" />`;
      url.value = selected.animeUrl;
      tahun.value = selected.releasedDate;
      isEdit = true;
      indexEdit = index;
    });
  });
}
watchButtonEdits();

function watchButtonDeletes() {
  const btnDeletes = document.querySelectorAll('.btn-delete');
  btnDeletes.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      Swal.fire({
        title: 'Apakah kamu yakin?',
        text: 'Tindakan ini tidak dapat dibatalkan!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus datanya!',
      }).then((result) => {
        if (result.isConfirmed) {
          const index = e.target.dataset.index;
          data.splice(index, 1);
          animeList.innerHTML = render(data);
          watchButtonEdits();
          watchButtonDeletes();
          watchSubmitEvent();
          Swal.fire('Terhapus!', 'Data anime berhasil dihapus.', 'success');
        }
      });
    });
  });
}
watchButtonDeletes();

const searchbar = document.querySelector('#searchbar');

// event itu sesuatu yang terjadi pada element
// interakhsi user terhadap element
searchbar.addEventListener('keyup', (event) => {
  // menangkap nilai yg didapat dari element
  // if (event.keyCode === 13) {
  //   // cari datanya
  //   // 13 itu adalah id / keycode enter
  // }

  // 1. tangkap keyword dari inputan
  const keyword = event.target.value;

  // 2. filter data sesuai keywrod yg didapat
  const filterResult = data.filter((anime) => {
    // includes
    // mengecek apakah suatu string ada di string lainnya
    // be => bebek (hasilnya ada)
    // return anime.animeTitle === keyword;

    // toLowerCase
    // mengubah string menjadi huruf kecil semua
    const titleLowerCase = anime.animeTitle.toLowerCase();
    const keywordLowerCase = keyword.toLowerCase();

    // apakah `Maou` ada di `Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no`
    return titleLowerCase.includes(keywordLowerCase);
  });
  console.log(filterResult);
  animeList.innerHTML = render(filterResult);
});

// 2. pantau event click, kalau misalnya di klik lakukan aksi tambah
function watchSubmitEvent() {
  btnSubmit.addEventListener('click', () => {
    let error = false;

    // validasi...
    // 1. judul is required
    if (judul.value === '') {
      judul.classList.add('is-invalid');
      judulError.innerText = 'Judul harus diisi.';
      error = true;
    }
    if (gambar.files[0] === undefined && isEdit === false) {
      gambar.classList.add('is-invalid');
      gambarError.innerText = 'Gambar harus dipilih.';
      error = true;
    }

    // validasi url
    if (url.value === '') {
      url.classList.add('is-invalid');
      urlError.innerText = 'URL harus diisi';
      error = true;
    }

    if (tahun.value === '') {
      tahun.classList.add('is-invalid');
      tahunError.innerText = 'Tahun harus diisi';
      error = true;
    }

    // tambah event ketika mengetik / mengisi file, maka erronya di-remove
    judul.addEventListener('keyup', (e) => {
      e.target.classList.remove('is-invalid');
      judulError.innerHTML = '';
      error = false;
    });
    gambar.addEventListener('change', (e) => {
      e.target.classList.remove('is-invalid');
      gambarError.innerHTML = '';
      error = false;
    });
    url.addEventListener('keyup', (e) => {
      // regex itu adalah pencarian string berdasarkan pola
      const validURL = /^(ftp|http|https):\/\/[^ "]+$/;
      const isValidURL = validURL.test(e.target.value);

      if (isValidURL === false) {
        e.target.classList.add('is-invalid');
        urlError.innerHTML = 'URL tidak valid';
        error = true;
      } else {
        e.target.classList.remove('is-invalid');
        urlError.innerHTML = '';
        error = false;
      }
    });
    tahun.addEventListener('keyup', (e) => {
      e.target.classList.remove('is-invalid');
      tahunError.innerHTML = '';
      error = false;
    });

    // kode untuk eksekusi menambah data
    if (error === false) {
      // mentransformasikan judul menjadi huruf kecil, dan ada strip di setiap spasi
      const animeId = judul.value.toLowerCase().replace(' ', '-');
      const payload = {
        animeId: animeId,
        animeTitle: judul.value,
        animeImg: `${animeId}.png`,
        animeUrl: url.value,
        releasedDate: tahun.value,
      };

      if (isEdit) {
        // jika posisinya edit
        // delete menghapus sebuah field di dalam object
        delete payload.animeImg;
        data[indexEdit] = {
          // spread operator, ini artinya menyalin semua field yg ada di data[indexEdit] ke data[indexEdit]
          ...data[indexEdit],
          ...payload,
        };
      } else {
        // jika posisinya nambah
        // method push, untuk menambahkan nilai baru ke dalam array
        data.push(payload);
      }

      animeList.innerHTML = render(data);
      const btnCloseModal = document.querySelector('#btn-close-modal');
      btnCloseModal.click();

      // panggil sweetalert2
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: `Data anime berhasil ${
          isEdit === true ? 'diedit' : 'ditambah'
        }.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}
watchSubmitEvent();

// method array
// 1. push, menambah data baru ke dalam array
// data.push('anime baru');

// 2. pop, itu menghapus data terakhir dalam array
// data.pop();

// 3. slice, itu mengambil beberapa data pada array, slice itu ada rangenya
// parameter 1, itu index data awal yg mau diambil
// parameter 2, index data akhir
// const sepuluhDataPertama = data.slice(10, 20);

// console.log(sepuluhDataPertama);

// 4. splice, menghapus data pada index specific
// parameter 1, index data yg mau dihapus
// parameter 2, jumlah data yg mau dihapus
// data.splice(4, 1);

// 5. filter, untuk mengelompokkan data berdasarkan kondisi tertentu
const anime2021 = data.filter((anime) => {
  // return kondisinya
  return anime.releasedDate === '2021';
});
// const horimiya = data.filter((anime) => {
//   // membuat huruf jadi kecil semua
//   return anime.animeTitle.toLowerCase().includes('hori');
// });

// console.log(horimiya);

// 6. find, mirip filter, tapi langsung ke data objectnya...
// ini hasilnya bukan array lagi, langsung data yg ada di dalam array
const horimiya = data.find((anime) => anime.animeTitle === 'Horimiya');

// console.log(horimiya?.animeTitle);

// console.log(data);

// memodifikasi data
horimiya.animeTitle = 'Horimiya New';

// console.log(horimiya);

// data.unshift('Test');

// console.log(data);
