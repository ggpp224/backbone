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
 	
 	getView:function(id){
 		return this.views[id];
 	},
 	
 	getStore: function(id){
 		return this.stores[id];
 	},
 	
 	getController:function(id){
 		return this.controllers[id];
 	},
 	
 	getModel: function(id){
 		return this.models[id]
 	}
 };