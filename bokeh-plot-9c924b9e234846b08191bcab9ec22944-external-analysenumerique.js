(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("239f741c-a213-4683-80a5-4aa718adac94");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '239f741c-a213-4683-80a5-4aa718adac94' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"a9e4994f-7b09-4402-aa0d-373b9de82b65":{"roots":{"references":[{"attributes":{},"id":"1230","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"orange"},"xs":{"field":"xpatches"},"ys":{"field":"ypatches"}},"id":"1246","type":"Patches"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xpatches"},"ys":{"field":"ypatches"}},"id":"1247","type":"Patches"},{"attributes":{},"id":"1213","type":"LinearScale"},{"attributes":{"data_source":{"id":"1205","type":"ColumnDataSource"},"glyph":{"id":"1246","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1247","type":"Patches"},"selection_glyph":null,"view":{"id":"1249","type":"CDSView"}},"id":"1248","type":"GlyphRenderer"},{"attributes":{"grid_line_color":null,"ticker":{"id":"1218","type":"BasicTicker"}},"id":"1221","type":"Grid"},{"attributes":{"source":{"id":"1205","type":"ColumnDataSource"}},"id":"1249","type":"CDSView"},{"attributes":{},"id":"1215","type":"LinearScale"},{"attributes":{"callback":null,"data":{"xpatches":[[0.0,0.3490658503988659,0.3490658503988659,0.0],[0.3490658503988659,0.6981317007977318,0.6981317007977318,0.3490658503988659],[0.6981317007977318,1.0471975511965976,1.0471975511965976,0.6981317007977318],[1.0471975511965976,1.3962634015954636,1.3962634015954636,1.0471975511965976],[1.3962634015954636,1.7453292519943295,1.7453292519943295,1.3962634015954636],[1.7453292519943295,2.0943951023931953,2.0943951023931953,1.7453292519943295],[2.0943951023931953,2.443460952792061,2.443460952792061,2.0943951023931953],[2.443460952792061,2.792526803190927,2.792526803190927,2.443460952792061],[2.792526803190927,3.141592653589793,3.141592653589793,2.792526803190927]],"ypatches":[[0,0,0.9396926207859084,1.0],[0,0,0.766044443118978,0.9396926207859084],[0,0,0.5000000000000001,0.766044443118978],[0,0,0.17364817766693041,0.5000000000000001],[0,0,-0.1736481776669303,0.17364817766693041],[0,0,-0.4999999999999998,-0.1736481776669303],[0,0,-0.7660444431189779,-0.4999999999999998],[0,0,-0.9396926207859083,-0.7660444431189779],[0,0,-1.0,-0.9396926207859083]]},"selected":{"id":"1261","type":"Selection"},"selection_policy":{"id":"1262","type":"UnionRenderers"}},"id":"1205","type":"ColumnDataSource"},{"attributes":{},"id":"1218","type":"BasicTicker"},{"attributes":{"below":[{"id":"1217","type":"LinearAxis"}],"center":[{"id":"1221","type":"Grid"},{"id":"1226","type":"Grid"}],"left":[{"id":"1222","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"1243","type":"GlyphRenderer"},{"id":"1248","type":"GlyphRenderer"}],"title":{"id":"1207","type":"Title"},"toolbar":{"id":"1233","type":"Toolbar"},"x_range":{"id":"1209","type":"DataRange1d"},"x_scale":{"id":"1213","type":"LinearScale"},"y_range":{"id":"1211","type":"DataRange1d"},"y_scale":{"id":"1215","type":"LinearScale"}},"id":"1206","subtype":"Figure","type":"Plot"},{"attributes":{"callback":{"id":"1251","type":"CustomJS"},"end":100,"start":10,"title":"Nombre","value":10},"id":"1250","type":"Slider"},{"attributes":{},"id":"1262","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1263","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"1258","type":"BasicTickFormatter"},"ticker":{"id":"1218","type":"BasicTicker"}},"id":"1217","type":"LinearAxis"},{"attributes":{"args":{"slider":{"id":"1250","type":"Slider"},"source":{"id":"1205","type":"ColumnDataSource"}},"code":"\\n    var a = 0;\\n    var b = Math.PI;\\n    var data = source.data;\\n    var f = Math.cos;\\n    data.xpatches = new Array();\\n    data.ypatches = new Array();\\n    var x = a;\\n    var y = f(a);\\n    var step = (b-a)/slider.value;\\n    for (var k=0; k&lt;slider.value; k++){\\n        var xx = x+step;\\n        var yy = f(xx);\\n        data.xpatches.push([x, xx, xx, x]);\\n        data.ypatches.push([0, 0, yy, y]);\\n        x = xx;\\n        y = yy;\\n    }\\n    source.change.emit();\\n"},"id":"1251","type":"CustomJS"},{"attributes":{"children":[{"id":"1250","type":"Slider"}]},"id":"1252","type":"WidgetBox"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1242","type":"Line"},{"attributes":{"children":[{"id":"1206","subtype":"Figure","type":"Plot"},{"id":"1252","type":"WidgetBox"}]},"id":"1253","type":"Column"},{"attributes":{"formatter":{"id":"1256","type":"BasicTickFormatter"},"ticker":{"id":"1223","type":"BasicTicker"}},"id":"1222","type":"LinearAxis"},{"attributes":{},"id":"1256","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"1223","type":"BasicTicker"}},"id":"1226","type":"Grid"},{"attributes":{},"id":"1261","type":"Selection"},{"attributes":{},"id":"1231","type":"ResetTool"},{"attributes":{},"id":"1223","type":"BasicTicker"},{"attributes":{"source":{"id":"1240","type":"ColumnDataSource"}},"id":"1244","type":"CDSView"},{"attributes":{},"id":"1227","type":"PanTool"},{"attributes":{},"id":"1232","type":"HelpTool"},{"attributes":{"line_color":"blue","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1241","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1227","type":"PanTool"},{"id":"1228","type":"WheelZoomTool"},{"id":"1229","type":"BoxZoomTool"},{"id":"1230","type":"SaveTool"},{"id":"1231","type":"ResetTool"},{"id":"1232","type":"HelpTool"}]},"id":"1233","type":"Toolbar"},{"attributes":{"data_source":{"id":"1240","type":"ColumnDataSource"},"glyph":{"id":"1241","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1242","type":"Line"},"selection_glyph":null,"view":{"id":"1244","type":"CDSView"}},"id":"1243","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1209","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[1000]},"y":{"__ndarray__":"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","dtype":"float64","shape":[1000]}},"selected":{"id":"1259","type":"Selection"},"selection_policy":{"id":"1260","type":"UnionRenderers"}},"id":"1240","type":"ColumnDataSource"},{"attributes":{},"id":"1228","type":"WheelZoomTool"},{"attributes":{},"id":"1258","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1263","type":"BoxAnnotation"}},"id":"1229","type":"BoxZoomTool"},{"attributes":{},"id":"1260","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"1211","type":"DataRange1d"},{"attributes":{"align":"center","text":"M\\u00e9thode des trap\\u00e8zes"},"id":"1207","type":"Title"},{"attributes":{},"id":"1259","type":"Selection"}],"root_ids":["1253"]},"title":"Bokeh Application","version":"1.3.4"}}';
                  var render_items = [{"docid":"a9e4994f-7b09-4402-aa0d-373b9de82b65","roots":{"1253":"239f741c-a213-4683-80a5-4aa718adac94"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();