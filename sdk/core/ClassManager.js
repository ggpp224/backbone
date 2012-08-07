/**
 * @author gp
 * @datetime 2012-7-24
 * @description 工厂方法，创建不同组件类
 */
 
 Ambow.ClassManager ={
 	
 	v_reg : /Ambow.view./,
 	c_reg : /Ambow.controller./,
	m_reg : /Ambow.model./,
	s_reg : /Ambow.store./,
	
 	define: function(opt){
 		var cls = opt.className;
 		
 		if(this.v_reg.test(cls)){
 			Ambow.view[cls.substr(11)]=Backbone.View.extend(opt.cfg||{});
 		}else if(this.c_reg.test(cls)){
 			Ambow.controller[cls.substr(17)]=Ambow.extend(Ambow.Controller,opt.cfg);
 		}else if(this.s_reg.test(cls)){
 			Ambow.store[cls.substr(12)]=Backbone.Collection.extend(opt.cfg||{});
 		}else if(this.m_reg.test(cls)){
 			Ambow.model[cls.substr(12)]=Backbone.Model.extend(opt.cfg||{});
 		}
 	},
 	
 	create: function(opt){
 		var cls = opt.className||'',
 			cfg = opt.cfg||{};
 		
 		var c = new Function('cls','cfg','return new '+cls+'(cls,cfg)');
 		var cmp = new c(cfg);
 		if(this.v_reg.test(cls)){
 			Ambow.app.views[cmp.id] = cmp;
 		}else if(this.c_reg.test(cls)){
 			Ambow.app.controllers[cmp.id] = cmp;
 		}else if(this.s_reg.test(cls)){
 			Ambow.app.stores[cmp.id] = cmp;
 		}else if(this.m_reg.test(cls)){
 			Ambow.app.models[cmp.id] = cmp;
 		}
 		return cmp;
 	},
 	
 	createLocalStore: function(arr,id){
 		var cmp =  new Backbone.Collection(arr);
 		cmp.id=id;
 		return cmp;
 	}
 };
 
 