Ext.define('ExtUtil.Ajax', {

	statics: {
		init: function() {
			Ext.Ajax.on("beforerequest", function(){
      //This block will be executed before every ajax request
      });
			Ext.Ajax.on("requestcomplete",  function(){
				console.log('Test with Ajax.js from E:Extjs utilily only psush commit only');
      //This block will be executed aft wither every ajax request
      });
			Ext.Ajax.on("requestexceptifgon", function(){
      //This block will be executed on exception of every ajax request test redmine test re dehs df updatedsd djkjehk jhwe ekw
      });			
		}
	}
	
});
