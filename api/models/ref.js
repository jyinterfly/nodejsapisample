var express = require('express');

var dllinfo = {
    classname: 'Simple.PresentLayer',
        path: './dll/'
};

module.exports = {
    status : {
        ok: 'OK',
        no: 'FAIL',
    },
    bondcshapinfo : {
        assemblyFile: dllinfo.classname + '.dll',
        Getlist: {
            typeName: dllinfo.classname + '.BondEndpoint',
            methodName: 'Getlist'
        }
    }
}
