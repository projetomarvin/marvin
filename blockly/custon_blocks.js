Blockly.Blocks['text_includes'] = {
  init: function() {
    this.appendValueInput("string")
        .setCheck("String");
    this.appendValueInput("char")
        .setCheck("String")
        .appendField("tem o caractere");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_includes.asp');
  }
};

Blockly.Blocks['text_log'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("imprimir");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("console.log");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_push'] = {
  init: function() {
    this.appendValueInput("LIST")
        .setCheck(null)
        .appendField("na lista");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("incluir");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Incluir na lista");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_findat'] = {
  init: function() {
    this.appendValueInput("INDEX")
        .setCheck("Number")
        .appendField("elemento na posição");
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("da lista");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("array index");
 this.setHelpUrl("https://www.w3schools.com/js/js_arrays.asp");
  }
};

Blockly.Blocks['text_statement_log'] = {
  init: function() {
    this.appendStatementInput("VALUE")
        .setCheck(null)
        .appendField("Imprimir");
    this.setColour(120);
 this.setTooltip("console.log");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['function_return'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("Retornar");
    this.setPreviousStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};