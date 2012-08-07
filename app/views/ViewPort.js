/**
 * @author gp
 * @datetime 2012-8-2
 * @description ViewPort.js
 */
 
require([
			'jquery',
			'underscore',
			'backbone',
			'base',
			'Template',
			'Application',
			'ClassManager',
			'ClassDefine',
			'Controller',
			'ListView'
		],
	function(){
		console.log('viewport');
		Ambow.define('Ambow.view.Viewport',{
			initialize: function(cfg){
		 		var cfg = cfg||{};
		 		Ambow.apply(this,cfg);
		 	},
		 	tagName:"div",
		 	className:'x-viewport',
		 	tpl:new Ambow.XTemplate(
		 		'<div><input type="button" class="btn" value="click" /><div>'
		 	),
		 	render: function(){
		 		//this.tpl.append(this.el);
		 		$('#page-content').html(this.el);
		 		this.trigger('afterrendered',this);
		 		return this;
		 	},
		 	
		 	add: function(cmp){
		 		cmp.render(this.el);
		 	},
		 	overwrite: function(cmp){
		 		this.el.innerHTML ='';
		 		cmp.render(this.el)
		 	}
		});
		
		console.log('viewport init');
		
		
	
})