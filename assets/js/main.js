// Manejo de solicitud GET
$('#getData').click(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'GET',
        success: function (data) {
            $('#result').html('<pre>' + JSON.stringify(data) + '</pre>');
            console.log(data);
        },
        error: function (error) {
            console.log('Error:', error);
        }
      
    });
});

// Manejo de solicitud POST
$('#postData').click(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        contentType: 'application/json; charset=UTF-8',
        success: function (data) {
            $('#result').html('<pre>' + JSON.stringify(data) + '</pre>');
            console.log(data);
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
});

$('#getDataFetch').click(function () {
    
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud GET');
            }
            return response.json();
        })
        .then(data => {
            // Manejar los datos obtenidos
            document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data)}</pre>`;
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


$('#postDataFetch').click(function () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud POST');
            }
            return response.json();
        })
        .then(data => {
            // Manejar la respuesta del servidor
            document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data)}</pre>`;
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

