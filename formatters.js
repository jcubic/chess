$.terminal.defaults.allowedAttributes.push('style');
// basic links that XSS safe
$.terminal.new_formatter([
   /<a href="([^"]+)">([^>]+)<\/a>/g, '[[!;;;;$1]$2]'
]);
$.terminal.new_formatter([
   /<nop>([^>]+)<\/nop>/g, '[[;;]$1]'
]);
var light_style = [
   'width:2ch',
   '--background:#ccc',
   '--color:rgba(0,0,0,0.99)',
   'text-align:center'
].join(';');
$.terminal.defaults.formatters.push([
   /<l>([^>]+)<\/l>/g, '[[;;;;;{"style": "' + light_style + '"}]$1]'
]);
var dark_style = [
   'width:2ch',
   'text-align:center',
   '--background:black',
   '--color:rgba(204,204,204,0.99)'
].join(';');
$.terminal.defaults.formatters.push([
   /<d>([^>]+)<\/d>/g, '[[;;;;;{"style": "' + dark_style + '"}]$1]'
]);
var labels = [
   'width:2ch',
   'text-align:center',
   '--color:rgba(85,85,85,0.995)'
].join(';');
$.terminal.defaults.formatters.push([
   /([1-8a-h])/g, '[[;;;;;{"style":"' + labels + '"}]$1]', {echo: true}
]);
