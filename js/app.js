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
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	owner.NewGuid = function() {
		return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	}


}(window.mui, window.app = {}));