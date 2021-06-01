for(var i = 0; i < 198; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetNotSelected('u33');
SetWidgetNotSelected('u28');
SetWidgetNotSelected('u26');
SetWidgetNotSelected('u17');
SetWidgetSelected('u15');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u11');
SetWidgetNotSelected('u9');
}

});
gv_vAlignTable['u115'] = 'center';u122.tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

SetWidgetFormText('u135', GetWidgetText('u112'));

;

SetSelectedOption('u140', GetWidgetText('u118'));

SetCheckState('u136', false);

SetCheckState('u138', true);

;

;

SetWidgetRichText('u128', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; </span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">修改</span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">单位</span></p>');

	var obj1 = document.getElementById("u136");
    obj1.disabled = true;

	var obj1 = document.getElementById("u138");
    obj1.disabled = true;

	SetPanelVisibility('u124','','fade',300);

}
});
gv_vAlignTable['u122'] = 'top';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样模板维护.html');

SetWidgetSelected('u21');
}
});
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u130'] = 'center';document.getElementById('u17_img').tabIndex = 0;

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
gv_vAlignTable['u151'] = 'center';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('取卡验证.html');

}
});
document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('人员出入统计报表（监管）.html');

}
});
gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'center';
u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if ((GetCheckState('u138')) == (true)) {

}
});
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u152'] = 'top';u110.tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

SetWidgetFormText('u135', GetWidgetText('u102'));

;

SetSelectedOption('u140', GetWidgetText('u108'));

SetCheckState('u136', true);

SetCheckState('u138', false);

SetWidgetRichText('u128', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; </span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">修改</span><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">单位</span></p>');

	var obj1 = document.getElementById("u136");
    obj1.disabled = true;

	var obj1 = document.getElementById("u138");
    obj1.disabled = true;

	SetPanelVisibility('u124','','fade',300);

}
});
gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u37'] = 'center';document.getElementById('u62_img').tabIndex = 0;

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
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u99'] = 'center';document.getElementById('u66_img').tabIndex = 0;

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
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u197'] = 'top';document.getElementById('u38_img').tabIndex = 0;

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
gv_vAlignTable['u128'] = 'center';document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办证单位对账报表（监管）.html');

}
});
gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u10'] = 'center';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	SetPanelVisibility('u124','hidden','fade',300);

}
});
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u123'] = 'top';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件管理（监管）.html');

}
});
gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u169'] = 'top';gv_vAlignTable['u56'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if ((GetCheckState('u136')) == (true)) {

SetWidgetRichText('u103', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u135')) + '</span></p>');

SetWidgetRichText('u107', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + '</span></p>');

SetWidgetRichText('u109', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u140')) + '</span></p>');

	SetPanelVisibility('u124','hidden','fade',300);

}
else
if ((GetCheckState('u138')) == (true)) {

SetWidgetRichText('u113', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u135')) + '</span></p>');

SetWidgetRichText('u117', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + '</span></p>');

SetWidgetRichText('u119', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u140')) + '</span></p>');

	SetPanelVisibility('u124','hidden','fade',300);

}
});
gv_vAlignTable['u154'] = 'top';document.getElementById('u40_img').tabIndex = 0;

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
gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u121'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('权限管理.html');

SetWidgetSelected('u19');
}
});
gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u170'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u134'] = 'top';gv_vAlignTable['u177'] = 'center';document.getElementById('u60_img').tabIndex = 0;

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
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'top';document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场验证.html');

}
});
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u117'] = 'center';document.getElementById('u13_img').tabIndex = 0;

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
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u175'] = 'center';document.getElementById('u129_img').tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	SetPanelVisibility('u124','hidden','fade',300);

}
});
gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

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
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u107'] = 'center';
u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if ((GetCheckState('u136')) == (true)) {

}
});
document.getElementById('u180_img').tabIndex = 0;

u180.style.cursor = 'pointer';
$axure.eventManager.click('u180', function(e) {

if (true) {

SetWidgetFormText('u135', '');

;

;

;

SetSelectedOption('u140', '有效');

SetCheckState('u136', false);

SetCheckState('u138', true);

SetWidgetRichText('u128', '<p style="text-align:left;"><span style="font-family:微软雅黑;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">&nbsp; &nbsp; 新增单位</span></p>');

	var obj1 = document.getElementById("u136");
    obj1.disabled = false;

	var obj1 = document.getElementById("u138");
    obj1.disabled = false;

	SetPanelVisibility('u124','','none',500);

}
});
document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('项目配额管理.html');

}
});
gv_vAlignTable['u194'] = 'top';