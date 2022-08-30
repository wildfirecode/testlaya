(function () {
    'use strict';

    const config = {
        ip: '192.168.10.185',
        port: 9001,
        uiresPath: 'res/UI/',
        defaultComponentName: 'Main',
    };

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class BagWindow extends fgui.Window {
        constructor() {
            super();
        }
        onInit() {
            super.onInit();
            console.log('onInit');
            this.center();
        }
        onShown() {
            console.log('onShown');
            var list = this.contentPane.getChild("list").asList;
            list.on(fgui.Events.CLICK_ITEM, this, this.onClickItem);
            list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
            list.setVirtual();
            list.numItems = 45;
        }
        renderListItem(index, obj) {
            obj.icon = "res/icons/i" + Math.floor(Math.random() * 10) + ".png";
            obj.text = "" + Math.floor(Math.random() * 100);
        }
        onClickItem(item) {
            this.contentPane.getChild("n11").asLoader.url = item.icon;
            this.contentPane.getChild("n13").text = item.icon;
        }
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var LayerType;
    (function (LayerType) {
        LayerType[LayerType["START"] = 0] = "START";
        LayerType[LayerType["SCENE"] = 1] = "SCENE";
        LayerType[LayerType["GUI"] = 2] = "GUI";
        LayerType[LayerType["POPUP"] = 3] = "POPUP";
        LayerType[LayerType["TIPS"] = 4] = "TIPS";
        LayerType[LayerType["END"] = 5] = "END";
    })(LayerType || (LayerType = {}));
    class Layer extends fgui.GRoot {
    }
    const layers = {};
    function initLayers() {
        const root = fgui.GRoot.inst;
        for (let type = LayerType.START + 1; type < LayerType.END; type++) {
            const layer = createLayer(type);
            layers[type] = layer;
            root.addChild(layer);
        }
    }
    function getLayer(type) {
        return layers[type];
    }
    function createLayer(type) {
        const layer = new Layer();
        layer.makeFullScreen();
        layer.type = type;
        return layer;
    }

    const config$1 = {
        gui: {}, win: {}
    };
    function getGUIConfig(type) {
        return config$1.gui[type];
    }
    function getWinConfig(type) {
        return config$1.win[type];
    }
    var PackageType;
    (function (PackageType) {
        PackageType["HomeUI"] = "HomeUI";
        PackageType["Bag"] = "Bag";
    })(PackageType || (PackageType = {}));
    function registerGuiItem(type, clazz) {
        config$1.gui[type] = clazz;
    }
    function registerWinItem(type, clazz) {
        config$1.win[type] = clazz;
    }

    function showWin(type) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadres(type);
            const clazz = getWinConfig(type);
            const win = new clazz();
            win.contentPane = fgui.UIPackage.createObject(type, config.defaultComponentName).asCom;
            const popupLayer = getLayer(LayerType.POPUP);
            win.showOn(popupLayer);
        });
    }
    function showGUI(packageName) {
        return __awaiter(this, void 0, void 0, function* () {
            const clazz = getGUIConfig(packageName);
            const uiObj = new clazz();
            uiObj.onInit();
            yield loadres(packageName);
            const view = fgui.UIPackage.createObject(packageName, config.defaultComponentName).asCom;
            const guiLayer = getLayer(LayerType.GUI);
            guiLayer.addChild(view);
            uiObj.view = view;
            uiObj.onShown();
        });
    }
    function hideui(ui) {
        disposeUI();
        fgui.GRoot.inst.removeChild(ui.view);
    }
    function disposeUI() {
        fgui.UIPackage.removePackage("Bag");
    }
    function loadres(type) {
        return new Promise(resolve => {
            fgui.UIPackage.loadPackage(config.uiresPath + type, Laya.Handler.create(this, resolve));
        });
    }

    class HomeUI {
        onInit() {
            console.log('onInit');
        }
        onShown() {
            console.log('onShown');
            const view = this.view;
            const list = [
                this.view.getChild("n8"),
                this.view.getChild("n9"),
                this.view.getChild("n10"),
                this.view.getChild("n11"),
                this.view.getChild("n12"),
                this.view.getChild("n13"),
            ];
            const funcnameList = [
                '商城',
                '背包',
                '战斗',
                '天赋',
                '行会',
                '好友',
            ];
            const packageList = [
                null,
                PackageType.Bag,
                null,
                null,
                null,
                null,
            ];
            list.forEach((item, index) => {
                item.addRelation(view, fgui.RelationType.Bottom_Bottom);
                item.y = Laya.stage.height - item.height;
                item.onClick(this, () => {
                    if (packageList[index]) {
                        showWin(packageList[index]);
                    }
                    else {
                        alert(funcnameList[index] + '正在开发...');
                    }
                });
            });
        }
    }

    function initui() {
        initLayers();
    }

    function register() {
        registerGuiItem(PackageType.HomeUI, HomeUI);
        registerWinItem(PackageType.Bag, BagWindow);
    }
    function gameinit() {
        initui();
        register();
        showGUI(PackageType.HomeUI);
    }

    function login() {
        let middleVersion = 0;
        net.UserModel.ins().send1(js_gameVars.username, js_gameVars.serverid, js_gameVars.client, js_gameVars.testGame ? "0" : js_gameVars.platform, middleVersion ? middleVersion : 1, js_gameVars.token, js_gameVars.resVersion);
    }
    function enterGame() {
        net.UserModel.ins().send8(js_gameVars.createRoleMsg.lastSel, "");
    }

    class BackpackControl {
        constructor() { }
        update(cmd, data) {
            switch (cmd) {
                case 2104:
                    break;
                case 2101:
                    break;
                case 2102:
                    break;
                case 2103:
                    break;
                case 2105:
                    break;
            }
        }
    }

    class DataBase {
        constructor() {
            this._observers = [];
        }
        addObserver(observer) {
            if (this._observers.indexOf(observer) == -1) {
                this._observers.push(observer);
            }
        }
        removeObserver(observer) {
            let index = this._observers.indexOf(observer);
            if (index > -1) {
                this._observers.splice(index, 1);
            }
        }
        sendDelayMsg(cmd, data) {
        }
        sendNotif(cmd, data) {
            let t = this;
            for (let ob of t._observers) {
                ob.update(cmd, data);
            }
        }
    }

    class PlayerData extends DataBase {
        initBaseInfo($data) {
            this.uid = $data.rid;
            js_gameVars.roleid = $data.rid.toString();
        }
    }
    const player = new PlayerData;

    function initMessage() {
        net.BackpackModel.ins().send1(0);
        net.BackpackModel.ins().send1(11);
        net.BackpackModel.ins().send1(12);
    }

    class SecondTimerUtil {
        constructor() {
            this.__id = 0;
            this._tasks = {};
        }
        addSecondTask(task) {
            let self = this;
            self.__id++;
            self._tasks[self.__id] = task;
            return self.__id;
        }
        removeTask(id) {
            let self = this;
            if (id in self._tasks) {
                self._tasks[id] = null;
                delete self._tasks[id];
            }
        }
        length() {
            let count = 0;
            for (let key in this._tasks) {
                count++;
            }
            return count;
        }
        update() {
            let self = this;
            let now = new Date().getTime();
            if (!self._lastTime) {
                self._lastTime = now;
                return;
            }
            let passed = now - self._lastTime;
            let count = 3;
            while (passed > 1000 && count > 0) {
                for (let key in self._tasks) {
                    if (self._tasks[key])
                        self._tasks[key].task.call(self._tasks[key].context);
                }
                passed -= 1000;
                count--;
            }
            self._lastTime = now - passed;
        }
    }
    const secondTimerUtil = new SecondTimerUtil();

    class ServerData {
        constructor() {
            this.openDay = 1;
            this.MergeTimes = 0;
            this.reconnecting = false;
            this._count = 0;
            this._heartUintID = 0;
            this.curZeroTime = 0;
            this.curWeekDay = 0;
            this.startGameTime = 0;
        }
        SetNowTime(servertime) {
            let t = this;
            let time = servertime.toNumber();
            let curWeekDay = new Date(time).getDay();
            t.curWeekDay = curWeekDay == 0 ? 7 : curWeekDay;
            let now_data = new Date(time);
            now_data.setHours(0);
            now_data.setMinutes(0);
            now_data.setSeconds(0);
            now_data.setMilliseconds(0);
            var timestamp = now_data.getTime();
            t.curZeroTime = timestamp + 24 * 60 * 60 * 1000;
            net.UserModel.ins().send41();
        }
        serverHeartBeat() {
            let t = this;
            t._count++;
            if (t._count >= 3) {
                t._count = 0;
                net.UserModel.ins().send9();
            }
        }
        startHeartBeats() {
            let t = this;
            if (t._heartUintID == 0) {
                console.log("开始心跳");
                t._heartUintID = secondTimerUtil.addSecondTask({ task: this.serverHeartBeat, context: this });
            }
        }
        stopHeartBeats() {
            let self = this;
            if (self._heartUintID > 0) {
                console.log("停止心跳");
                secondTimerUtil.removeTask(self._heartUintID);
                self._heartUintID = 0;
            }
        }
        hasHeart() {
            return this._heartUintID > 0;
        }
        heart(servertime) {
            let t = this;
            let time = servertime.toNumber();
        }
    }
    const serverData = new ServerData;

    class UserControl {
        constructor() { }
        update(cmd, data) {
            switch (cmd) {
                case 1007:
                    js_gameVars.createRoleMsg = data;
                    js_gameVars.loginSuccess = true;
                    enterGame();
                    break;
                case 1010:
                    break;
                case 1006:
                    player.initBaseInfo(data);
                    js_gameVars.loginToken = data.token;
                    serverData.SetNowTime(data.serverTime);
                    initMessage();
                    break;
                case 1005:
                    break;
                case 1011:
                    break;
                case 1042:
                    break;
            }
        }
    }

    class RoleControl {
        update(cmd, data) {
            switch (cmd) {
                case 8001:
                    break;
                case 8002:
                    break;
                case 8004:
                    break;
                case 8043:
                    break;
                case 8045:
                    if (data.result == 0) {
                        console.error("提升修为失败");
                    }
                    break;
                case 8072:
                    break;
                case 8074:
                    break;
                case 8063:
                    break;
            }
        }
    }

    class GameObserverManager {
        constructor() {
        }
        initNetObservers() {
            let control = new UserControl();
            net.UserModel.ins().addObserver(control);
            control = new RoleControl();
            net.RoleModel.ins().addObserver(control);
            control = new BackpackControl();
            net.BackpackModel.ins().addObserver(control);
        }
    }
    const gameObserverManager = new GameObserverManager;

    class MessageHandler {
        constructor() {
            this._cmdHandlers = {};
        }
        received(cmd, bytes) {
            let handler = this._cmdHandlers[cmd];
            if (handler) {
                handler.dealBufferMessage(cmd, bytes);
            }
            else {
                console.log("消息错误" + cmd);
                bytes.position = bytes.length;
            }
        }
        connected(newConnect = true) {
        }
        registerHandler(cmd, handler) {
            this._cmdHandlers[cmd] = handler;
        }
        disConnect() {
        }
        connectError() {
        }
    }

    class GameSocket {
        constructor() {
            this.init();
        }
        get handler() { return this._handler; }
        init() {
            const websocket = this._webSocket = new egret_WebSocket.WebSocket();
            websocket.addEventListener('connect', this.onSocketOpen, this);
            websocket.addEventListener('ioError', this.onConnectError, this);
            websocket.addEventListener('close', this.onDisConnect, this);
            websocket.addEventListener('socketData', this.onReceiveMessage, this);
            websocket.type = egret_WebSocket.WebSocket.TYPE_BINARY;
        }
        connect(host, port) {
            this._webSocket.connect(host, port);
        }
        setHandler(handler) {
            this._handler = handler;
        }
        onReceiveMessage(e) {
            if (!this._byteArray)
                this._byteArray = new egret_ByteArray.ByteArray();
            this._byteArray.clear();
            this._webSocket.readBytes(this._byteArray);
            while (this._byteArray.bytesAvailable) {
                let size = this._byteArray.readInt() - 4;
                if (!size || this._byteArray.bytesAvailable < size)
                    break;
                let p = this._byteArray.position + size;
                let cmd = this._byteArray.readInt();
                console.log(`onReceiveMessage cmd:${cmd}`);
                let msgid = this._byteArray.readShort();
                this._handler.received(cmd, this._byteArray);
                this._byteArray.position = p;
            }
        }
        onSocketOpen(e) {
            console.log('正确建立连接:', e.currentTarget.socket.socket.url);
            gamesocket.setHandler(new MessageHandler());
            gameObserverManager.initNetObservers();
            login();
        }
        onConnectError(e) {
            console.log("连接出错");
        }
        onDisConnect(e) {
            console.log("断开连接");
        }
        sendData(cmd, bytes = null) {
            let ws = this._webSocket;
            if (!ws.connected) {
                return;
            }
            console.log(`sendData cmd:${cmd}`);
            var size = 10;
            if (bytes != null) {
                bytes.position = 0;
                size += bytes.length;
            }
            var buffer = new egret_ByteArray.ByteArray();
            buffer.writeInt(size);
            buffer.writeInt(cmd);
            buffer.writeShort(1);
            if (bytes != null) {
                buffer.writeBytes(bytes);
            }
            ws.writeBytes(buffer);
        }
    }
    const gamesocket = window['gamesocket'] = new GameSocket();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
            Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
            Laya.stage.bgColor = "#333333";
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            this.onConfigLoaded();
        }
        onConfigLoaded() {
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            gameinit();
            gamesocket.connect(config.ip, config.port);
            const intervalId = setInterval(() => {
                secondTimerUtil.update();
            }, 500);
        }
    }
    new Main();
    console.log('game start!');

}());
//# sourceMappingURL=bundle.js.map
