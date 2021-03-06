OT2.Util={init_mobile:"13888888888",trim:function(t){return t.replace(/^\s+|\s+$/,"")},substitute:function(t,e){return t.replace(/\{\{\s*(\w+)\s*\}\}/,function(t,n){return e[n]||""})},dropList:function(t,e,n){var i=null;n=n||0,t.on("mouseover",function(){e.show(),i&&clearTimeout(i),i=null}).on("mouseout",function(){return!i&&void(i=setTimeout(function(){e.hide()},n))})},sn:function(t){var e="ABCDEFGH".split("");return e[t]||"A"},chinesesn:function(t){var e=["一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十"];return e[t]||"〇"},circlesn:function(t){var e=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯","⑰","⑱","⑲","⑳"];return e[t]||"①①"},Template:_.once(function(){return new OT2.Template}),selectElement:function(t){var e=null;document.selection?(e=document.body.createTextRange(),e.moveToElementText(t),e.select()):window.getSelection&&(e=document.createRange(),e.selectNode(t),window.getSelection().addRange(e))},alert:function(t,e){t='<div style="padding:45px 10px; text-align: center;">'+t+"</div>";var n=dialog({title:"温馨提示",content:t,fixed:!0,width:400});return n.showModal(),"undefined"!=typeof e&&0!=e||setTimeout(function(){n.close()},2e3),n},getCode:function(t){var e="/site/send-validate-code",n=$(t).attr("v_from");if(n&&(e+="?v_from="+n),"function"==typeof t.fn)return t.fn();var i=!1,r=null,o=60,a=$("#mobile").val(),s=function(t){return 0==o?(o=60,i=!1,clearTimeout(r),t.innerHTML="获取验证码",!1):(t.innerHTML="重新获取（"+o+"）",o--,void(r=setTimeout(function(){s(t)},1e3)))};t.fn=function(){return!i&&(i=!0,s(t),$.post(e,{mobile:a},function(t){0==t.errCode||(i=!1,$("#mobile").data("res",t.data),$("#mobile").trigger("validate"))}),void 0)},t.fn()},calcItemWidth:function(t){var e=Number(t.innerWidth()),n=t.find(".op-item"),i=n.length,r=_.map(n,function(t){var e=0,n=$(t);return"undefined"!=typeof n.data("ww")?e=Number(n.data("ww")):(e=Number($(t).width()),$(t).data("ww",e)),e}),o=_.map(n,function(t){var e=0,n=$(t);return"undefined"!=typeof n.data("hh")?e=Number(n.data("hh")):(e=Number(n.height()),n.data("hh",e)),e}),a=_.max(o),s=_.max(r);if(2*s>=e)return n.each(function(){var t=$(this).height();$(this).find(".op-item-nut").css({"margin-top":(t-24)/2+"px"})}),t.find(".op-item").css({width:"100%","margin-right":0}),!1;if(i<=4)if(s*i>=e){var u=e/2;u<s&&(u=e),t.find(".op-item").css({width:Math.floor(u)+"px","margin-right":0})}else if(4*s>=e){var u=e/3;u<s&&(u=e/2),t.find(".op-item").css({width:Math.floor(u)+"px","margin-right":0})}else{var u=e/4;u<s&&(u=e/2),t.find(".op-item").css({width:Math.floor(u)+"px","margin-right":0})}else 4*s>=e?t.find(".op-item").css({width:Math.floor(e/2)+"px","margin-right":0}):s*i>=e?t.find(".op-item").css({width:Math.floor(e/4)+"px","margin-right":0}):t.find(".op-item").css({width:"100%","margin-right":0});t.find(".op-item-nut").css({"margin-top":(a-24)/2+"px"}),t.find(".op-item-meat").each(function(){var t=$(this).height();$(this).css({"margin-top":(a-t)/2+"px"})}),t.find(".op-item").css({height:a+"px",clear:"none"})}},OT2.Template=function(){var t={};this.jst={};var e=this;return $("[data-template]").each(function(){var n=$(this).data("template");if("get"==n)throw new Error("模板名称不能是get");t[n]=$.trim(this.innerHTML.toString()),e.jst[n]=_.template(t[n])}),this.data=t,this},OT2.Template.prototype.get=function(t){return this.data[t]||""},OT2.Event=function(){this.handlers=[]},OT2.Event.prototype={publish:function(t){var e=[].slice.call(arguments,1),n=this.handlers[t];if(!n||0==n.length)return!1;for(var i,r=0;i=n[r++];)i.apply(this,e)},intervalPublish:function(t,e){var n=this,i=[].slice.call(arguments,2),r=this.handlers[t];if(!r||0==r.length)return!1;var o=function(t){var a=r[t];a&&(a.apply(n,i),setTimeout(function(){o(++t)},e))};setTimeout(function(){o(0)},e)},subscribe:function(t,e){this.handlers[t]||(this.handlers[t]=[]),this.handlers[t].push(e)},removeSubscribe:function(t,e){var n=this.handlers[t];if(!n)return!1;if(!e)return n&&(n.length=0),!1;for(var i=n.length-1;i>0;i--){var r=n[i];r==e&&n.splice(i,1)}}};

OT2.Util = $.extend(true, OT2.Util, {
    getBasketCacheObj: function() {
        try {
            var obj = JSON3.parse(OT2.LocalData.get('basket_cacheObj_v2')) || {};
            if (_.isArray(obj)) {
                OT2.Util.setBasketCacheObj({});
                return {};
            }
            return obj;
        }
        catch(e) {
            OT2.Util.setBasketCacheObj({});
            return {};
        }
    },
    setBasketCacheObj: function(obj) {
        try {
            if (!_.isArray(obj) && _.isObject(obj) ) {
                OT2.LocalData.set('basket_cacheObj_v2', JSON3.stringify(obj));
            }
        }
        catch(e) {
            
        }
    }

});