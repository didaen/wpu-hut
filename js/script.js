// Sebenarnya jQuery punya method untuk Ajax, yaitu $.ajax. Tapi kalo khusus untuk JSON, bisa pake $.getJSON
$.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;

    // Pengulangan pada jQuery menggunakan $.each
    $.each(menu, function (i, data) {
        // i pada parameter adalah index-nya sedangkan data pada parameter adalah data-nya.

        // jQuery tolong carikan elemen dengan id #daftar-menu kemudian append (tambahkan node baru di posisi paling bawah) code html berikut

        $.('#daftar-menu').append('')
    })
});