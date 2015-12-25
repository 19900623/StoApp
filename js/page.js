/**
 * 登录界面JS
 **/
(function($, owner) {

			owner.toPickup = function() {
				var nwaiting = plus.nativeUI.showWaiting();
				webviewShow = plus.webview.create(
					'report-waybillpickup-day.html',
					'report-waybillpickup-day',
					'', {
					}
				); //后台创建webview并打开show.html
				webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
					setTimeout(function() {
						nwaiting.close();
						//新webview的载入完毕后关闭等待框
						webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
					}, 0);
				}, false);
			};
			
			owner.toDelivery = function() {
				var nwaiting = plus.nativeUI.showWaiting();
				webviewShow = plus.webview.create(
					'report-delivery-day.html',
					'report-delivery-day',
					'', {
					}
				); //后台创建webview并打开show.html
				webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
					setTimeout(function() {
						nwaiting.close();
						//新webview的载入完毕后关闭等待框
						webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
					}, 0);
				}, false);
			};

}(window.mui, window.page = {}));