/**
 * @author gp
 * @datetime 2012-8-3
 * @description Viewport.js
 */
 
 require(['backbone','Router','Controller'],function(Backbone,Router){
 	
 	 Ambow.define('Ambow.controller.Viewport',{
	 	init: function(){
	 		
	 		var app = new Router();
    		Backbone.history.start();
    		
    		//this.initIndexPage();
    		
	 		/*this.control({
	 			'viewport':{
	 				'afterrendered':this.onAfterRendered
	 			},
	 			'x-menu':{
	 				'click a':this.onMenuClicked
	 			}
	 		});*/
	 	}
	 });
 	
	 console.log('viewport controller init');
 });
 
