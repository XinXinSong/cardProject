for(var i = 0; i < 142; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetSelectedOption('u84', '选择治安大队');

	SetPanelVisibility('u85','hidden','none',500);

SetWidgetNotSelected('u33');
SetWidgetNotSelected('u28');
SetWidgetNotSelected('u26');
SetWidgetNotSelected('u17');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetSelected('u11');
SetWidgetNotSelected('u9');
}

});
gv_vAlignTable['u115'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样模板维护.html');

SetWidgetSelected('u21');
}
});
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u130'] = 'center';document.getElementById('u17_img').tabIndex = 0;

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
document.getElementById('u42_img').tabIndex = 0;

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
gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'center';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if ((GetWidgetText('u138')) == ('保存')) {

SetWidgetRichText('u105', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u135')) + '</span></p>');

SetWidgetRichText('u107', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u136')) + '</span></p>');

SetWidgetRichText('u109', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u137')) + '</span></p>');

SetWidgetRichText('u139', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">新增</span></p>');
function waitucc92c8c2b39846eb95d5a02f87a631fc1() {

SetWidgetFormText('u135', '岗职名称');

SetWidgetFormText('u136', '岗职描述');

SetSelectedOption('u137', '有效');
}
setTimeout(waitucc92c8c2b39846eb95d5a02f87a631fc1, 10);

}
});
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u37'] = 'center';document.getElementById('u62_img').tabIndex = 0;

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

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

SetWidgetNotSelected('u9');
SetWidgetSelected('u11');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u99'] = 'center';document.getElementById('u66_img').tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件使用（监管）.html');

}
});
u112.tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

SetWidgetFormText('u135', GetWidgetText('u104'));

SetWidgetFormText('u136', GetWidgetText('u106'));

SetSelectedOption('u137', GetWidgetText('u108'));

SetWidgetRichText('u139', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">保存</span></p>');

	var obj1 = document.getElementById("u135");
    obj1.focus();

}
});
gv_vAlignTable['u112'] = 'top';document.getElementById('u44_img').tabIndex = 0;

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
gv_vAlignTable['u128'] = 'center';document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办证单位对账报表（监管）.html');

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u123'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件管理（监管）.html');

}
});
gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u56'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样制作.html');

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u87'] = 'center';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('印刷厂对账报表（监管）.html');

}
});
gv_vAlignTable['u121'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('权限管理.html');

SetWidgetSelected('u19');
}
});
gv_vAlignTable['u109'] = 'center';
u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if ((GetSelectedOption('u84')) == ('北京治安大队')) {

	SetPanelVisibility('u85','','fade',300);

}

if ((GetSelectedOption('u84')) == ('选择治安大队')) {

	SetPanelVisibility('u85','hidden','fade',300);

}
});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u134'] = 'center';document.getElementById('u60_img').tabIndex = 0;

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
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u91'] = 'center';document.getElementById('u64_img').tabIndex = 0;

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
gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u15_img').tabIndex = 0;

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
gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u107'] = 'center';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('项目配额管理.html');

}
});
