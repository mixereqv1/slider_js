const dir = './images/';
$.post('scandir.php',
    {
        dir: dir
    },
    data => {
        data = JSON.parse(data);
        $i = data.length;
        data.slice().reverse().forEach(element => {
            $img = document.createElement('img');
            if($i == 1) {
                $img.className = 'item active';
            } else {
                $img.className = 'item';
            }
            $img.src = `images/${element}`;
            $img.id = $i;
            $('.photos').prepend($img);

            $i--;
        })
    }
);