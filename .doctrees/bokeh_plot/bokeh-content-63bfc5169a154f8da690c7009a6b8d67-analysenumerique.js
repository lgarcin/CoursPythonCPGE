(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("b43f9ffa-9efa-4bb2-8447-19f2c7cc0732");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b43f9ffa-9efa-4bb2-8447-19f2c7cc0732' but no matching script tag was found.")
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
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"0e7d1441-cb58-4b7b-bf83-63464da1a2bd":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":0.2,"line_color":"blue","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1338","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1299"},"glyph":{"id":"1342"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1344"},"nonselection_glyph":{"id":"1343"},"view":{"id":"1346"}},"id":"1345","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[1000]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[1000]}},"selected":{"id":"1358"},"selection_policy":{"id":"1357"}},"id":"1335","type":"ColumnDataSource"},{"attributes":{},"id":"1320","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1325"}},"id":"1321","type":"BoxZoomTool"},{"attributes":{},"id":"1323","type":"ResetTool"},{"attributes":{},"id":"1322","type":"SaveTool"},{"attributes":{"line_alpha":0.5,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"1342","type":"Line"},{"attributes":{},"id":"1319","type":"PanTool"},{"attributes":{},"id":"1316","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"1335"},"glyph":{"id":"1336"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1338"},"nonselection_glyph":{"id":"1337"},"view":{"id":"1340"}},"id":"1339","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1315"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"1318","type":"Grid"},{"attributes":{"align":"center","coordinates":null,"group":null,"text":"M\\u00e9thode d&#x27;Euler"},"id":"1301","type":"Title"},{"attributes":{},"id":"1360","type":"Selection"},{"attributes":{"axis":{"id":"1311"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"1314","type":"Grid"},{"attributes":{"coordinates":null,"formatter":{"id":"1355"},"group":null,"major_label_policy":{"id":"1356"},"ticker":{"id":"1312"}},"id":"1311","type":"LinearAxis"},{"attributes":{},"id":"1359","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"1352"},"group":null,"major_label_policy":{"id":"1353"},"ticker":{"id":"1316"}},"id":"1315","type":"LinearAxis"},{"attributes":{},"id":"1312","type":"BasicTicker"},{"attributes":{},"id":"1324","type":"HelpTool"},{"attributes":{},"id":"1309","type":"LinearScale"},{"attributes":{"line_color":"blue","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1336","type":"Line"},{"attributes":{},"id":"1357","type":"UnionRenderers"},{"attributes":{"end":3},"id":"1334","type":"Range1d"},{"attributes":{"source":{"id":"1299"}},"id":"1346","type":"CDSView"},{"attributes":{},"id":"1307","type":"LinearScale"},{"attributes":{},"id":"1352","type":"BasicTickFormatter"},{"attributes":{"args":{"slider":{"id":"1347"},"source":{"id":"1299"}},"code":"\\n    var F = (t, y) =&gt; Math.cos(t) * y;\\n    var a = 0;\\n    var b = 10;\\n    var data = source.data;\\n    data.x = new Array();\\n    data.y = new Array();\\n    var x = 0\\n    var y = 1;\\n    data.x.push(x);\\n    data.y.push(y);\\n    var step = (b-a)/slider.value;\\n    for (var k=0; k&lt;slider.value; k++){\\n        y += F(x, y) * step;\\n        x += step;\\n        data.x.push(x);\\n        data.y.push(y);\\n    }\\n    source.change.emit();\\n"},"id":"1348","type":"CustomJS"},{"attributes":{"below":[{"id":"1311"}],"center":[{"id":"1314"},{"id":"1318"}],"height":500,"left":[{"id":"1315"}],"renderers":[{"id":"1339"},{"id":"1345"}],"title":{"id":"1301"},"toolbar":{"id":"1326"},"width":700,"x_range":{"id":"1333"},"x_scale":{"id":"1307"},"y_range":{"id":"1334"},"y_scale":{"id":"1309"}},"id":"1300","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1356","type":"AllLabels"},{"attributes":{},"id":"1358","type":"Selection"},{"attributes":{"source":{"id":"1335"}},"id":"1340","type":"CDSView"},{"attributes":{"end":1000,"js_property_callbacks":{"change:value":[{"id":"1348"}]},"start":20,"title":"Nombre","value":20},"id":"1347","type":"Slider"},{"attributes":{"end":10},"id":"1333","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"blue","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1337","type":"Line"},{"attributes":{"data":{"x":[0,0.5,1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5,5.0,5.5,6.0,6.5,7.0,7.5,8.0,8.5,9.0,9.5,10.0],"y":[1,1.5,2.1581869214177796,2.741223606486024,2.8381768500201585,2.247627691171547,1.3472914037172572,0.6803872135100741,0.36181063549074427,0.243563028566177,0.21789199690698247,0.24879585692577305,0.3369529088118671,0.49871899433264966,0.7422403936230446,1.022028746631582,1.1991643763441677,1.111925147694087,0.7772290607908766,0.42315060193949017,0.21217360287359174]},"selected":{"id":"1360"},"selection_policy":{"id":"1359"}},"id":"1299","type":"ColumnDataSource"},{"attributes":{},"id":"1353","type":"AllLabels"},{"attributes":{"children":[{"id":"1300"},{"id":"1347"}]},"id":"1349","type":"Column"},{"attributes":{"tools":[{"id":"1319"},{"id":"1320"},{"id":"1321"},{"id":"1322"},{"id":"1323"},{"id":"1324"}]},"id":"1326","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"1343","type":"Line"},{"attributes":{},"id":"1355","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"1344","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1325","type":"BoxAnnotation"}],"root_ids":["1349"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"0e7d1441-cb58-4b7b-bf83-63464da1a2bd","root_ids":["1349"],"roots":{"1349":"b43f9ffa-9efa-4bb2-8447-19f2c7cc0732"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
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
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
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