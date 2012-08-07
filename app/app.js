/**
 * @author gp
 * @datetime 2012-8-2
 * @description app.js
 */
 
 define('App',[
 			'backbone',
 			'Viewport',
 			'PageFirst',
 			'Menu',
 			'CViewport',
 			'CPageFirst'
		],function(){
 	return {
 		launch: function(){
 			console.log('app,use menu');
 			
 			
 			var menu = Ambow.create('Ambow.view.Menu',{id:'x-menu',renderTo:'pagetitle'});
 			menu.render();
 			
 			var foot_tlp = new Ambow.XTemplate(
			 	'<p>主管单位：教育部 　主办单位：全国教师教育网络联盟</p>',
			    '<p>全国教师教育网络联盟秘书处 电话：010－58802946 电子信箱：msz@jswl.cn</p>',
			    '<p>全国教师教育网络联盟 版权所有 京ICP备05069600号 </p>'
			 );
			 foot_tlp.append(Dom('page_footer'));
 			
 			var viewport = Ambow.create('Ambow.view.Viewport',{id:"viewport"});
 			viewport.render();
 			
 			console.log('use viewport');
 			Ambow.create('Ambow.controller.Viewport',{id:'cViewport'});
 			
 			
 		}
 	}
 });