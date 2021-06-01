for(var i = 0; i < 143; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetNotSelected('u9');
SetWidgetNotSelected('u11');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
SetWidgetNotSelected('u26');
SetWidgetNotSelected('u28');
SetWidgetNotSelected('u33');
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
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u140'] = 'center';document.getElementById('u17_img').tabIndex = 0;

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
gv_vAlignTable['u135'] = 'top';document.getElementById('u42_img').tabIndex = 0;

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
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u37'] = 'center';document.getElementById('u62_img').tabIndex = 0;

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
gv_vAlignTable['u75'] = 'center';
$axure.eventManager.change('u133', function(e) {

if ((GetSelectedOption('u133')) != ('请选择')) {

	var obj1 = document.getElementById("u85");
    obj1.disabled = false;

}

if ((GetSelectedOption('u133')) == ('请选择')) {

	var obj1 = document.getElementById("u85");
    obj1.disabled = true;

}
});
gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u99'] = 'center';document.getElementById('u66_img').tabIndex = 0;

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

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u16'] = 'center';document.getElementById('u125_img').tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办理证件（办证单位）.html');

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u54'] = 'center';document.getElementById('u38_img').tabIndex = 0;

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

$axure.eventManager.change('u85', function(e) {

if ((GetSelectedOption('u85')) != ('请选择')) {

	SetPanelVisibility('u86','','fade',300);

	SetPanelVisibility('u129','','fade',300);

}

if ((GetSelectedOption('u85')) == ('请选择')) {

	SetPanelVisibility('u86','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

}
});
document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办证单位对账报表（监管）.html');

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u61'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证件管理（监管）.html');

}
});
gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u5'] = 'center';document.getElementById('u98_img').tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('办理证件（办证单位）.html');

}
});
gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u106'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('证样制作.html');

}
});
gv_vAlignTable['u87'] = 'top';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('印刷厂对账报表（监管）.html');

}
});
gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u121'] = 'top';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('权限管理.html');

SetWidgetSelected('u19');
}
});
gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u94'] = 'top';document.getElementById('u60_img').tabIndex = 0;

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
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u131'] = 'top';document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('现场验证.html');

}
});
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u117'] = 'top';document.getElementById('u13_img').tabIndex = 0;

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
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u111'] = 'top';
$axure.eventManager.change('u83', function(e) {

if ((GetSelectedOption('u83')) != ('请选择')) {

	var obj1 = document.getElementById("u133");
    obj1.disabled = false;

}

if ((GetSelectedOption('u83')) == ('请选择')) {

	var obj1 = document.getElementById("u133");
    obj1.disabled = true;

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u96'] = 'top';document.getElementById('u15_img').tabIndex = 0;

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
gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u136'] = 'top';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('项目配额管理.html');

}
});
