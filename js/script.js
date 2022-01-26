// Sebenarnya jQuery punya method untuk Ajax, yaitu $.ajax. Tapi kalo khusus untuk JSON, bisa pake $.getJSON
$.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;

    // Pengulangan pada jQuery menggunakan $.each
    $.each(menu, function (i, data) {
        // i pada parameter adalah index-nya sedangkan data pada parameter adalah data-nya.

        // jQuery tolong carikan elemen dengan id #daftar-menu kemudian append (tambahkan node baru di posisi paling bawah) code html berikut

        $.('#daftar-menu').append('<div class="col-md-4"><div class= "card mb-3" ><img src="img/menu/<?= $row[$i][" gambar"]; ?>" class= "card-img-top" alt = "<?= $row[$i]["nama"]; ?> picture" ><div class="card-body"><h5 class="card-title"><?= $row[$i]["nama"]; ?></h5><p class="card-text"><?= $row[$i]["deskripsi"]; ?></p><h5 class="card-title"><?= $row[$i]["harga"]; ?></h5><a href="#" class="btn btn-primary">Tambahkan</a></div></div></div>');
    });
});