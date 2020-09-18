$(document).ready(function(){  //дожидаемся загрузки страницы
 
  $('#logo-menu').on("click", function(){  
    $('#menu-mobile').addClass('menu-block'); 
});
$('#logo-menu').on("dblclick", function(){  
    $('.text-medium').addClass('menu-block1'); 
});
});


$(document).ready(function(){  //дожидаемся загрузки страницы
  $('#logo-menu').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
      $('#menu-mobile').toggle(); //включает/выключает элемент id="text"
  });
});