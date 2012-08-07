/**
 * @author gp
 * @datetime 2012-8-2
 * @description main.js
 */
 
 requirejs.config({
 	shim:{
 		'underscore':{
 			exports:'_'
 		},
 		'backbone':{
 			deps:['underscore','jquery'],
 			exports:'Backbone'
 		},
 		'base':{
 			deps:['jquery']
 		},
 		'Template':{
 			deps:['base']
 		},
 		
 		'Application':{
 			deps:['Template']
 		},
 		'ClassManager':{
 			deps:['Application','backbone']
 		},
 		'ClassDefine':{
 			deps:['ClassManager']
 		},
 		'Controller':{
 			deps:['ClassDefine']
 		},
 		'ListView':{
 			deps:['Controller']
 		},
 		'Viewport':{
 			deps:['PageFirst']
 		},
 		'PageFirst':{
 			deps:['ListView']
 		},
 		'Menu':{
 			deps:['Controller']
 		},
 		'CViewport':{
 			deps:['Viewport']
 		},
 		'App':{
 			deps:['CViewport']
 		},
 		'CPageFirst':{
 			deps:['Viewport']
 		}
 		
 		
 	},
 	
 	paths:{
 		'jquery'		:'../sdk/jquery-1.7.2',
 		'App'			:'app',
 		'underscore'	:'../sdk/underscore',
 		'backbone'		:'../sdk/backbone',
 		'base'			:'../sdk/core/base',
 		'Template'		:'../sdk/core/tpl',
 		'Application'	:'../sdk/core/Application',
 		'ClassManager'	:'../sdk/core/ClassManager',
 		'ClassDefine'	:'../sdk/core/ClassDefine',
 		'Controller'	:'../sdk/core/Controller',
 		'ListView'		:'../sdk/core/component/list',
 		'Menu'			:'views/menu',
 		'Viewport'		:'views/ViewPort',
 		'PageFirst'		:'views/PageFirst',
 		'CViewport'		:'controllers/ViewPort',
 		'CPageFirst'	:'controllers/PageFirst',
 		'Router'		:'router'
 		
 	}
 });
 
 require(['App'],function(App){
 	App.launch();
 });
 
 //require(['App','App']);