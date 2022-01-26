// Sebenarnya jQuery punya method untuk Ajax, yaitu $.ajax. Tapi kalo khusus untuk JSON, bisa pake $.getJSON
$.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;

    // Pengulangan pada jQuery menggunakan $.each
    $.each(menu, function (i, data) {
        // i pada parameter adalah index-nya sedangkan data pada parameter adalah data-nya.

        // jQuery tolong carikan elemen dengan id #daftar-menu kemudian append (tambahkan node baru di posisi paling bawah) code html berikut

        $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class="card-img-top" alt ="' + data.nama + ' picture"><div class="card-body"><h5 class="card-title">' + data.gambar + '</h5><p class="card-text">' + data.deskripsi + '<p><h5 class="card-title">' + data.harga + '</h5><a href="#" class="btn btn-primary">Tambahkan</a></div></div></div>');
    });
});


// jQuery tolong carikan semua class dengan nama nav-link, kemudian ketika di klik jalankan function berikut.
$('.nav-link').on('click', function () {

    // Ketika saya klik nav-link yang manapun, saya akan ubah semua nav-link selain yang diklik menjadi tidak punya class active
    $('.nav-link').removeClass('active');

    // Khusus yang diklik aja, akan punya class active
    $(this).addClass('active');

    // Membuat sebuah variabel kategori untuk menyimpan isi atau tulisan yang ada pada elemen dengan class nav-link saat elemen diklik 
    let kategori = $(this).html();

    // Mencetak hasilnya di console
    console.log(kategori);
});