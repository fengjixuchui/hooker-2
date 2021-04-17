//crack by com.yiche.autoeasy 10.49.0
//com.bitauto.invoice.present.InvoicePriceListPresenter
function loadDexfile(dexfile) {
    Java.perform(function() {
          Java.openClassFile(dexfile).load();
          //console.log("load " + dexfile);
    });
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            //console.log("load " + dexfile);
        }
    });
};

function classExists(className) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};

function getClassName(obj) {
    if (obj.getClass) {
        return obj.getClass().getName();
    }
    var javaObject = Java.use("java.lang.Object");
    return Java.cast(obj, javaObject).getClass().getName();
}

//str1是否包含str2，str2可用正则表示
function contains(str1, str2) {
    var reg = RegExp(eval("/"+str2+"/"));
    if(str1 && str1.match && str1.match(reg)){
        return true;
    }else{
        return false;
    }
};

//创建ArrayList对象用这个方法就好了
function newArrayList() {
    var ArrayListClz = Java.use('java.util.ArrayList');
    return ArrayListClz.$new();
}

//创建HashSet对象用这个方法就好了
function newHashSet() {
    var HashSetClz = Java.use('java.util.HashSet');
    return HashSetClz.$new();
}

//创建HashMap对象用这个方法就好了
function newHashMap() {
    var HashMapClz = Java.use('java.util.HashMap');
    return HashMapClz.$new();
}

function newMethodBeat(text, executor) {
    var threadClz = Java.use("java.lang.Thread");
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var processClz = Java.use("android.os.Process");
    var currentThread = threadClz.currentThread();
    var beat = new Object();
    beat.invokeId = Math.random().toString(36).slice( - 8);
    beat.executor = executor;
    beat.myPid = processClz.myPid();
    beat.threadId = currentThread.getId();
    beat.threadName = currentThread.getName();
    beat.text = text;
    beat.startTime = new Date().getTime();
    beat.stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new()).substring(20);
    return beat;
};

function printBeat(beat) {
    var str = ("------------pid:" + beat.myPid + ",startFlag:" + beat.invokeId + ",objectHash:"+beat.executor+",thread(id:" + beat.threadId +",name:" + beat.threadName + "),timestamp:" + beat.startTime+"---------------\n");
    str += beat.text + "\n";
    str += beat.stackInfo;
    str += ("------------endFlag:" + beat.invokeId + ",usedtime:" + (new Date().getTime() - beat.startTime) +"---------------\n");
	console.log(str);
};

function log(str) {
    console.log(str);
};

function getBaseContext() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context; //Java.scheduleOnMainThread(fn):
};

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};



var loadedXRadar = false;

function loadXinitDexfile(dexfile) {
    loadDexfile('/data/user/0/com.yiche.autoeasy/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadedXRadar = true;
    loadDexfile('/data/user/0/com.yiche.autoeasy/radar.dex');
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};

function getPrettyString(javaObject) {
    var XPretty = Java.use("gz.util.XPretty");
    return XPretty.getPrettyString(javaObject);
};

function xPretty(javaObject) {
    var str = getPrettyString(javaObject);
    console.log(str);
};

function getField(javaObject, fieldName) {
    var X = Java.use("gz.util.X");
    return X.getField(javaObject, fieldName);
};

function storeObjectAndLog(javaObject) {
    var className = getClassName(javaObject);
    var ObjectsStore = Java.use("gz.radar.objects.ObjectsStore");
    var objectId = ObjectsStore.storeObject(javaObject);
    console.log(className + " ObjectsStoreId: " +objectId);
};



//com.bitauto.invoice.present.InvoicePriceListPresenter
Java.perform(function() {
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz = Java.use('com.bitauto.invoice.present.InvoicePriceListPresenter');
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_5453 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('java.lang.String', 'java.lang.String', 'com.bitauto.libcommon.net.tobiz.BPNetCallback');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_5453.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(java.lang.String,java.lang.String,com.bitauto.libcommon.net.tobiz.BPNetCallback)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_5453.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_4755 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'java.lang.String');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_4755.implementation = function(v0, v1, v2, v3, v4, v5) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(java.lang.String,java.lang.String,java.lang.String,java.lang.String,int,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_4755.call(this, v0, v1, v2, v3, v4, v5);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_8127 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000Oo.overload('java.lang.String', 'java.lang.String', 'com.bitauto.libcommon.net.tobiz.BPNetCallback');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_8127.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O00000Oo(java.lang.String,java.lang.String,com.bitauto.libcommon.net.tobiz.BPNetCallback)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_8127.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Oo_7462 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O0000Oo.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Oo_7462.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O0000Oo()';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Oo_7462.call(this);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o_7594 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000o.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o_7594.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O00000o()';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o_7594.call(this);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5811 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000Oo.overload('int');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5811.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O00000Oo(int)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5811.call(this, v0);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_8653 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'com.bitauto.libcommon.net.tobiz.BPNetCallback');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_8653.implementation = function(v0, v1, v2, v3, v4) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(java.lang.String,java.lang.String,java.lang.String,java.lang.String,com.bitauto.libcommon.net.tobiz.BPNetCallback)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_8653.call(this, v0, v1, v2, v3, v4);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5925 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000Oo.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'com.bitauto.libcommon.net.tobiz.BPNetCallback');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5925.implementation = function(v0, v1, v2, v3, v4) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O00000Oo(java.lang.String,java.lang.String,java.lang.String,java.lang.String,com.bitauto.libcommon.net.tobiz.BPNetCallback)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5925.call(this, v0, v1, v2, v3, v4);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000oo_4212 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000oo.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000oo_4212.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public java.util.List com.bitauto.invoice.present.InvoicePriceListPresenter.O00000oo()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000oo_4212.call(this);
        printBeat(beat);
        return ret;
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_0545 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('java.util.List');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_0545.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(java.util.List)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_0545.call(this, v0);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5754 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000Oo.overload('java.util.List');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5754.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'private void com.bitauto.invoice.present.InvoicePriceListPresenter.O00000Oo(java.util.List)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_5754.call(this, v0);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2758 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('int');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2758.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(int)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2758.call(this, v0);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000o00_5486 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O0000o00.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000o00_5486.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private void com.bitauto.invoice.present.InvoicePriceListPresenter.O0000o00()';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000o00_5486.call(this);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Ooo_5731 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O0000Ooo.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Ooo_5731.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O0000Ooo()';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Ooo_5731.call(this);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_4836 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000Oo.overload('com.bitauto.invoice.bean.InvoicePriceListResponseBean', 'java.lang.String', 'java.lang.String');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_4836.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O00000Oo(com.bitauto.invoice.bean.InvoicePriceListResponseBean,java.lang.String,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_4836.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2374 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('com.bitauto.invoice.bean.InvoicePriceListResponseBean', 'java.lang.String', 'java.lang.String');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2374.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(com.bitauto.invoice.bean.InvoicePriceListResponseBean,java.lang.String,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2374.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_3177 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000Oo.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'java.lang.String');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_3177.implementation = function(v0, v1, v2, v3, v4, v5) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O00000Oo(java.lang.String,java.lang.String,java.lang.String,java.lang.String,int,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000Oo_3177.call(this, v0, v1, v2, v3, v4, v5);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000o0_0768 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O0000o0.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000o0_0768.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private void com.bitauto.invoice.present.InvoicePriceListPresenter.O0000o0()';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000o0_0768.call(this);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_3317 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'int');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_3317.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,int)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_3317.call(this, v0, v1, v2, v3, v4, v5, v6);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_1593 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'com.bitauto.libcommon.net.tobiz.BPNetCallback');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_1593.implementation = function(v0, v1, v2, v3) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(java.lang.String,java.lang.String,java.lang.String,com.bitauto.libcommon.net.tobiz.BPNetCallback)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_1593.call(this, v0, v1, v2, v3);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000oO_3971 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000oO.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000oO_3971.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public int com.bitauto.invoice.present.InvoicePriceListPresenter.O00000oO()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000oO_3971.call(this);
        printBeat(beat);
        return ret;
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o0_2893 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000o0.overload('java.util.List');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o0_2893.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'private boolean com.bitauto.invoice.present.InvoicePriceListPresenter.O00000o0(java.util.List)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o0_2893.call(this, v0);
        printBeat(beat);
        return ret;
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Oo0_8694 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O0000Oo0.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Oo0_8694.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O0000Oo0()';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000Oo0_8694.call(this);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_3472 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('io.reactivex.disposables.Disposable');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_3472.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(io.reactivex.disposables.Disposable)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_3472.call(this, v0);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000OoO_6962 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O0000OoO.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000OoO_6962.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O0000OoO()';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000OoO_6962.call(this);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000OOo_6551 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O0000OOo.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000OOo_6551.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O0000OOo()';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000OOo_6551.call(this);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000O0o_9198 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O0000O0o.overload();
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000O0o_9198.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public java.util.List com.bitauto.invoice.present.InvoicePriceListPresenter.O0000O0o()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O0000O0o_9198.call(this);
        printBeat(beat);
        return ret;
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2774 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O000000o.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2774.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O000000o(java.lang.String,java.lang.String,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O000000o_2774.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o0_6212 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.O00000o0.overload('com.bitauto.invoice.bean.InvoicePriceListResponseBean', 'java.lang.String', 'java.lang.String');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o0_6212.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public void com.bitauto.invoice.present.InvoicePriceListPresenter.O00000o0(com.bitauto.invoice.bean.InvoicePriceListResponseBean,java.lang.String,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_bitauto_invoice_present_InvoicePriceListPresenter_clz_method_O00000o0_6212.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_bitauto_invoice_present_InvoicePriceListPresenter_clz_init_7392 = com_bitauto_invoice_present_InvoicePriceListPresenter_clz.$init.overload('com.bitauto.invoice.view.InvoicePriceListActivity');
    com_bitauto_invoice_present_InvoicePriceListPresenter_clz_init_7392.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public com.bitauto.invoice.present.InvoicePriceListPresenter(com.bitauto.invoice.view.InvoicePriceListActivity)';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = com_bitauto_invoice_present_InvoicePriceListPresenter_clz_init_7392.call(this, v0);
        printBeat(beat);
        return returnObj;
    };
});