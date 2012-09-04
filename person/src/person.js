var Person = function(config) {

    for (var i in config ) {
        this._bindAccessors(this, i, config[i]);
    }

};


function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

Person.prototype._bindAccessors = function(o, property, value) {
    var _value = value;
    o["get" + capitaliseFirstLetter(property)] = function() {
        return _value;
    };
    o["set" + capitaliseFirstLetter(property)] = function(v) {
        _value = v;
    };
}
