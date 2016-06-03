/**
 * 登录界面JS
 **/
(function($, owner) {

	owner.toPickup = function() {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			'report-waybillpickup-day.html',
			'report-waybillpickup-day',
			'', {}
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
		var webviewShow = plus.webview.create(
			'report-delivery-day.html',
			'report-delivery-day',
			'', {}
		); //后台创建webview并打开show.html
		webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
			setTimeout(function() {
				nwaiting.close();
				//新webview的载入完毕后关闭等待框
				webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
			}, 0);
		}, false);
	};

	owner.toPayMore = function() {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			'report-paymore.html',
			'report-reportmore',
			'', {}
		); //后台创建webview并打开show.html
		webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
			setTimeout(function() {
				nwaiting.close();
				//新webview的载入完毕后关闭等待框
				webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
			}, 0);
		}, false);
	};

	owner.toPayLess = function() {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			'report-payless.html',
			'report-reportless',
			'', {}
		); //后台创建webview并打开show.html
		webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
			setTimeout(function() {
				nwaiting.close();
				//新webview的载入完毕后关闭等待框
				webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
			}, 0);
		}, false);
	};

	owner.toPriceLess = function() {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			'report-priceless.html',
			'report-priceless',
			'', {}
		); //后台创建webview并打开show.html
		webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
			setTimeout(function() {
				nwaiting.close();
				//新webview的载入完毕后关闭等待框
				webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
			}, 0);
		}, false);
	};

	owner.toWaybillLess = function() {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			'report-waybillless.html',
			'report-waybillless',
			'', {}
		); //后台创建webview并打开show.html
		webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
			setTimeout(function() {
				nwaiting.close();
				//新webview的载入完毕后关闭等待框
				webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
			}, 0);
		}, false);
	};
	
	owner.toArrivalPay = function() {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			'report-arrivalpay.html',
			'report-arrivalpay',
			'', {}
		); //后台创建webview并打开show.html
		webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
			setTimeout(function() {
				nwaiting.close();
				//新webview的载入完毕后关闭等待框
				webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
			}, 0);
		}, false);
	};
	
	owner.toCashDelivery = function() {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			'report-cashdelivery.html',
			'report-cashdelivery',
			'', {}
		); //后台创建webview并打开show.html
		webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
			setTimeout(function() {
				nwaiting.close();
				//新webview的载入完毕后关闭等待框
				webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
			}, 0);
		}, false);
	};
	
	owner.toPerformance = function() {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			'report-performance.html',
			'report-perfermance',
			'', {}
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