/**
 * Created by QXT on 2017/5/17.
 * 作用域：首页
 */

$(function () {
//   PC首页轮播
   var img = $('.a_img');
   var li = $('.car_li');
   for (var i = 0; i < img.length; i++) {
      $(li[i]).attr('data-slide-to', i);
   }
   $('.ban-li').hover(function () {
      $(this).css({borderTopColor: "#4f90d7"});
      $(this).next().css({borderTopColor: "#4f90d7"});
   }, function () {
      $(this).css({borderTopColor: "#f0f0f0"});
      $(this).next().css({borderTopColor: "#f0f0f0"});
   });

   //   tab调用
   tab('.tab-li', '.tab-sec');
   tab('.tab1-li', '.tab1-sec');
   tab('.tab2-li', '.tab2-sec');
   tab('.tab3-li', '.tab3-sec');
   tab('.tab4-li', '.tab4-sec');
   tab('.tab5-li', '.tab5-sec');
   tab('.tab6-li', '.tab6-sec');
   tab('.tab7-li', '.tab7-sec');
   tab('.tab8-li', '.tab8-sec');
   tab('.tab9-li', '.tab8-sec');

   //   右侧切换部分的宽度（手机）
   if (w < 768) {
      $('.tit-2').each(function () {
         var rt_top = this;
         $(rt_top).find('ul').css({width: $(rt_top).outerWidth() - $(rt_top).children('a').outerWidth() - 8});
      });
   }
});

jQuery.fn.size = function () {
   return this.length;
};