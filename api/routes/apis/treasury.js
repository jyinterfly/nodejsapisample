var express = require('express');
var router = express.Router();
var querystring = require('querystring')
var fs = require('fs');

var dllinfo = {
    classname: 'Simple.PresentLayer',
    path: './dll/'
}

var status = {
    ok: 'OK',
    no: 'FAIL',
}

function getResult(obj, refcode = "FAIL", errmsg = "") {
    var result = {
        "_server": { "result": refcode, "errmsg": errmsg }
    };
    var objlen = Object.keys(obj).length;

    console.log(obj);

    for (var i = 0; i < objlen; i++) {
        result[Object.keys(obj)[i]] = obj[Object.keys(obj)[i]];
    }
    return result;
}

var bondcshapinfo = {
    assemblyFile: dllinfo.classname + '.dll',
    Getlist: {
        typeName: dllinfo.classname + '.BondEndpoint',
        methodName: 'Getlist'
    }
};

var Bondfun = {
    getlist(req, res){
        var data = JSON.parse(querystring.unescape(req.query.key));
        var result = getResult(data, status.ok);
        res.json(result);
    },
}

router.get('/' + bondcshapinfo.Getlist.methodName, Bondfun.getlist);

module.exports = router;