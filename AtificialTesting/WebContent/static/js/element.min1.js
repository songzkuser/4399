OT2.Element=function(){var e=function(t,i){return this instanceof e?(this.radioGroup=i||[],this.$el=$(t),this.$input=this.$el.find('input[type="radio"]'),this.checked=this.$input.prop("checked"),void this.radioGroup.push(this)):new e(t,i)};e.prototype={switchChecked:function(e){for(var t,i=0;t=this.radioGroup[i++];)t.setChecked(!1);this.setChecked(!this.checked),"function"==typeof e&&e.call(this)},setChecked:function(e,t){this.$el[e?"addClass":"removeClass"]("checked"),this.$input.prop("checked",e),this.checked=e,"function"==typeof t&&t.call(this)},bindEvent:function(e){var t=this;this.$el.on("click",function(){t.switchChecked(e)})}};var t=function(e,i){return this instanceof t?(this.checkboxGroup=i||[],this.$el=$(e),this.$input=this.$el.find('input[type="checkbox"]'),this.checked=this.$input.prop("checked"),void this.checkboxGroup.push(this)):new t(e,i)};t.prototype={switchChecked:function(e,t){var i="undefined"==typeof e?!this.checked:!!e;this.$el[i?"addClass":"removeClass"]("checked"),this.$input.prop("checked",i),this.checked=i,"function"==typeof t&&t.call(this)},isAllChecked:function(){for(var e,t=0;e=this.checkboxGroup[t++];)if(!this.checked)return!1;return!0},bindEvent:function(e){var t=this;this.$el.on("click",function(){t.switchChecked(),"function"==typeof e&&e.call(t)})}},t.checkedAll=function(e,t){for(var i,c=0;i=e[c++];)i.switchChecked(t)};var i=function(){};return{radio:e,checkbox:t,select:i}}();