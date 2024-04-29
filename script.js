$(document).ready(function() {
    $.ajax({
        url: 'tokobuku.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Mengakses data toko buku melalui "Data Penjualan Toko Buku"
            var infoToko = data["Data Penjualan Toko Buku"];

            $("#infoToko").html(
                "Nama Toko: " + infoToko.nama + "<br>" +
                "Pengarang: " + infoToko.pengarang + "<br>" +
                "Alamat: " + infoToko.alamat
            );

            // Menggunakan ID tabel yang benar
            $.each(infoToko.koleksiBuku, function(i, buku) {
                var row = $("<tr>");
                row.append($("<td>").text(buku.judul));
                row.append($("<td>").text(buku.kategori));
                row.append($("<td>").text(buku.harga));
                $("#buku").append(row); // Perbaikan: menggunakan ID tabel yang benar
            });
        },
        error: function(error) {
            console.log("Error: ", error);
        }
    });
});
