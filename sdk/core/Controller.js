/**
 * @author gp
 * @datetime 2012-7-24
 * @description Controller.js
 */
 
 Ambow.Controller = function(opt){
 	this.init();
 }
 
 Ambow.Controller.prototype = {
 	init:function(){
 		
 	},
 	
 	bindEvents: function(o){
 		var me = this;
 		for(var key in o ){
 			var view = Ambow.app.getView(key);
 			
 			//view 已配置的events
 			
 			var events = view.events||{}; 
 			//Ambow.apply(events,o[key]);
 			var es = {};
 			var ori_o = o[key];
 			
 			//controller定义的事件
 			
 			for(okey in ori_o){
 				if(!/\s/.test(okey)){
 					view.on(okey,ori_o[okey].createDelegate(this));
 				}else{
 					es[okey]=ori_o[okey].createDelegate(this);
 				}
 			}
 			
 			//view定义的事件
 			
 			for(ekey in events){
 				if(!/\s/.test(ekey)){
 					//.createDelegate(view,[view,me],true)
 					view.on(ekey,events[ekey]);
 				}else{
 					es[ekey]=events[ekey];
 				}
 			}
 			
 			view.delegateEvents(es);
 			
 		}
 	},
 	
 	getView:function(id){
 		return Ambow.app.getView(id);
 	},
 	
 	getStore: function(id){
 		return Ambow.app.getStore(id);
 	},
 	
 	getController:function(id){
 		return Ambow.app.getController(id);
 	},
 	
 	getModel: function(id){
 		return Ambow.app.getModel(id);
 	}
 	
 };