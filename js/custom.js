$(document).ready( function() {

  $('.btn').darkTooltip({
    trigger:'hover',
    gravity:'north'
  });

  $(function () {
    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
      // console.info('Action:', e.action);
      // console.info('Text:', e.text);
      // console.info('Trigger:', e.trigger);
      e.clearSelection();
    });
  });

});
