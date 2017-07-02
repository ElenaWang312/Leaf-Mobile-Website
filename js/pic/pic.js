define(["lib/backbone","lib/underscore","lib/zepto","lib/zepto.touch","css!pic/pic.css"],function(Backbone,_){var height=$(window).height(),Pic=Backbone.View.extend({modelId:0,imageList:[],tpl:_.template($("#tpl_pic").html()),events:{"tap .container img":"toggleBottom","swipeLeft .container img":"showNextImage","swipeRight .container img ":"showPrevImage","tap .go-back":"goBack","tap .more":"menu","touchstart .menu":"changeColor","touchend .menu":"orinColor","touchend .part2":"cancelMenu"},initialize:function(){},render:function(id){var model=this.collection.get(id);if(!model)return void(window.location.hash="");this.modelId=model.get("id"),this.imageList.push(this.modelId);var data={src:model.get("url"),title:model.get("title"),text:model.get("text"),style:"line-height:"+height+"px"},html=this.tpl(data);this.$el.find(".part1").append(html)},showNextImage:function(){this.modelId++,this.clearview(),this.render(this.modelId)},showPrevImage:function(){this.modelId--,this.clearview(),this.render(this.modelId)},clearview:function(){this.$el.find(".part1").html("")},goBack:function(){this.imageList.pop(),this.modelId=this.imageList[this.imageList.length-1],this.imageList.pop(),this.clearview(),this.render(this.modelId)},toggleBottom:function(){console.log(this.$el.find(".part2")),this.$el.find(".part2").toggle(),this.$el.find("header").toggle()},menu:function(){console.log(this.$el.find(".menu")),this.$el.find(".menu").toggle()},changeColor:function(e){$(e.target).css({color:"#e0a760"})},orinColor:function(e){$(e.target).css({color:"black"})},cancelMenu:function(){this.$el.find(".menu").css({display:"none"})}});return Pic});