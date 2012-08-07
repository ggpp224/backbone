/**
 * @author gp
 * @datetime 2012-7-24
 * @description ClassDefine.js
 */
 
 /**
  * 定义组件类
  * @param {} cmpStr
  * @param {} opt
  */
  Ambow.define = function(cmpStr,opt){
 	Ambow.applyIf(opt,{
 		initialize: function(cfg){
	 		var cfg=cfg||{};
	 		Ambow.apply(this,cfg);
	 	}
 	});
 	Ambow.ClassManager.define({
 		className:cmpStr,
 		cfg: opt
 	});
 }
 
 /**
  * 创建组件类
  * @param {} cmpStr
  * @param {} opt
  * @return {}
  */
 Ambow.create = function(cmpStr,opt){
 	//var c = new Function('cmpStr','opt','return new '+cmpStr+'(cmpStr,opt)');
 	//var cmp = new c(opt);
 	return Ambow.ClassManager.create({
 		className:cmpStr,
 		cfg: opt
 	});
 	
 	
 }
 
 /**
  * 根据json数据创建一个store
  * @param {} arr
  */
 Ambow.store.create = function(arr,id){
 	return Ambow.ClassManager.createLocalStore(arr,id);
 }