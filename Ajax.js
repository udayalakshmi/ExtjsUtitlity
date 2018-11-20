Ext.define('ExtUtil.Ajax', {

	statics: {
		init: function() {
			Ext.Ajax.on("beforerequest", function(){
      //This block will be executed before every ajax request
      });
			Ext.Ajax.on("requestcomplete",  function(){
				console.log('testing edwew well done test pre commith');
      //This block will be executed after every ajax request
      });
			Ext.Ajax.on("requestexception", function(){
      //This block will be executed on exception of every ajax request
      });			
		}
	}
	
});
