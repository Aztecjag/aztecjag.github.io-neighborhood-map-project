/*
 *	create knockout model to bind to the search element
 */												
function yelpBusinessViewModel() {
	// set this to the self variable
  var self = this;

	/*
	 *	set the bind-data to the search field to "Clinicas Mi Doctor"
	 *	observe for change
	 */	
	self.searchTerm = ko.observable('Clinicas Mi Doctor');

	/*
	 *	function to update the view model
	 */	
	self.updateYelpResults = function(){
		/*
		 *	return the updated data from the search field
		 *	then run the ajax function to create the yelp list
		 */	
		ko.computed(function(){
			yelpAjax('75220', self.searchTerm());
		}, self);
	}	
}

/*
 *	Start knockout dependency tracking
 */	
ko.applyBindings(new yelpBusinessViewModel());