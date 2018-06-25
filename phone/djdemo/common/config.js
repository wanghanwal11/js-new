var config = {
    //登录
    "loginMobile" : getIP() + "/loginMobile.ht?",
    //这里是通讯录
    "getmybooklistMobile" : getIP() + "/oa/getmybooklist.ht?",
    //通讯录搜索
    "esSearchMobile" : getIP() + "/eseach/core/esSearch.ht?",
    //个人详情
    "addressdetailMobile" : getIP() + "/oa/addressdetail.ht?",
    //申请列表
    "getServiceListPhone" : getIP() + "/acceptance/SLPT_Service/getServiceListPhone.ht?",
    //添加常用申请
   // "tobeMouldOrCancle" : getIP() + "/acceptance/SLPT_Service/tobeMouldOrCancle.ht?",
  //添加常用申请
    "tobeMouldOrCancle" : getIP() + "/acceptance/SLPT_Service/addServiceToPhone.ht?",
    //申请页表单
    "getPhoneForm": getIP() + "/bpm/BPM_FORM_DEF/getByserviceId.ht?serviceId=",
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
    //组织列表
    "getOrgByPath" : getIP() + "/sys/vitoorg/list.ht?",
    //岗位列表
    "Vitoposition" : getIP() + "/sys/Vitoposition/list.ht?",
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
    //是否有上报事件权限
    "checkUserMobile" : getIP() + "/dispute/mobile/checkUser.ht",
    //我的待办
    "mytodoMobile" : getIP() + "/dispute/mobile/mytodoMobile.ht?",
    //我的办件
    "myhandlerMobile" : getIP() + "/dispute/mobile/myhandlerMobile.ht?",
    //事件详情
    "getMobile" : getIP() + "/dispute/mobile/get.ht?",
    //获取事件级别
    "getLevelName" : getIP() + "/dispute/mobile/getLevelName.ht",
    //网格化上传
    "fileuploadwork" : getIP() + "/oa/docmobile/docupload.ht?",
    //新增事件
    "runEventMobile" : getIP() + "/dispute/mobile/runEvent.ht?",
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
    "checkMobile" : getIP() + "/dispute/mobile/runEvent.ht?",
    //网格化部门列表
    "getOrgMobile" : getIP() + "/dispute/mobile/getDepartOrg.ht?status=1",
    //延期审批列表
    "yqsplist" : getIP() + "/bpm/BPM_DELAY/mobileList.ht?",
    //延期审批详情
    "yqspxq" : getIP() + "/bpm/BPM_DELAY/get.ht?",
    //延期审批批示
    "yqsave" : getIP() + "/bpm/BPM_DELAY/save.ht?", 
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
}
var djconfig={
    
    //1.获取活动列表页
    "listMobile" : getIP() + "/basicactivities/Activity_Base/listMobile.ht?", 
    //活动详情
    "getById" : getIP() + "/basicactivities/Activity_Base/getById.ht?", 
    //报名
    "baomingMobile" : getIP() + "/basicactivities/Activity_Base/baomingMobile.ht?identify=1&", 
    //参加人员
    "activityset" : getIP() + "/basicactivities/Activity_Base/activityset.ht?", 
    //活动二维码
    "createCode" : getIP() + "/basicactivities/Activity_Base/createCode.ht?", 
    //取消报名码
    "updateIsreport" : getIP() + "/basicactivities/Activity_Integralrecord/updateIsreport.ht?", 
    //评论列表
     "list" : getIP() + "/basicactivities/Activity_Comment/getById.ht?", 
     //圈子列表
     "quanzi" : getIP() + "/basicactivities/Activity_Answer/listMobile.ht?", 
     //圈子添加
     "tjquanzi" : getIP() + "/basicactivities/Activity_Answer/save.ht?", 
     //圈子点赞
     "dianzan" : getIP() + "/basicactivities/Activity_Agree/save.ht?", 
     //问答列表
     "wenda" : getIP() + "/basicactivities/Activity_Answer/listMobile.ht?type=1&", 
     //问答添加
     "tjwenda" : getIP() + "/basicactivities/Activity_Answer/save.ht?type=1&", 
     //问答详情
     "wendaxq" : getIP() + "/basicactivities/Activity_Answer/getById.ht?", 
     //添加评论
     "pinglun" : getIP() + "/basicactivities/Activity_Comment/save.ht?", 
     //最佳答案
     "updateIsbest" : getIP() + "/basicactivities/Activity_Comment/updateIsbest.ht?", 
     //获取新闻列表
     "xinwenlist" : getIP() + "/servicedesk/article/getlist.ht?",
     //查询新闻列表
     "xinwencxlist" : getIP() + "/servicedesk/article/list.ht?",
      //查看数加1
      "addnumber" : getIP() + "/servicedesk/article/savecount.ht?",
      //获取新闻详情
     "xinwenxq" : getIP() + "/servicedesk/article/get.ht?",
     //党章列表
     "dangzhanglb" : getIP() + "/party/DJ_Learndetail/getPartyConstitution.ht",
     //党章列表详情
     "dangzhangxq" : getIP() + "/party/DJ_Learndetail/getLearnDetails.ht?",
     //党规列表
     "dangguilb" : getIP() + "/party/DJ_Learncontent/getPartyRules.ht",
     //学习党规
     "dangguilean" : getIP() + "/party/DJ_Learndetail/recordLearnDetail.ht?",

     //微党课列表
     "wdklb": getIP()+"/party/DJ_MicroLectures/getMicroLectures.ht?",
     //微党课详情
     "wdkxq": getIP()+"/party/DJ_MicroLecturesRecord/getMicroLecturesRecord.ht?",

     //分享
     "share" : getIP() + "/basicactivities/Activity_Amount/addOrUpdateShare.ht?",
     //活动距离
     "distance" : getIP() + "/basicactivities/Activity_Base/calculatedistance.ht?",
     //我发起的活动
     "fqdhd" : getIP() + "/basicactivities/Activity_Base/listMobile.ht?",
      //我参加的活动
     "cjdhd" : getIP() + "/basicactivities/Activity_Integralrecord/listMobile.ht?",
     //我发起的圈子
     "fqdqz" : getIP() + "/basicactivities/Activity_Answer/listMobile.ht?",
      //我参加的圈子
     "cjdqz" : getIP() + "/basicactivities/Activity_Comment/listMobile.ht?",
     //我发起的问答
     "fqdwd" : getIP() + "/basicactivities/Activity_Answer/listMobile.ht?",
      //我参加的问答
     "cjdwd" : getIP() + "/basicactivities/Activity_Comment/listMobile.ht?",
     //收藏
     "sc" : getIP() + "/oa/collect/save.ht?",
     //心得体会
     "xdthlb" : getIP() + "/party/DJ_Experiencerecord/getallmobilelist.ht?",
     //我的收藏
     "wdsc" : getIP() + "/oa/collect/list.ht?",
     //删除收藏
     "scsc" : getIP() + "/oa/collect/del.ht?",
     //搜索活动
     "sousuohd" : getIP() + "/basicactivities/Activity_Base/fuzzylist.ht?",
     //搜索圈子
     "sousuoqz" : getIP() + "/basicactivities/Activity_Answer/fuzzylist.ht?",
     //搜索问答
     "sousuowd" : getIP() + "/basicactivities/Activity_Answer/fuzzylist.ht?",
     //活动全局搜索
     "allsousuo" : getIP() + "/basicactivities/Activity_Base/alllist.ht?",
     //公告列表
    "getgonggaolist" : getIP() + "/oa/mqlog/listpartyforphone.ht?",
    //公告详情
    "getgonggaoxq" : getIP() + "/oa/mqlog/getforphone.ht?",

    //支部活动获取接口
    "zbhdlb" : getIP() + "/basicactivities/Activity_Base/listMobileByPartyid.ht?",


     //个人信息二维码：
     "ewm": getIP()+"/oa/sysmolile/createcode.ht",
     //支部活动
     "zbhd": getIP()+"/basicactivities/Activity_Base/listMobileByPartyid.ht?",
     //党建之窗全局搜索
     "djsearch" : getIP()+"/servicedesk/article/getdjzclist.ht?",
     //三会一课列表
     "shyklist": getIP()+"/party/DJ_SanHuiYiKe/list.ht?",
      //三会一课详情
     "shykxq": getIP()+"/party/DJ_SanHuiYiKe/get.ht?",
      //三会一课f会议相关
     "hyxg": getIP()+"/party/DJ_SanHuiYiKe/getAppendix.ht?",
     //三会一课会议人员
     "hyry": getIP()+"/party/DJ_SanHuiYiKe/getAllParticipants.ht?",

     //书记信箱列表接口
     "sjinbox": getIP()+"/party/DJ_SecretaryMailbox/list.ht?",
     //书记信箱数据保存
     "inboxsave": getIP()+"/party/DJ_SecretaryMailbox/save.ht?",
     //书记信箱列表详情
     "inboxxq" : getIP()+"/party/DJ_SecretaryMailbox/getForMobile.ht?",

     //个人排名
     "grpm": getIP()+"/party/DJ_MemberScore/getRanking.ht?",
     //积分排名
     "jfpm": getIP()+"/party/DJ_PartyScore/getRanking.ht",
     //个人积分记录
     "jfjl": getIP()+"/party/DJ_MemberScore/getRecord.ht?",
     //支部排名
     "jfpm_zb": getIP()+"/party/DJ_PartyScore/getRanking.ht?",
     //支部积分记录
     "jfjl_zb": getIP()+"/party/DJ_PartyScore/getRecord.ht?",
    //我的搜索活动
     "sousuowdhd" : getIP() + "/basicactivities/Activity_Base/minfuzzylist.ht?",
     //我的搜索圈子
     "sousuowdqz" : getIP() + "/basicactivities/Activity_Answer/minfuzzylist.ht?",
     //我的搜索问答
     "sousuowdwd" : getIP() + "/basicactivities/Activity_Answer/minfuzzylist.ht?",
}
