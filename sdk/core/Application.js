/**
 * @author gp
 * @datetime 2012-7-24
 * @description Application.js
 */
 
 Ambow.ns('Ambow.view');
 Ambow.ns('Ambow.model');
 Ambow.ns('Ambow.controller');
 Ambow.ns('Ambow.store');
 
 Ambow.app = {
 	views:{},
 	models:{},
 	stores:{},
 	controllers:{},
 	
 	/**
 	 * 根据id获取view
 	 * @param {} id
 	 * @return {}
 	 */
 	//@public
 	getView:function(id){
 		return this.views[id];
 	},
 	
 	//@public
 	getStore: function(id){
 		return this.stores[id];
 	},
 	
 	//@public
 	getController:function(id){
 		return this.controllers[id];
 	},
 	
 	//@public
 	getModel: function(id){
 		return this.models[id]
 	},
 	
 	//@public
 	removeView: function(id){
 		delete this.views[id];
 	},
 	
 	//@public
 	removeStore: function(id){
 		delete this.stores[id];
 	},
 	
 	//@public
 	removeController:function(id){
 		delete this.controllers[id];
 	},
 	
 	//@public
 	removeModel: function(id){
 		delete this.models[id]
 	}
 	
 	
 	
 };