var express = require('express');
var router = express.Router();
var querystring = require('querystring')
var fs = require('fs');
var ref = require('../../models/ref')
var dll = require('../../models/csharp')
//var edge = require('edge');

function getResult(obj, refcode = "FAIL", errmsg = "") {
    var result = {
        "_server": { "result": refcode, "errmsg": errmsg }
    };

    var objlen = Object.keys(obj).length;

    for (var i = 0; i < objlen; i++) {
        result[Object.keys(obj)[i]] = obj[Object.keys(obj)[i]];
    }
    return result;
}

var Bondfun = {
    getlist(req, res) {
        var parm = JSON.parse(querystring.unescape(req.query.key));
        var data = new dll.csharpdll(ref.bondcshapinfo.assemblyFile, ref.bondcshapinfo.Getlist.methodName, ref.bondcshapinfo.Getlist.typeName)
            .getObjdll({ message: "test", message2: "test1" });

        data.then(function (parm) {
            var result = getResult(parm, ref.status.ok);
            res.json(getResult(parm, ref.status.ok));
        }).catch(function (error) {
            var result = getResult(null, ref.status.no, error);
            res.json(result);
        })
    },
}

router.get('/' + 'getlist', Bondfun.getlist);

module.exports = router;