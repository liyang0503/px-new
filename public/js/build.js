/**
 * Created by QXT on 2017/5/17.
 * 作用域：共建单位
 */

$(function () {
   $('.bm').each(function () {
      var st = -$(this).outerHeight() / 2;
      var sl = -$(this).outerWidth() / 2;
      $(this).css({marginTop: st + "px", marginLeft: sl + "px"});
   });

   book();
});

// 按部门展示
function book() {
   $('.uls').each(function () {
      var ul = $(this).outerHeight(),
         li = $(this).children('li').outerHeight(),
         num = ul / li,
         ur = 'url("' + $(this).prev(".shu").attr('src') + '")',
         urls = [];
      for (var i = 0; i < num; i++) {
         urls.push(ur + " center " + (li * (i + 1) - 60) + "px");
      }
      $(this).css({
         background: urls
      });
   });
}

