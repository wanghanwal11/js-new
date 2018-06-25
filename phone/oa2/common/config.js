var config = {
    //登录
    "loginMobile" : getIP() + "/loginMobile.ht?",
    //菜单权限
    "getResBut" : getIP() + "/oa/sysmolile/getResBut.ht?alias=oamenu",
    //这里是通讯录
    "getmybooklistMobile" : getIP() + "/oa/getmybooklist.ht?",
    //通讯录搜索
    "esSearchMobile" : getIP() + "/eseach/core/esSearch.ht?",
    //个人详情
    "addressdetailMobile" : getIP() + "/sys/vitoperson/get.ht?",
    //申请列表
    "getServiceListPhone" : getIP() + "/acceptance/SLPT_Service/getServiceListPhone.ht?",
    //添加常用申请
   // "tobeMouldOrCancle" : getIP() + "/acceptance/SLPT_Service/tobeMouldOrCancle.ht?",
  //添加常用申请
    "tobeMouldOrCancle" : getIP() + "/acceptance/SLPT_Service/addServiceToPhone.ht?",
     //删除常用申请
    "removeMouldOrCancle" : getIP() + "/acceptance/SLPT_Service/removeServiceToPhone.ht?",
    //申请页表单
    "getPhoneForm": getIP() + "/bpm/BPM_FORM_DEF/getByserviceId.ht?serviceId=",
    
    //微信申请页表单
    "getPhoneFormWx": getIP() + "/bpm/BPM_FORM_DEF/getByserviceIdForWechat.ht?serviceId=",
    
    //表单权限
    "getFormRights": getIP() + "/acceptance/SLPT/FormRights.ht?",
    //判断流程是否上传图片
    "getFormPicture" : getIP() + "/acceptance/SLPT_ServiceAnnex/list.ht?",
    //提交申请
    "subleavefrom" : getIP() + "/bpm/BPM_TASK_OPINION/task/phoneStartFlow.ht?",   
    //图片流程绑定
    "urlImg" : getIP() + "/acceptance/SLPT_AcceptanceAnnex/saveByList.ht",
    //待办
    "vitoMyTask" : getIP() + "/acceptance/SLPT/fwblSimple.ht?pageListKey=forMe&typeNodeKey=OA",
    //已办
    "vitoMyAttend" : getIP() + "/acceptance/SLPT/fwblSimple.ht?pageListKey=myAttend&typeNodeKey=OA",
    
    //已办+待办
    "vitoMyAll" : getIP() + "/acceptance/SLPT/fwblSimple.ht?pageListKey=runList&typeNodeKey=OA",
    
    //发起
    "vitoMyStart" : getIP() + "/acceptance/SLPT/fwblSimple.ht?pageListKey=myStart&typeNodeKey=OA",
    //直接办结
    "endProcess" : getIP() + "/bpm/BPM_TASK_OPINION/task/endProcess.ht?",
    //我办理的表单权限
    "FormRightsByRunid" : getIP() + "/acceptance/SLPT/FormRightsByRunid.ht?",
    //获取办理页面表单对于值
    "phoneBl" : getIP() + "/acceptance/SLPT/phoneBlForOA.ht?",
    //获取办理图片
    "getImgList" : getIP() + "/acceptance/SLPT_AcceptanceAnnex/getByServiceRun.ht",
    //上传图片、附件
    "docUpoad" : getIP() + "/oa/docmobile/docupload.ht",
    //按钮控制
    "getbpmformbtnMobile" : getIP() + "/dispute/mobile/getbpmformbtn.ht?",
    //申请办理
    "completeMobile" : getIP() + "/bpm/BPM_TASK_OPINION/task/complete.ht?",
    //日志
    "rzMobile" : getIP() + "/oa/logmobile/logging.ht",
    //日志详情
    "rzdetail" : getIP() + "/oa/logmobile/loggdetail.ht?",
    //加班时间
    "getJiabanDays" : getIP() + "/acceptance/SLPT_Service/getJiabanDays.ht",
    //考勤
    "getCheckattendance" : getIP() + "/oa/equipmentManagement/getCheckattendance.ht?",
    //考勤权限
    "getUserByRights" : getIP() + "/oa/equipmentManagement/getUserByRights.ht",
    //他人考勤
    "getAttendanceByRights" : getIP() + "/oa/equipmentManagement/getAttendanceByRights.ht?",
    //考勤部门列表
    "getOrgTreeByOnlineUserpath" : getIP() + "/oa/equipmentManagement/getOrgTreeForPhone.ht",
    //考勤部门统计
    "getCountForOrg" : getIP() + "/oa/equipmentManagement/getCountForOrg.ht?",
    //审核按钮查询
    "getEndtimeByTaskid" : getIP() + "/bpm/BPM_TASK_OPINION/getEndtimeByTaskid.ht?",
    //公文流转审批
    "updateOpinion" : getIP() + "/bpm/BPM_TASK_OPINION/updateOpinion.ht?",
    //组织列表
    "getOrgByPath" : getIP() + "/sys/vitoorg/list.ht?",
    //岗位列表
    "Vitoposition" : getIP() + "/sys/Vitoposition/list.ht?",
    //补签
    "addSignBpm" : getIP() + "/bpm/BPM_TASK_OPINION/task/addSignBpm.ht?",
    //流程权限管理
    "checkPos" : getIP() + "/acceptance/SLPT_Service/checkPos.ht?",
    //公告列表
    "getgonggaolist" : getIP() + "/oa/mqlog/listforphone.ht?",
    //公告详情
    "getgonggaoxq" : getIP() + "/oa/mqlog/getforphone.ht?",
    //删除公告
    "delgonggao" : getIP() + "/oa/mqlog/del.ht?",
    //提交公告
    "subgonggao" : getIP() + "/oa/mqlog/saveforphone.ht?",
    //启用公告
    "updateislock" : getIP() + "/oa/mqlog/updateislock.ht?",
    //提交日志
    "mobilelogsave" : getIP() + "/oa/mobilelog/save.ht?",
    //日志列表
    "mobileloglist" : getIP() + "/oa/mobilelog/list.ht?",
    //他人日志列表
    "mobileloglistbyrights" : getIP() + "/oa/mobilelog/listbyrights.ht?",
    //日志详情
    "mobilelogget" : getIP() + "/oa/mobilelog/get.ht?",
    //发送评论
    "sendpinglun" : getIP() + "/oa/information/commentlog.ht?",
    
    //是否有上报事件权限
    "checkUserMobile" : getIP() + "/dispute/mobile/checkUser.ht",
    //我的待办
    "mytodoMobile" : getIP() + "/dispute/mobile/mytodoMobile.ht?",
    //我的办件
    "myhandlerMobile" : getIP() + "/dispute/mobile/myhandlerMobile.ht?",
    
    //判断是否为待办事件
    "wetherDone" : getIP() + "/bpm/BPM_TASK_OPINION/wetherDone.ht?",
    //登陆
    "wxLogin" : getIP() + "/wxLogin.ht?",
    
    //事件详情
    "getMobile" : getIP() + "/dispute/mobile/get.ht?",
    //获取事件级别
    "getLevelName" : getIP() + "/dispute/mobile/getLevelName.ht",
    //网格化上传
    "fileuploadwork" : getIP() + "/oa/docmobile/docupload.ht?",
    //新增事件
    //"runEventMobile" : getIP() + "/dispute/mobile/runEvent.ht?",
    "runEventMobile" : getIP() + "/dispute/mobile/saveRunEvent.ht?",
    //事件类型
    "getEventtypeMobile" : getIP() + "/dispute/mobile/getEventType.ht",
    //事件搜索
    "eventsearchMobile" : getIP() + "/dispute/mobile/eventsearchMobile.ht?",
    //地图区域
    "MapTiledUrlForMobile" : getIP() + "/dispute/mobile/MapTiledUrlForMobile.ht",
    //事件处理权限
    "getbpmformbtnMobile" : getIP() + "/dispute/mobile/getbpmformbtn.ht?",
    //事件处理按钮
    "getbpmformbtnMobile" : getIP() + "/dispute/mobile/getbpmformbtn.ht?",
    //事件处理提交
    "completeMobile" : getIP() + "/bpm/BPM_TASK_OPINION/task/complete.ht?",
    //事件受理提交
    //"checkMobile" : getIP() + "/dispute/mobile/runEvent.ht?",
    "checkMobile" : getIP() + "/dispute/mobile/saveRunEvent.ht?",
    //网格化部门列表
    "getOrgMobile" : getIP() + "/dispute/mobile/getDepartOrg.ht?status=1",
    //延期审批列表
    "yqsplist" : getIP() + "/bpm/BPM_DELAY/mobileList.ht?",
    //延期审批详情
    "yqspxq" : getIP() + "/bpm/BPM_DELAY/get.ht?",
    //延期审批批示
    "yqsave" : getIP() + "/bpm/BPM_DELAY/save.ht?", 
    //申请退回
    "sqth" : getIP() + "/bpm/BPM_RETREAT/save.ht?",
    //获取服务器时间
    "getmyself" : getIP() + "/oa/sign/getmyself.ht",
    //签到列表
    "signlist" : getIP() + "/oa/sign/newlist.ht?",
    //签到
    "signsave" : getIP() + "/oa/sign/newsave.ht?",
    //签到详情
    "signget" : getIP() + "/oa/sign/get.ht?",
    //我审批的公文列表
    "mobilefilerece" : getIP() + "/oa/mobilefile/rece.ht?",
    //我发起的公文列表
    "mobilefilesend" : getIP() + "/oa/mobilefile/send.ht?",
    //已办结的公文列表
    "mobilefileend" : getIP() + "/oa/mobilefile/send.ht?type=wanjie",
    //公文详情
    "mobilefiledetail" : getIP() + "/oa/mobilefile/getfile.ht?",
    //云盘 新建文件夹  重命名 移动
    "filesave" : getIP() + "/oa/disk/save.ht?",
    "filelist" : getIP() + "/oa/disk/list.ht?",
    "filedel" : getIP() + "/oa/disk/del.ht?",
    //新增任务
    "worktasksave" : getIP() + "/oa/worktask/save.ht?",
    //任务列表
    "worktasklist" : getIP() + "/oa/worktask/list.ht?",
    //任务详情
    "worktaskget" : getIP() + "/oa/worktask/get.ht?",
    //办结任务
    "worktaskend" : getIP() + "/oa/worktask/updatetype.ht?",
    //评论任务
    "worktaskcomment" : getIP() + "/oa/worktask/comment.ht?",
    //消息列表
    "sendinformation" : getIP() + "/oa/information/sendinformation.ht?",
    //评论列表
    "commentlist" : getIP() + "/oa/information/commentlist.ht?",
    //发送评论
    "commentinformation" : getIP() + "/oa/information/commentinformation.ht?", 
    
    //信息采集
    "rkcx" : getIP() + "/portal/R_People/list.ht?state=正常&needPersonPower=false&",//人口查询
    "rkxq" : getIP() + "/portal/R_People/get.ht?",//人口详情
    "rktj" : getIP() + "/portal/R_People/saveForPhone.ht?AuditType=R_PeoplePhone&",//人口提交
    "frcx" : getIP() + "/portal/ZZ_Corp/list.ht?",//法人查询，法人详情
    "xxcj" : getIP() + "/portal/D_Building/list.ht?",//信心采集
    "fjlb" : getIP() + "/portal/D_House/list.ht?", //房屋列表
    "rklb" : getIP() + "/portal/R_FamilyInfo/list.ht?", //人口列表    
    "hzgx" : getIP() + "/portal/R_FamilyInfo/updateRelations.ht?",//户主关系提交
    "jzzt" : getIP() + "/portal/R_FamilyInfo/updateFamilyState.ht?",//居住状态提交
    "rkqc" : getIP() + "/portal/R_People/delhousemoveout.ht?",//人口迁出
    "rkqr" : getIP() + "/portal/R_People/singlemovein.ht?",//人口迁入
    "fwtj" : getIP() + "/portal/D_House/save.ht?",//房屋提交
    "frtj" : getIP() + "/portal/ZZ_Corp/save.ht?",//法人添加
    "frtj2" : getIP() + "/portal/ZZ_Corp/saveFor2.ht?",//东营法人添加
    "frlb" : getIP() + "/portal/ZZ_Corp/list.ht?",//列表
    "hjxq" : getIP() + "/portal/R_Family/getByPeopleId.ht?",//户籍详情
    "fjlbrk" : getIP() +"/portal/R_FamilyInfo/list.ht?",//房间列表人口
    "lyxq" : getIP() + "/portal/D_Building/get.ht?", //楼宇详情
    "fjxq" : getIP() + "/portal/D_House/get.ht?", //房屋详情
    
    "fwlb" : getIP() + "/portal/D_House/list.ht?", //房屋列表
    "rfxq" : getIP() + "/portal/R_PeopleCollect/get.ht?", //人房详情
    "rfxq_r" : getIP() + "/portal/R_FamilyInfo/list.ht?", //人房详情中 人的详情
    "scrk" : getIP() + "/portal/R_People/del.ht?", //删除人口
    "scfw" : getIP() + "/portal/D_House/del.ht?", //删除房屋
    "bcrk" : getIP() + "/portal/R_People/saveFor2.ht?", //保存人口
    "ssqy" : getIP() + "/portal/Base_Org/getTreeByParentIdSj.ht?", //所属区域
    "fwmc" : getIP() + "/portal/D_Building/buildinglistSj.ht?", //房屋名称
    "cardno" : getIP() + "/portal/R_People/IDCardValidate.ht?", //验证身份证
    
    "getProject" : getIP() + "/portal/Base_Datas/GetCodeByTypeforPhone.ht?typeName=oa_sign",
    
    //民情日志
    "mqlb" : getIP() + "/oa/MinQingLog/searchlog.ht?",//民情日志列表
    "mqxq" : getIP() + "/oa/MinQingLog/get.ht?", //民情日志详情
    "mqtype" : getIP() + "/oa/MinQingLog/getEventType.ht",//民情类型
    "tjmq" : getIP() + "/oa/MinQingLog/save.ht?", //提交
    
    //呼叫中心
    //我的代办
    "myMobileTask" :　getIP() + "/call/eventmobile/myMobileTask.ht?",
    //我的办件
    "myMobileEvent" :　getIP() + "/call/eventmobile/myMobileEvent.ht?",
    //详情
    "getHjzxMobile" :　getIP() + "/call/eventmobile/get.ht?",
    
    //e党建
    //邀请
    "invite" : getIP() + "/sys/vitoregister/getRegComById.ht?",
    //发送验证码
    "getCode" : getIP() + "/sendRandom.ht?",
    //是否有支部
    "CheckZhibu" : getIP() + "/sys/vitoregister/checkZhiBu.ht?",
    //提交验证码
    "checkCode" : getIP() + "/checkCode.ht?type=appedj&",
    //注册
    "mobileRegister" : getIP() + "/mobileRegister.ht?orgType=appedj&",
    
    //e政务
    //邀请
    "oainvite" : getIP() + "/sys/vitoregister/getEZWById.ht?",
    //是否有组织
    "CheckZuzhi" : getIP() + "/sys/vitoregister/checkEZWZuZhi.ht?",
    //提交验证码
    "oacheckCode" : getIP() + "/checkCode.ht?type=appezw&",
    //注册
    "oamobileRegister" : getIP() + "/mobileRegister.ht?orgType=appezw&",
    "addezwspaceid" : getIP() + "/sys/vitoregister/addezwspaceid.ht?",
    
     //帮助
    "help" : getIP() + "/servicedesk/article/getlist.ht?",
    
    //应急指挥
    //初报
    "cblb" : getIP() + "/ecs/ECS_Event/list.ht",
    "cb" : getIP() + "/ecs/ECS_Event/save.ht",
    "cbxq" : getIP() + "/ecs/ECS_Event/get.ht",
    
    //续报
    "xblb" : getIP() + "/ecs/ECS_Event_Renewal/list.ht",
    "xb" : getIP() + "/ecs/ECS_Event_Renewal/save.ht",
    "xbxq" : getIP() + "/ecs/ECS_Event_Renewal/get.ht",
    
    //终报
    "zblb" : getIP() + "/ecs/Ecs_Event_FinalReport/list.ht",
    "zb" : getIP() + "/ecs/ Ecs_Event_FinalReport/save.ht",
    "zbxq" : getIP() + "/ecs/ Ecs_Event_FinalReport/get.ht",
    
    //风险源
    "fxylb" : getIP() + "/ecs/ECS_RiskHiddenDanger/list.ht?",
    "fxyxq" : getIP() + "/ecs/ECS_RiskHiddenDanger/get.ht?",
    "fxysb" : getIP() + "/ecs/ECS_RiskHiddenDanger/save.ht?",
    
    //知识库
    "GetTreeByType" : getIP() + "/portal/Base_Datas/GetTreeByType.ht??typeName=wiki_ctfl&",
    "getWxObjId" : getIP() +　"/wiki/WIKI_CategoryLink/getWxObjId.ht?"
}
