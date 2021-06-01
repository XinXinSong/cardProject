for(var i = 0; i < 153; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetSelected('u42');
}

});
gv_vAlignTable['u115'] = 'center';document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','fade',300);

}
});
document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样模板维护.html');

SetWidgetSelected('u21');
}
});
gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u32'] = 'center';document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', u130Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u130LinksClick'></div>")
var u130LinksClick = document.getElementById('u130LinksClick');
function u130Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u130LinksClick');
}

InsertBeforeEnd(u130LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u130Clicku0455b90522d648e0a2d5084f3aa20708(event)'>验证出错</div>");
function u130Clicku0455b90522d648e0a2d5084f3aa20708(e)
{

	SetPanelState('u88', 'pd2u88','none','',500,'none','',500);

	ToggleLinks(e, 'u130LinksClick');
}

InsertBeforeEnd(u130LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u130Clickuec1d05386dfd43399912d7d99a63f169(event)'>验证正确</div>");
function u130Clickuec1d05386dfd43399912d7d99a63f169(e)
{

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	ToggleLinks(e, 'u130LinksClick');
}
gv_vAlignTable['u140'] = 'top';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('监管单位维护.html');

SetWidgetNotSelected('u9');
SetWidgetNotSelected('u11');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetSelected('u17');
}
});
gv_vAlignTable['u135'] = 'center';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('人员出入统计报表（监管）.html');

}
});
gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u138'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u152'] = 'top';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u37'] = 'center';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场配置.html');

}
});
document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('岗职维护.html');

SetWidgetNotSelected('u9');
SetWidgetSelected('u11');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u112'] = 'center';document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('快捷制证（监管）.html');

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u54'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('激活票证.html');

}
});
document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('录入项目.html');

}
});
gv_vAlignTable['u128'] = 'top';
$axure.eventManager.change('u85', function(e) {

if ((GetSelectedOption('u85')) != ('请选择')) {

	var obj1 = document.getElementById("u87");
    obj1.disabled = false;

	SetPanelVisibility('u88','','fade',300);

}
else
if ((GetSelectedOption('u85')) == ('请选择')) {

	var obj1 = document.getElementById("u87");
    obj1.disabled = true;

	SetPanelVisibility('u88','hidden','fade',300);

}
});
document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办证单位对账报表（监管）.html');

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u82'] = 'top';document.getElementById('u95_img').tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	SetPanelState('u88', 'pd0u88','none','',500,'none','',500);

}
});
gv_vAlignTable['u61'] = 'center';document.getElementById('u114_img').tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','fade',300);

}
});
document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件管理（监管）.html');

}
});
gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u106'] = 'top';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样制作.html');

}
});
gv_vAlignTable['u139'] = 'top';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('印刷厂对账报表（监管）.html');

}
});
gv_vAlignTable['u104'] = 'top';document.getElementById('u66_img').tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件使用（监管）.html');

}
});
document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('权限管理.html');

SetWidgetSelected('u19');
}
});
gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u76'] = 'top';document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('系统配置.html');

}
});
gv_vAlignTable['u102'] = 'top';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('场馆维护.html');

SetWidgetSelected('u9');
SetWidgetNotSelected('u11');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
}
});
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u121'] = 'center';document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场验证.html');

}
});
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u117'] = 'center';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('操作员维护.html');

SetWidgetNotSelected('u9');
SetWidgetNotSelected('u11');
SetWidgetSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
}
});
gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u86'] = 'top';document.getElementById('u145_img').tabIndex = 0;

u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (true) {

	SetPanelState('u88', 'pd1u88','none','',500,'none','',500);

	var obj1 = document.getElementById("u130");
    obj1.focus();

}
});

$axure.eventManager.change('u83', function(e) {

if ((GetSelectedOption('u83')) != ('请选择')) {

	var obj1 = document.getElementById("u85");
    obj1.disabled = false;

}
else
if ((GetSelectedOption('u83')) == ('请选择')) {

	var obj1 = document.getElementById("u85");
    obj1.disabled = true;

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u96'] = 'center';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办证单位维护.html');

SetWidgetNotSelected('u9');
SetWidgetNotSelected('u11');
SetWidgetNotSelected('u13');
SetWidgetSelected('u15');
SetWidgetNotSelected('u17');
}
});
document.getElementById('u49_img').tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('对账报表（监管）.html');

}
});
gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u136'] = 'top';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('项目配额管理.html');

}
});
