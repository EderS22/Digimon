$(document).ready(function () {
    $('#pagination-container').pagination({
        dataSource: function (done) {
            $.ajax({
                type: "GET",
                url: "https://digimon-api.vercel.app/api/digimon",
                dataType: "json",
                async: true,
                success: function (data) {
                    done(data);
                }
            });
        },
        callback: function (data) {
            var html = template(data);
            $('#data-container').html(html);
        }
    })
    function template(data) {
        var html = "";
        for (let i = 0; i < data.length; i++) {
            html += "<tr><td><a href='" + data[i].img + "'>" + data[i].name + "</a></td><td>" + data[i].level + "</td></tr>";
        }
        return html;
    }
});