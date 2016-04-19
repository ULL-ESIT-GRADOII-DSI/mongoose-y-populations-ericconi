# Práctica 2: Comma separated values (CSV) with AJAX

## jQuery.get( url [, data ] [, success ] [, dataType ] )
* url
  * Type: String
  * A string containing the URL to which the request is sent.
* data
  * Type: PlainObject or String
  * A plain object or string that is sent to the server with the request.
* success
  * Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
  * A callback function that is executed if the request succeeds. 
    Required if `dataType` is provided, but you can use `null` or `jQuery.noop` as a placeholder.
* dataType
  * Type: String
  * The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).

## jQuery.get( [settings ] )
* settings
  * Type: PlainObject
  * A set of key/value pairs that configure the Ajax request. 
  * All properties except for `url` are optional. 
  * A default can be set for any option with `$.ajaxSetup()`.

This is a shorthand Ajax function, which is equivalent to:

```javascript
$.ajax({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
```

The success callback function is passed the returned data, which will be an XML root element, text string, JavaScript file, or JSON object, depending on the MIME type of the response. It is also passed the text status of the response.

# Heroku 
https://ajax-ecma6.herokuapp.com/

##Desarrollo de la Práctica

* [Descripción de la práctica](https://campusvirtual.ull.es/1516/mod/page/view.php?id=189370)
* [Repositorio](https://github.com/ULL-ESIT-GRADOII-DSI/ajax-ecma6-ficheros-ericconi)

##Despliegue

 * [Heroku](https://comma-separated-values.herokuapp.com/)
  
  

## Enlaces a webs personales

* [Constanza](http://alu0100673647.github.io)
* [Eric](http://alu0100786330.github.io)