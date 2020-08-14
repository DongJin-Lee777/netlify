$(function() {
        $('.selector').click(function(e) {
            $('.action').removeClass('action');
            const target = e.target.id;
            $('#func_contain_'+target).toggleClass('action');
        })
})