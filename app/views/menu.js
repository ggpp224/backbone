/**
 * @author gp
 * @datetime 2012-7-26
 * @description menu.js
 */

 Ambow.define('Ambow.view.Menu',{

 	initialize: function(cfg){
 		var cfg = cfg||{};
 		Ambow.apply(this,cfg);
 	},

 	tpl:new Ambow.XTemplate(
	 	'<a href="#1">课程信息传输</a>',
		'<a href="#2">开课计划信息</a>',
		'<a href="#3">选课准备信息</a>',
		'<a href="#4">{name}批量选课信息</a>',
		'<a href="#5">选课结果信息</a>',
		'<a href="#6">学习授权信息</a>',
		'<a href="#7" >成绩信息传输</a>',
		'<a href="#8" >管理信息传输</a>',
		'<div class="tablist_info"></div>'
	 ),
	 
	 className:'navigation',
	
	 render: function(){
	 	this.tpl.append(this.el,{});
	 	if(this.renderTo){
	 		$('#'+this.renderTo).html(this.el);

	 		var url = location.href,
				n = url.substring(url.lastIndexOf('/')+1),
				s =n.indexOf('?');
			if(s!=-1){
				n = n.substring(0,s);
			}
		    var  htm = n,
				 n = n.substring(0,n.indexOf('.'));
			if(n){
				var lis = $(this.el).find('a[href*="'+htm+'"]');
				var li = $(lis[0]);
				if(li){
					li.addClass('current');
				}
			}
	 	}
	 }
 });
 console.log('menu init');