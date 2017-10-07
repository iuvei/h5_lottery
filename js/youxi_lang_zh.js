﻿// the language package of lottery highgame js
var lot_lang = {

    /* ---------- error message ------------ */
    em_s1: '以下号码错误，已进行自动过滤',
    em_s2: '以下号码重复，已进行自动过滤',
    em_s29: 'Sorry, 该玩法最多只能选择8个号码！',

    /* -------------- button  -------------- */
    bt_sel_all: '全',
    bt_sel_big: '大',
    bt_sel_small: '小',
    bt_sel_odd: '奇',
    bt_sel_even: '偶',
    bt_sel_clean: '清',
    bt_sel_clean_bj: '清空',
    bt_sel_clean_all: '全清',

    /* ----------- description  ------------ */
    dec_s1: '注',
    dec_s1_1: '注数 :',
    dec_s2: '倍',
    dec_s2_1: '倍数 :',
    dec_s3: '元', // 游戏币
    dec_s4: '<div class="inputdesc" ><p class="inputdesc_title">注单输入规则如下 :</p><p>1.请手动输入号码;</p><p>2.单注内各号码保持相连;</p><p>3.不同注号码间请用 空格[ ] 或是 回车[Enter] 隔开;</p><p>4.单数较多时，提交注单需要一定时间，请耐心等候;</p><p class="strong">※重覆及错误号码会自动去除。</p></div>',
    dec_s5: '详情',
    dec_s6: '关闭',
    dec_s7: '(当前期)',
    dec_s8: '<div class="title check">确认付款<p>第<span class="periods"> [issue] </span>期</p></div>', // 投注付款出現視窗
    dec_s9: '总额 :', // 总金额
    dec_s10: '同倍追号',
    dec_s11: '翻倍追号',
    dec_s12: '利润金额追号',
    dec_s13: '利润率追号',
    dec_s14: '起始倍数',
    dec_s15: '追号期数',
    dec_s15_1: '追号 :',
    dec_s16: '追号总金额',
    dec_s17: '隔',
    dec_s18: '期',
    dec_s19: '×',
    dec_s20: '￥',
    dec_s21: '天',
    dec_s22: '小时',
    dec_s23: '分',
    dec_s24: '删除',
    dec_s25: '温馨提示',
    dec_s26: '<div class="inputdesc" >每注号码之间请使用逗号或回车隔开。注意：号码之间要用空格隔开，不足2位要在前面加0。</div>',
    dec_s27: '载入文件',
    dec_s28: '<img src="/js/nsc/dialogUI/ok.png" />&nbsp;载入文件成功',
    dec_s29: '最低收益率',
    dec_s30: '选择位置:',
    dec_s31: ['万位', '千位', '百位', '十位', '个位'],

    /* ---------- alert message  ----------- */
    am_s3: '已删除以下重复号码:',
    am_s4: '没有重复号码',
    am_s5: '是否清空确认区中所有投注内容？',
    am_s6: '请先添加投注内容',
    am_s7: '请先添加投注内容',
    am_s8: '请填写追号期数',
    am_s9: '追号期数不正确，超出了最大可追号期数',
    am_s10: '请填写倍数',
    am_s11: '请填写相隔期数',
    am_s12: '<strong>同倍追号</strong>:&nbsp;&nbsp;[times] 倍\n\n',
    am_s13: '<strong>翻倍追号: </strong>\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相隔 [step] 期  x [times] 倍\n\n',
    am_s14: '确定要追号 [count] 期？',
    am_s15: '非常抱歉，本彩种暂停销售。\r\n请前往其他游戏。', // '当期销售已截止，请进入下一期购买。'
    am_s15_2: '该彩种目前已过销售时间，\r\n请在销售周期时间内投注。',
    am_s15_3: '<div class="timeout">投注时间已经结束，<br/>投注内容将进到 第',
    am_s16: '获取数据失败,请刷新页面',
    am_s17: '登录超时，或者账户在其他地方登录，请重新登录',
    am_s18: '未到销售时间',
    am_s19: '号码选择不完整，请重新选择',
    am_s20: '请选择要追号的奖期',
    am_s21: '追号奖期中,第\n <font class="red">[errorIssue]</font> 期倍数错误',
    am_s22: '<h3 id="loading_msg">数据提交中，请稍后....</h3>',
    am_s23: '请求超时,请重试',
    am_s24: '购买成功',
    am_s25: '成功投注：<font class="red">[success]</font>单，失败：<font class="red">[fail]</font>单。以下内容投注失败：',
    am_s26: '确定要清空购物区吗？', // 是否需要清空所有投注项？
    am_s27: '数据出错',
    am_s28: '<div class="timeout">购物区内已有相同注单。</div>',
    am_s29: '号码输入有误，请重新输入',
    am_s30: '利润率错误',
    am_s31: '多玩法不支持利润率追号，请选择单一玩法进行投注',
    am_s32: '此玩法不支持利润率追号，请用其他追号方式',
    am_s33: '多圆角模式不支持利润率追号，请选择单一圆角模式',
    am_s34: '<strong>利润率追号: </strong>\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最低利润率：[margin] ，起始倍数：[times]\n\n',
    am_s35: '最多可选择 %s 个号码',
    am_s36: '重复提交，可能是网络过慢原因造成',
    am_s37: '对不起，所选择的快VS慢的号码数量不一致，请重新选择！',
    am_s38: '对不起，竞速车辆快VS慢不能是同一辆车，请重新选择！',
    am_s39: '请添加投注到号码栏后，再次选择号码！',
    am_s40: '<h3 id="loading_msg">数据加载中，请稍后....</h3>',
    am_s41: '此操作将会取消当前追号方案',
    test: '',
};
