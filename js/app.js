/**
 * 登录界面JS
 **/
(function($, owner) {

	/**
	 * 获取当前状态
	 **/
	owner.getUrl = function() {
		var urlText = localStorage.getItem('$url') || "{}";
		return JSON.parse(urlText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setUrl = function(url) {
		url = url || {};
		localStorage.setItem('$url', JSON.stringify(url));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setHttpUrl = function(url) {
		url = url || {};
		localStorage.setItem('$HttpUrl', JSON.stringify(url));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};
	/**
	 * 获取当前状态
	 **/
	owner.getHttpUrl = function() {
		var urlText = localStorage.getItem('$HttpUrl') || "{}";
		return JSON.parse(urlText);
	};

	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	};

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	};

	/**
	 * 设置登录信息
	 **/
	owner.setLoginInfo = function(logininfo) {
		logininfo = logininfo || {};
		localStorage.setItem('$logininfo', JSON.stringify(logininfo));
	};

	/**
	 * 获取登录信息
	 **/
	owner.getLoginInfo = function() {
		var logininfoText = localStorage.getItem('$logininfo') || "{}";
		return JSON.parse(logininfoText);
	};

	/**
	 * 是否正整数
	 **/
	owner.isPositiveNum = function(s) {
		var re = /^[0-9]*[1-9][0-9]*$/;
		return re.test(s)
	}

	function S4() {
		return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	/**
	 * 获取GUID
	 **/
	owner.NewGuid = function() {
		return(S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	}

	/**
	 * 时间格式化
	 **/
	Date.prototype.format = function(format) {
		var o = {
			"M+": this.getMonth() + 1, //month
			"d+": this.getDate(), //day
			"h+": this.getHours(), //hour
			"m+": this.getMinutes(), //minute
			"s+": this.getSeconds(), //second
			"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
			"S": this.getMilliseconds() //millisecond
		}
		if(/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("(" + k + ")").test(format))
				format = format.replace(RegExp.$1,
					RegExp.$1.length == 1 ? o[k] :
					("00" + o[k]).substr(("" + o[k]).length));
		return format;
	}

	/**
	 * 设置登录信息
	 **/
	owner.setLoaction = function(Loaction) {
		Loaction = Loaction;
		localStorage.setItem('$Loaction', JSON.stringify(Loaction));
	};

	/**
	 * 获取登录信息
	 **/
	owner.getLoaction = function() {
		var Loaction = localStorage.getItem('$Loaction') || "{}";
		return JSON.parse(Loaction);
	};

	//打开窗体
	owner.openPage = function(html, id, name, paras) {
		var nwaiting = plus.nativeUI.showWaiting();
		var webviewShow = plus.webview.create(
			html,
			id,
			name, paras
		); //后台创建webview并打开show.html
		webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件
			setTimeout(function() {
				nwaiting.close();
				//新webview的载入完毕后关闭等待框
				webviewShow.show("pop-in"); //把新webview窗体显示出来，显示动画效果为速度150毫秒的右侧移入动画
			}, 0);
		}, false);
	};

	// 显示图片
	owner.displayFile = function(img, pre) {
		var url = pre + "camera_image.html";
		var w = plus.webview.create(url, url, {
			hardwareAccelerated: true,
			scrollIndicator: 'none',
			scalable: true,
			bounce: "all"
		});
		w.addEventListener("loaded", function() {
			w.evalJS("loadMedia('" + img.src + "')");
		}, false);
		w.addEventListener("close", function() {
			w = null;
		}, false);
		w.show("pop-in");
	}

	// 拍照
	owner.getImage = function(ul) {
		//outSet("开始拍照：");
		var cmr = plus.camera.getCamera();
		var imageUrl = '';
		cmr.captureImage(function(p) {
			plus.io.resolveLocalFileSystemURL(p, function(entry) {
				imageUrl = entry.toLocalURL();
				//手机端图片进行压缩
				var newImage = imageUrl.replace('.jpg', new Date().format('yyyyMMddhhmmss') + '_c.jpg');
				plus.zip.compressImage({
						src: imageUrl,
						dst: newImage,
						quality: 30
					},
					function() {
						var img = document.createElement('img');
						img.className = "ditem";
						img.src = newImage;
						img.setAttribute("onclick", "app.displayFile(this,'../../');");
						ul.appendChild(img);
						plus.io.resolveLocalFileSystemURL(imageUrl, function(entry) {
							entry.remove();
						});
					},
					function(error) {
						alert("Compress error!");
					});
			}, function(e) {
				alert("读取拍照文件错误：" + e.message);
			});
		}, function(e) {
			alert("失败：" + e.message);
		}, {
			filename: "_doc/camera/",
			index: 1
		});
	}

	// 拍照
	owner.getOneImage = function(ul) {
		//outSet("开始拍照：");
		var cmr = plus.camera.getCamera();
		var imageUrl = '';
		cmr.captureImage(function(p) {
			plus.io.resolveLocalFileSystemURL(p, function(entry) {
				imageUrl = entry.toLocalURL();
				//手机端图片进行压缩
				var newImage = imageUrl.replace('.jpg', new Date().format('yyyyMMddhhmmss') + '_c.jpg');
				plus.zip.compressImage({
						src: imageUrl,
						dst: newImage,
						quality: 30
					},
					function() {
						var img = document.createElement('img');
						img.className = "ditem";
						while(ul.firstChild)
							ul.removeChild(ul.firstChild);
						img.src = newImage;
						img.setAttribute("onclick", "app.displayFile(this,'../../');");
						ul.appendChild(img);
						plus.io.resolveLocalFileSystemURL(imageUrl, function(entry) {
							entry.remove();
						});
					},
					function(error) {
						alert("Compress error!");
					});
			}, function(e) {
				alert("读取拍照文件错误：" + e.message);
			});
		}, function(e) {
			alert("失败：" + e.message);
		}, {
			filename: "_doc/camera/",
			index: 1
		});
	}

}(window.mui, window.app = {}));