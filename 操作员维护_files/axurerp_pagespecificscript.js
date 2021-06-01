for(var i = 0; i < 328; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetNotSelected('u33');
SetWidgetNotSelected('u28');
SetWidgetNotSelected('u26');
SetWidgetNotSelected('u17');
SetWidgetNotSelected('u15');
SetWidgetSelected('u13');
SetWidgetNotSelected('u11');
SetWidgetNotSelected('u9');
}

});
gv_vAlignTable['u167'] = 'center';document.getElementById('u299_img').tabIndex = 0;

u299.style.cursor = 'pointer';
$axure.eventManager.click('u299', function(e) {

if (true) {

	SetPanelVisibility('u251','hidden','none',500);

	SetPanelVisibility('u284','hidden','fade',500);

}
});
gv_vAlignTable['u216'] = 'center';u231.tabIndex = 0;

u231.style.cursor = 'pointer';
$axure.eventManager.click('u231', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; </span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">修改</span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">操作员</span></p>');

SetWidgetFormText('u259', GetWidgetText('u217'));

SetWidgetFormText('u261', GetWidgetText('u219'));

SetWidgetFormText('u264', GetWidgetText('u223'));

SetSelectedOption('u274', GetWidgetText('u233'));

SetWidgetFormText('u283', GetWidgetText('u227'));

SetSelectedOption('u278', GetWidgetText('u221'));

SetCheckState('u272', true);

SetSelectedOption('u266', '北京');

SetSelectedOption('u267', '北京');

	var obj1 = document.getElementById("u266");
    obj1.disabled = true;

	var obj1 = document.getElementById("u267");
    obj1.disabled = true;

	var obj1 = document.getElementById("u272");
    obj1.disabled = true;

	var obj1 = document.getElementById("u270");
    obj1.disabled = true;

	var obj1 = document.getElementById("u259");
    obj1.disabled = true;

	var obj1 = document.getElementById("u274");
    obj1.disabled = true;

	SetPanelVisibility('u251','','fade',300);

}
});
gv_vAlignTable['u231'] = 'top';document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('系统配置.html');

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u298'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u193'] = 'top';document.getElementById('u11_img').tabIndex = 0;

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
gv_vAlignTable['u151'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('录入项目.html');

}
});
gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u54'] = 'center';u214.tabIndex = 0;

u214.style.cursor = 'pointer';
$axure.eventManager.click('u214', function(e) {

if (true) {

	SetPanelVisibility('u236','','fade',100);

}
});
gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u269'] = 'top';
u287.style.cursor = 'pointer';
$axure.eventManager.click('u287', function(e) {

if (true) {

SetWidgetFormText('u283', '');

}

if ((GetCheckState('u287')) == (true)) {

SetWidgetFormText('u283', '' + (GetWidgetText('u283')) + ' ' + (GetWidgetText('u287')) + ' ');

}

if ((GetCheckState('u289')) == (true)) {

SetWidgetFormText('u283', '' + (GetWidgetText('u283')) + ' ' + (GetWidgetText('u289')) + ' ');

}
});
gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u268'] = 'top';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('取卡验证.html');

}
});
gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u326'] = 'center';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u307'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u50'] = 'center';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('人员出入统计报表（监管）.html');

}
});
u149.tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

	SetPanelVisibility('u236','','fade',100);

}
});
gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u175'] = 'center';u148.tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelVisibility('u236','','fade',100);

}
});
gv_vAlignTable['u148'] = 'top';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u305'] = 'center';gv_vAlignTable['u20'] = 'center';document.getElementById('u279_img').tabIndex = 0;

u279.style.cursor = 'pointer';
$axure.eventManager.click('u279', function(e) {

if (true) {

}
});
document.getElementById('u241_img').tabIndex = 0;

u241.style.cursor = 'pointer';
$axure.eventManager.click('u241', function(e) {

if (true) {

	SetPanelVisibility('u236','hidden','fade',100);

}
});
document.getElementById('u297_img').tabIndex = 0;

u297.style.cursor = 'pointer';
$axure.eventManager.click('u297', function(e) {

if ((GetWidgetText('u259')) == ('admin')) {

SetWidgetRichText('u112', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u261')) + '</span></p>');

SetWidgetRichText('u116', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u264')) + '</span></p>');

SetWidgetRichText('u120', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u283')) + '</span></p>');

SetWidgetRichText('u145', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u274')) + '</span></p>');

SetWidgetRichText('u114', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u278')) + '</span></p>');

	SetPanelVisibility('u251','hidden','none',500);

	SetPanelVisibility('u284','hidden','none',500);

	SetPanelVisibility('u301','hidden','fade',300);

}

if ((GetWidgetText('u259')) == ('cqyl')) {

SetWidgetRichText('u129', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u261')) + '</span></p>');

SetWidgetRichText('u133', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u264')) + '</span></p>');

SetWidgetRichText('u137', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u283')) + '</span></p>');

SetWidgetRichText('u135', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u267')) + '</span></p>');

SetWidgetRichText('u131', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u278')) + '</span></p>');

	SetPanelVisibility('u251','hidden','none',500);

	SetPanelVisibility('u284','hidden','none',500);

	SetPanelVisibility('u301','hidden','fade',300);

}

if (true) {

	SetPanelVisibility('u251','hidden','none',500);

	SetPanelVisibility('u284','hidden','fade',500);

}
});
gv_vAlignTable['u8'] = 'center';document.getElementById('u49_img').tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('对账报表（监管）.html');

}
});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u88'] = 'top';document.getElementById('u304_img').tabIndex = 0;

u304.style.cursor = 'pointer';
$axure.eventManager.click('u304', function(e) {

if (true) {

SetWidgetFormText('u264', GetWidgetText('u314'));

	SetPanelVisibility('u301','hidden','fade',100);

}
});
gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u240'] = 'center';gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u137'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件管理（监管）.html');

}
});
document.getElementById('u254_img').tabIndex = 0;

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (true) {

	SetPanelVisibility('u251','hidden','none',500);

	SetPanelVisibility('u284','hidden','fade',500);

}
});
gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u303'] = 'center';document.getElementById('u281_img').tabIndex = 0;

u281.style.cursor = 'pointer';
$axure.eventManager.click('u281', function(e) {

if (true) {

}
});
gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u317'] = 'center';document.getElementById('u295_img').tabIndex = 0;

u295.style.cursor = 'pointer';
$axure.eventManager.click('u295', function(e) {

if (ValueContains(GetWidgetText('u283'), '安保')) {

SetCheckState('u287', true);

}

if (ValueContains(GetWidgetText('u283'), '舞美')) {

SetCheckState('u289', true);

}

if (true) {

	SetPanelVisibility('u284','toggle','fade',100);

	SetPanelVisibility('u284','','fade',100);

}
});
document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办证单位对账报表（监管）.html');

}
});
gv_vAlignTable['u253'] = 'center';
$axure.eventManager.change('u267', function(e) {

if ((GetSelectedOption('u267')) == ('请选择')) {

SetSelectedOption('u274', '请选择');

}

if ((GetSelectedOption('u267')) == ('北京')) {

SetSelectedOption('u274', '北京治安大队');

}
});
gv_vAlignTable['u280'] = 'center';gv_vAlignTable['u294'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u171'] = 'center';
$axure.eventManager.change('u266', function(e) {

if ((GetSelectedOption('u266')) == ('请选择')) {

SetSelectedOption('u267', '请选择');

SetSelectedOption('u274', '请选择');

}

if ((GetSelectedOption('u266')) == ('北京')) {

SetSelectedOption('u267', '北京');

SetSelectedOption('u274', '北京治安大队');

}
});
document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场验证.html');

}
});
gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u315'] = 'center';document.getElementById('u293_img').tabIndex = 0;

u293.style.cursor = 'pointer';
$axure.eventManager.click('u293', function(e) {

if (ValueContains(GetWidgetText('u283'), '安保')) {

SetCheckState('u287', true);

}

if (ValueContains(GetWidgetText('u283'), '舞美')) {

SetCheckState('u289', true);

}

if (true) {

	SetPanelVisibility('u284','toggle','fade',100);

	SetPanelVisibility('u284','','fade',100);

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
gv_vAlignTable['u265'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u238'] = 'center';document.getElementById('u314_img').tabIndex = 0;

u314.style.cursor = 'pointer';
$axure.eventManager.click('u314', function(e) {

if (true) {

SetWidgetFormText('u264', GetWidgetText('u314'));

	SetPanelVisibility('u301','hidden','fade',100);

}
});
gv_vAlignTable['u292'] = 'top';gv_vAlignTable['u133'] = 'center';u250.tabIndex = 0;

u250.style.cursor = 'pointer';
$axure.eventManager.click('u250', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; </span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">修改</span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">操作员</span></p>');

SetWidgetFormText('u259', GetWidgetText('u109'));

SetWidgetFormText('u261', GetWidgetText('u111'));

SetWidgetFormText('u264', GetWidgetText('u115'));

SetSelectedOption('u274', GetWidgetText('u144'));

SetWidgetFormText('u283', GetWidgetText('u119'));

SetSelectedOption('u278', GetWidgetText('u113'));

SetCheckState('u270', true);

SetCheckState('u272', false);

	var obj1 = document.getElementById("u266");
    obj1.disabled = true;

	var obj1 = document.getElementById("u267");
    obj1.disabled = true;

	var obj1 = document.getElementById("u272");
    obj1.disabled = true;

	var obj1 = document.getElementById("u270");
    obj1.disabled = true;

	var obj1 = document.getElementById("u259");
    obj1.disabled = true;

	SetPanelVisibility('u251','','fade',300);

}
});
gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u255'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u277'] = 'top';gv_vAlignTable['u131'] = 'center';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('项目配额管理.html');

}
});
gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u262'] = 'top';gv_vAlignTable['u322'] = 'center';gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u249'] = 'top';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u275'] = 'top';document.getElementById('u17_img').tabIndex = 0;

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
gv_vAlignTable['u248'] = 'center';u210.tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; </span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">修改</span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">操作员</span></p>');

SetWidgetFormText('u259', GetWidgetText('u196'));

SetWidgetFormText('u261', GetWidgetText('u198'));

SetWidgetFormText('u264', GetWidgetText('u202'));

SetSelectedOption('u274', GetWidgetText('u212'));

SetWidgetFormText('u283', GetWidgetText('u206'));

SetSelectedOption('u278', GetWidgetText('u200'));

SetCheckState('u272', true);

SetSelectedOption('u266', '北京');

SetSelectedOption('u267', '北京');

	var obj1 = document.getElementById("u266");
    obj1.disabled = true;

	var obj1 = document.getElementById("u267");
    obj1.disabled = true;

	var obj1 = document.getElementById("u272");
    obj1.disabled = true;

	var obj1 = document.getElementById("u270");
    obj1.disabled = true;

	var obj1 = document.getElementById("u259");
    obj1.disabled = true;

	var obj1 = document.getElementById("u274");
    obj1.disabled = true;

	SetPanelVisibility('u251','','fade',300);

}
});
gv_vAlignTable['u210'] = 'top';document.getElementById('u325_img').tabIndex = 0;

u325.style.cursor = 'pointer';
$axure.eventManager.click('u325', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; 新增操作员</span></p>');

SetWidgetFormText('u259', '');

SetWidgetFormText('u261', '');

SetWidgetFormText('u264', '');

SetWidgetFormText('u283', '');

SetCheckState('u270', false);

SetCheckState('u272', true);

SetSelectedOption('u266', '请选择');

SetSelectedOption('u267', '请选择');

SetSelectedOption('u274', '请选择');

SetSelectedOption('u278', '有效');

SetCheckState('u289', false);

SetCheckState('u287', false);

	var obj1 = document.getElementById("u259");
    obj1.disabled = false;

	var obj1 = document.getElementById("u266");
    obj1.disabled = false;

	var obj1 = document.getElementById("u267");
    obj1.disabled = false;

	var obj1 = document.getElementById("u270");
    obj1.disabled = false;

	var obj1 = document.getElementById("u272");
    obj1.disabled = false;

	var obj1 = document.getElementById("u274");
    obj1.disabled = false;

	SetPanelVisibility('u251','','fade',300);

}
});
document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('快捷制证（监管）.html');

}
});
gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u260'] = 'top';document.getElementById('u9_img').tabIndex = 0;

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
gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u189'] = 'center';gv_vAlignTable['u309'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u273'] = 'top';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u311'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u155'] = 'top';gv_vAlignTable['u209'] = 'center';
u272.style.cursor = 'pointer';
$axure.eventManager.click('u272', function(e) {

if ((GetCheckState('u272')) == (true)) {

SetSelectedOption('u274', '请选择');

	var obj1 = document.getElementById("u274");
    obj1.disabled = true;

	var obj1 = document.getElementById("u267");
    obj1.disabled = false;

	var obj1 = document.getElementById("u266");
    obj1.disabled = false;

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
gv_vAlignTable['u104'] = 'center';document.getElementById('u308_img').tabIndex = 0;

u308.style.cursor = 'pointer';
$axure.eventManager.click('u308', function(e) {

if (true) {

SetWidgetFormText('u264', GetWidgetText('u312'));

	SetPanelVisibility('u301','hidden','fade',100);

}
});
gv_vAlignTable['u232'] = 'top';u235.tabIndex = 0;

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	SetPanelVisibility('u236','','fade',100);

}
});
gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u75'] = 'center';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

SetWidgetNotSelected('u9');
SetWidgetNotSelected('u11');
SetWidgetSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
}
});
gv_vAlignTable['u271'] = 'top';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u73'] = 'center';
u270.style.cursor = 'pointer';
$axure.eventManager.click('u270', function(e) {

if ((GetCheckState('u270')) == (true)) {

SetSelectedOption('u266', '请选择');

SetSelectedOption('u267', '请选择');

	var obj1 = document.getElementById("u266");
    obj1.disabled = true;

	var obj1 = document.getElementById("u267");
    obj1.disabled = true;

	var obj1 = document.getElementById("u274");
    obj1.disabled = false;

}
});
gv_vAlignTable['u199'] = 'center';gv_vAlignTable['u319'] = 'center';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u300'] = 'center';gv_vAlignTable['u116'] = 'center';u186.tabIndex = 0;

u186.style.cursor = 'pointer';
$axure.eventManager.click('u186', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; </span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">修改</span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">操作员</span></p>');

SetWidgetFormText('u259', GetWidgetText('u172'));

SetWidgetFormText('u261', GetWidgetText('u174'));

SetWidgetFormText('u264', GetWidgetText('u178'));

SetSelectedOption('u274', GetWidgetText('u188'));

SetWidgetFormText('u283', GetWidgetText('u182'));

SetSelectedOption('u278', GetWidgetText('u176'));

SetCheckState('u272', true);

SetSelectedOption('u266', '北京');

SetSelectedOption('u267', '北京');

	var obj1 = document.getElementById("u266");
    obj1.disabled = true;

	var obj1 = document.getElementById("u267");
    obj1.disabled = true;

	var obj1 = document.getElementById("u272");
    obj1.disabled = true;

	var obj1 = document.getElementById("u270");
    obj1.disabled = true;

	var obj1 = document.getElementById("u259");
    obj1.disabled = true;

	var obj1 = document.getElementById("u274");
    obj1.disabled = true;

	SetPanelVisibility('u251','','fade',300);

}
});
gv_vAlignTable['u186'] = 'top';gv_vAlignTable['u226'] = 'center';u190.tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	SetPanelVisibility('u236','','fade',100);

}
});
gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u313'] = 'center';gv_vAlignTable['u291'] = 'top';gv_vAlignTable['u246'] = 'center';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场配置.html');

}
});
gv_vAlignTable['u114'] = 'center';document.getElementById('u312_img').tabIndex = 0;

u312.style.cursor = 'pointer';
$axure.eventManager.click('u312', function(e) {

if (true) {

SetWidgetFormText('u264', GetWidgetText('u312'));

	SetPanelVisibility('u301','hidden','fade',100);

}
});
gv_vAlignTable['u290'] = 'top';gv_vAlignTable['u187'] = 'top';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('激活票证.html');

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u286'] = 'center';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u244'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u185'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样制作.html');

}
});
gv_vAlignTable['u324'] = 'center';document.getElementById('u243_img').tabIndex = 0;

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	SetPanelVisibility('u236','hidden','fade',100);

}
});
gv_vAlignTable['u257'] = 'center';gv_vAlignTable['u69'] = 'center';
u289.style.cursor = 'pointer';
$axure.eventManager.click('u289', function(e) {

if (true) {

SetWidgetFormText('u283', '');

}

if ((GetCheckState('u287')) == (true)) {

SetWidgetFormText('u283', '' + (GetWidgetText('u283')) + ' ' + (GetWidgetText('u287')) + ' ');

}

if ((GetCheckState('u289')) == (true)) {

SetWidgetFormText('u283', '' + (GetWidgetText('u283')) + ' ' + (GetWidgetText('u289')) + ' ');

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u242'] = 'center';gv_vAlignTable['u96'] = 'center';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('印刷厂对账报表（监管）.html');

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u71'] = 'top';document.getElementById('u15_img').tabIndex = 0;

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
gv_vAlignTable['u288'] = 'top';document.getElementById('u66_img').tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件使用（监管）.html');

}
});
u140.tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; </span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">修改</span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">操作员</span></p>');

SetWidgetFormText('u259', GetWidgetText('u126'));

SetWidgetFormText('u261', GetWidgetText('u128'));

SetWidgetFormText('u264', GetWidgetText('u132'));

SetSelectedOption('u274', GetWidgetText('u146'));

SetWidgetFormText('u283', GetWidgetText('u136'));

SetSelectedOption('u278', GetWidgetText('u130'));

SetCheckState('u272', true);

SetSelectedOption('u266', '北京');

SetSelectedOption('u267', '北京');

	var obj1 = document.getElementById("u266");
    obj1.disabled = true;

	var obj1 = document.getElementById("u267");
    obj1.disabled = true;

	var obj1 = document.getElementById("u272");
    obj1.disabled = true;

	var obj1 = document.getElementById("u270");
    obj1.disabled = true;

	var obj1 = document.getElementById("u259");
    obj1.disabled = true;

	var obj1 = document.getElementById("u274");
    obj1.disabled = true;

	SetPanelVisibility('u251','','fade',300);

}
});
gv_vAlignTable['u140'] = 'top';
$axure.eventManager.keyup('u264', function(e) {

if ((ValueContains(GetWidgetText('u264'), '北')) || (ValueContains(GetWidgetText('u264'), '京'))) {

	SetPanelState('u301', 'pd0u301','none','',500,'none','',500);

	SetPanelVisibility('u301','','fade',100);

}

if ((ValueContains(GetWidgetText('u264'), '治')) || ((ValueContains(GetWidgetText('u264'), '安')) || ((ValueContains(GetWidgetText('u264'), '大')) || (ValueContains(GetWidgetText('u264'), '队'))))) {

	SetPanelState('u301', 'pd1u301','none','',500,'none','',500);

	SetPanelVisibility('u301','','fade',100);

}

if ((ValueContains(GetWidgetText('u264'), '春')) || ((ValueContains(GetWidgetText('u264'), '秋')) || ((ValueContains(GetWidgetText('u264'), '永')) || (ValueContains(GetWidgetText('u264'), '乐'))))) {

	SetPanelState('u301', 'pd2u301','none','',500,'none','',500);

	SetPanelVisibility('u301','','fade',100);

}

if ((ValueNotContains(GetWidgetText('u264'), '北')) && ((ValueNotContains(GetWidgetText('u264'), '京')) && ((ValueNotContains(GetWidgetText('u264'), '治')) && ((ValueNotContains(GetWidgetText('u264'), '安')) && ((ValueNotContains(GetWidgetText('u264'), '大')) && ((ValueNotContains(GetWidgetText('u264'), '队')) && ((ValueNotContains(GetWidgetText('u264'), '春')) && ((ValueNotContains(GetWidgetText('u264'), '秋')) && ((ValueNotContains(GetWidgetText('u264'), '永')) && (ValueNotContains(GetWidgetText('u264'), '乐'))))))))))) {

	SetPanelVisibility('u301','hidden','fade',100);

}
});
gv_vAlignTable['u203'] = 'center';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u320'] = 'top';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u153'] = 'center';