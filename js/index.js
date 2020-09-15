window.onscroll = function () {
  let eTop = document.querySelector('.searchWrapper');
  if (document.documentElement.scrollTop) {
    eTop.style = 'top:0';
  } else {
    eTop.style = 'top:45px';
  }
}
var isMobile = function () {
  var i;
  let userAgent = navigator.userAgent;
  let phoneAgent = ['iPhone', 'Android', 'iPad', 'iPod', 'Windows Phone', 'MQQBrowser']
  for (i = 0; i < phoneAgent.length; i++) {
    if (userAgent.indexOf(phoneAgent[i]) > 0) {
      break;
    }
  }
  if (i == phoneAgent.length) {
    if (confirm('非手机端用户请访问pc端页面！')) {
      window.location.href = 'https://drghost.top';
    }
  }
}
var main = function () {
  isMobile();
}

main()