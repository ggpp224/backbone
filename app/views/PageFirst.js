/**
 * @author gp
 * @datetime 2012-8-6
 * @description PageFirst.js
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
			'ListView',
			'Viewport'
		],
	function(){
		console.log('pagefirst');
		Ambow.define('Ambow.view.PageFirst',{
			initialize: function(cfg){
		 		var cfg = cfg||{};
		 		Ambow.apply(this,cfg);
		 	},
		 	tagName:"div",
		 	className:'x-pagefirst',
		 	/*tpl:new Ambow.XTemplate(
		 		'<div><input type="button" class="btn" value="click" /><div>'
		 	),*/
		 	render: function(){
		 		//this.tpl.append(this.el);
		 		$('#viewport').html(this.el);
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
		
		console.log('pagefirst init');
		
		
	
})