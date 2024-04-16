$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const urlNovaImagem = $('#url_nova_imagem').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src="${urlNovaImagem}">`).appendTo(novoItem);
        $(`
            <div class="overlay_link">
            <a href="${urlNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            <div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#url_nova_imagem').val('');
    })
})