for(var i = 0; i < 298; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetNotSelected('u17');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u11');
SetWidgetSelected('u9');
SetWidgetNotSelected('u26');
SetWidgetNotSelected('u28');
SetWidgetNotSelected('u33');
}

});
gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u122'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样模板维护.html');

SetWidgetSelected('u21');
}
});
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u243'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u140'] = 'center';document.getElementById('u17_img').tabIndex = 0;

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
gv_vAlignTable['u212'] = 'center';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('取卡验证.html');

}
});
gv_vAlignTable['u256'] = 'center';gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u229'] = 'top';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('人员出入统计报表（监管）.html');

}
});
gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u288'] = 'top';gv_vAlignTable['u278'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u120'] = 'top';document.getElementById('u189_img').tabIndex = 0;

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','fade',500);

}
});
gv_vAlignTable['u108'] = 'center';document.getElementById('u247_img').tabIndex = 0;

u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

SetWidgetRichText('u265', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u281')) + '</span></p>');

SetWidgetRichText('u267', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u246')) + '</span></p>');

SetWidgetRichText('u269', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u263')) + '</span></p>');

SetWidgetRichText('u248', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">新增</span></p>');
function waitu24ee2aff86f54e47964e37dc7fe3c28b1() {

SetSelectedOption('u281', '请选择岗职');

SetSelectedOption('u263', '有效');

SetWidgetFormText('u246', '岗职区域');
}
setTimeout(waitu24ee2aff86f54e47964e37dc7fe3c28b1, 10);

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u238'] = 'center';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场配置.html');

}
});
gv_vAlignTable['u292'] = 'top';document.getElementById('u11_img').tabIndex = 0;

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
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u133'] = 'center';
u289.style.cursor = 'pointer';
$axure.eventManager.click('u289', function(e) {

if (true) {

SetWidgetFormText('u246', '');

}

if ((GetCheckState('u285')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u285')) + ' ');

}

if ((GetCheckState('u287')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u287')) + ' ');

}

if ((GetCheckState('u289')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u289')) + ' ');

}
});
gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u185'] = 'top';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u258'] = 'center';
u287.style.cursor = 'pointer';
$axure.eventManager.click('u287', function(e) {

if (true) {

SetWidgetFormText('u246', '');

}

if ((GetCheckState('u285')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u285')) + ' ');

}

if ((GetCheckState('u287')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u287')) + ' ');

}

if ((GetCheckState('u289')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u289')) + ' ');

}
});
gv_vAlignTable['u99'] = 'center';document.getElementById('u66_img').tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件使用（监管）.html');

}
});
document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('快捷制证（监管）.html');

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u276'] = 'center';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u280'] = 'center';gv_vAlignTable['u41'] = 'center';document.getElementById('u172_img').tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','fade',500);

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u208'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('激活票证.html');

}
});
gv_vAlignTable['u297'] = 'center';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u267'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('录入项目.html');

}
});
gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u254'] = 'center';gv_vAlignTable['u85'] = 'center';document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办证单位对账报表（监管）.html');

}
});
gv_vAlignTable['u286'] = 'top';gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u202'] = 'center';document.getElementById('u166_img').tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','fade',500);

}
});
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u223'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件管理（监管）.html');

}
});
gv_vAlignTable['u221'] = 'center';u126.tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

SetWidgetFormText('u199', '区域名称');

SetWidgetFormText('u200', '区域描述');

SetWidgetRichText('u202', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">新增</span></p>');

	SetPanelVisibility('u196','','fade',500);

}
});
gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u290'] = 'top';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u214'] = 'center';u127.tabIndex = 0;

u127.style.cursor = 'pointer';
$axure.eventManager.click('u127', function(e) {

if (true) {

SetSelectedOption('u281', '请选择岗职');

SetWidgetFormText('u246', '岗职区域');

SetCheckState('u285', false);

SetCheckState('u287', false);

SetCheckState('u289', false);

SetWidgetRichText('u248', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">新增</span></p>');

	SetPanelVisibility('u239','','fade',500);

}
});
gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u56'] = 'center';document.getElementById('u187_img').tabIndex = 0;

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','fade',500);

}
});
gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u106'] = 'center';document.getElementById('u168_img').tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','fade',500);

}
});
gv_vAlignTable['u154'] = 'top';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样制作.html');

}
});
gv_vAlignTable['u87'] = 'center';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('印刷厂对账报表（监管）.html');

}
});
document.getElementById('u193_img').tabIndex = 0;

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','fade',500);

}
});
gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u269'] = 'center';gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u250'] = 'top';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('权限管理.html');

SetWidgetSelected('u19');
}
});
document.getElementById('u242_img').tabIndex = 0;

u242.style.cursor = 'pointer';
$axure.eventManager.click('u242', function(e) {

if (true) {

SetSelectedOption('u281', '请选择岗职');

SetCheckState('u285', false);

SetCheckState('u287', false);

SetCheckState('u289', false);

SetWidgetFormText('u246', '岗职区域');

SetWidgetRichText('u248', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">新增</span></p>');

	SetPanelVisibility('u239','hidden','fade',500);

}
});
gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u293'] = 'top';gv_vAlignTable['u260'] = 'center';gv_vAlignTable['u273'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u228'] = 'center';document.getElementById('u294_img').tabIndex = 0;

u294.style.cursor = 'pointer';
$axure.eventManager.click('u294', function(e) {

if (true) {

	SetPanelVisibility('u282','toggle','fade',200);

}
});
document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('系统配置.html');

}
});
gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u102'] = 'top';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

SetWidgetSelected('u9');
SetWidgetNotSelected('u11');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
}
});
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u91'] = 'center';u131.tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

	SetPanelState('u151', 'pd1u151','none','',500,'none','',500);

	SetPanelVisibility('u151','','fade',500);

}
});
gv_vAlignTable['u131'] = 'top';document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场验证.html');

}
});
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u272'] = 'center';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u210'] = 'center';document.getElementById('u13_img').tabIndex = 0;

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
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u274'] = 'top';u261.tabIndex = 0;

u261.style.cursor = 'pointer';
$axure.eventManager.click('u261', function(e) {

if (true) {

	var obj1 = document.getElementById("u281");
    obj1.focus();

SetSelectedOption('u281', GetWidgetText('u264'));

SetWidgetFormText('u246', GetWidgetText('u266'));

SetWidgetRichText('u248', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">保存</span></p>');

}

if (ValueContains(GetWidgetText('u266'), 'A')) {

SetCheckState('u285', true);

}

if (ValueContains(GetWidgetText('u266'), 'B')) {

SetCheckState('u287', true);

}

if (ValueContains(GetWidgetText('u266'), 'C')) {

SetCheckState('u289', true);

}
});
gv_vAlignTable['u261'] = 'top';gv_vAlignTable['u284'] = 'center';gv_vAlignTable['u262'] = 'top';gv_vAlignTable['u175'] = 'center';u217.tabIndex = 0;

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

	var obj1 = document.getElementById("u199");
    obj1.focus();

SetWidgetFormText('u199', GetWidgetText('u220'));

SetWidgetFormText('u200', GetWidgetText('u222'));

SetSelectedOption('u219', GetWidgetText('u224'));

SetWidgetRichText('u202', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">保存</span></p>');

}
});
gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u111'] = 'center';
u285.style.cursor = 'pointer';
$axure.eventManager.click('u285', function(e) {

if (true) {

SetWidgetFormText('u246', '');

}

if ((GetCheckState('u285')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u285')) + ' ');

}

if ((GetCheckState('u287')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u287')) + ' ');

}

if ((GetCheckState('u289')) == (true)) {

SetWidgetFormText('u246', '' + (GetWidgetText('u246')) + ' ' + (GetWidgetText('u289')) + ' ');

}
});
gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u146'] = 'center';document.getElementById('u15_img').tabIndex = 0;

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
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u167'] = 'center';document.getElementById('u237_img').tabIndex = 0;

u237.style.cursor = 'pointer';
$axure.eventManager.click('u237', function(e) {

if (true) {

SetWidgetFormText('u199', '区域名称');

SetWidgetFormText('u200', '区域描述');

SetWidgetRichText('u202', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">新增</span></p>');

	SetPanelVisibility('u196','hidden','fade',500);

}
});
gv_vAlignTable['u12'] = 'center';document.getElementById('u201_img').tabIndex = 0;

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if ((GetWidgetText('u201')) == ('保存')) {

SetWidgetRichText('u221', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u199')) + '</span></p>');

SetWidgetRichText('u223', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u200')) + '</span></p>');

SetWidgetRichText('u225', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u219')) + '</span></p>');
function waitu5c05149dae8f48a8b9503bc7966193cd1() {

SetWidgetFormText('u199', '区域名称');

SetWidgetFormText('u200', '区域描述');

SetSelectedOption('u219', '有效');

SetWidgetRichText('u202', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">新增</span></p>');
}
setTimeout(waitu5c05149dae8f48a8b9503bc7966193cd1, 10);

}
});
document.getElementById('u296_img').tabIndex = 0;

u296.style.cursor = 'pointer';
$axure.eventManager.click('u296', function(e) {

if (true) {

	SetPanelVisibility('u282','toggle','fade',200);

}
});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u248'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u22'] = 'center';document.getElementById('u143_img').tabIndex = 0;

u143.style.cursor = 'pointer';
$axure.eventManager.click('u143', function(e) {

if (true) {

	SetPanelState('u151', 'pd0u151','none','',500,'none','',500);

	SetPanelVisibility('u151','','fade',500);

}
});
gv_vAlignTable['u291'] = 'top';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u180'] = 'top';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('项目配额管理.html');

}
});
gv_vAlignTable['u194'] = 'center';