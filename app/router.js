/**
 * @author gp
 * @datetime 2012-8-3
 * @description router.js
 */
 
 define('Router',['backbone'],function(){
 	var AppRouter = Backbone.Router.extend({
 		routes: {
 			'1':'showPage1',
 			'2':'showPage2',
 			'3':'showPage3',
 			'4':'showPage4'
 			//'*actions':'defaultAction'
 		},
 		showPage1: function(){
 			var fisrtPage = Ambow.create('Ambow.view.PageFirst',{id:'page_first_view'});
 			
 			var me = Ambow.app;
		  	var vp = me.getView('viewport');
		  	vp.overwrite(fisrtPage);
		  	
 			
 			var list = Ambow.create('Ambow.view.ListView',{
  		
		  		id:'v_list1',
		 		pager:new Ambow.view.ListPager({pageSize:15}),
		 		
		 		store: Ambow.create('Ambow.store.ListStore',{
		 			id:'store11',
		 			url:'../index.php?action=list',
		 			root:'list'
		 		}),
		 		
		 		columns: [{
		            header: 'File',
		            dataIndex: 'name',
		            map:function(clm,row){
		            	return '<span>'+clm+'</span>';
		            }
		        },{
		            header: 'Last Modified',
		            dataIndex: 'lastmod'
		        },{
		            header: 'Size',
		            dataIndex: 'size',
		            map:function(dt){
		            	return '<a class="size" href="#">'+dt.first+'</a>';
		            }
		        }]
		        
		  	});
	 		
		  	fisrtPage.add(list);
		  	list.store.load();
		  	
		  	Ambow.create('Ambow.controller.PageFirst',{id:'firstPageCtrl'});
 		},
 		
 		showPage2:function(){
 			var me = Ambow.app;
		  	var vp = me.getView('viewport');
		  	vp.el.innerHTML='aaa';
 		},
 		
 		showPage3:function(){
 			var me = Ambow.app;
		  	var vp = me.getView('viewport');
		  	vp.el.innerHTML='33333';
 		},
 		showPage4:function(){
 			var me = Ambow.app;
		  	var vp = me.getView('viewport');
		  	vp.el.innerHTML='44444';
 		},
 		
 		defaultAction:function(){
 			var me = Ambow.app;
		  	var vp = me.getView('viewport');
		  	vp.el.innerHTML='';
 		}
 	});
 	
 	return AppRouter;
 	
 });