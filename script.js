
$(document).ready(function() {
    $.ajax({
        url: 'tokobuku.json',
        type: 'GET',
        dataType: 'json',
        success: function(infoToko) {
            $("#infoToko").html(
                "Nama Toko: " + infoToko.nama + "<br>" +
                "Pengarang: " + infoToko.pengarang + "<br>" +
                "Alamat: " + infoToko.alamat
            );
            $.each(infoToko.buku, function(i, koleksi) {
                var row = $("<tr>");
                row.append($("<td>").text(koleksi.judul));
                row.append($("<td>").text(koleksi.kategori));
                row.append($("<td>").text(koleksi.harga));
                $("#koleksiBuku").append(row);
            });
        },
        error: function(error) {
            console.log("Error: ", error);
        }
    });
});
