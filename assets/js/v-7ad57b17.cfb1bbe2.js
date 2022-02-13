"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14646],{87543:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-7ad57b17",path:"/devices/9290030675.html",title:"Philips 9290030675 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 9290030675 control via MQTT",description:"Integrate your Philips 9290030675 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-11-30T20:10:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Power-on behavior",slug:"power-on-behavior",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Motion_sensitivity (enum)",slug:"motion-sensitivity-enum",children:[]},{level:3,title:"Led_indication (binary)",slug:"led-indication-binary",children:[]},{level:3,title:"Occupancy_timeout (numeric)",slug:"occupancy-timeout-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/9290030675.md",git:{updatedTime:1644769017e3}}},35066:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J});var a=o(66252);const i=(0,a.uE)('<h1 id="philips-9290030675" tabindex="-1"><a class="header-anchor" href="#philips-9290030675" aria-hidden="true">#</a> Philips 9290030675</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>9290030675</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue motion sensor</td></tr><tr><td>Exposes</td><td>temperature, occupancy, battery, illuminance_lux, illuminance, motion_sensitivity, led_indication, occupancy_timeout, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/9290030675.jpg" alt="Philips 9290030675"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory resetting a Hue bulb can be accomplished in 5 ways. After resetting the bulb will automatically connect.</p><h4 id="touchlink-factory-reset" tabindex="-1"><a class="header-anchor" href="#touchlink-factory-reset" aria-hidden="true">#</a> Touchlink factory reset</h4>',6),n=(0,a.Uk)("See "),r=(0,a.Uk)("Touchlink"),l=(0,a._)("h4",{id:"hue-bridge",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-bridge","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue bridge")],-1),s=(0,a._)("p",null,"When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.",-1),c=(0,a._)("h4",{id:"hue-dimmer-switch",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-dimmer-switch","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue dimmer switch")],-1),d=(0,a.Uk)("With "),u=(0,a.Uk)("one"),h=(0,a.Uk)(" of the "),p=(0,a.Uk)("two"),m=(0,a.Uk)(" Hue Dimmer switches it is possible to put the bulbs into a factory reset."),b=(0,a._)("ol",null,[(0,a._)("li",null,"Power-supply the bulb"),(0,a._)("li",null,"Bring the dimmer switch next to the bulb, as close as possible"),(0,a._)("li",null,"Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…"),(0,a._)("li",null,"The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second"),(0,a._)("li",null,"Switch the bulb off and on again: it can now be paired again.")],-1),f=(0,a.Uk)("See also the "),_={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("VIDEO: Factory reset a Hue bulb with Hue dimmer switch"),v=(0,a.Uk)("."),y=(0,a._)("h4",{id:"bluetooth-if-supported-by-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bluetooth-if-supported-by-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Bluetooth (if supported by device)")],-1),w=(0,a.Uk)("Install the Philips Hue Bluetooth app for "),k={href:"https://play.google.com/store/apps/details?id=com.signify.hue.blue",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("Android"),q=(0,a.Uk)(" or "),T={href:"https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186",target:"_blank",rel:"noopener noreferrer"},U=(0,a.Uk)("iOS"),E=(0,a.Uk)(". You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing mode for a couple of minutes after power-on)"),N=(0,a._)("h4",{id:"tradfri-remote-control",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tradfri-remote-control","aria-hidden":"true"},"#"),(0,a.Uk)(" TRADFRI remote control")],-1),I=(0,a.Uk)("This may also be possible with the "),O={href:"https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG",target:"_blank",rel:"noopener noreferrer"},A=(0,a.Uk)("Tradfri Remote Control"),L=(0,a.Uk)(" by pressing and holding the reset button on the bottom of the remote (next to the battery). "),F={href:"https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751",target:"_blank",rel:"noopener noreferrer"},P=(0,a.Uk)("This may not always work, even if the Hue bulb starts flashing"),W=(0,a.Uk)("."),D=(0,a._)("h3",{id:"power-on-behavior",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#power-on-behavior","aria-hidden":"true"},"#"),(0,a.Uk)(" Power-on behavior")],-1),H=(0,a.Uk)("This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device. Send a MQTT command to "),M={href:"https://www.zigbee2mqtt.io/../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttfriendly_nameset",target:"_blank",rel:"noopener noreferrer"},R=(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set",-1),V=(0,a.Uk)(" with the following payload."),z=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;hue_power_on_behavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// default, on, off, recover</span>\n    <span class="token string">&quot;hue_power_on_brightness&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>         <span class="token comment">// same values as brightness</span>\n    <span class="token string">&quot;hue_power_on_color_temperature&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>  <span class="token comment">// same values as color_temp</span>\n    <span class="token string">&quot;hue_power_on_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span>         <span class="token comment">// color in hex notation, e.g. #0000FF = blue</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',6),Y=(0,a.Uk)("This device supports OTA updates, for more information see "),C=(0,a.Uk)("OTA updates"),S=(0,a.Uk)("."),B=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),Z=(0,a.Uk)("How to use device type specific configuration"),j=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_precision</code>: Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_precision</code>: Number of digits after decimal point for illuminance_lux, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="motion-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#motion-sensitivity-enum" aria-hidden="true">#</a> Motion_sensitivity (enum)</h3><p>Value can be found in the published state on the <code>motion_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="led-indication-binary" tabindex="-1"><a class="header-anchor" href="#led-indication-binary" aria-hidden="true">#</a> Led_indication (binary)</h3><p>Blink green LED on motion detection. Value can be found in the published state on the <code>led_indication</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_indication&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_indication&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led_indication is ON, if <code>false</code> OFF.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric" aria-hidden="true">#</a> Occupancy_timeout (numeric)</h3><p>Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>second</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),Q={},J=(0,o(83744).Z)(Q,[["render",function(e,t){const o=(0,a.up)("RouterLink"),Q=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[n,(0,a.Wm)(o,{to:"/guide/usage/touchlink.html"},{default:(0,a.w5)((()=>[r])),_:1})]),l,s,c,(0,a._)("p",null,[d,(0,a.Wm)(o,{to:"/devices/324131092621.html"},{default:(0,a.w5)((()=>[u])),_:1}),h,(0,a.Wm)(o,{to:"/devices/929002398602.html"},{default:(0,a.w5)((()=>[p])),_:1}),m]),b,(0,a._)("p",null,[f,(0,a._)("a",_,[g,(0,a.Wm)(Q)]),v]),y,(0,a._)("p",null,[w,(0,a._)("a",k,[x,(0,a.Wm)(Q)]),q,(0,a._)("a",T,[U,(0,a.Wm)(Q)]),E]),N,(0,a._)("p",null,[I,(0,a._)("a",O,[A,(0,a.Wm)(Q)]),L,(0,a._)("a",F,[P,(0,a.Wm)(Q)]),W]),D,(0,a._)("p",null,[H,(0,a._)("a",M,[R,(0,a.Wm)(Q)]),V]),z,(0,a._)("p",null,[Y,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[C])),_:1}),S]),B,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[Z])),_:1})])]),j],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);