Ext.define('ExtUtil.Ajax', {

	statics: {
		init: function() {
			Ext.Ajax.on("beforerequest", function(){
      //This block will be executed before every ajax request
      });
			Ext.Ajax.on("requestcomplete",  function(){
				console.log('Test wellre rerre test p rerere commith');
      //This block will be executed aft wither every ajax request
      });
			Ext.Ajax.on("requestexception", function(){
      //This block will be executed on exception of every ajax request
      });			
		}
	}
	
});
