(function() {


var mod = angular.module('bibliodata',['pubsDataRow'])


mod.controller('biblioCtrl', [
'$scope', 'DataRowFieldService', '$log',
function ($scope, DataRowFieldService, $log) {

	var pubData = { // TODO to be fetched
			pid  : "700000000",
			idx  : "otr8068900",
			public_date    : "05/28/2014", // 6/17/14
			pub_type       : "2",
			series_title   : "",
			subseries      : "Climate change adaption Series",
			series_number  : "2012-1234",
			collaborators  : "ABC",
			abstract       : "This is an entry. The quick brown fox jumps over the lazy dog. Sally sells sea shells at the sea shore.",
			usgs_citation  : "This is an entry. The quick brown fox jumps over the lazy dog. Sally sells sea shells at the sea shore.",
		}


	$scope.rows = fieldMapping()
	DataRowFieldService.fieldMapper($scope.rows, pubData)


// TODO move to main if this is on all tabs

	$scope.pubslist = {
		name   : "Publications List",
		action : function() {
			// TODO service.doPublicaitonsList
		}
	}
	$scope.reset = {
		name   : "Reset",
		action : function() {
			// TODO service.doReset 
		}
	}
	$scope.release = {
		name   : "Release",
		action : function() {
			// TODO service.doRelease
		}
	}
	$scope.save = {
		name   : "Save Changes",
		action : function() {
			// TODO service.doSave 
		}
	}
	$scope.publish = {
		name   : "Publish",
		action : function() {
			// TODO service.doPublish 
		}
	}

}])


// TODO could be angular value

var fieldMapping = function() {
	return [
		{
			name   : "pid",
			label  : "Prod ID",
			rowType: "Readonly",
		},
		{
			name   : "idx",
			label  : "Index ID",
			rowType: "Readonly",
		},
		{
			name   : "public_date",
			label  : "Display to Public Date",
			rowType: "Date", 
			elId   : "PublicDate",
		},
		{
			rowType: "Gap",
		},
		{
			name   : "pub_type",
			label  : "Publication Type",
			rowType: "Select",
			options: [{value:"1",text:'USGS Series'},{value:"2",text:'Other Series'},],
			placeholder:"Select a Publication Type",
		},
		{
			name   : "series_title",
			label  : "Series Title",
			rowType: "Select",
			options: [{value:"1",text:'Open File Report'},{value:"2",text:'Book'},],
			placeholder:"Select a Series",
		},
		{
			name   : "subseries",
			label  : "Subseries",
			rowType: "Text",
		},
		{
			name   : "series_num",
			label  : "Series Number",
			rowType: "Text",
		},
		{
			name   : "chapter",
			label  : "Chapter",
			rowType: "Text",
		},
		{
			name   : "subchapter",
			label  : "Subchapter",
			rowType: "Text",
		},
		{
			name   : "title",
			label  : "Title",
			rowType: "Text",
		},
		{
			rowType: "Gap",
		},
		{
			name   : "collaborators",
			label  : "Collaboration/Cooperation",
			rowType: "Text",
		},
		{
			name   : "abstract",
			label  : "Abstract",
			rowType: "Editor",
		},
		{
			name   : "usgs_citation",
			label  : "USGS Citation",
			rowType: "Textbox",
		},
		{
			rowType: "Gap",
		},
		{
			name   : "lang",
			label  : "Language",
			rowType: "Text",
		},
		{
			name   : "publication",
			label  : "Publication",
			rowType: "Text",
		},
		{
			name   : "pub_location",
			label  : "Publication Location",
			rowType: "Text",
		},

	]
}


}) ()