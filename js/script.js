// Sebenarnya jQuery punya method untuk Ajax, yaitu $.ajax. Tapi kalo khusus untuk JSON, bisa pake $.getJSON
$.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;

    // Pengulangan pada jQuery menggunakan $.each
    $.each(menu, function (i, data) {
        // i pada parameter adalah index-nya sedangkan data pada parameter adalah data-nya.

        // jQuery tolong carikan elemen dengan id #daftar-menu kemudian append (tambahkan node baru di posisi paling bawah) code html berikut

        $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class="card-img-top" alt ="' + data.nama + ' picture"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '<p><h5 class="card-title">' + data.harga + '</h5><a href="#" class="btn btn-primary">Tambahkan</a></div></div></div>');
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

    // jQuery, tolong carikan saya element dengan tag h1 (Adanya cuma 1 jadi tidak usah dikasi [0] gak papa), kemudian ganti isi HTMLnya dengan isi dari variabel kategori.
    $('h1').html(kategori);

    // MEMBUAT ATURAN UNTUK ALL MENU KARENA MENUNYA JADI TIDAK MUNCUL KARENA PADA JSON-NYA DI KATEGORI TIDAK ADA ALL MENU
    if (kategori == 'All Menu') {

    }

    // UNTUK MENAMPILKAN MENU SESUAI KATEGORINYA KETIKA KITA MENGKLIK NAVBAR
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';

        // Looping data dulu
        $.each(menu, function (i, data) {
            // Jika data.kategori sama dengan isi dari variabel kategori, dipaksa untuk jadi lower case semua
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class="card-img-top" alt ="' + data.nama + ' picture"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '<p><h5 class="card-title">' + data.harga + '</h5><a href="#" class="btn btn-primary">Tambahkan</a></div></div></div>';
            }
        });

        // jQuery, tolong carikan saya elemen yang mempunya id daftar-menu lalu timpa apapun isinya dengan content
        $('#daftar-menu').html(content);
    });
});

