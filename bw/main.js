require.config({
    baseUrl:'/',
    paths:{
        'core':'./util/core'
    }
})

require(['core','util/computedWHLR','util/domAlter'],function($){
    $('.box').each(function(index,value,parent){
        console.log(index,value,parent);
    });
    console.log($('.box') === $('.box'));
    console.log($('.box').get(0) === $('.box').get(0));
    console.log($('.box').offset());
    console.log($('.box').css('width'));
    console.log($('.box').css('width','400px'));
    console.log($('.box').attr('abc','400px'));
    console.log($('.box').attr('abc'));
    console.log($('.box').eq(0));
    console.log($('.box,.all').remove());
});