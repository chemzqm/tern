/*global define tern*/
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("../lib/tern"), require("./node_resolve"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["../lib/tern", "./node_resolve"], mod);
  mod(tern, tern);
})(function(tern) {
  "use strict"

  tern.registerPlugin("wxapp", function(server) {
    server.loadPlugin("node_resolve")
    server.on("postReset", function() {
      var mods = server.mod.modules, locals = server.cx.definitions.node
      for (var name in locals) if (/^[a-z_]*$/.test(name))
        mods.knownModules[name] = locals[name]
    })
    server.addDefs(defs)
  })

});
