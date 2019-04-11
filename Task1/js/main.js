var chess = {
    container: '.chess',
    render(){
        var block = document.querySelector(this.container);
        block.insertAdjacentHTML('beforeend', this.getBoard());
    },
    getBoard(){
        var symbols = "ABCDEFGH";
        var board = "";
        board += "<ul class='numbers-line'>";
        board += "<li class='symbol'></li>";
        for (var i = 1; i < 9; i++) {
            board += `<li>${i}</li>`
        }
        board += "</ul>";
        for (var i = 1; i < 9; i++) {
            
        }
        for (var k = 0; k < 8; k+=2) {
            board += "<ul class='odd-line'>";
            board += `<li class='symbol'>${symbols[k]}</li>`;
            for (var i = 0; i < 8; i++) {
                board += "<li></li>"
            }
            board += "</ul>";
            board += "<ul class='even-line'>";
            board += `<li class='symbol'>${symbols[k+1]}</li>`;
            for (var i = 0; i < 8; i++) {
                board += "<li></li>"
            }
            board += "</ul>";
        }
        return board
    }
};

chess.render();