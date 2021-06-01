for(var i = 0; i < 267; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetNotSelected('u33');
SetWidgetNotSelected('u28');
SetWidgetSelected('u26');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
SetWidgetNotSelected('u11');
SetWidgetNotSelected('u9');
}

});
gv_vAlignTable['u115'] = 'top';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样模板维护.html');

SetWidgetSelected('u21');
}
});
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u156'] = 'center';u207.tabIndex = 0;

u207.style.cursor = 'pointer';
$axure.eventManager.click('u207', function(e) {

if (((GetCheckState('u210')) == (true)) || ((GetCheckState('u201')) == (true))) {

	SetPanelState('u189', 'pd3u189','none','',500,'none','',500);

}

if (((GetCheckState('u213')) == (true)) || ((GetCheckState('u192')) == (true))) {

	SetPanelState('u189', 'pd2u189','none','',500,'none','',500);

}

if (((GetCheckState('u210')) == (true)) && ((GetCheckState('u213')) == (true))) {

	SetPanelState('u189', 'pd0u189','none','',500,'none','',500);

}
});
gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u153'] = 'top';document.getElementById('u17_img').tabIndex = 0;

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
gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u151'] = 'top';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('取卡验证.html');

}
});
gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u203'] = 'top';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('人员出入统计报表（监管）.html');

}
});
gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';u152.tabIndex = 0;

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

SetWidgetFormText('u158', GetWidgetText('u142'));

SetWidgetFormText('u160', GetWidgetText('u144'));

SetWidgetFormText('u162', GetWidgetText('u146'));

SetWidgetFormText('u164', GetWidgetText('u148'));

	SetPanelState('u154', 'pd1u154','none','',500,'none','',500);

	SetPanelVisibility('u154','','fade',300);

}
});
gv_vAlignTable['u152'] = 'top';
u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

SetWidgetFormText('u91', '');

}

if ((GetCheckState('u110')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u110')) + ' ');

}

if ((GetCheckState('u112')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u112')) + ' ');

}

if ((GetCheckState('u102')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u102')) + ' ');

}

if ((GetCheckState('u104')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u104')) + ' ');

}
});
gv_vAlignTable['u247'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u159'] = 'top';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场配置.html');

}
});
gv_vAlignTable['u141'] = 'top';document.getElementById('u11_img').tabIndex = 0;

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
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u264'] = 'center';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u214'] = 'top';
u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

SetWidgetFormText('u91', '');

}

if ((GetCheckState('u110')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u110')) + ' ');

}

if ((GetCheckState('u112')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u112')) + ' ');

}

if ((GetCheckState('u102')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u102')) + ' ');

}

if ((GetCheckState('u104')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u104')) + ' ');

}
});
document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('快捷制证（监管）.html');

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u253'] = 'center';gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u54'] = 'center';u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	SetPanelVisibility('u154','','fade',300);

}
});
gv_vAlignTable['u118'] = 'top';document.getElementById('u38_img').tabIndex = 0;

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

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u174'] = 'center';u225.tabIndex = 0;

u225.style.cursor = 'pointer';
$axure.eventManager.click('u225', function(e) {

if (((GetCheckState('u210')) == (true)) || ((GetCheckState('u201')) == (true))) {

	SetPanelState('u189', 'pd3u189','none','',500,'none','',500);

}

if (((GetCheckState('u213')) == (true)) || ((GetCheckState('u192')) == (true))) {

	SetPanelState('u189', 'pd2u189','none','',500,'none','',500);

}

if (((GetCheckState('u210')) == (true)) && ((GetCheckState('u213')) == (true))) {

	SetPanelState('u189', 'pd0u189','none','',500,'none','',500);

}
});
gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u85'] = 'top';document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办证单位对账报表（监管）.html');

}
});
gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u265'] = 'top';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	SetPanelVisibility('u117','','none',500);

}
});
gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u114'] = 'top';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件管理（监管）.html');

}
});
gv_vAlignTable['u157'] = 'top';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	SetPanelVisibility('u99','toggle','fade',200);

}
});
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u251'] = 'top';u198.tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', function(e) {

if (((GetCheckState('u210')) == (true)) || ((GetCheckState('u201')) == (true))) {

	SetPanelState('u189', 'pd3u189','none','',500,'none','',500);

}

if (((GetCheckState('u213')) == (true)) || ((GetCheckState('u192')) == (true))) {

	SetPanelState('u189', 'pd2u189','none','',500,'none','',500);

}

if (((GetCheckState('u210')) == (true)) && ((GetCheckState('u213')) == (true))) {

	SetPanelState('u189', 'pd0u189','none','',500,'none','',500);

}
});
gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u257'] = 'top';gv_vAlignTable['u56'] = 'center';u150.tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

SetWidgetFormText('u158', GetWidgetText('u132'));

SetWidgetFormText('u160', GetWidgetText('u134'));

SetWidgetFormText('u162', GetWidgetText('u136'));

SetWidgetFormText('u164', GetWidgetText('u138'));

	SetPanelState('u154', 'pd1u154','none','',500,'none','',500);

	SetPanelVisibility('u154','','fade',300);

}
});
gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u168'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样制作.html');

}
});
gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u87'] = 'top';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('印刷厂对账报表（监管）.html');

}
});
gv_vAlignTable['u193'] = 'top';
u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

SetWidgetFormText('u91', '');

}

if ((GetCheckState('u110')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u110')) + ' ');

}

if ((GetCheckState('u112')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u112')) + ' ');

}

if ((GetCheckState('u102')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u102')) + ' ');

}

if ((GetCheckState('u104')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u104')) + ' ');

}
});

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if ((GetCheckState('u192')) == (true)) {

SetCheckState('u213', true);

}

if ((GetCheckState('u192')) == (false)) {

SetCheckState('u213', false);

}
});
document.getElementById('u66_img').tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件使用（监管）.html');

}
});
gv_vAlignTable['u211'] = 'top';
u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

SetWidgetFormText('u91', '');

}

if ((GetCheckState('u110')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u110')) + ' ');

}

if ((GetCheckState('u112')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u112')) + ' ');

}

if ((GetCheckState('u102')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u102')) + ' ');

}

if ((GetCheckState('u104')) == (true)) {

SetWidgetFormText('u91', '' + (GetWidgetText('u91')) + ' ' + (GetWidgetText('u104')) + ' ');

}
});
u242.tabIndex = 0;

u242.style.cursor = 'pointer';
$axure.eventManager.click('u242', function(e) {

if (true) {

	SetPanelState('u189', 'pd0u189','none','',500,'none','',500);

SetWidgetFormText('u243', '');

SetCheckState('u231', false);

SetCheckState('u234', false);

}
});
gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u109'] = 'center';
$axure.eventManager.change('u84', function(e) {

if ((GetSelectedOption('u84')) != ('请选择')) {

	SetPanelVisibility('u86','','fade',300);

SetWidgetFormText('u91', '安保 舞美');

SetCheckState('u110', true);

SetCheckState('u112', true);

}
});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u239'] = 'center';u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	SetPanelState('u99', 'pd1u99','none','',500,'none','',500);

	SetPanelVisibility('u99','','fade',300);

}
});
gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u260'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u255'] = 'center';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u209'] = 'center';document.getElementById('u94_img').tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	SetPanelVisibility('u99','toggle','fade',200);

}
});
document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('系统配置.html');

}
});
document.getElementById('u9_img').tabIndex = 0;

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
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u163'] = 'top';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('权限管理.html');

SetWidgetSelected('u19');
}
});
gv_vAlignTable['u121'] = 'top';document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场验证.html');

}
});
gv_vAlignTable['u70'] = 'top';u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (((GetCheckState('u178')) == (true)) && ((GetCheckState('u181')) == (false))) {

	SetPanelState('u189', 'pd2u189','none','',500,'none','',500);

SetCheckState('u178', false);

SetCheckState('u181', false);

SetCheckState('u213', true);

SetCheckState('u192', true);

SetCheckState('u210', false);

SetCheckState('u201', false);

}

if (((GetCheckState('u178')) == (false)) && ((GetCheckState('u181')) == (true))) {

	SetPanelState('u189', 'pd3u189','none','',500,'none','',500);

SetCheckState('u178', false);

SetCheckState('u181', false);

SetCheckState('u210', true);

SetCheckState('u201', true);

SetCheckState('u213', false);

SetCheckState('u192', false);

}

if (((GetCheckState('u178')) == (true)) && ((GetCheckState('u181')) == (true))) {

	SetPanelState('u189', 'pd1u189','none','',500,'none','',500);

SetCheckState('u178', false);

SetCheckState('u181', false);

SetCheckState('u210', false);

SetCheckState('u213', false);

SetCheckState('u201', false);

SetCheckState('u192', false);

}
});
gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u230'] = 'center';
u213.style.cursor = 'pointer';
$axure.eventManager.click('u213', function(e) {

if ((GetCheckState('u213')) == (true)) {

SetCheckState('u192', true);

}

if ((GetCheckState('u213')) == (false)) {

SetCheckState('u192', false);

}
});

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if ((GetCheckState('u210')) == (true)) {

SetCheckState('u201', true);

}

if ((GetCheckState('u210')) == (false)) {

SetCheckState('u201', false);

}
});
document.getElementById('u13_img').tabIndex = 0;

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
gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u129'] = 'top';gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u111'] = 'top';document.getElementById('u171_img').tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

}
});
gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u96'] = 'top';document.getElementById('u15_img').tabIndex = 0;

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
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u93'] = 'center';document.getElementById('u167_img').tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

}
});
gv_vAlignTable['u12'] = 'center';
u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if ((GetCheckState('u201')) == (true)) {

SetCheckState('u210', true);

}

if ((GetCheckState('u201')) == (false)) {

SetCheckState('u210', false);

}
});
document.getElementById('u165_img').tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if ((GetWidgetText('u162')) == ('安保')) {

SetWidgetRichText('u139', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u164')) + '</span></p>');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelVisibility('u154','hidden','none',500);

}

if ((GetWidgetText('u162')) == ('舞美')) {

SetWidgetRichText('u149', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u164')) + '</span></p>');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelVisibility('u154','hidden','none',500);

}
});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u248'] = 'top';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u143'] = 'top';u220.tabIndex = 0;

u220.style.cursor = 'pointer';
$axure.eventManager.click('u220', function(e) {

if (((GetCheckState('u210')) == (true)) || ((GetCheckState('u201')) == (true))) {

	SetPanelState('u189', 'pd3u189','none','',500,'none','',500);

}

if (((GetCheckState('u213')) == (true)) || ((GetCheckState('u192')) == (true))) {

	SetPanelState('u189', 'pd2u189','none','',500,'none','',500);

}

if (((GetCheckState('u210')) == (true)) && ((GetCheckState('u213')) == (true))) {

	SetPanelState('u189', 'pd0u189','none','',500,'none','',500);

}
});
gv_vAlignTable['u220'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u180'] = 'top';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('项目配额管理.html');

}
});
gv_vAlignTable['u194'] = 'top';