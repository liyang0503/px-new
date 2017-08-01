/**
 * Created by QXT on 2017/6/15.
 */
var w = $(window).width();
var wh = $(window).height();
$(function () {
   function top() {
      if ($('body').outerHeight() < wh) {
         $('body').css({paddingBottom: $('footer').outerHeight(), height: wh});
         $('section').css({minHeight: wh - $('footer').outerHeight() - $('header').outerHeight() - $('nav').outerHeight()});
         $('footer').css({
            position: 'absolute',
            left: 0,
            bottom: 0
         });
      }
      setTimeout(top, 0);
   }

   top();

   //手机导航
   if (w < 993) {
      var sum = 0, arr = [], sum1;
      $('nav li').each(function (index) {
         sum += $(this).outerWidth();
         arr.push(sum);
         if ($(this).hasClass('active')) {
            sum1 = arr[index] - 200;
         }
      });
      $('nav ul').css({width: (sum + 2) + "px"});
      if (sum1 >= 0 && sum1 <= (sum - w)) {
         $('nav ul').css({left: -sum1 + 'px'});
      } else if (sum1 < 0) {
         $('nav ul').css({left: 0});
      } else {
         $('nav ul').css({left: -(sum - w) + 'px'});
      }

      $('nav ul').on("touchmove", function (e) {
         e.stopPropagation();
         $(this).css({left: 'auto'});
      });
   }

   //提示语
   $('a').click(function () {
      if ($(this).attr('href') == 'javascript:') {
         msg();
      }
   });

});

//tab切换
function tab(cli, sec) {
   $(cli).each(function (index) {
      $(this).click(function () {
         $(sec).removeClass('active');
         $(cli).removeClass('active');
         $(this).addClass('active');
         $($(sec)[index]).addClass('active');
      });
   });
}

//左对齐
function mar(ma, num) {
   $(ma).parent().each(function () {
      $(this).children(ma).each(function (index) {
         if (index % num == 0) {
            $(this).css('margin-left', '0px');
         }
      });
   });
}

function msg() {
   layer.msg('错误：数据请求错误！');
}
