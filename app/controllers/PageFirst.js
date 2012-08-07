/**
 * @author gp
 * @datetime 2012-8-6
 * @description PageFirst.js
 */
 
  require(['backbone','Controller'],function(){
 	
 	 Ambow.define('Ambow.controller.PageFirst',{
 	 	
	 	init: function(){  		
    		//this.initIndexPage();
    		
	 		this.bindEvents({
	 			'v_list1':{
	 				'rowclick':this.onClicked
	 			}
	 		});
	 	},
	 	
	 	onClicked: function(row,idx,e,a){
	 			var me = this;
		  		var view = me.getView('v_list1');
	 			var d = e.getTarget('a.size');
	 			var m = view.getModel(idx);
	 			if(d.length>0){
	 				alert(m.get('size').first);
	
	 			}
	 	}
	 	
	 });
 	
	 console.log('viewport controller init');
 });