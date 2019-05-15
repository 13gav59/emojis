var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedB = text.replace(/\sb/g," " +  String.fromCodePoint(0x1F171)).replace(/B/g, String.fromCodePoint(0x1F171));

            if (replacedB !== text) {
                element.replaceChild(document.createTextNode(replacedB), node);
            }
        }
    }
}
