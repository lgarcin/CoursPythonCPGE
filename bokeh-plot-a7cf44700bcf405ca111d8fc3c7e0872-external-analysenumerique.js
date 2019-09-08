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
      };var element = document.getElementById("1de971ba-b454-4fb9-8a7e-47270e95976d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1de971ba-b454-4fb9-8a7e-47270e95976d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2b9edcb5-8083-4ba6-8e01-6d88685f26e0":{"roots":{"references":[{"attributes":{},"id":"1024","type":"PanTool"},{"attributes":{},"id":"1054","type":"UnionRenderers"},{"attributes":{},"id":"1025","type":"WheelZoomTool"},{"attributes":{},"id":"1055","type":"Selection"},{"attributes":{"overlay":{"id":"1056","type":"BoxAnnotation"}},"id":"1026","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1056","type":"BoxAnnotation"},{"attributes":{},"id":"1027","type":"SaveTool"},{"attributes":{},"id":"1057","type":"UnionRenderers"},{"attributes":{},"id":"1028","type":"ResetTool"},{"attributes":{},"id":"1058","type":"Selection"},{"attributes":{},"id":"1029","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1024","type":"PanTool"},{"id":"1025","type":"WheelZoomTool"},{"id":"1026","type":"BoxZoomTool"},{"id":"1027","type":"SaveTool"},{"id":"1028","type":"ResetTool"},{"id":"1029","type":"HelpTool"}]},"id":"1030","type":"Toolbar"},{"attributes":{"below":[{"id":"1014","type":"LinearAxis"}],"center":[{"id":"1018","type":"Grid"},{"id":"1023","type":"Grid"},{"id":"1043","type":"Span"},{"id":"1044","type":"Span"},{"id":"1045","type":"Span"}],"left":[{"id":"1019","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"1040","type":"GlyphRenderer"}],"title":{"id":"1004","type":"Title"},"toolbar":{"id":"1030","type":"Toolbar"},"x_range":{"id":"1006","type":"DataRange1d"},"x_scale":{"id":"1010","type":"LinearScale"},"y_range":{"id":"1008","type":"DataRange1d"},"y_scale":{"id":"1012","type":"LinearScale"}},"id":"1003","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"1008","type":"DataRange1d"},{"attributes":{"source":{"id":"1037","type":"ColumnDataSource"}},"id":"1041","type":"CDSView"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{},"id":"1012","type":"LinearScale"},{"attributes":{"callback":{"id":"1046","type":"CustomJS"},"end":10,"start":0,"title":"It\\u00e9rations","value":0},"id":"1042","type":"Slider"},{"attributes":{"formatter":{"id":"1050","type":"BasicTickFormatter"},"ticker":{"id":"1015","type":"BasicTicker"}},"id":"1014","type":"LinearAxis"},{"attributes":{"dimension":"height","line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":2},"id":"1043","type":"Span"},{"attributes":{},"id":"1015","type":"BasicTicker"},{"attributes":{"dimension":"height","line_color":{"value":"green"},"line_dash":[6],"line_width":{"value":3},"location":4},"id":"1044","type":"Span"},{"attributes":{"ticker":{"id":"1015","type":"BasicTicker"}},"id":"1018","type":"Grid"},{"attributes":{"dimension":"height","line_color":{"value":"orange"},"line_dash":[6],"line_width":{"value":3},"location":3.0},"id":"1045","type":"Span"},{"attributes":{"formatter":{"id":"1052","type":"BasicTickFormatter"},"ticker":{"id":"1020","type":"BasicTicker"}},"id":"1019","type":"LinearAxis"},{"attributes":{"args":{"slider":{"id":"1042","type":"Slider"},"source":{"id":"1002","type":"ColumnDataSource"},"spa":{"id":"1043","type":"Span"},"spb":{"id":"1044","type":"Span"},"spc":{"id":"1045","type":"Span"}},"code":"\\n    var n = slider.value;\\n    spa.location = source.data[&#x27;la&#x27;][n];\\n    spb.location = source.data[&#x27;lb&#x27;][n];\\n    spc.location = source.data[&#x27;lc&#x27;][n];\\n"},"id":"1046","type":"CustomJS"},{"attributes":{},"id":"1020","type":"BasicTicker"},{"attributes":{"children":[{"id":"1042","type":"Slider"}]},"id":"1047","type":"WidgetBox"},{"attributes":{"callback":null,"data":{"la":[2,3.0,3.0,3.0,3.125,3.125,3.125,3.140625,3.140625,3.140625,3.140625,3.140625],"lb":[4,4,3.5,3.25,3.25,3.1875,3.15625,3.15625,3.1484375,3.14453125,3.142578125,3.1416015625],"lc":[3.0,3.5,3.25,3.125,3.1875,3.15625,3.140625,3.1484375,3.14453125,3.142578125,3.1416015625,3.14111328125]},"selected":{"id":"1058","type":"Selection"},"selection_policy":{"id":"1057","type":"UnionRenderers"}},"id":"1002","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"1020","type":"BasicTicker"}},"id":"1023","type":"Grid"},{"attributes":{"children":[{"id":"1003","subtype":"Figure","type":"Plot"},{"id":"1047","type":"WidgetBox"}]},"id":"1048","type":"Column"},{"attributes":{"data_source":{"id":"1037","type":"ColumnDataSource"},"glyph":{"id":"1038","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1039","type":"Line"},"selection_glyph":null,"view":{"id":"1041","type":"CDSView"}},"id":"1040","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1006","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"1055","type":"Selection"},"selection_policy":{"id":"1054","type":"UnionRenderers"}},"id":"1037","type":"ColumnDataSource"},{"attributes":{"align":"center","text":"R\\u00e9solution par dichotomie"},"id":"1004","type":"Title"},{"attributes":{},"id":"1050","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1039","type":"Line"},{"attributes":{},"id":"1052","type":"BasicTickFormatter"}],"root_ids":["1048"]},"title":"Bokeh Application","version":"1.3.4"}}';
                  var render_items = [{"docid":"2b9edcb5-8083-4ba6-8e01-6d88685f26e0","roots":{"1048":"1de971ba-b454-4fb9-8a7e-47270e95976d"}}];
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