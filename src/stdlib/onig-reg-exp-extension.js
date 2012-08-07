(function() {
  native function buildOnigRegExp(source);
  native function search(string, index);
  native function getCaptureTree(source, index);
  native function getCaptureCount();

  function OnigRegExp(source) {
    var regexp = buildOnigRegExp(source);
    regexp.constructor = OnigRegExp;
    regexp.__proto__ = OnigRegExp.prototype;
    regexp.source = source;
    return regexp;
  }

  OnigRegExp.prototype.search = search;
  OnigRegExp.prototype.getCaptureTree = getCaptureTree;
  OnigRegExp.prototype.getCaptureCount = getCaptureCount;

  this.OnigRegExp = OnigRegExp;
})();

