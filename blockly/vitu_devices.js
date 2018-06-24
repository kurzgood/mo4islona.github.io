//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating vitu blocks.
 * @author kurzgood@gmail.com
 */

goog.provide('Blockly.Blocks.vitu');

goog.require('Blockly.Blocks');

Blockly.Blocks['vitu_light_shield'] = {
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("전등")
        .appendField(new Blockly.FieldDropdown([["켠다", "on"], ["끈다", "off"]]), "DIRECTION");
    /*this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//http://www.seeedstudio.com/wiki/File:Twig-Temp%26Humi.jpg
//http://www.seeedstudio.com/wiki/Grove-_Temperature_and_Humidity_Sensor

//http://www.seeedstudio.com/wiki/Grove_-_125KHz_RFID_Reader

/*
void setup()
{
	pinMode( 3 , OUTPUT);
	pinMode( 1 , INPUT);
}
void loop()
{
	if (digitalRead( 1))
	{
		digitalWrite( 3 , HIGH);
	}
	else
	{
		digitalWrite( 1 , LOW);
	}
}
*/