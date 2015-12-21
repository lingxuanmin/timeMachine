var MDialog = function () {
	this.defaults = {
		message: "2",
		//点击遮罩层是否关闭弹框
		layerClick: false,
		//弹框关闭之后的回调
		closeFn: "1",
		//弹框出现之后的回调
		openFn: "2"
	};	
};
MDialog.prototype.init = function (opt) {
	this.option = $.extend(true, {}, this.defaults, opt);
	var sContent = $(this.option.message)[0],
		that = this;

	this.sHtml = $("<div class='md-layer'></div>" + 
				   "<div class='md-wrap'>" +  
					     sContent.outerHTML + 
				   "</div>");
	this.sHtml.appendTo("body");
	this.dialog = $(this.sHtml[1]);
	this.layer = $(this.sHtml[0]);
	this.closeHandle = this.dialog.find(".md-close");
	if (this.option.layerClick) {
		this.layer.on("touchstart", function () {
			that.close();
		});
	}
	this.closeHandle.on("touchstart", function () {
		that.close();
	});
};
MDialog.prototype.open = function () {
	var that = this;
	MDialog.prototype.status = false;
	this.layer.animate({
		opacity: 1
	}, 100, function () {
		that.dialog.css({
			marginLeft: - that.dialog.width()/2,
			marginTop: - that.dialog.height()
		}).animate({
			opacity: 1,
			marginTop: - that.dialog.height()/2
		}, 300, function () {
			that.option.openFn && that.option.openFn();
		});
	});
};
MDialog.prototype.close = function () {
	var that = this;
	this.dialog.animate({
		opacity: 0,
		marginTop: - that.dialog.height()
	}, 300, function () {
		that.layer.animate({
			opacity: 0
		}, 100, function () {
			that.dialog.remove();
			that.layer.remove();
			that.option.closeFn && that.option.closeFn();
		})
	});
};