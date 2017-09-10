!function(a,b,c){"use strict";var d=ht.LiveNode=function(){d.superClass.constructor.apply(this)};ht.Default.def("ht.LiveNode",ht.Node,{_width:100,_height:35,_image:null,_enabled:!0,_editable:!0,_hover:!1,_pressed:!1,isEnabled:function(){return this._enabled},setEnabled:function(a){var b=this._enabled;this._enabled=a,this.fp("enabled",b,a)},isEditable:function(){return this._enabled},setEditable:function(a){var b=this._editable;this._editable=a,this.fp("editable",b,a)},isHover:function(){return this._hover},setHover:function(a){var b=this._hover;this._hover=a,this.fp("hover",b,a)},isPressed:function(){return this._pressed},setPressed:function(a){var b=this._pressed;this._pressed=a,this.fp("pressed",b,a)},getBackground:function(){var a,b,c=this;return a=c._enabled?c._pressed?"live.background.active":c._hover?"live.background.hover":"live.background":"live.background.disabled",b=c.s(a),b?b:c.s("live.background")},getForeground:function(){var a,b,c=this;return a=c._enabled?c._pressed?"live.label.active":c._hover?"live.label.hover":"live.label.color":"live.label.disabled",b=c.s(a),b?b:c.s("live.label.color")},setRotation:null,getUIClass:function(){return ht.graph.LiveNodeUI}});var e=ht.graph.LiveNodeUI=function(){e.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.LiveNodeUI",ht.graph.NodeUI,{freeDraw:function(a,b){var c=this,d=c._data,e=ht.Default.getImage(d._image);ht.Default.drawImage(a,e,b.x,b.y,b.width,b.height,d,c.gv)},onKeyDown:function(a){var b=this,c=b._data;return 32===a.keyCode||13===a.keyCode?(c.setPressed(!0),!0):void 0},onKeyUp:function(a){var b=this._data;(32===a.keyCode||13===a.keyCode)&&(b.setPressed(!1),b.onClicked&&b.onClicked(a))},onMouseOver:function(){this._data.setHover(!0)},onMouseOut:function(){this._data.setHover(!1)},onMouseDown:function(){this._data.setPressed(!0)},onMouseMove:function(){},onMouseUp:function(a){var b=this._data;b.setPressed(!1),b.onClicked&&b.onClicked(a)}});var f=ht.ButtonNode=function(){f.superClass.constructor.apply(this)};ht.Default.def("ht.ButtonNode",ht.LiveNode,{_image:"button_image"}),ht.Default.setImage("button_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:"getBackground"},rect:[0,0,1,1],relative:!0},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:[0,0,1,1],relative:!0,offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var g=ht.ToggleButtonNode=function(){g.superClass.constructor.apply(this)};ht.Default.def("ht.ToggleButtonNode",ht.ButtonNode,{_selected:!1,getUIClass:function(){return ht.graph.ToggleButtonNodeUI},getBackground:function(){var a,b,c=this;return c._enabled?(c._hover&&(a="live.background.hover"),c.s(a)||(a=c._selected?"live.background.active":"live.background")):a="live.background.disabled",b=c.s(a),b?b:c.s("live.background")},getForeground:function(){var a,b,c=this;return c._enabled?(c._hover&&(a="live.label.hover"),c.s(a)||(a=c._selected?"live.label.active":"live.label.color")):a="live.label.disabled",b=c.s(a),b?b:c.s("live.label.color")},isSelected:function(){return this._selected},setSelected:function(a){var b=this,c=b._selected,d=b._buttonGroup;b._selected=a,b.fp("selected",c,a)&&(d&&a&&d._selected!==b&&(d._selected&&d._selected.setSelected(!1),d._selected=b,d.onChanged(b)),b.onChanged(a))},onChanged:function(){}});var h=ht.graph.ToggleButtonNodeUI=function(){h.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.ToggleButtonNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(a){var b=this;return h.superClass.onKeyDown.call(b,a)?(b.toggleSelect(),!0):void 0},onMouseDown:function(a){var b=this;h.superClass.onMouseDown.call(b,a),b.toggleSelect()},toggleSelect:function(){var a=this,b=a._data;b._buttonGroup?b._selected||b.setSelected(!0):b.setSelected(!b._selected),b.setHover(!1)}});var i=ht.CheckboxNode=function(){var a=this;i.superClass.constructor.apply(a),a.s("live.label.align","left"),a.s("live.background",ht.Color.darkGray),a.s("live.background.active",ht.Color.shape)};ht.Default.def("ht.CheckboxNode",ht.ToggleButtonNode,{_image:"checkbox_image",getBackground:function(){var a,b=this;return a=b._enabled?b._selected?"live.background.active":"live.background":"live.background.disabled",b.s(a)},getForeground:function(){var a,b=this;return a=b._enabled?b._selected?"live.background.active":"live.background":"live.background.disabled",b.s(a)}}),ht.Default.setImage("checkbox_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},background:{func:"getBackground"},rect:{func:function(a){var b=(a._width,a._height);return{x:.1*b,y:.2*b,width:.6*b,height:.6*b}}}},{type:"shape",points:{func:function(a){var b=(a._width,a._height);return[.3*b,.5*b,.4*b,.6*b,.55*b,.35*b]}},borderWidth:{func:function(a){return.05*a._height}},borderColor:"#FFFFFF",visible:{func:function(a){return a._selected||a._hover}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:{func:function(a){var b=a._width,c=a._height;return{x:.8*c,y:0,width:b-.8*c,height:c}}},offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var j=ht.RadioButtonNode=function(){var a=this;j.superClass.constructor.apply(a),a.s("live.label.align","left"),a.s("live.background",ht.Color.darkGray),a.s("live.background.active",ht.Color.shape)};ht.Default.def("ht.RadioButtonNode",ht.ToggleButtonNode,{_image:"radioButton_image",getUIClass:function(){return ht.graph.RadioButtonNodeUI},getBackground:function(){var a,b=this;return a=b._enabled?b._selected?"live.background.active":"live.background":"live.background.disabled",b.s(a)},getForeground:function(){var a,b=this;return a=b._enabled?b._selected?"live.background.active":"live.background":"live.background.disabled",b.s(a)}}),ht.Default.setImage("radioButton_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"circle",borderWidth:{func:function(a){return.1*a._height}},borderColor:{func:"getBackground"},rect:{func:function(a){var b=(a._width,a._height);return{x:.1*b,y:.2*b,width:.6*b,height:.6*b}}}},{type:"circle",background:{func:"getBackground"},rect:{func:function(a){var b=(a._width,a._height);return{x:.3*b,y:.4*b,width:.2*b,height:.2*b}}},visible:{func:function(a){return a._selected||a._hover}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getBackground"},font:{func:"style@live.label.font"},rect:{func:function(a){var b=a._width,c=a._height;return{x:.8*c,y:0,width:b-.8*c,height:c}}},offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var k=ht.graph.RadioButtonNodeUI=function(){k.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.RadioButtonNodeUI",ht.graph.ToggleButtonNodeUI,{toggleSelect:function(){this._data._selected||this._data.setSelected(!0)}});var l=ht.SwitchNode=function(){var a=this;l.superClass.constructor.apply(a),a.s("live.background",ht.Color.darkGray),a.s("live.background.active",ht.Color.shape),a.s("live.label.color",ht.Color.darkGray),a.s("live.label.active",ht.Color.shape)};ht.Default.def("ht.SwitchNode",ht.ToggleButtonNode,{_image:"switch_image",getBackground:function(){return this.s(this._selected?"live.background.active":"live.background")},getForeground:function(){return this.s(this._selected?"live.label.active":"live.label.color")}}),ht.Default.setImage("switch_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},background:{func:"style@switch.background"},alpha:{func:function(a){return a._enabled?1:.5}},rect:[0,0,1,1],relative:!0},{type:"circle",background:{func:"getBackground"},alpha:{func:function(a){return a._enabled?1:.5}},rect:{func:function(a){var b=30,c=10,d=a._selected;return{x:d?a._width-c-b:c,y:(a._height-b)/2,width:b,height:b}}}},{type:"text",text:{func:function(a){return a.s(a._selected?"switch.text.on":"switch.text.off")}},rect:[17,1,1],relative:!0,offsetX:{func:function(a){return a._selected?-10:10}},color:{func:"getForeground"},font:{func:"style@live.label.font"},align:{func:"style@live.label.align"}}]});var m=ht.ComboboxNode=function(){var a=this;m.superClass.constructor.apply(a),a.s("live.label.align","left")};ht.Default.def("ht.ComboboxNode",ht.LiveNode,{_image:"combobox_image",_buttonWidth:20,_maxHeight:200,_selectedIndex:-1,getUIClass:function(){return ht.graph.ComboboxNodeUI},getItems:function(){return this._items},setItems:function(a){var b=this._items;this._items=a,this.fp("items",b,a)},getSelectedItem:function(){return this._selectedItem},setSelectedItem:function(a){var b,c=this,d=c._items,e=c._selectedItem;!d||(b=d.indexOf(a))<0||(c._selectedItem=a,c._selectedIndex=b,c.s("live.label",a?c.getItemName(a):""),c.fp("selectedItem",e,a)&&c.onChanged(a))},getSelectedIndex:function(){return this._selectedIndex},setSelectedIndex:function(a){var b=this,c=b._items;!c||0>a||a>=c.length||(b._selectedIndex=a,b.setSelectedItem(c[a]))},getItemName:function(a){return a.label||a},onChanged:function(){}}),ht.Default.setImage("combobox_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:"getBackground"},rect:[0,0,1,1],relative:!0},{type:"shape",points:{func:function(a){var b=a._buttonWidth,c=a._width,d=a._height;return[c-b+.5*b,.6*d,c-b+.75*b,.4*d,c-b+.25*b,.4*d]}},background:{func:function(a){return a._pressed?"#000000":"#FFFFFF"}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:[0,0,1,1],relative:!0,offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var n=ht.graph.ComboboxNodeUI=function(){n.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.ComboboxNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(a){var b,c=this._data,d=0;return(37===a.keyCode||38===a.keyCode)&&(d=-1),(39===a.keyCode||40===a.keyCode)&&(d=1),d?(c._selectedIndex>=0?b=c._selectedIndex+d:c._items&&c._items.length>0&&(b=1===d?0:c.items.length-1),c.setSelectedIndex(b),this._ignore=!0,!0):27===a.keyCode||13===a.keyCode?(this._hidePopup(),!0):void 0},onMouseMove:function(){this._data._pressed&&(this._moved=!0)},onMouseUp:function(a){var b=this;n.superClass.onMouseUp.call(b,a),b._moved||(b._list?b._hidePopup():b._showPopup()),delete b._moved},draw:function(a){if(n.superClass.draw.call(this,a),this._list&&this._data._selectedIndex>=0){var b=this._list.getDataModel().getDatas().get(this._data._selectedIndex);this._list.sm().ld()!==b&&this._list.sm().setSelection(b)}},_showPopup:function(){var a,b,c,d,e,f,g,h,i,j,k=this,l=k._data,m=l._items,n=k.gv._view.getBoundingClientRect(),o=(l._position.x-l._width/2)*k.gv._zoom+k.gv._translateX+n.left-k.gv._view.scrollLeft,p=(l._position.y+l._height/2)*k.gv._zoom+k.gv._translateY+n.top-k.gv._view.scrollTop;if(m&&0!==m.length){for(a=new ht.DataModel,b=this._list=new ht.widget.ListView(a),b.getIcon=function(){return null},b.drawRow=function(a,c,d,e,f,g,h){b._focusData===c&&(a.fillStyle=ht.Default.darker(c.s("live.background")),a.beginPath(),a.rect(e,f,g,h),a.fill()),ht.widget.ListView.prototype.drawRow.apply(b,arguments)},c=0;c<m.length;c++)d=new ht.Data,d.setName(l.getItemName(m[c])),d._index=c,a.add(d),l._selectedIndex===c&&b.sm().setSelection(d);b.onSelectionChanged=function(){var a=b.sm().ld();a&&!k._ignore&&(l.setSelectedIndex(a._index),k._hidePopup(),delete k._ignore)},b.getSelectBackground=function(a){var c=a.s("live.background");return a===b._focusData?ht.Default.darker(c):c},b.getView().addEventListener("mousemove",function(a){b.setFocusData(b.getDataAt(a)),b.invalidateModel()}),h=ht.Default.getWindowInfo(),f=l._width,g=Math.min(b.getRowHeight()*m.length,l._maxHeight,h.height),i=h.width-f-10,j=h.height-g-10,o=o>i?i:o,p=p>j?j:p,o=0>o?0:o,p=0>p?0:p,e=b.getView().style,e.left=o+h.left+"px",e.top=p+h.top+"px",e.width=f+"px",e.height=g+"px",e.zIndex=1e4,e.background="white",e.borderWidth="1px",e.borderColor="#DDDDE0",e.borderStyle="solid",e.borderRadius="5px",document.body.appendChild(b.getView()),C(function(){k._hidePopup()})}},_hidePopup:function(){this._list&&(document.body.removeChild(this._list.getView()),delete this._list)}});var o=ht.ProgressBarNode=function(){var a=this;o.superClass.constructor.apply(a),a.s("label.position",17),a.s("live.background",ht.Color.darkGray),a.s("live.background.active",ht.Color.shape)};ht.Default.def("ht.ProgressBarNode",ht.LiveNode,{_image:"progressBar_image",_value:0,getValue:function(){return this._value},setValue:function(a){var b=this._value;this._value=a,this.fp("value",b,a)},getName:function(){return this._value+"%"}}),ht.Default.setImage("progressBar_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"rect",background:{func:"style@live.background"},rect:[0,0,1,1],relative:!0},{type:"rect",background:{func:"style@live.background.active"},rect:{func:function(a){return[0,0,a._value/100,.5]}},relative:!0},{type:"rect",background:{func:function(a){return ht.Default.darker(a.s("live.background.active"))}},rect:{func:function(a){return[0,.5,a._value/100,.5]}},relative:!0}]});var p=ht.SliderNode=function(){var a=this;p.superClass.constructor.apply(a),a.s("label.position",17),a.s("live.background",ht.Color.darkGray),a.s("live.background.active",ht.Color.shape)};ht.Default.def("ht.SliderNode",ht.LiveNode,{_image:"slider_image",_orientation:"horizontal",_value:0,_min:0,_max:100,_step:1,getUIClass:function(){return ht.graph.SliderNodeUI},getOrientation:function(){return this._orientation},setOrientation:function(a){var b=this._orientation;this._orientation=a,this.fp("orientation",b,a)},isHorizontal:function(){var a=this._orientation;return"h"===a||"horizontal"===a},getValue:function(){return this._value},setValue:function(a){var b=this,c=b._min,d=b._max,e=b._step;c>a&&(a=c),a>d&&(a=d),a=Math.floor(a/e)*e;var f=b._value;b._value=a,b.fp("value",f,a)&&b.onChanged(a)},getMin:function(){return this._min},setMin:function(a){var b=this._min;this._min=a,this.fp("min",b,a),this.setValue(this._value)},getMax:function(){return this._max},setMax:function(a){var b=this._max;this._max=a,this.fp("max",b,a),this.setValue(this._value)},getStep:function(){return this._step},setStep:function(a){var b=this._step;this._step=a,this.fp("step",b,a),this.setValue(this._value)},getName:function(){return this._value+""},onChanged:function(){}}),ht.Default.setImage("slider_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"rect",background:{func:"style@live.background.active"},rect:{func:function(a){var b=a.s("slider.bar.size"),c=a.s("slider.thumb.size")+a.s("live.border.width"),d=a._value/(a._max-a._min),e=a.isHorizontal(),f=a._width,g=a._height;return{x:e?c:(f-b)/2,y:e?(g-b)/2:g-c-(g-2*c)*d,width:e?(f-2*c)*d:b,height:e?b:(g-2*c)*d}}}},{type:"rect",background:{func:"style@live.background"},rect:{func:function(a){var b=a.s("slider.bar.size"),c=a.s("slider.thumb.size")+a.s("live.border.width"),d=a._value/(a._max-a._min),e=a.isHorizontal(),f=a._width,g=a._height;return{x:e?c+(f-2*c)*d:(f-b)/2,y:e?(g-b)/2:c,width:e?(f-2*c)*(1-d):b,height:e?b:(g-2*c)*(1-d)}}}},{type:"circle",borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},background:{func:"style@slider.thumb.background"},rect:{func:function(a){var b=a.s("slider.thumb.size"),c=a._value/(a._max-a._min),d=a.isHorizontal(),e=a._width,f=a._height;return{x:d?c*(e-2*b):e/2-b,y:d?f/2-b:(1-c)*(f-2*b),width:2*b,height:2*b}}}}]});var q=ht.graph.SliderNodeUI=function(){q.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.SliderNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(a){var b=this._data,c=b.isHorizontal(),d=0;return(c&&37===a.keyCode||!c&&40===a.keyCode)&&(d=-1),(c&&39===a.keyCode||!c&&38===a.keyCode)&&(d=1),d?(b.setValue(b._value+b._step*d),!0):void 0},onMouseDown:function(a){var b=this,c=b._data,d=ht.Default.getClientPoint(a);b._start=c.isHorizontal()?d.x:d.y,b._startValue=c._value},onDrag:function(a){var b=this;if(b._start===c)return!1;var d=b._data,e=d.isHorizontal(),f=d._step,g=ht.Default.getClientPoint(a),h=e?g.x:g.y,i=d.s("slider.thumb.size")+d.s("live.border.width"),j=e?d._width:d._height-2*i,k=(h-b._start)*(e?1:-1),l=(d._max-d._min)*k/j/b.gv._zoom;return d.setValue(b._startValue+Math.floor(l/f)*f),!0},onMouseUp:function(){delete this._start,delete this._startValue}});var r=ht.SpinnerNode=function(){r.superClass.constructor.apply(this),this._styleMap={},this._styleMap["label.position"]=16};ht.Default.def("ht.SpinnerNode",ht.LiveNode,{_image:"spinner_image",_value:0,_min:0,_max:100,_step:1,getUIClass:function(){return ht.graph.SpinnerNodeUI},getValue:function(){return this._value},setValue:function(a){a<this._min&&(a=this._min),a>this._max&&(a=this._max),a=Math.floor(a/this._step)*this._step;var b=this._value;this._value=a,this.fp("value",b,a)&&this.onChanged(a)},getMin:function(){return this._min},setMin:function(a){var b=this._min;this._min=a,this.fp("min",b,a),this.setValue(this._value)},getMax:function(){return this._max},setMax:function(a){var b=this._max;this._max=a,this.fp("max",b,a),this.setValue(this._value)},getStep:function(){return this._step},setStep:function(a){var b=this._step;this._step=a,this.fp("step",b,a),this.setValue(this._value)},getName:function(){return this._value+""},onChanged:function(){},getForeground:function(){return this.s(this._enabled?"live.label.active":"live.label.color")}}),ht.Default.setImage("spinner_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:function(a){return a.s(a._enabled?"spinner.background":"live.background.disabled")}},rect:[0,0,1,1],relative:!0},{type:"rect",background:{func:function(a){var b;return b=a._topPressed?"live.background.active":a._topHover?"live.background.hover":"live.background",a.s(b)}},rect:{func:function(a){var b=a.s("spinner.button.width"),c=a.s("live.border.width");return{x:a._width-b,y:c,width:b-c,height:a._height/2-c}}}},{type:"shape",points:{func:function(a){var b=a.s("spinner.button.width"),c=a._width,d=a._height;return[c-b+.5*b,.15*d,c-b+.75*b,.4*d,c-b+.25*b,.4*d]}},background:{func:function(a){return a._topHover?"#000000":"#FFFFFF"}}},{type:"rect",background:{func:function(a){var b;return b=a._bottomPressed?"live.background.active":a._bottomHover?"live.background.hover":"live.background",a.s(b)}},rect:{func:function(a){var b=a.s("spinner.button.width"),c=a.s("live.border.width"),d=a._width,e=a._height;return{x:d-b,y:e/2,width:b-c,height:e/2-c}}}},{type:"shape",points:{func:function(a){var b=a.s("spinner.button.width"),c=a._width,d=a._height;return[c-b+.5*b,.9*d,c-b+.75*b,.65*d,c-b+.25*b,.65*d]}},background:{func:function(a){return a._bottomHover?"#000000":"#FFFFFF"}}}]});var s=ht.graph.SpinnerNodeUI=function(){s.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.SpinnerNodeUI",ht.graph.LiveNodeUI,{_refresh:function(a){var b=this._data,c=b.s("spinner.button.width"),d=this.gv.getLogicalPoint(a),e={x:b._position.x+b._width/2-c,y:b._position.y-b._height/2,width:c,height:b._height/2},f={x:b._position.x+b._width/2-c,y:b._position.y,width:c,height:b._height/2};b._topHover=ht.Default.containsPoint(e,d),b._bottomHover=ht.Default.containsPoint(f,d)},onKeyDown:function(a){var b=this._data,c=0;return 38===a.keyCode&&(c=1),40===a.keyCode&&(c=-1),c?(b.setValue(b._value+b._step*c),!0):void 0},onMouseOut:function(){var a=this._data;a._topHover=!1,a._bottomHover=!1,this.gv.invalidateData(a)},onMouseDown:function(a){var b=this,c=b._data,d=0;b._refresh(a),c._topPressed=c._topHover,c._bottomPressed=c._bottomHover,c._topPressed&&(d=1),c._bottomPressed&&(d=-1),d&&(c.setValue(c._value+c._step*d),b._timer&&clearTimeout(b._timer),b._interval&&clearInterval(b._interval),b._timer=setTimeout(function(){b._interval=setInterval(function(){c.setValue(c._value+c._step*d)},100)},1e3))},onMouseMove:function(a){this._refresh(a),this.gv.invalidateData(this._data)},onMouseUp:function(){var a=this,b=a._data;b._topHover=!1,b._bottomHover=!1,b._topPressed=!1,b._bottomPressed=!1,a.gv.invalidateData(b),a._timer&&(clearTimeout(a._timer),delete a._timer),a._interval&&(clearInterval(a._interval),delete a._interval)}}),ht.ButtonGroup=function(a){var b=this;b._items=new ht.List,b.addAll(a)},ht.Default.def("ht.ButtonGroup",b,{add:function(a){var b=this;b._items.contains(a)||(b._items.add(a),a._buttonGroup=b,b._selected&&a._selected&&b._selected.setSelected(!1),a._selected&&(b._selected=a))},addAll:function(a){a&&new ht.List(a).each(self.add,self)},remove:function(a){var b=this;b._items.contains(a)&&(b._items.remove(a),delete a._buttonGroup,b._selected===a&&delete b._selected)},getItems:function(){return this._items},clear:function(){var a=this;a._items.each(a.remove,a)},getSelected:function(){return this._selected},onChanged:function(){}});var t=ht.Style,u=ht.Color,v=(u.label,u.shape),w=u.gray,x=(u.lightGray,u.darkGray),y=(u.highlight,u.highlightLabel),z=u.border;t["live.shape"]="rect",t["live.border.width"]=1,t["live.border.color"]=z,t["live.gradient"]="",t["live.gradient.color"]="#FFF",t["live.background"]=v,t["live.background.disabled"]=w,t["live.background.hover"]=ht.Default.brighter(v),t["live.background.active"]=ht.Default.darker(v),t["live.label"]="",t["live.label.offset.x"]=0,t["live.label.offset.y"]=0,t["live.label.align"]="center",t["live.label.font"]=c,t["live.label.color"]=y,t["live.label.disabled"]=x,t["live.label.hover"]=y,t["live.label.active"]=y,t["switch.background"]=w,t["switch.text.on"]="ON",t["switch.text.off"]="OFF",t["slider.bar.size"]=6,t["slider.thumb.size"]=8,t["slider.thumb.background"]=v,t["spinner.background"]="#FFFFFF",t["spinner.button.width"]=20;var A=ht.graph.GraphView.prototype;A.getFocusData=function(){return this._focusData},A.handleKeyUp=function(a){var b=this._focusData,c=b&&this._uiMap[b._id];b&&b._enabled&&b._editable&&c&&c.onKeyUp&&c.onKeyUp(a)},A.handleMouseDown=function(a,b){this._focusData=b;var c=b&&this._uiMap[b._id];b&&b._enabled&&b._editable&&c&&c.onMouseDown&&c.onMouseDown(a)},A.handleMouseUp=function(a,b){var c=b&&this._uiMap[b._id];b&&b._enabled&&b._editable&&c&&c.onMouseUp&&c.onMouseUp(a)},A.handleMouseMove=function(a){var b=this._lastHoverData,c=b&&this._uiMap[b._id],d=this.getDataAt(a),e=d&&this._uiMap[d._id];b&&c&&b._enabled&&b._editable&&(b===d?c.onMouseMove&&c.onMouseMove(a):c.onMouseOut&&c.onMouseOut(a)),d&&b!==d&&d._enabled&&d._editable&&e&&e.onMouseOver&&e.onMouseOver(a),this._lastHoverData=d},A.handleDrag=function(a,b){var c=b&&this._uiMap[b._id];return b&&b._enabled&&b._editable&&c&&c.onDrag&&c.onDrag(a)},A=ht.graph.DefaultInteractor.prototype,A.handle_keyup=function(a){this.gv.handleKeyUp&&this.gv.handleKeyUp(a)},A.handle_mousemove=function(a){this.gv.handleMouseMove&&this.gv.handleMouseMove(a)};var B=new ht.List,C=function(a){setTimeout(function(){B.add(a)},0)};a.addEventListener(ht.Default.isTouchable?"touchend":"mouseup",function(){B.size()>0&&setTimeout(function(){B.each(function(a){a()}),B.clear()},0)})}(this,Object);