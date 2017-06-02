var Q = require('q');
class csharpdll {
    constructor(assemblyFile, typeName, methodName) {
        this.assemblyFile = assemblyFile;
        this.typeName = typeName;
        this.methodName = methodName;
    }
    setObjdll() {
        // return edge.func({
        //     assemblyFile: this.assemblyFile,
        //     typeName: this.typeName,
        //     methodName: this.methodN
        // });
        return {
            assemblyFile: this.assemblyFile,
            typeName: this.typeName,
            methodName: this.methodN
        };
    };
    //json
    getObjdll(parms) {
        var objdll = this.setObjdll();
        var deferred = Q.defer();
        deferred.resolve(parms)
        // deferred.resolve(objdll(parms,true));

        //        return deferred.promise;
        return deferred.promise;
    };

}

module.exports = {
    csharpdll: csharpdll
}