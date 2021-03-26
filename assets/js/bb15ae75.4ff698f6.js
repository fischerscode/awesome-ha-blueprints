(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return w}));var o=n(0),i=n.n(o);var r=function(e){return i.a.createElement("span",{className:"badge badge--"+e.variant},e.children)},a={action:{type:"Action"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},l={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};var s=function(e){var t=e.selector?a[e.selector]:a.none;return i.a.createElement("div",null,i.a.createElement("span",{style:l.inputName},e.name," ",i.a.createElement(r,{variant:"primary"},t.type)," ",e.required?i.a.createElement(r,{variant:"warning"},e.required," Required"):i.a.createElement(r,{variant:"info"},"Optional")),i.a.createElement("br",null),i.a.createElement("p",{style:l.inputDescription,className:"margin-top--sm"},e.description),i.a.createElement("hr",null))},c={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};var u=function(e){return i.a.createElement("div",{className:"margin-bottom--lg"},i.a.createElement("div",{style:c.requirementNameContainer},i.a.createElement("h3",{style:c.requirementName},e.name," "),e.required?i.a.createElement(r,{variant:"warning"},e.required," Required"):i.a.createElement(r,{variant:"info"},"Optional")),e.children)};var d={zigbee2mqtt:function(e){return i.a.createElement(u,{name:"Zigbee2MQTT Integration",required:e.required},i.a.createElement("p",null,"If you plan to integrate the ",e.refers," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),i.a.createElement("p",null,e.children),i.a.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){return i.a.createElement(u,{name:"ZHA Integration",required:e.required},i.a.createElement("p",null,"If you plan to integrate the ",e.refers," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),i.a.createElement("p",null,e.children),i.a.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){return i.a.createElement(u,{name:"deCONZ Integration",required:e.required},i.a.createElement("p",null,"If you plan to integrate the ",e.refers," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),i.a.createElement("p",null,e.children),i.a.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){return i.a.createElement(u,{name:"Controller Automation",required:e.required},i.a.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",i.a.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),i.a.createElement("p",null,e.children),i.a.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",i.a.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};var p=function(e){var t=e.id?d[e.id]:u;return i.a.createElement(t,{name:e.name,required:e.required,refers:e.refers},e.children)},m=n(105),h=n(106),b=n.n(h),g=n(113),f={myHomeAssistantImage:{width:"100%",maxWidth:212}};var w=function(e){var t=Object(o.useState)(!1),n=t[0],r=t[1],a="https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/"+e.category+"/"+e.id+"/"+e.id+".yaml",l=function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(a);case 2:r(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"card item shadow--md"},i.a.createElement("div",{className:"card__header margin-bottom--md"},i.a.createElement("h3",null,"Import this blueprint")),i.a.createElement("div",{className:"card__body"},i.a.createElement("div",{class:"row row--no-gutters"},i.a.createElement("div",{class:"col col--6"},i.a.createElement("h5",null,"My Home Assistant"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url="+escape(a),target:"_blank"},i.a.createElement("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:f.myHomeAssistantImage})),i.a.createElement("br",null),i.a.createElement("small",null,"(Home Assistant 2021.3.0 or higher)"))),i.a.createElement("div",{class:"col col--6"},i.a.createElement("h5",null,"Direct Link"),i.a.createElement("button",{className:"button button--"+(n?"success":"primary"),onClick:l},i.a.createElement("span",null,i.a.createElement(g.a,{size:16}),i.a.createElement("span",null," ",n?"Link Copied!":"Copy Link")))))))}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),i=n(7),r=(n(0),n(98)),a=n(100),l={title:"IKEA ICTC-G-1 TRADFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TRADFRI wireless dimmer. Supports deCONZ, ZHA, Zigbee2MQTT."},s={unversionedId:"blueprints/controllers/ikea_ictc_g_1",id:"blueprints/controllers/ikea_ictc_g_1",isDocsHomePage:!1,title:"IKEA ICTC-G-1 TRADFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TRADFRI wireless dimmer. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/ikea_ictc_g_1.mdx",slug:"/blueprints/controllers/ikea_ictc_g_1",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_ictc_g_1",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_ictc_g_1.mdx",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Available Hooks",id:"available-hooks",children:[{value:"Light",id:"light",children:[]},{value:"Media Player",id:"media-player",children:[]}]},{value:"Additional Notes",id:"additional-notes",children:[]},{value:"Changelog",id:"changelog",children:[]}],u={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(a.a,{id:"ikea_ictc_g_1",category:"controllers",mdxType:"ImportCard"}),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This blueprint is part of the ",Object(r.b)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",Object(r.b)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA ICTC-G-1 TRADFRI wireless dimmer. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),Object(r.b)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),Object(r.b)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to optionally loop the rotate actions while the remote is rotating either left or right. Once the remote stops rotating, the loop stops as well. This is useful when rotating the controller should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",Object(r.b)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",Object(r.b)("a",{parentName:"p",href:"/docs/blueprints/controllers/ikea_ictc_g_1#available-hooks"},"Hooks available for this controller")," for additional details."))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)(a.c,{id:"deconz",mdxType:"Requirement"}),Object(r.b)(a.c,{id:"zha",mdxType:"Requirement"}),Object(r.b)(a.c,{id:"zigbee2mqtt",mdxType:"Requirement"},Object(r.b)("p",null,"When configuring the remote with Zigbee2MQTT make sure to disable the legacy integration for it, as reported ",Object(r.b)("a",{parentName:"p",href:"https://www.zigbee2mqtt.io/devices/ICTC-G-1.html#legacy-integration"},"here"),". This blueprint won't work with controllers with a legacy integration due to their instability and fundamental problems.")),Object(r.b)(a.c,{name:"Input Text Integration",required:"ZHA, Zigbee2MQTT",mdxType:"Requirement"},Object(r.b)("p",null,"This integration provides the entity which will be used to store the last button event. It's required when using ZHA to integrate the remote, as well as when using double press events. This should be activated by default so unless you tweaked the default configuration you're good to go."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)(a.b,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),Object(r.b)(a.b,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"(deCONZ, ZHA)",mdxType:"Input"}),Object(r.b)(a.b,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"(Zigbee2MQTT)",mdxType:"Input"}),Object(r.b)(a.b,{name:"Rotate left",description:"Action to run on rotate left.",selector:"action",mdxType:"Input"}),Object(r.b)(a.b,{name:"Rotate left stop",description:"Action to run on when stopping to rotate left the remote.",selector:"action",mdxType:"Input"}),Object(r.b)(a.b,{name:"Rotate right",description:"Action to run on rotate right.",selector:"action",mdxType:"Input"}),Object(r.b)(a.b,{name:"Rotate right stop",description:"Action to run on when stopping to rotate right the remote.",selector:"action",mdxType:"Input"}),Object(r.b)(a.b,{name:"Rotate left - loop until stop",description:"Loop the rotate left action until the rotation is stopped.",selector:"boolean",required:!0,mdxType:"Input"}),Object(r.b)(a.b,{name:"Rotate right - loop until stop",description:"Loop the rotate right action until the rotation is stopped.",selector:"boolean",required:!0,mdxType:"Input"}),Object(r.b)(a.b,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. See docs for more.",selector:"entity",required:"(ZHA, Zigbee2MQTT Required)",mdxType:"Input"}),Object(r.b)("h2",{id:"available-hooks"},"Available Hooks"),Object(r.b)("h3",{id:"light"},"Light"),Object(r.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rotate left -> Brightness down (continuous, until stop)"),Object(r.b)("li",{parentName:"ul"},"Rotate right -> Brightness up (continuous, until stop)\n",Object(r.b)("a",{parentName:"li",href:"/docs/blueprints/hooks/light"},"Light Hook docs"))),Object(r.b)("h3",{id:"media-player"},"Media Player"),Object(r.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rotate left -> Volume down (continuous, until stop)"),Object(r.b)("li",{parentName:"ul"},"Rotate right -> Volume up (continuous, until stop)")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),Object(r.b)("h2",{id:"additional-notes"},"Additional Notes"),Object(r.b)("p",null,"The reason why a text input is required to store the last long press event when using a remote with ZHA, Zigbee2MQTT is because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different button release events, so the blueprint must store the previous clicked button, using the text input. Make sure the input text is not altered by any other agents, since this could break the automation."),Object(r.b)("p",null,"This blueprint provides beta support for controllers integrated with deCONZ, since not all the supported events are mapped for this integration. If you are using the IKEA ICTC-G-1 with deCONZ and would like to help, you can reach out ",Object(r.b)("a",{parentName:"p",href:"https://community.home-assistant.io/t/awesome-ha-blueprints-a-curated-list-of-blueprints-easily-create-controller-based-automations-remotes-switches-for-controlling-lights-media-players-and-more/256687"},"here"),"."),Object(r.b)("h2",{id:"changelog"},"Changelog"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"2021-03-26"),": first blueprint version \ud83c\udf89")))}d.isMDXComponent=!0}}]);