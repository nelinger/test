var Person = function (config) {

    for (var i in config) {
        this._bindAccessors(this, i, config[i]);
    }

};


String.prototype.capitalize = function capitaliseFirstLetter() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


Person.prototype._bindAccessors = function (o, property, value) {
    var _value = value;
    o["get" + property.capitalize()] = function () {
        return _value;
    };
    o["set" + property.capitalize()] = function (v) {
        _value = v;
    };
}
