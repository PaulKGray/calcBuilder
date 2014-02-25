calcBuilder.factory('calculationEditorService', function () {

    var calculationEditor = {};
    var bracketCount = 0;

    calculationEditor.addNew = function (type, tag) {
            
        var results = ProcessAmendment(type, tag);
        return results;

    }


    calculationEditor.addRules = {
        dataItem: true,
        operands: false,
        bracketStart: true,
        bracketEnd: false,
        conditional: true,
    };


    function ProcessAmendment(tag,type) {

        console.log(tag);
        console.log(type);

        var AddTag = tag.replace(/\s/g, '');
        var javascriptTag
        var htmlTag;

        switch (type) {
            // DataItem
            case 1:

                htmlTag = '<var>' + tag + '</var>';
                javascriptTag = 'dataItem.' + AddTag;

                calculationEditor.addRules.dataItem = false;
                calculationEditor.addRules.operands = true;
                calculationEditor.addRules.conditional = false;
                calculationEditor.addRules.bracketStart = false;

                if (bracketCount > 0) {

                    calculationEditor.addRules.bracketEnd = true;

                }

                break;
                // Oprands
            case 2:

                htmlTag = '<code>' + tag + '</code>';
                javascriptTag = '' + AddTag + '';


                calculationEditor.addRules.dataItem = true;
                calculationEditor.addRules.operands = false;
                calculationEditor.addRules.conditional = false;
                calculationEditor.addRules.bracketStart = true;
                calculationEditor.addRules.bracketEnd = false;


                break;
                // Bracket Start
            case 3:

                htmlTag = '<code>' + tag + '</code>';
                javascriptTag = AddTag;
                bracketCount += 1;
                calculationEditor.addRules.bracketEnd = true;
                calculationEditor.addRules.dataItem = true;
                break;

                // Bracket End
            case 4:

                htmlTag = '<code>' + tag + '</code>';
                javascriptTag = AddTag;
                bracketCount -= 1;
                calculationEditor.addRules.operands = false;
                calculationEditor.addRules.conditional = false;

                if (bracketCount == 0) {

                    calculationEditor.addRules.bracketEnd = false;

                }

                break;

            case 99:

                htmlTag = '<samp>' + AddTag + '</samp>';
                javascriptTag = 'calculation.' + AddTag;

                calculationEditor.addRules.dataItem = false;
                calculationEditor.addRules.operands = true;
                calculationEditor.addRules.conditional = false;


            default:

        }
   
        var Returns = { htmlTag: htmlTag, codeTag: javascriptTag }

        return Returns;
    }






    return calculationEditor;
    

});