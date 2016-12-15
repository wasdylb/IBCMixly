'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#efa752';

Blockly.Blocks.Sensor_Mic_analog = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/MIC.png", 40, 30))
    .appendTitle(Blockly.Mic)
    .appendTitle(Blockly.get_Pin)
    this.appendValueInput("analogPin", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
    .appendTitle(Blockly.returndata+Blockly.MicSensorValue);

    var tip="获取声音强度模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Number);

}
};
Blockly.Blocks.Sensor_Mic_Key = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/MIC.png", 40, 30))
    .appendTitle(Blockly.Mic)
    .appendTitle(Blockly.get_Pin)
    this.appendValueInput("KPin", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
    .appendTitle(Blockly.returndata+Blockly.MicSensorValue)
    this.appendValueInput("mindata", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendTitle(Blockly.dataInterval)
    this.appendValueInput("maxdata", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendTitle(Blockly.dataTodata);

    var tip="定义声音强度传感器的引脚和事件类型并且判断数据区间\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendStatementInput('DO');
}
};