var target = context.getVariable("private.liv.target");
var pathSuffix = context.getVariable("proxy.pathsuffix").substring(8);
var final_target = target + pathSuffix;
context.setVariable("target.url", final_target);