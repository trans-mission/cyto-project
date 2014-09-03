define([

  'jquery',
  'jqueryUi',
  'cm/lib/codemirror', 
  'cm/mode/javascript/javascript'

  ], function ($, jqueryUi, CodeMirror) {

  var CyEditor = function($scope, $http) {

    //ref: http://pastebin.com/KTJgzWf4

    var $cyEditor = $scope;

    //TODO: Make an ng-model object for all the sketch editor parts

    $scope.title = 'my new sketch';

    $cyEditor.init = function() {

      //make widget resizable
      $("#cy-editor").resizable({ 
        minWidth: 300,
        maxWidth: $(window).width() - 50,
        handles: "n, e, s, w, se, sw, nw, ne" 
      });

      $cyEditor.codeArea   = document.getElementById('code');
      $cyEditor.submitBtn  = document.getElementById('save');

      $cyEditor.codeMirror = CodeMirror.fromTextArea($cyEditor.codeArea, {
        mode             : 'javascript',
        styleActiveLine  : true,
        matchBrackets    : true,
        indentUnit       : 2,
        smartIndent      : true,
        tabSize          : 2,
        indentWithTabs   : false,
        lineNumbers      : true,
        theme            : 'default'
      });
    };

    $cyEditor.onSubmit = function() {
      
      var postData = { 
        title:  $cyEditor.title,
        sketch: $cyEditor.codeMirror.getValue() 
      };

      console.log(postData);

      $http({
        method: 'POST',
        url:    '/api/v1/sketch/save',
        data:   JSON.stringify(postData)
      }).
      success(function (data, status, headers, config) {
        console.log(data);
        //console.log(data, status, headers, config);
      }).
      error(function (data, status, headers, config) {
        //console.log(data, status, headers, config);
      });
    };

    return $cyEditor;
  };

  return CyEditor;
});