# angular-uploadBtn

A custom directive that gives you a button 
when clicked prompt for the file and uses
XHR2 to post the file to the server using
the action attribute as the endpoint.  

When complete, the directive fires the function
set to the complete attribute.

## Usage

```
<upload-button
  action="api/file"
  complete="uploaded($data, $status)">
  Upload File
</upload-button>
```

The server posts the file under the field uploadFile.

## Server Example

``` js
app.post('/api/file', function(req,res) {
  console.log(req.files.uploadFile);
  res.send();
});
```

## Install

``` sh
bower install angular-upload-button
```

``` html
<script src="/bower_components/angular-uploadBtn/upload-button-btn.js"></script>
```

``` js
angular.module('App', ['upload.button']);
```

## Support

File issues on github

## License

MIT

## Roadmap

Still lots to do here, we can add progress tracking and 
other attributes to make the button control extremely
robust.  Suggestion and Pull Requests are welcome

## Alternatives

If you need compatibility for IE 8 and below, you may want
to checkout `ng-upload`.

[http://twilson63.github.io/ngUpload/](http://twilson63.github.io/ngUpload/)

## Contributors

* Tom Wilson [twilson63](http://githu.com/twilson63)
