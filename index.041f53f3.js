// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kmYsz":[function(require,module,exports) {
require('./helpers/bundle-manifest').register(JSON.parse("{\"289Eq\":\"index.041f53f3.js\",\"glgxt\":\"node-fetch.326f7682.js\",\"1cIxw\":\"stream-browserify.96d48172.js\",\"h82a2\":\"safe-buffer.131f2ff9.js\",\"eVYu3\":\"jsrsasign.61ef7495.js\",\"dh83w\":\"jsrsasign.71e88eea.js\"}"));

},{"./helpers/bundle-manifest":"iCS4n"}],"iCS4n":[function(require,module,exports) {
"use strict";
var mapping = {};
function register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)mapping[keys[i]] = pairs[keys[i]];
}
function resolve(id) {
    var resolved = mapping[id];
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return resolved;
}
module.exports.register = register;
module.exports.resolve = resolve;

},{}],"5KCUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// @ts-check
var _parcel = require("@oasislabs/parcel");
var _parcelDefault = parcelHelpers.interopDefault(_parcel);
console.log(_parcelDefault.default);
document.querySelector('#form').addEventListener('submit', (event)=>{
    event.preventDefault();
    const token = window.token.value;
    (async ()=>{
        const parcel = new _parcelDefault.default(token);
        console.log(parcel);
        console.log(await parcel.getCurrentIdentity());
        const doc = await parcel.uploadDocument('this is data', {
            details: {
                title: 'aa',
                tags: [
                    'aa',
                    'bb'
                ]
            },
            /** @type {any} */ toApp: 'AWxTNpZeYQ98QTBcQeXjNDy'
        }).finished;
        console.log(doc);
        await doc.delete();
    })();
});

},{"@oasislabs/parcel":"9NfeD","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"9NfeD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApiError", ()=>_httpJs.ApiError
);
parcelHelpers.export(exports, "BackendClient", ()=>_clientJs.BackendClient
);
parcelHelpers.export(exports, "Capabilities", ()=>_grantJs.Capabilities
);
parcelHelpers.export(exports, "ClientType", ()=>_clientJs.ClientType
);
parcelHelpers.export(exports, "FrontendClient", ()=>_clientJs.FrontendClient
);
parcelHelpers.export(exports, "JobPhase", ()=>_computeJs.JobPhase
);
parcelHelpers.export(exports, "PARCEL_RUNTIME_AUD", ()=>_tokenJs.PARCEL_RUNTIME_AUD
);
parcelHelpers.export(exports, "ServiceClient", ()=>_clientJs.ServiceClient
);
/**
 * Example:
 * ```ts
 * import Parcel from '@oasislabs/parcel';
 * const parcel = new Parcel({
 *   clientId: serviceClientId,
 *   privateKey: serviceClientPrivateKey,
 * });
 * console.log(await parcel.searchDocuments());
 * ```
 *
 * @category Main
 */ parcelHelpers.export(exports, "Parcel", ()=>Parcel
);
var _appJs = require("./app.js");
var _assetJs = require("./asset.js");
var _clientJs = require("./client.js");
var _computeJs = require("./compute.js");
var _databaseJs = require("./database.js");
var _documentJs = require("./document.js");
var _grantJs = require("./grant.js");
var _httpJs = require("./http.js");
var _identityJs = require("./identity.js");
var _meterJs = require("./meter.js");
var _permissionJs = require("./permission.js");
var _tokenJs = require("./token.js");
var _tokenizationJs = require("./tokenization.js");
class Parcel {
    constructor(tokenSource, config){
        const tokenProvider = _tokenJs.TokenProvider.fromSource(tokenSource);
        this.client = new _httpJs.HttpClient(tokenProvider, {
            apiUrl: config === null || config === void 0 ? void 0 : config.apiUrl,
            storageUrl: config === null || config === void 0 ? void 0 : config.storageUrl,
            httpClientConfig: config === null || config === void 0 ? void 0 : config.httpClientConfig
        });
    }
    get apiUrl() {
        return this.client.apiUrl;
    }
    async createIdentity(params) {
        return _identityJs.IdentityImpl.create(this.client, params);
    }
    async getCurrentIdentity() {
        if (!this.currentIdentity) this.currentIdentity = await _identityJs.IdentityImpl.current(this.client);
        return this.currentIdentity;
    }
    async createDatabase(params) {
        return _databaseJs.DatabaseImpl.create(this.client, params);
    }
    async getDatabase(id) {
        return _databaseJs.DatabaseImpl.get(this.client, id);
    }
    async updateDatabase(id, params) {
        return _databaseJs.DatabaseImpl.update(this.client, id, params);
    }
    async queryDatabase(id, params) {
        return _databaseJs.DatabaseImpl.query(this.client, id, params);
    }
    async insertRows(id, params) {
        return _databaseJs.DatabaseImpl.insert(this.client, id, params);
    }
    async listDatabases(params) {
        return _databaseJs.DatabaseImpl.list(this.client, params);
    }
    async deleteDatabase(id) {
        return _databaseJs.DatabaseImpl.delete_(this.client, id);
    }
    uploadDocument(data, params) {
        return _documentJs.DocumentImpl.upload(this.client, data, params);
    }
    async getDocument(id) {
        return _documentJs.DocumentImpl.get(this.client, id);
    }
    async searchDocuments(params) {
        return _documentJs.DocumentImpl.search(this.client, params);
    }
    downloadDocument(id) {
        return _documentJs.DocumentImpl.download(this.client, id);
    }
    async getDocumentHistory(id, filter) {
        return _documentJs.DocumentImpl.history(this.client, id, filter);
    }
    async updateDocument(id, update) {
        return _documentJs.DocumentImpl.update(this.client, id, update);
    }
    async deleteDocument(id) {
        return _documentJs.DocumentImpl.delete_(this.client, id);
    }
    async createApp(params) {
        return _appJs.AppImpl.create(this.client, params);
    }
    async getApp(id) {
        return _appJs.AppImpl.get(this.client, id);
    }
    async listApps(filter) {
        return _appJs.AppImpl.list(this.client, filter);
    }
    async updateApp(id, update) {
        return _appJs.AppImpl.update(this.client, id, update);
    }
    async deleteApp(id) {
        return _appJs.AppImpl.delete_(this.client, id);
    }
    async createPermission(appId, params) {
        return _permissionJs.PermissionImpl.create(this.client, appId, params);
    }
    async listPermissions(appId, filter) {
        return _permissionJs.PermissionImpl.list(this.client, appId, filter);
    }
    async deletePermission(appId, permissionId) {
        return _permissionJs.PermissionImpl.delete_(this.client, appId, permissionId);
    }
    async createClient(appId, params) {
        return _clientJs.ClientImpl.create(this.client, appId, params);
    }
    async getClient(appId, clientId) {
        return _clientJs.ClientImpl.get(this.client, appId, clientId);
    }
    async listClients(appId, filter) {
        return _clientJs.ClientImpl.list(this.client, appId, filter);
    }
    async updateClient(appId, clientId, update) {
        return _clientJs.ClientImpl.update(this.client, appId, clientId, update);
    }
    async deleteClient(appId, clientId) {
        return _clientJs.ClientImpl.delete_(this.client, appId, clientId);
    }
    async createGrant(params) {
        return _grantJs.GrantImpl.create(this.client, params);
    }
    async getGrant(id) {
        return _grantJs.GrantImpl.get(this.client, id);
    }
    async listGrants(filter) {
        return _grantJs.GrantImpl.list(this.client, filter);
    }
    async deleteGrant(id) {
        return _grantJs.GrantImpl.delete_(this.client, id);
    }
    /**
     * Enqueues a new job.
     * @param spec Specification for the job to enqueue.
     * @result Job The new job, including a newly-assigned ID.
     */ async submitJob(spec) {
        return _computeJs.ComputeImpl.submitJob(this.client, spec);
    }
    /**
     * Lists all known jobs visible to the current user.
     * @param filter Controls pagination.
     * @result Job Lists known jobs. Includes recently completed jobs.
     */ async listJobs(filter = {}) {
        return _computeJs.ComputeImpl.listJobs(this.client, filter);
    }
    /**
     * Returns the full description of a known job, including its status.
     */ async getJob(jobId) {
        return _computeJs.ComputeImpl.getJob(this.client, jobId);
    }
    /**
     * Returns the status of the job. This method is faster than `getJob()` and throws if the
     * job status is unknown. This makes it well suited for status polling.
     */ async getJobStatus(jobId) {
        return _computeJs.ComputeImpl.getJobStatus(this.client, jobId);
    }
    /**
     * Schedules the job for eventual termination/deletion. The job will be terminated at some point in the future on a best-effort basis.
     * It is not an error to request to terminate an already-terminated or non-existing job.
     * @param jobId The unique identifier of the job.
     */ async terminateJob(jobId) {
        return _computeJs.ComputeImpl.terminateJob(this.client, jobId);
    }
    /**
     * Gets a metering report for your API usage.
     * @param filter Controls API usage window.
     */ async getUsage(filter) {
        return _meterJs.MeterImpl.getUsage(this.client, filter);
    }
    /**
     * Gets your monthly API usage quota limits.
     */ async getQuota() {
        return _meterJs.MeterImpl.getQuota(this.client);
    }
    /**
     * Updates your monthly API usage quota limits.
     * @param params Specifies monthly quota limits to enforce until you change them again.
     */ async setQuota(params) {
        return _meterJs.MeterImpl.setQuota(this.client, params);
    }
    // Tokenization
    /** Returns the amount of the token held by the identity. */ async getTokenBalance(identityId, tokenId) {
        return _identityJs.IdentityImpl.getTokenBalance(this.client, identityId, tokenId);
    }
    /** Mints a new token. */ async mintToken(params) {
        return _tokenizationJs.TokenImpl.mint(this.client, params);
    }
    /** Returns information about a token. */ async getToken(tokenId) {
        return _tokenizationJs.TokenImpl.get(this.client, tokenId);
    }
    async searchTokens(filter) {
        return _tokenizationJs.TokenImpl.search(this.client, filter);
    }
    /** Returns information about an asset held by the escrow identity. */ async searchEscrowedAssets(filter) {
        return _assetJs.AssetImpl.search(this.client, filter);
    }
    /** Returns information about an asset held by the escrow identity. */ async getEscrowedAsset(assetId) {
        return _assetJs.AssetImpl.get(this.client, assetId);
    }
    async transferToken(tokenId, amount, recipient) {
        return _tokenizationJs.TokenImpl.transfer(this.client, tokenId, amount, recipient);
    }
    async getTransferReceipt(recieptId) {
        return _tokenizationJs.TokenImpl.getTransferReceipt(this.client, recieptId);
    }
}
exports.default = Parcel;

},{"./app.js":"fr7eU","./asset.js":"cgtR8","./client.js":"jDodY","./compute.js":"8xVS3","./database.js":"iefjf","./document.js":"cDpvr","./grant.js":"lsdxa","./http.js":"1CAq3","./identity.js":"2OWQf","./meter.js":"3Ylft","./permission.js":"90vFu","./token.js":"89XdY","./tokenization.js":"2Emad","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"fr7eU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App
);
parcelHelpers.export(exports, "AppImpl", ()=>AppImpl
);
parcelHelpers.export(exports, "APPS_EP", ()=>APPS_EP
);
parcelHelpers.export(exports, "endpointForApp", ()=>endpointForId
);
var _identityJs = require("./identity.js");
var _modelJs = require("./model.js");
var _permissionJs = require("./permission.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _App_client;
class App {
    constructor(client, pod){
        _App_client.set(this, void 0);
        __classPrivateFieldSet(this, _App_client, client, "f");
        this.acceptanceText = pod.acceptanceText;
        this.admins = pod.admins;
        this.allowUserUploads = pod.allowUserUploads;
        this.brandingColor = pod.brandingColor;
        this.category = pod.category;
        this.collaborators = pod.collaborators;
        this.createdAt = new Date(pod.createdAt);
        this.owner = pod.owner;
        this.extendedDescription = pod.extendedDescription;
        this.homepageUrl = pod.homepageUrl;
        this.id = pod.id;
        this.invites = pod.invites;
        this.invitationText = pod.invitationText;
        this.inviteOnly = pod.inviteOnly;
        this.name = pod.name;
        this.organization = pod.organization;
        this.participants = pod.participants;
        this.privacyPolicy = pod.privacyPolicy;
        this.published = pod.published;
        this.rejectionText = pod.rejectionText;
        this.shortDescription = pod.shortDescription;
        this.termsAndConditions = pod.termsAndConditions;
        this.logoUrl = pod.logoUrl;
    }
    async getIdentity() {
        return _identityJs.IdentityImpl.get(__classPrivateFieldGet(this, _App_client, "f"), this.id);
    }
    async update(params) {
        Object.assign(this, await AppImpl.update(__classPrivateFieldGet(this, _App_client, "f"), this.id, params));
        return this;
    }
    async updateIdentity(params) {
        return _identityJs.IdentityImpl.update(__classPrivateFieldGet(this, _App_client, "f"), this.id, params);
    }
    async delete() {
        return AppImpl.delete_(__classPrivateFieldGet(this, _App_client, "f"), this.id);
    }
    /**
     * Creates a new permission that this app will request from users. The new permission
     * will be added to `this.permissions`.
     */ async createPermission(params) {
        return _permissionJs.PermissionImpl.create(__classPrivateFieldGet(this, _App_client, "f"), this.id, params);
    }
    /**
     * Returns the permissions associated with this app.
     */ async listPermissions(filter) {
        return _permissionJs.PermissionImpl.list(__classPrivateFieldGet(this, _App_client, "f"), this.id, filter);
    }
    /**
     * Deletes a permission from this app, revoking any access made by granting permission.
     * will be removed from `this.permissions`.
     */ async deletePermission(permissionId) {
        return _permissionJs.PermissionImpl.delete_(__classPrivateFieldGet(this, _App_client, "f"), this.id, permissionId);
    }
}
_App_client = new WeakMap();
var AppImpl;
(function(AppImpl1) {
    async function create(client, params) {
        const podApp = await client.create(APPS_EP, params);
        return new App(client, podApp);
    }
    AppImpl1.create = create;
    async function get(client, id) {
        const podApp = await client.get(endpointForId(id));
        return new App(client, podApp);
    }
    AppImpl1.get = get;
    async function list(client, filter) {
        const podPage = await client.get(APPS_EP, filter);
        return _modelJs.makePage(App, podPage, client);
    }
    AppImpl1.list = list;
    async function update(client, id, params) {
        const podApp = await client.update(endpointForId(id), params);
        return new App(client, podApp);
    }
    AppImpl1.update = update;
    async function delete_(client, id) {
        return client.delete(endpointForId(id));
    }
    AppImpl1.delete_ = delete_;
})(AppImpl || (AppImpl = {}));
const APPS_EP = 'apps';
const endpointForId = (id)=>`${APPS_EP}/${id}`
;

},{"./identity.js":"2OWQf","./model.js":"lMocE","./permission.js":"90vFu","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"2OWQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Identity", ()=>Identity
);
parcelHelpers.export(exports, "IdentityImpl", ()=>IdentityImpl
);
var _grantJs = require("./grant.js");
var _permissionJs = require("./permission.js");
var _tokenJs = require("./token.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Identity_client;
const IDENTITIES_EP = 'identities';
const IDENTITIES_ME = `${IDENTITIES_EP}/me`;
const endpointForId = (id)=>`${IDENTITIES_EP}/${id}`
;
const endpointForPermissions = (id)=>`${endpointForId(id)}/permissions`
;
const endpointForPermission = (identityId, permissionId)=>`${endpointForPermissions(identityId)}/${permissionId}`
;
const endpointForLinkedEthAddrs = (id)=>`${endpointForId(id)}/links/ethereum`
;
const endpointForLinkedEthAddr = (id, ethAddr)=>`${endpointForLinkedEthAddrs(id)}/links/ethereum/${ethAddr}`
;
const endpointForTokens = (id)=>`${endpointForId(id)}/tokens`
;
const endpointForToken = (id, token)=>`${endpointForTokens(id)}/${token}`
;
class Identity {
    constructor(client, pod){
        _Identity_client.set(this, void 0);
        __classPrivateFieldSet(this, _Identity_client, client, "f");
        this.id = pod.id;
        this.createdAt = new Date(pod.createdAt);
        this.tokenVerifiers = pod.tokenVerifiers;
    }
    async update(params) {
        Object.assign(this, await IdentityImpl.update(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, params));
        return this;
    }
    async delete() {
        return IdentityImpl.delete_(__classPrivateFieldGet(this, _Identity_client, "f"), this.id);
    }
    async linkEthAddr(prover) {
        return IdentityImpl.linkEthAddr(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, prover);
    }
    async unlinkEthAddr(ethAddr) {
        return IdentityImpl.unlinkEthAddr(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, ethAddr);
    }
    async listLinkedEthAddrs(filter) {
        return IdentityImpl.listLinkedEthAddrs(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, filter);
    }
    /** Fetches permissions to which this identity has agreed.  */ async listGrantedPermissions(filter) {
        return IdentityImpl.listGrantedPermissions(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, filter);
    }
    async grantPermission(id) {
        return IdentityImpl.grantPermission(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, id);
    }
    /** Gets a granted permission by id. Useful for checking if a permission has been granted. */ async getGrantedPermission(id) {
        return IdentityImpl.getGrantedPermission(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, id);
    }
    async revokePermission(id) {
        return IdentityImpl.revokePermission(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, id);
    }
    // Tokenization
    async listTokens(filter) {
        return IdentityImpl.listHeldTokens(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, filter);
    }
    async getTokenBalance(token) {
        return IdentityImpl.getTokenBalance(__classPrivateFieldGet(this, _Identity_client, "f"), this.id, token);
    }
}
_Identity_client = new WeakMap();
var IdentityImpl;
(function(IdentityImpl1) {
    async function create(client, params) {
        const podIdentity = await client.create(IDENTITIES_EP, params, {
            hooks: {
                beforeRequest: [
                    (req)=>{
                        req.headers.delete('authorization');
                    }, 
                ]
            }
        });
        return new Identity(client, podIdentity);
    }
    IdentityImpl1.create = create;
    async function current(client) {
        const podIdentity = await client.get(IDENTITIES_ME);
        return new Identity(client, podIdentity);
    }
    IdentityImpl1.current = current;
    async function get(client, id) {
        const podIdentity = await client.get(endpointForId(id));
        return new Identity(client, podIdentity);
    }
    IdentityImpl1.get = get;
    async function update(client, id, params) {
        const podIdentity = await client.update(endpointForId(id), params);
        return new Identity(client, podIdentity);
    }
    IdentityImpl1.update = update;
    async function delete_(client, id) {
        return client.delete(endpointForId(id));
    }
    IdentityImpl1.delete_ = delete_;
    async function linkEthAddr(client, identity, prover) {
        const assertion = `parcel identity = ${identity}`;
        let proof;
        if ('accountIndex' in prover && typeof prover.accountIndex === 'number') proof = await _tokenJs.EthTokenProvider.sign({
            ethProviderUsingAccountIndex: prover.accountIndex
        }, assertion);
        else if ('signMessage' in prover && typeof prover.signMessage === 'function') proof = await _tokenJs.EthTokenProvider.sign({
            signMessage: prover.signMessage.bind(prover)
        }, assertion);
        else if ('proof' in prover && typeof prover.proof === 'string') proof = prover.proof;
        else throw new TypeError('invalid prover provided to `linkEthAddr`');
        return client.create(endpointForLinkedEthAddrs(identity), {
            proof
        });
    }
    IdentityImpl1.linkEthAddr = linkEthAddr;
    async function listLinkedEthAddrs(client, identityId, filter) {
        const podPage = await client.get(endpointForLinkedEthAddrs(identityId), filter);
        const results = podPage.results.map(({ address , linkedAt  })=>({
                address,
                linkedAt: new Date(linkedAt)
            })
        );
        return {
            results,
            nextPageToken: podPage.nextPageToken
        };
    }
    IdentityImpl1.listLinkedEthAddrs = listLinkedEthAddrs;
    async function unlinkEthAddr(client, identity, ethAddr) {
        await client.delete(endpointForLinkedEthAddr(identity, ethAddr));
    }
    IdentityImpl1.unlinkEthAddr = unlinkEthAddr;
    /** Grants permission to an app. */ async function grantPermission(client, identityId, permissionId) {
        const { grants  } = await client.create(endpointForPermission(identityId, permissionId), {});
        return {
            grants: grants.map((g)=>new _grantJs.Grant(client, g)
            )
        };
    }
    IdentityImpl1.grantPermission = grantPermission;
    async function listGrantedPermissions(client, identityId, filter) {
        const podPage = await client.get(endpointForPermissions(identityId), filter);
        const results = podPage.results.map((podPermission)=>new _permissionJs.Permission(client, podPermission)
        );
        return {
            results,
            nextPageToken: podPage.nextPageToken
        };
    }
    IdentityImpl1.listGrantedPermissions = listGrantedPermissions;
    async function getGrantedPermission(client, identityId, permissionId) {
        const podPermission = await client.get(endpointForPermission(identityId, permissionId));
        return new _permissionJs.Permission(client, podPermission);
    }
    IdentityImpl1.getGrantedPermission = getGrantedPermission;
    async function revokePermission(client, identityId, permissionId) {
        await client.delete(endpointForPermission(identityId, permissionId));
    }
    IdentityImpl1.revokePermission = revokePermission;
    async function listHeldTokens(client, identityId, filter) {
        return client.get(endpointForTokens(identityId), filter);
    }
    IdentityImpl1.listHeldTokens = listHeldTokens;
    async function getTokenBalance(client, identityId, tokenId) {
        return client.get(endpointForToken(identityId, tokenId));
    }
    IdentityImpl1.getTokenBalance = getTokenBalance;
})(IdentityImpl || (IdentityImpl = {}));

},{"./grant.js":"lsdxa","./permission.js":"90vFu","./token.js":"89XdY","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"lsdxa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Grant", ()=>Grant
);
parcelHelpers.export(exports, "GrantImpl", ()=>GrantImpl
);
parcelHelpers.export(exports, "Capabilities", ()=>Capabilities
);
/* eslint-enable @typescript-eslint/prefer-literal-enum-member */ parcelHelpers.export(exports, "parseCaps", ()=>parseCaps
);
parcelHelpers.export(exports, "stringifyCaps", ()=>stringifyCaps
);
var _modelJs = require("./model.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Grant_client;
const GRANTS_EP = 'grants';
const endpointForId = (id)=>`${GRANTS_EP}/${id}`
;
class Grant {
    constructor(client, pod){
        var _a;
        _Grant_client.set(this, void 0);
        __classPrivateFieldSet(this, _Grant_client, client, "f");
        this.id = pod.id;
        this.createdAt = new Date(pod.createdAt);
        this.granter = pod.granter;
        this.grantee = (_a = pod.grantee) !== null && _a !== void 0 ? _a : 'everyone';
        this.condition = pod.condition;
        this.permission = pod.permission;
        this.capabilities = pod.capabilities ? parseCaps(pod.capabilities) : undefined;
        this.delegating = pod.delegating;
    }
    async delete() {
        return __classPrivateFieldGet(this, _Grant_client, "f").delete(endpointForId(this.id));
    }
}
_Grant_client = new WeakMap();
var GrantImpl;
(function(GrantImpl1) {
    async function create(client, params) {
        const podGrant = await client.create(GRANTS_EP, params);
        return new Grant(client, podGrant);
    }
    GrantImpl1.create = create;
    async function get(client, id) {
        const podGrant = await client.get(endpointForId(id));
        return new Grant(client, podGrant);
    }
    GrantImpl1.get = get;
    async function list(client, filter) {
        const podPage = await client.get(GRANTS_EP, filter);
        return _modelJs.makePage(Grant, podPage, client);
    }
    GrantImpl1.list = list;
    async function delete_(client, id) {
        return client.delete(endpointForId(id));
    }
    GrantImpl1.delete_ = delete_;
})(GrantImpl || (GrantImpl = {}));
var Capabilities;
(function(Capabilities1) {
    Capabilities1[Capabilities1["None"] = 0] = "None";
    /** The ability to read/view the target. */ Capabilities1[Capabilities1["Read"] = 1] = "Read";
    // /** The ability to write the target. */
    // Write = 1 << 1,
    /** The ability to delegate this grant's capabilities to someone else. */ Capabilities1[Capabilities1["Extend"] = 4] = "Extend";
})(Capabilities || (Capabilities = {}));
function parseCaps(strCaps) {
    if (strCaps === undefined) return Capabilities.None;
    let caps = Capabilities.None;
    for (const strCap of strCaps.trim().split(/\s+/))switch(strCap){
        case 'read':
            caps |= Capabilities.Read;
            break;
        case 'extend':
            caps |= Capabilities.Extend;
            break;
        case '':
            break;
        default:
            throw new Error(`unknown capability "${strCap}"`);
    }
    return caps;
}
function stringifyCaps(caps) {
    if (caps === undefined) return '';
    const capsStrs = [];
    for (const [name, bit] of Object.entries(Capabilities)){
        if (typeof bit !== 'number') continue;
        if ((caps & bit) !== 0) capsStrs.push(name.toLowerCase());
    }
    return capsStrs.join(' ');
}

},{"./model.js":"lMocE","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"lMocE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makePage", ()=>makePage
);
function makePage(// eslint-disable-next-line @typescript-eslint/prefer-function-type
ModelTy, podPage, client) {
    return {
        results: podPage.results.map((podModel)=>new ModelTy(client, podModel)
        ),
        nextPageToken: podPage.nextPageToken
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"hWqVN":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"90vFu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Permission", ()=>Permission
);
parcelHelpers.export(exports, "PermissionImpl", ()=>PermissionImpl
);
var _appJs = require("./app.js");
var _modelJs = require("./model.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Permission_client;
class Permission {
    constructor(client, pod){
        _Permission_client.set(this, void 0);
        __classPrivateFieldSet(this, _Permission_client, client, "f");
        this.id = pod.id;
        this.appId = pod.appId;
        this.createdAt = new Date(pod.createdAt);
        this.grants = pod.grants;
        this.name = pod.name;
        this.description = pod.description;
        this.allowText = pod.allowText;
        this.denyText = pod.denyText;
    }
}
_Permission_client = new WeakMap();
var PermissionImpl;
(function(PermissionImpl1) {
    async function create(client, appId, params) {
        const podPermission = await client.create(endpointForCollection(appId), params);
        return new Permission(client, podPermission);
    }
    PermissionImpl1.create = create;
    async function list(client, appId, filter) {
        const podPage = await client.get(endpointForCollection(appId), filter);
        return _modelJs.makePage(Permission, podPage, client);
    }
    PermissionImpl1.list = list;
    async function get(client, appId, permissionId) {
        const podPermission = await client.get(endpointForId(appId, permissionId));
        return new Permission(client, podPermission);
    }
    PermissionImpl1.get = get;
    async function delete_(client, appId, permissionId) {
        return client.delete(endpointForId(appId, permissionId));
    }
    PermissionImpl1.delete_ = delete_;
})(PermissionImpl || (PermissionImpl = {}));
const endpointForCollection = (appId)=>`${_appJs.endpointForApp(appId)}/permissions`
;
const endpointForId = (appId, permissionId)=>`${endpointForCollection(appId)}/${permissionId}`
;

},{"./app.js":"fr7eU","./model.js":"lMocE","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"89XdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TokenError", ()=>TokenError
);
parcelHelpers.export(exports, "PARCEL_RUNTIME_AUD", ()=>PARCEL_RUNTIME_AUD
);
parcelHelpers.export(exports, "TokenProvider", ()=>TokenProvider
);
/** A `TokenProvider` hands out OIDC access tokens. */ parcelHelpers.export(exports, "ExpiringTokenProvider", ()=>ExpiringTokenProvider
);
/** A `TokenProvider` that always returns the same, initially provided token. */ parcelHelpers.export(exports, "StaticTokenProvider", ()=>StaticTokenProvider
);
/** A `TokenProvider` that obtains a new token by re-authenticating to the issuer. */ parcelHelpers.export(exports, "RenewingTokenProvider", ()=>RenewingTokenProvider
);
/** A `TokenProvider` that obtains a new token using a refresh token. */ parcelHelpers.export(exports, "RefreshingTokenProvider", ()=>RefreshingTokenProvider
);
/** A `TokenProvider` that self-signs an access token. */ parcelHelpers.export(exports, "SelfIssuedTokenProvider", ()=>SelfIssuedTokenProvider
);
/** A `TokenProvider` that self-signs an access token. */ parcelHelpers.export(exports, "EthTokenProvider", ()=>EthTokenProvider
);
var _ky = require("ky");
var _kyDefault = parcelHelpers.interopDefault(_ky);
var _httpJs = require("./http.js");
var _polyfillJs = require("./polyfill.js");
/* eslint-disable node/no-unsupported-features/es-syntax */ var _a, _b;
class TokenError extends _ky.HTTPError {
    constructor(request, options, response, // Workaround for https://github.com/sindresorhus/ky/issues/148.
    responseJson){
        var _a1;
        super(response, request, options);
        this.responseJson = responseJson;
        this.name = 'TokenError';
        this.message = (_a1 = this.responseJson.error_description) !== null && _a1 !== void 0 ? _a1 : this.responseJson.error;
    }
}
const tokenKy = new Proxy({}, {
    get (target, prop) {
        if (target.ky) return target.ky[prop];
        return async (...args)=>{
            await _polyfillJs.ensureGlobalFetch();
            target.ky = _kyDefault.default.create({
                hooks: {
                    beforeRequest: [
                        _httpJs.appendAsLastBeforeRequest(_httpJs.dontCloneForAfterResponses())
                    ],
                    afterResponse: [
                        async (req, opts, res)=>{
                            var _a2, _b1;
                            // Wrap errors, for easier client handling (and maybe better messages).
                            const isJson = (_b1 = (_a2 = res.headers.get('content-type')) === null || _a2 === void 0 ? void 0 : _a2.startsWith('application/json')) !== null && _b1 !== void 0 ? _b1 : false;
                            if (!res.ok && isJson) throw new TokenError(req, opts, res, await res.json());
                        }, 
                    ]
                }
            });
            return target.ky[prop](...args);
        };
    }
});
const DEFAULT_TOKEN_ENDPOINT = ((_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.PARCEL_AUTH_URL) ? `${globalThis.process.env.PARCEL_AUTH_URL}/oauth/token` : 'https://auth.oasislabs.com/oauth/token';
const PARCEL_RUNTIME_AUD = 'https://api.oasislabs.com/parcel'; // TODO(#326)
const DEFAULT_SCOPE = 'parcel.full';
class TokenProvider {
    static fromSource(source) {
        if (typeof source === 'string') return new StaticTokenProvider(source);
        if ('principal' in source && 'privateKey' in source) return new SelfIssuedTokenProvider(source);
        if ('refreshToken' in source) return new RefreshingTokenProvider(source);
        if ('clientId' in source) return new RenewingTokenProvider(source);
        if ('ethProviderUsingAccountIndex' in source || 'signMessage' in source) return new EthTokenProvider(source);
        throw new TypeError(`unrecognized \`tokenSource\`: ${JSON.stringify(source)}`);
    }
}
class ExpiringTokenProvider {
    static isTokenProvider(thing) {
        return thing && typeof thing.getToken === 'function';
    }
    /** Returns a valid Bearer token to be presented to the Parcel gateway. */ async getToken() {
        if (this.token === undefined || this.token.isExpired()) this.token = await this.renewToken();
        return this.token.toString();
    }
}
class StaticTokenProvider {
    constructor(token){
        this.token = token;
    }
    async getToken() {
        return this.token;
    }
}
class RenewingTokenProvider extends ExpiringTokenProvider {
    constructor({ clientId , privateKey , scopes , tokenEndpoint , audience ,  }){
        super();
        this.clientAssertionLifetime = 3600; // 1 hour
        if (privateKey.kty !== 'EC') throw new Error('Private key should be an ECDSA key.');
        this.privateKey = privateKey;
        this.privateKeyPEM = jwkToPem(privateKey);
        this.clientId = clientId;
        this.tokenEndpoint = tokenEndpoint !== null && tokenEndpoint !== void 0 ? tokenEndpoint : DEFAULT_TOKEN_ENDPOINT;
        this.audience = audience !== null && audience !== void 0 ? audience : PARCEL_RUNTIME_AUD;
        this.scopes = scopes !== null && scopes !== void 0 ? scopes : [
            DEFAULT_SCOPE
        ];
    }
    async renewToken() {
        const clientAssertion = await makeJWT({
            privateKey: await this.privateKeyPEM,
            keyId: this.privateKey.kid,
            payload: {
                sub: this.clientId,
                iss: this.clientId,
                aud: this.tokenEndpoint,
                jti: (await require("194128989a8e12c7")).KJUR.crypto.Util.getRandomHexOfNbytes(8)
            },
            lifetime: this.clientAssertionLifetime
        });
        const authParams = new URLSearchParams();
        authParams.append('grant_type', 'client_credentials');
        authParams.append('client_assertion', clientAssertion);
        authParams.append('client_assertion_type', 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer');
        authParams.append('scope', this.scopes.join(' '));
        authParams.append('audience', this.audience);
        return Token.fromResponse(tokenKy.post(this.tokenEndpoint, {
            body: authParams
        }));
    }
}
class RefreshingTokenProvider extends ExpiringTokenProvider {
    constructor({ refreshToken , tokenEndpoint , audience  }){
        super();
        this.refreshToken = refreshToken;
        this.tokenEndpoint = tokenEndpoint;
        this.audience = audience;
    }
    async renewToken() {
        const refreshParams = new URLSearchParams();
        refreshParams.append('grant_type', 'refresh_token');
        refreshParams.append('refresh_token', this.refreshToken);
        refreshParams.append('audience', this.audience);
        const res = tokenKy.post(this.tokenEndpoint, {
            body: refreshParams
        });
        res// eslint-disable-next-line promise/prefer-await-to-then
        .then(async (refreshResponse)=>{
            this.refreshToken = (await refreshResponse.clone().json()).refresh_token;
        })// eslint-disable-next-line promise/prefer-await-to-then
        .catch(()=>{
        // Do nothing. The promise lives on.
        });
        return Token.fromResponse(res);
    }
}
class SelfIssuedTokenProvider extends ExpiringTokenProvider {
    constructor({ principal , privateKey , scopes , tokenLifetime ,  }){
        super();
        this.privateKey = privateKey;
        this.privateKeyPEM = jwkToPem(privateKey);
        this.principal = principal;
        this.scopes = scopes !== null && scopes !== void 0 ? scopes : [
            DEFAULT_SCOPE
        ];
        this.tokenLifetime = tokenLifetime !== null && tokenLifetime !== void 0 ? tokenLifetime : 3600 /* one hour */ ;
    }
    async renewToken() {
        const expiry = Math.floor(Date.now() / 1000 + this.tokenLifetime);
        const token = await makeJWT({
            privateKey: await this.privateKeyPEM,
            keyId: this.privateKey.kid,
            payload: {
                sub: this.principal,
                iss: this.principal,
                aud: PARCEL_RUNTIME_AUD,
                scope: this.scopes.join(' ')
            },
            lifetime: this.tokenLifetime
        });
        return new Token(token, expiry);
    }
}
class EthTokenProvider extends ExpiringTokenProvider {
    constructor(params){
        var _a3, _b2;
        super();
        this.principal = params.principal;
        this.scopes = (_a3 = params.scopes) !== null && _a3 !== void 0 ? _a3 : [
            DEFAULT_SCOPE
        ];
        this.tokenLifetime = (_b2 = params.tokenLifetime) !== null && _b2 !== void 0 ? _b2 : 3600 /* one hour */ ;
        if ('ethProviderUsingAccountIndex' in params) this.signer = {
            ethProviderUsingAccountIndex: params.ethProviderUsingAccountIndex
        };
        else if ('signMessage' in params) this.signer = {
            signMessage: params.signMessage
        };
        else throw new TypeError('invalid `EthTokenProviderParams`');
    }
    static async sign(signer, message) {
        if ('signMessage' in signer) return signer.signMessage(message);
        if ('ethProviderUsingAccountIndex' in signer) {
            const accountIndex = signer.ethProviderUsingAccountIndex;
            const { web3 , ethereum  } = globalThis;
            const ethProvider = ethereum !== null && ethereum !== void 0 ? ethereum : web3 === null || web3 === void 0 ? void 0 : web3.currentProvider;
            if (!ethProvider) throw new Error('no Ethereum provider available');
            const web3Req = async (req)=>new Promise((resolve, reject)=>{
                    ethProvider.sendAsync(req, (err, { result  })=>{
                        if (err) reject(err);
                        else resolve(result);
                    });
                })
            ;
            const accounts = await web3Req({
                method: 'eth_accounts'
            });
            const ethAddr = accounts[accountIndex];
            if (!ethAddr) throw new Error(`no connected Ethereum account with index ${accountIndex}`);
            return web3Req({
                method: 'personal_sign',
                params: [
                    message,
                    ethAddr
                ],
                from: ethAddr
            });
        }
        throw new TypeError('invalid `EthTokenSigner`');
    }
    async renewToken() {
        const safeBuffer = await require("9c0a515928c82bcf");
        const { Buffer  } = safeBuffer;
        const expiry = Math.floor(Date.now() / 1000 + this.tokenLifetime);
        const header = {
            alg: 'Ethereum',
            kty: 'EC',
            crv: 'P-256K'
        };
        const payload = {
            sub: this.principal,
            iss: this.principal,
            aud: PARCEL_RUNTIME_AUD,
            scope: this.scopes.join(' '),
            exp: expiry
        };
        const b64url = (b64)=>b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
        ;
        const jwtEncode = (obj)=>b64url(Buffer.from(JSON.stringify(obj)).toString('base64'))
        ;
        const message = `${jwtEncode(header)}.${jwtEncode(payload)}`;
        const signatureHex = await EthTokenProvider.sign(this.signer, message);
        const signature = b64url(Buffer.from(signatureHex.slice(2), 'hex').toString('base64'));
        return new Token(`${message}.${signature}`, expiry);
    }
}
class Token {
    constructor(token, expiry){
        this.token = token;
        this.expiry = expiry;
    }
    static async fromResponse(response) {
        const requestTime = Date.now();
        const body = await (await response).json();
        return new Token(body.access_token, requestTime + body.expires_in * 1000);
    }
    isExpired() {
        return this.expiry <= Date.now() / 1000;
    }
    toString() {
        return this.token;
    }
}
/** Returns the PKCS8-encoded private key and the JWK"s key id. */ async function jwkToPem(jwk) {
    const jsrsasign = await require("194128989a8e12c7");
    if (jwk.kty !== 'EC' || jwk.alg !== 'ES256') throw new Error(`Unsupported private key. Expected \`alg: 'ES256'\` but was \`${jwk.alg}\` }`);
    const kjurJWK = JSON.parse(JSON.stringify(jwk));
    kjurJWK.crv = 'secp256r1'; // KJUR's preferred name for name for P-256
    const privateKey = jsrsasign.KEYUTIL.getPEM(jsrsasign.KEYUTIL.getKey(kjurJWK), 'PKCS8PRV'); // The type definitions are wrong: they say `void` but it's actually `string`.
    return privateKey;
}
async function makeJWT({ privateKey , keyId , payload , lifetime ,  }) {
    const header = {
        alg: 'ES256',
        typ: 'JWT',
        kid: keyId
    };
    const now = Math.floor(Date.now() / 1000);
    payload.iat = now - 120; // Take off a couple of minutes to account for clock skew.
    payload.exp = now + lifetime;
    return (await require("194128989a8e12c7")).KJUR.jws.JWS.sign(null, header, payload, privateKey);
}

},{"ky":"e1T4n","./http.js":"1CAq3","./polyfill.js":"dAndL","194128989a8e12c7":"gUoPl","9c0a515928c82bcf":"2Jk6D","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"e1T4n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTTPError", ()=>_httperrorJs.HTTPError
);
parcelHelpers.export(exports, "TimeoutError", ()=>_timeoutErrorJs.TimeoutError
);
/*! MIT License © Sindre Sorhus */ var _kyJs = require("./core/Ky.js");
var _constantsJs = require("./core/constants.js");
var _mergeJs = require("./utils/merge.js");
var _httperrorJs = require("./errors/HTTPError.js");
var _timeoutErrorJs = require("./errors/TimeoutError.js");
const createInstance = (defaults)=>{
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky1 = (input, options)=>_kyJs.Ky.create(input, _mergeJs.validateAndMerge(defaults, options))
    ;
    for (const method of _constantsJs.requestMethods)// eslint-disable-next-line @typescript-eslint/promise-function-async
    ky1[method] = (input, options)=>_kyJs.Ky.create(input, _mergeJs.validateAndMerge(defaults, options, {
            method
        }))
    ;
    ky1.create = (newDefaults)=>createInstance(_mergeJs.validateAndMerge(newDefaults))
    ;
    ky1.extend = (newDefaults)=>createInstance(_mergeJs.validateAndMerge(defaults, newDefaults))
    ;
    ky1.stop = _constantsJs.stop;
    return ky1;
};
const ky = createInstance();
exports.default = ky;

},{"./core/Ky.js":"6F1J0","./core/constants.js":"8Yo0U","./utils/merge.js":"7CW3Y","./errors/HTTPError.js":"kApi6","./errors/TimeoutError.js":"1zQ6Q","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"6F1J0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ky", ()=>Ky
);
var _httperrorJs = require("../errors/HTTPError.js");
var _timeoutErrorJs = require("../errors/TimeoutError.js");
var _mergeJs = require("../utils/merge.js");
var _normalizeJs = require("../utils/normalize.js");
var _timeJs = require("../utils/time.js");
var _constantsJs = require("./constants.js");
class Ky {
    // eslint-disable-next-line complexity
    constructor(input, options = {}){
        var _a, _b, _c;
        this._retryCount = 0;
        this._input = input;
        this._options = {
            // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
            credentials: this._input.credentials || 'same-origin',
            ...options,
            headers: _mergeJs.mergeHeaders(this._input.headers, options.headers),
            hooks: _mergeJs.deepMerge({
                beforeRequest: [],
                beforeRetry: [],
                beforeError: [],
                afterResponse: []
            }, options.hooks),
            method: _normalizeJs.normalizeRequestMethod((_a = options.method) !== null && _a !== void 0 ? _a : this._input.method),
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            prefixUrl: String(options.prefixUrl || ''),
            retry: _normalizeJs.normalizeRetryOptions(options.retry),
            throwHttpErrors: options.throwHttpErrors !== false,
            timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout,
            fetch: (_b = options.fetch) !== null && _b !== void 0 ? _b : globalThis.fetch.bind(globalThis)
        };
        if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globalThis.Request)) throw new TypeError('`input` must be a string, URL, or Request');
        if (this._options.prefixUrl && typeof this._input === 'string') {
            if (this._input.startsWith('/')) throw new Error('`input` must not begin with a slash when using `prefixUrl`');
            if (!this._options.prefixUrl.endsWith('/')) this._options.prefixUrl += '/';
            this._input = this._options.prefixUrl + this._input;
        }
        if (_constantsJs.supportsAbortController) {
            this.abortController = new globalThis.AbortController();
            if (this._options.signal) this._options.signal.addEventListener('abort', ()=>{
                this.abortController.abort();
            });
            this._options.signal = this.abortController.signal;
        }
        this.request = new globalThis.Request(this._input, this._options);
        if (this._options.searchParams) {
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const textSearchParams = typeof this._options.searchParams === 'string' ? this._options.searchParams.replace(/^\?/, '') : new URLSearchParams(this._options.searchParams).toString();
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const searchParams = '?' + textSearchParams;
            const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
            // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
            if ((_constantsJs.supportsFormData && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) this.request.headers.delete('content-type');
            this.request = new globalThis.Request(new globalThis.Request(url, this.request), this._options);
        }
        if (this._options.json !== undefined) {
            this._options.body = JSON.stringify(this._options.json);
            this.request.headers.set('content-type', (_c = this._options.headers.get('content-type')) !== null && _c !== void 0 ? _c : 'application/json');
            this.request = new globalThis.Request(this.request, {
                body: this._options.body
            });
        }
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    static create(input, options) {
        const ky = new Ky(input, options);
        const fn = async ()=>{
            if (ky._options.timeout > _constantsJs.maxSafeTimeout) throw new RangeError(`The \`timeout\` option cannot be greater than ${_constantsJs.maxSafeTimeout}`);
            // Delay the fetch so that body method shortcuts can set the Accept header
            await Promise.resolve();
            let response = await ky._fetch();
            for (const hook of ky._options.hooks.afterResponse){
                // eslint-disable-next-line no-await-in-loop
                const modifiedResponse = await hook(ky.request, ky._options, ky._decorateResponse(response.clone()));
                if (modifiedResponse instanceof globalThis.Response) response = modifiedResponse;
            }
            ky._decorateResponse(response);
            if (!response.ok && ky._options.throwHttpErrors) {
                let error = new _httperrorJs.HTTPError(response, ky.request, ky._options);
                for (const hook of ky._options.hooks.beforeError)// eslint-disable-next-line no-await-in-loop
                error = await hook(error);
                throw error;
            }
            // If `onDownloadProgress` is passed, it uses the stream API internally
            /* istanbul ignore next */ if (ky._options.onDownloadProgress) {
                if (typeof ky._options.onDownloadProgress !== 'function') throw new TypeError('The `onDownloadProgress` option must be a function');
                if (!_constantsJs.supportsStreams) throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                return ky._stream(response.clone(), ky._options.onDownloadProgress);
            }
            return response;
        };
        const isRetriableMethod = ky._options.retry.methods.includes(ky.request.method.toLowerCase());
        const result = isRetriableMethod ? ky._retry(fn) : fn();
        for (const [type, mimeType] of Object.entries(_constantsJs.responseTypes))result[type] = async ()=>{
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            ky.request.headers.set('accept', ky.request.headers.get('accept') || mimeType);
            const awaitedResult = await result;
            const response = awaitedResult.clone();
            if (type === 'json') {
                if (response.status === 204) return '';
                if (options.parseJson) return options.parseJson(await response.text());
            }
            return response[type]();
        };
        return result;
    }
    _calculateRetryDelay(error) {
        this._retryCount++;
        if (this._retryCount < this._options.retry.limit && !(error instanceof _timeoutErrorJs.TimeoutError)) {
            if (error instanceof _httperrorJs.HTTPError) {
                if (!this._options.retry.statusCodes.includes(error.response.status)) return 0;
                const retryAfter = error.response.headers.get('Retry-After');
                if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
                    let after = Number(retryAfter);
                    if (Number.isNaN(after)) after = Date.parse(retryAfter) - Date.now();
                    else after *= 1000;
                    if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) return 0;
                    return after;
                }
                if (error.response.status === 413) return 0;
            }
            const BACKOFF_FACTOR = 0.3;
            return BACKOFF_FACTOR * 2 ** (this._retryCount - 1) * 1000;
        }
        return 0;
    }
    _decorateResponse(response) {
        if (this._options.parseJson) response.json = async ()=>this._options.parseJson(await response.text())
        ;
        return response;
    }
    async _retry(fn) {
        try {
            return await fn();
        // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
        } catch (error) {
            const ms = Math.min(this._calculateRetryDelay(error), _constantsJs.maxSafeTimeout);
            if (ms !== 0 && this._retryCount > 0) {
                await _timeJs.delay(ms);
                for (const hook of this._options.hooks.beforeRetry){
                    // eslint-disable-next-line no-await-in-loop
                    const hookResult = await hook({
                        request: this.request,
                        options: this._options,
                        error: error,
                        retryCount: this._retryCount
                    });
                    // If `stop` is returned from the hook, the retry process is stopped
                    if (hookResult === _constantsJs.stop) return;
                }
                return this._retry(fn);
            }
            throw error;
        }
    }
    async _fetch() {
        for (const hook of this._options.hooks.beforeRequest){
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(this.request, this._options);
            if (result instanceof Request) {
                this.request = result;
                break;
            }
            if (result instanceof Response) return result;
        }
        if (this._options.timeout === false) return this._options.fetch(this.request.clone());
        return _timeJs.timeout(this.request.clone(), this.abortController, this._options);
    }
    /* istanbul ignore next */ _stream(response, onDownloadProgress) {
        const totalBytes = Number(response.headers.get('content-length')) || 0;
        let transferredBytes = 0;
        return new globalThis.Response(new globalThis.ReadableStream({
            async start (controller) {
                const reader = response.body.getReader();
                if (onDownloadProgress) onDownloadProgress({
                    percent: 0,
                    transferredBytes: 0,
                    totalBytes
                }, new Uint8Array());
                async function read() {
                    const { done , value  } = await reader.read();
                    if (done) {
                        controller.close();
                        return;
                    }
                    if (onDownloadProgress) {
                        transferredBytes += value.byteLength;
                        const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                        onDownloadProgress({
                            percent,
                            transferredBytes,
                            totalBytes
                        }, value);
                    }
                    controller.enqueue(value);
                    await read();
                }
                await read();
            }
        }));
    }
}

},{"../errors/HTTPError.js":"kApi6","../errors/TimeoutError.js":"1zQ6Q","../utils/merge.js":"7CW3Y","../utils/normalize.js":"l942d","../utils/time.js":"1zCRA","./constants.js":"8Yo0U","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"kApi6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// eslint-lint-disable-next-line @typescript-eslint/naming-convention
parcelHelpers.export(exports, "HTTPError", ()=>HTTPError
);
class HTTPError extends Error {
    constructor(response, request, options){
        const code = response.status || response.status === 0 ? response.status : '';
        const title = response.statusText || '';
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : 'an unknown error';
        super(`Request failed with ${reason}`);
        this.name = 'HTTPError';
        this.response = response;
        this.request = request;
        this.options = options;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"1zQ6Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimeoutError", ()=>TimeoutError
);
class TimeoutError extends Error {
    constructor(request){
        super('Request timed out');
        this.name = 'TimeoutError';
        this.request = request;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"7CW3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateAndMerge", ()=>validateAndMerge
);
parcelHelpers.export(exports, "mergeHeaders", ()=>mergeHeaders
);
parcelHelpers.export(exports, "deepMerge", ()=>deepMerge
);
var _isJs = require("./is.js");
const validateAndMerge = (...sources)=>{
    for (const source of sources){
        if ((!_isJs.isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') throw new TypeError('The `options` argument must be an object');
    }
    return deepMerge({}, ...sources);
};
const mergeHeaders = (source1 = {}, source2 = {})=>{
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    for (const [key, value] of source.entries())if (isHeadersInstance && value === 'undefined' || value === undefined) result.delete(key);
    else result.set(key, value);
    return result;
};
const deepMerge = (...sources)=>{
    let returnValue = {};
    let headers = {};
    for (const source of sources){
        if (Array.isArray(source)) {
            if (!Array.isArray(returnValue)) returnValue = [];
            returnValue = [
                ...returnValue,
                ...source
            ];
        } else if (_isJs.isObject(source)) {
            for (let [key, value] of Object.entries(source)){
                if (_isJs.isObject(value) && key in returnValue) value = deepMerge(returnValue[key], value);
                returnValue = {
                    ...returnValue,
                    [key]: value
                };
            }
            if (_isJs.isObject(source.headers)) {
                headers = mergeHeaders(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    return returnValue;
};

},{"./is.js":"3qLOs","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"3qLOs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
const isObject = (value)=>value !== null && typeof value === 'object'
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"l942d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeRequestMethod", ()=>normalizeRequestMethod
);
parcelHelpers.export(exports, "normalizeRetryOptions", ()=>normalizeRetryOptions
);
var _constantsJs = require("../core/constants.js");
const normalizeRequestMethod = (input)=>_constantsJs.requestMethods.includes(input) ? input.toUpperCase() : input
;
const retryMethods = [
    'get',
    'put',
    'head',
    'delete',
    'options',
    'trace'
];
const retryStatusCodes = [
    408,
    413,
    429,
    500,
    502,
    503,
    504
];
const retryAfterStatusCodes = [
    413,
    429,
    503
];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY
};
const normalizeRetryOptions = (retry = {})=>{
    if (typeof retry === 'number') return {
        ...defaultRetryOptions,
        limit: retry
    };
    if (retry.methods && !Array.isArray(retry.methods)) throw new Error('retry.methods must be an array');
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) throw new Error('retry.statusCodes must be an array');
    return {
        ...defaultRetryOptions,
        ...retry,
        afterStatusCodes: retryAfterStatusCodes
    };
};

},{"../core/constants.js":"8Yo0U","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"8Yo0U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsAbortController", ()=>supportsAbortController
);
parcelHelpers.export(exports, "supportsStreams", ()=>supportsStreams
);
parcelHelpers.export(exports, "supportsFormData", ()=>supportsFormData
);
parcelHelpers.export(exports, "requestMethods", ()=>requestMethods
);
parcelHelpers.export(exports, "responseTypes", ()=>responseTypes
);
parcelHelpers.export(exports, "maxSafeTimeout", ()=>maxSafeTimeout
);
parcelHelpers.export(exports, "stop", ()=>stop
);
const supportsAbortController = typeof globalThis.AbortController === 'function';
const supportsStreams = typeof globalThis.ReadableStream === 'function';
const supportsFormData = typeof globalThis.FormData === 'function';
const requestMethods = [
    'get',
    'post',
    'put',
    'patch',
    'head',
    'delete'
];
const validate = ()=>undefined
;
validate();
const responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*'
};
const maxSafeTimeout = 2147483647;
const stop = Symbol('stop');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"1zCRA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeout", ()=>timeout
);
parcelHelpers.export(exports, "delay", ()=>delay
);
var _timeoutErrorJs = require("../errors/TimeoutError.js");
const timeout = async (request, abortController, options)=>new Promise((resolve, reject)=>{
        const timeoutId = setTimeout(()=>{
            if (abortController) abortController.abort();
            reject(new _timeoutErrorJs.TimeoutError(request));
        }, options.timeout);
        options.fetch(request).then(resolve).catch(reject).then(()=>{
            clearTimeout(timeoutId);
        });
    })
;
const delay = async (ms)=>new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
;

},{"../errors/TimeoutError.js":"1zQ6Q","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"1CAq3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpClient", ()=>HttpClient
);
/**
 * Workaround to fix `afterResponse` breaking >20MB file downloads.
 *
 * Ky clones the response when using afterResponse. Cloning causes requests to
 * stop requesting data after 2x highWaterMark (we use 10 MB) unless all clones
 * consume data at the same time. This workaround uses beforeRequest hook to
 * skip ky's fetch call + afterResponse handling, and reimplements both.
 *
 * WARNING: Use caution if modifying response.json or response.body in hooks. In
 * vanilla ky every hook receives its own clone of the response; with this
 * workaround, the same response object is passed to all hooks, so changes
 * propagate (somewhat mitigated by readonly fields on Response). In addition,
 * response.body can only be read once.
 *
 * Related issues:
 * - https://github.com/node-fetch/node-fetch#custom-highwatermark
 * - https://github.com/sindresorhus/ky-universal/issues/8
 * - https://github.com/sindresorhus/ky/issues/135
 * - https://github.com/node-fetch/node-fetch/issues/386
 *
 * TODO: remove if fixed by https://github.com/sindresorhus/ky/pull/356
 */ parcelHelpers.export(exports, "dontCloneForAfterResponses", ()=>dontCloneForAfterResponses
);
/** Attaches a hook to end of hooks.beforeRequest (incl. after one-off hooks specified in the call to fetch(), e.g. setExpectedStatus) */ parcelHelpers.export(exports, "appendAsLastBeforeRequest", ()=>appendAsLastBeforeRequest
);
parcelHelpers.export(exports, "addAllowedStatusCode", ()=>addAllowedStatusCode
);
/**
 * A `Download` is the result of calling `parcel.downloadDocument` or `document.download()`.
 *
 * The downloaded data can be read using async iterable `for await (const chunk of download)`,
 * or by calling `await download.pipeTo(sink)`.
 *
 * The download may be aborted by calling `download.destroy()`, as with any `Readable`.
 */ parcelHelpers.export(exports, "Download", ()=>Download
);
parcelHelpers.export(exports, "ApiError", ()=>ApiError
);
var _abortController = require("abort-controller");
var _abortControllerDefault = parcelHelpers.interopDefault(_abortController);
var _formData = require("form-data");
var _formDataDefault = parcelHelpers.interopDefault(_formData);
var _ky = require("ky");
var _kyDefault = parcelHelpers.interopDefault(_ky);
var _paramCase = require("param-case");
var _polyfillJs = require("./polyfill.js");
var _a, _b, _c, _d, _e, _f;
const DEFAULT_API_URL = (_c = (_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.PARCEL_API_URL) !== null && _c !== void 0 ? _c : 'https://api.oasislabs.com/parcel/v1';
const DEFAULT_STORAGE_URL = (_f = (_e = (_d = globalThis === null || globalThis === void 0 ? void 0 : globalThis.process) === null || _d === void 0 ? void 0 : _d.env) === null || _e === void 0 ? void 0 : _e.PARCEL_STORAGE_URL) !== null && _f !== void 0 ? _f : 'https://storage.oasislabs.com/v1/parcel';
const DEFAULT_RESPONSE_CODES = new Map([
    [
        'POST',
        200
    ],
    [
        'PUT',
        200
    ],
    [
        'PATCH',
        200
    ],
    [
        'DELETE',
        204
    ], 
]);
class HttpClient {
    constructor(tokenProvider, config){
        var _a1, _b1, _c1, _d1;
        this.tokenProvider = tokenProvider;
        this.apiUrl = (_b1 = (_a1 = config === null || config === void 0 ? void 0 : config.apiUrl) === null || _a1 === void 0 ? void 0 : _a1.replace(/\/$/, '')) !== null && _b1 !== void 0 ? _b1 : DEFAULT_API_URL;
        this.storageUrl = (_d1 = (_c1 = config === null || config === void 0 ? void 0 : config.storageUrl) === null || _c1 === void 0 ? void 0 : _c1.replace(/\/$/, '')) !== null && _d1 !== void 0 ? _d1 : DEFAULT_STORAGE_URL;
        // Proxy KY so that the async fetch polyfill can be applied during an already-async request
        // while leaving the constructor sync.
        this.apiKy = new Proxy({}, {
            get: (target, prop)=>{
                if (target.ky) return target.ky[prop];
                return async (...args)=>{
                    await _polyfillJs.ensureGlobalFetch();
                    target.ky = _kyDefault.default.create({
                        ...config === null || config === void 0 ? void 0 : config.httpClientConfig,
                        // Default timeout is 10s, and that might be too short for chain. Upload
                        // request should override this.
                        timeout: 30000,
                        prefixUrl: this.apiUrl,
                        headers: {
                            'x-requested-with': '@oasislabs/parcel'
                        },
                        hooks: {
                            beforeRequest: [
                                appendAsLastBeforeRequest(dontCloneForAfterResponses()),
                                async (req)=>{
                                    req.headers.set('authorization', `Bearer ${await this.tokenProvider.getToken()}`);
                                }, 
                            ],
                            afterResponse: [
                                async (req, opts, res)=>{
                                    var _a2, _b2;
                                    // The `authorization` header is not re-sent by the browser, so redirects fail,
                                    // and must be retried manually.
                                    if (res.redirected && (res.status === 401 || res.status === 403) && (res.url.startsWith(this.apiUrl) || res.url.startsWith(this.storageUrl))) return this.apiKy(res.url, {
                                        method: req.method,
                                        prefixUrl: ''
                                    });
                                    // Wrap errors, for easier client handling (and maybe better messages).
                                    if (isApiErrorResponse(res)) throw new ApiError(req, opts, res, `Error from ${req.url}: ${(await res.json()).error}`);
                                    const allowedStatusCodes = (_a2 = req.allowedStatusCodes) !== null && _a2 !== void 0 ? _a2 : [];
                                    allowedStatusCodes.push((_b2 = DEFAULT_RESPONSE_CODES.get(req.method)) !== null && _b2 !== void 0 ? _b2 : 200);
                                    if (res.ok && !allowedStatusCodes.includes(res.status)) {
                                        const endpoint = res.url.replace(this.apiUrl, '');
                                        throw new ApiError(req, opts, res, `${req.method} ${endpoint} returned unexpected status ${res.status}. expected: ${allowedStatusCodes.join(' | ')}.`);
                                    }
                                }, 
                            ]
                        }
                    });
                    return target.ky[prop](...args);
                };
            }
        });
    }
    async get(endpoint, params = {}, requestOptions) {
        let hasParams = false;
        const kebabCaseParams = {};
        for (const [k, v] of Object.entries(params))if (v !== undefined) {
            hasParams = true;
            kebabCaseParams[_paramCase.paramCase(k)] = v instanceof Date ? v.getTime() : v;
        }
        const response = await this.apiKy.get(endpoint, {
            searchParams: hasParams ? kebabCaseParams : undefined,
            ...requestOptions
        });
        return response.json();
    }
    async upload(data, requestOptions) {
        return this.create(this.storageUrl, data, {
            prefixUrl: '',
            ...requestOptions
        });
    }
    /** Convenience method for POSTing and expecting a 201 response */ async create(endpoint, data, requestOptions) {
        var _a3, _b3;
        return this.post(endpoint, data, {
            ...requestOptions,
            hooks: {
                beforeRequest: [
                    ...(_b3 = (_a3 = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.hooks) === null || _a3 === void 0 ? void 0 : _a3.beforeRequest) !== null && _b3 !== void 0 ? _b3 : [],
                    addAllowedStatusCode(201)
                ]
            }
        });
    }
    /** Convenience method for POSTing and expecting a 200 response */ async search(baseEndpoint, params, requestOptions) {
        return this.post(`${baseEndpoint}/search`, params, requestOptions);
    }
    async post(endpoint, data, requestOptions) {
        const opts = requestOptions !== null && requestOptions !== void 0 ? requestOptions : {};
        if (data !== undefined) {
            if ('getBuffer' in data && typeof data.getBuffer === 'function' || data instanceof _formDataDefault.default) opts.body = data;
            else opts.json = data;
        }
        return (await this.apiKy.post(endpoint, opts)).json();
    }
    async update(endpoint, params) {
        return this.put(endpoint, params);
    }
    async put(endpoint, params) {
        return (await this.apiKy.put(endpoint, {
            json: params
        })).json();
    }
    async delete(endpoint) {
        await this.apiKy.delete(endpoint);
    }
    download(documentId) {
        return new Download(this.apiKy, `${this.storageUrl}/${documentId}/download`);
    }
}
function dontCloneForAfterResponses() {
    return async (req, opts)=>{
        var _a4, _b4;
        if (!((_b4 = (_a4 = opts.hooks) === null || _a4 === void 0 ? void 0 : _a4.afterResponse) === null || _b4 === void 0 ? void 0 : _b4.length)) return;
        const { afterResponse  } = opts.hooks;
        opts.hooks.afterResponse = [];
        let response = await opts.fetch(req.clone());
        // https://github.com/sindresorhus/ky/blob/5f3c3158af5c7efbb6a1cfd9e5f16fc71dd26e36/source/core/Ky.ts#L112-L123
        for (const hook of afterResponse){
            const modifiedResponse = await hook(req, opts, response);
            if (modifiedResponse instanceof globalThis.Response) response = modifiedResponse;
        }
        return response;
    };
}
function appendAsLastBeforeRequest(hookToSchedule) {
    return (req, opts)=>{
        if (!opts.hooks) opts.hooks = {};
        if (!opts.hooks.beforeRequest) opts.hooks.beforeRequest = [];
        opts.hooks.beforeRequest.push(hookToSchedule);
    };
}
/** A beforeRequest hook that attaches context to the Request, for displaying in errors. */ function attachContext(context) {
    return (req)=>{
        req.context = context;
    };
}
function addAllowedStatusCode(status) {
    return (req)=>{
        var _a5;
        req.allowedStatusCodes = (_a5 = req.allowedStatusCodes) !== null && _a5 !== void 0 ? _a5 : [];
        req.allowedStatusCodes.push(status);
    };
}
class Download {
    constructor(client, endpoint){
        this.client = client;
        this.endpoint = endpoint;
        this.abortController = new _abortControllerDefault.default();
    }
    async *[Symbol.asyncIterator]() {
        var _a6;
        const body = (_a6 = await this.makeRequest()) === null || _a6 === void 0 ? void 0 : _a6.body;
        if (!body) return;
        /* istanbul ignore else: tested using Cypress */ if (body.getReader === undefined) {
            // https://github.com/node-fetch/node-fetch/issues/930
            const bodyReadable = body;
            yield* bodyReadable;
        } else {
            const rdr = body.getReader();
            let chunk;
            do {
                chunk = await rdr.read();
                if (chunk.value) yield chunk.value;
            }while (!chunk.done)
        }
    }
    abort() {
        this.abortController.abort();
    }
    get aborted() {
        return this.abortController.signal.aborted;
    }
    /**
     * Convenience method for piping to a sink and waiting for writing to finish.
     * This method must not be used alongside `getStream` or `AsyncIterable`.
     */ async pipeTo(sink) {
        if ('getWriter' in sink) {
            const { body  } = await this.makeRequest();
            if (!body) return;
            if (body.pipeTo) return body.pipeTo(sink);
            // Firefox's native ReadableStream is missing pipeTo.
            return _polyfillJs.pipeToPolyfill(body, sink);
        }
        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        const { Readable  } = (await require("5d062b3648ede8e1")).default; // This only happens in node.
        return new Promise((resolve, reject)=>{
            Readable.from(this, {
                objectMode: false
            }).on('error', reject).pipe(sink).on('error', reject).on('finish', resolve);
        });
    }
    /**
     * Lazily make the request. Helps avoid unhandled promise rejections when the request
     * fails before a pipe or iterator handler is attached.
     */ // This function returns double promise to make both xo and TS happy. V8 doesn't care.
    async makeRequest() {
        if (!this.res) this.res = this.client.get(this.endpoint, {
            signal: this.abortController.signal,
            hooks: {
                beforeRequest: [
                    attachContext('document download')
                ]
            },
            prefixUrl: ''
        });
        return this.res;
    }
}
class ApiError extends _ky.HTTPError {
    constructor(/** @see attachContext */ request, options, response, message){
        super(response, request, options);
        this.name = 'ApiError';
        this.message = request.context ? `error in ${request.context}: ${message}` : message;
    }
    static async fromHTTPError(error) {
        const res = error.response;
        return new ApiError(error.request, error.options, res, (await res.json()).error);
    }
}
function isApiErrorResponse(response) {
    var _a7, _b5;
    const isJson = (_b5 = (_a7 = response.headers.get('content-type')) === null || _a7 === void 0 ? void 0 : _a7.startsWith('application/json')) !== null && _b5 !== void 0 ? _b5 : false;
    return !response.ok && isJson;
}

},{"abort-controller":"ddn6o","form-data":"7f6Qb","ky":"e1T4n","param-case":"fhRDG","./polyfill.js":"dAndL","5d062b3648ede8e1":"94TJO","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"ddn6o":[function(require,module,exports) {
/*globals self, window */ "use strict";
/*eslint-disable @mysticatea/prettier */ const { AbortController , AbortSignal  } = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : /* otherwise */ undefined;
/*eslint-enable @mysticatea/prettier */ module.exports = AbortController;
module.exports.AbortSignal = AbortSignal;
module.exports.default = AbortController;

},{}],"7f6Qb":[function(require,module,exports) {
/* eslint-env browser */ module.exports = typeof self == 'object' ? self.FormData : window.FormData;

},{}],"fhRDG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paramCase", ()=>paramCase
);
var _tslib = require("tslib");
var _dotCase = require("dot-case");
function paramCase(input, options) {
    if (options === void 0) options = {};
    return _dotCase.dotCase(input, _tslib.__assign({
        delimiter: "-"
    }, options));
}

},{"tslib":"aDHR2","dot-case":"4KVCt","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"aDHR2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn
);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"4KVCt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dotCase", ()=>dotCase
);
var _tslib = require("tslib");
var _noCase = require("no-case");
function dotCase(input, options) {
    if (options === void 0) options = {};
    return _noCase.noCase(input, _tslib.__assign({
        delimiter: "."
    }, options));
}

},{"tslib":"aDHR2","no-case":"eIy3N","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"eIy3N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Normalize the string into something other libraries can manipulate easier.
 */ parcelHelpers.export(exports, "noCase", ()=>noCase
);
var _lowerCase = require("lower-case");
// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [
    /([a-z0-9])([A-Z])/g,
    /([A-Z])([A-Z][a-z])/g
];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
    if (options === void 0) options = {};
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? _lowerCase.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while(result.charAt(start) === "\0")start++;
    while(result.charAt(end - 1) === "\0")end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */ function replace(input1, re1, value) {
    if (re1 instanceof RegExp) return input1.replace(re1, value);
    return re1.reduce(function(input, re) {
        return input.replace(re, value);
    }, input1);
}

},{"lower-case":"6mrjD","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"6mrjD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Localized lower case.
 */ parcelHelpers.export(exports, "localeLowerCase", ()=>localeLowerCase
);
/**
 * Lower case as a function.
 */ parcelHelpers.export(exports, "lowerCase", ()=>lowerCase
);
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */ var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303"
        }
    }
};
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {
        return lang.map[m];
    }));
    return lowerCase(str);
}
function lowerCase(str) {
    return str.toLowerCase();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"dAndL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ensureGlobalFetch", ()=>ensureGlobalFetch
);
parcelHelpers.export(exports, "pipeToPolyfill", ()=>pipeToPolyfill
);
var _webStreamsAdapter = require("@mattiasbuelens/web-streams-adapter");
var _abortController = require("abort-controller");
var _abortControllerDefault = parcelHelpers.interopDefault(_abortController);
var _formData = require("form-data");
var _formDataDefault = parcelHelpers.interopDefault(_formData);
var _ponyfillEs2018Js = require("web-streams-polyfill/dist/ponyfill.es2018.js");
// The following code is inlined from `ky-universal` because it uses ES modules and
// top-level await, which are not currently well supported by tools like Jest.
var _a, _b, _c, _d;
async function ensureGlobalFetch() {
    if (typeof globalThis.fetch !== 'undefined') return;
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    const { default: fetch , Headers , Request , Response  } = await require("79fe4744830949e5");
    const g = globalThis;
    g.fetch = async (url, options)=>fetch(url, {
            highWaterMark: 1e7 /* 10 MB */ ,
            ...options
        })
    ;
    g.Headers = Headers;
    g.Request = Request;
    g.Response = Response;
}
globalThis.AbortController = (_a = globalThis.AbortController) !== null && _a !== void 0 ? _a : _abortControllerDefault.default;
globalThis.FormData = (_b = globalThis.FormData) !== null && _b !== void 0 ? _b : _formDataDefault.default;
globalThis.ReadableStream = (_c = globalThis.ReadableStream) !== null && _c !== void 0 ? _c : _ponyfillEs2018Js.ReadableStream;
globalThis.WritableStream = (_d = globalThis.WritableStream) !== null && _d !== void 0 ? _d : _ponyfillEs2018Js.WritableStream;
const toReadableStreamPF = _webStreamsAdapter.createReadableStreamWrapper(_ponyfillEs2018Js.ReadableStream);
const toWritableStreamPF = _webStreamsAdapter.createWritableStreamWrapper(_ponyfillEs2018Js.WritableStream);
async function pipeToPolyfill(body, sink) {
    const readablePF = toReadableStreamPF(body);
    const writablePF = toWritableStreamPF(sink);
    return readablePF.pipeTo(writablePF);
}

},{"@mattiasbuelens/web-streams-adapter":"j5SGY","abort-controller":"ddn6o","form-data":"7f6Qb","web-streams-polyfill/dist/ponyfill.es2018.js":"fmOme","79fe4744830949e5":"6nSGe","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"j5SGY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createReadableStreamWrapper", ()=>createReadableStreamWrapper
);
parcelHelpers.export(exports, "createTransformStreamWrapper", ()=>createTransformStreamWrapper
);
parcelHelpers.export(exports, "createWrappingReadableSource", ()=>createWrappingReadableSource
);
parcelHelpers.export(exports, "createWrappingTransformer", ()=>createWrappingTransformer
);
parcelHelpers.export(exports, "createWrappingWritableSink", ()=>createWrappingWritableSink
);
parcelHelpers.export(exports, "createWritableStreamWrapper", ()=>createWritableStreamWrapper
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function assert(test) {
    if (!test) throw new TypeError('Assertion failed');
}
function noop() {
    return;
}
function typeIsObject(x) {
    return typeof x === 'object' && x !== null || typeof x === 'function';
}
function isStreamConstructor(ctor) {
    if (typeof ctor !== 'function') return false;
    var startCalled = false;
    try {
        new ctor({
            start: function() {
                startCalled = true;
            }
        });
    } catch (e) {
    // ignore
    }
    return startCalled;
}
function isReadableStream(readable) {
    if (!typeIsObject(readable)) return false;
    if (typeof readable.getReader !== 'function') return false;
    return true;
}
function isReadableStreamConstructor(ctor) {
    if (!isStreamConstructor(ctor)) return false;
    if (!isReadableStream(new ctor())) return false;
    return true;
}
function isWritableStream(writable) {
    if (!typeIsObject(writable)) return false;
    if (typeof writable.getWriter !== 'function') return false;
    return true;
}
function isWritableStreamConstructor(ctor) {
    if (!isStreamConstructor(ctor)) return false;
    if (!isWritableStream(new ctor())) return false;
    return true;
}
function isTransformStream(transform) {
    if (!typeIsObject(transform)) return false;
    if (!isReadableStream(transform.readable)) return false;
    if (!isWritableStream(transform.writable)) return false;
    return true;
}
function isTransformStreamConstructor(ctor) {
    if (!isStreamConstructor(ctor)) return false;
    if (!isTransformStream(new ctor())) return false;
    return true;
}
function supportsByobReader(readable) {
    try {
        var reader = readable.getReader({
            mode: 'byob'
        });
        reader.releaseLock();
        return true;
    } catch (_a) {
        return false;
    }
}
function supportsByteSource(ctor) {
    try {
        new ctor({
            type: 'bytes'
        });
        return true;
    } catch (_a) {
        return false;
    }
}
function createReadableStreamWrapper(ctor) {
    assert(isReadableStreamConstructor(ctor));
    var byteSourceSupported = supportsByteSource(ctor);
    return function(readable, _a) {
        var _b = _a === void 0 ? {} : _a, type = _b.type;
        type = parseReadableType(type);
        if (type === 'bytes' && !byteSourceSupported) type = undefined;
        if (readable.constructor === ctor) {
            if (type !== 'bytes' || supportsByobReader(readable)) return readable;
        }
        if (type === 'bytes') {
            var source = createWrappingReadableSource(readable, {
                type: type
            });
            return new ctor(source);
        } else {
            var source = createWrappingReadableSource(readable);
            return new ctor(source);
        }
    };
}
function createWrappingReadableSource(readable, _a) {
    var _b = _a === void 0 ? {} : _a, type = _b.type;
    assert(isReadableStream(readable));
    assert(readable.locked === false);
    type = parseReadableType(type);
    var source;
    if (type === 'bytes') source = new WrappingReadableByteStreamSource(readable);
    else source = new WrappingReadableStreamDefaultSource(readable);
    return source;
}
function parseReadableType(type) {
    var typeString = String(type);
    if (typeString === 'bytes') return typeString;
    else if (type === undefined) return type;
    else throw new RangeError('Invalid type is specified');
}
var AbstractWrappingReadableStreamSource = /** @class */ function() {
    function AbstractWrappingReadableStreamSource1(underlyingStream) {
        this._underlyingReader = undefined;
        this._readerMode = undefined;
        this._readableStreamController = undefined;
        this._pendingRead = undefined;
        this._underlyingStream = underlyingStream;
        // always keep a reader attached to detect close/error
        this._attachDefaultReader();
    }
    AbstractWrappingReadableStreamSource1.prototype.start = function(controller) {
        this._readableStreamController = controller;
    };
    AbstractWrappingReadableStreamSource1.prototype.cancel = function(reason) {
        assert(this._underlyingReader !== undefined);
        return this._underlyingReader.cancel(reason);
    };
    AbstractWrappingReadableStreamSource1.prototype._attachDefaultReader = function() {
        if (this._readerMode === "default" /* DEFAULT */ ) return;
        this._detachReader();
        var reader = this._underlyingStream.getReader();
        this._readerMode = "default" /* DEFAULT */ ;
        this._attachReader(reader);
    };
    AbstractWrappingReadableStreamSource1.prototype._attachReader = function(reader) {
        var _this = this;
        assert(this._underlyingReader === undefined);
        this._underlyingReader = reader;
        var closed = this._underlyingReader.closed;
        if (!closed) return;
        closed.then(function() {
            return _this._finishPendingRead();
        }).then(function() {
            if (reader === _this._underlyingReader) _this._readableStreamController.close();
        }, function(reason) {
            if (reader === _this._underlyingReader) _this._readableStreamController.error(reason);
        }).catch(noop);
    };
    AbstractWrappingReadableStreamSource1.prototype._detachReader = function() {
        if (this._underlyingReader === undefined) return;
        this._underlyingReader.releaseLock();
        this._underlyingReader = undefined;
        this._readerMode = undefined;
    };
    AbstractWrappingReadableStreamSource1.prototype._pullWithDefaultReader = function() {
        var _this = this;
        this._attachDefaultReader();
        // TODO Backpressure?
        var read = this._underlyingReader.read().then(function(result) {
            var controller = _this._readableStreamController;
            if (result.done) _this._tryClose();
            else controller.enqueue(result.value);
        });
        this._setPendingRead(read);
        return read;
    };
    AbstractWrappingReadableStreamSource1.prototype._tryClose = function() {
        try {
            this._readableStreamController.close();
        } catch (_a) {
        // already errored or closed
        }
    };
    AbstractWrappingReadableStreamSource1.prototype._setPendingRead = function(readPromise) {
        var _this = this;
        var pendingRead;
        var finishRead = function() {
            if (_this._pendingRead === pendingRead) _this._pendingRead = undefined;
        };
        this._pendingRead = pendingRead = readPromise.then(finishRead, finishRead);
    };
    AbstractWrappingReadableStreamSource1.prototype._finishPendingRead = function() {
        var _this = this;
        if (!this._pendingRead) return undefined;
        var afterRead = function() {
            return _this._finishPendingRead();
        };
        return this._pendingRead.then(afterRead, afterRead);
    };
    return AbstractWrappingReadableStreamSource1;
}();
var WrappingReadableStreamDefaultSource = /** @class */ function(_super) {
    __extends(WrappingReadableStreamDefaultSource1, _super);
    function WrappingReadableStreamDefaultSource1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrappingReadableStreamDefaultSource1.prototype.pull = function() {
        return this._pullWithDefaultReader();
    };
    return WrappingReadableStreamDefaultSource1;
}(AbstractWrappingReadableStreamSource);
function toUint8Array(view) {
    return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
}
function copyArrayBufferView(from, to) {
    var fromArray = toUint8Array(from);
    var toArray = toUint8Array(to);
    toArray.set(fromArray, 0);
}
var WrappingReadableByteStreamSource = /** @class */ function(_super) {
    __extends(WrappingReadableByteStreamSource1, _super);
    function WrappingReadableByteStreamSource1(underlyingStream) {
        var _this = this;
        var supportsByob = supportsByobReader(underlyingStream);
        _this = _super.call(this, underlyingStream) || this;
        _this._supportsByob = supportsByob;
        return _this;
    }
    Object.defineProperty(WrappingReadableByteStreamSource1.prototype, "type", {
        get: function() {
            return 'bytes';
        },
        enumerable: false,
        configurable: true
    });
    WrappingReadableByteStreamSource1.prototype._attachByobReader = function() {
        if (this._readerMode === "byob" /* BYOB */ ) return;
        assert(this._supportsByob);
        this._detachReader();
        var reader = this._underlyingStream.getReader({
            mode: 'byob'
        });
        this._readerMode = "byob" /* BYOB */ ;
        this._attachReader(reader);
    };
    WrappingReadableByteStreamSource1.prototype.pull = function() {
        if (this._supportsByob) {
            var byobRequest = this._readableStreamController.byobRequest;
            if (byobRequest) return this._pullWithByobRequest(byobRequest);
        }
        return this._pullWithDefaultReader();
    };
    WrappingReadableByteStreamSource1.prototype._pullWithByobRequest = function(byobRequest) {
        var _this = this;
        this._attachByobReader();
        // reader.read(view) detaches the input view, therefore we cannot pass byobRequest.view directly
        // create a separate buffer to read into, then copy that to byobRequest.view
        var buffer = new Uint8Array(byobRequest.view.byteLength);
        // TODO Backpressure?
        var read = this._underlyingReader.read(buffer).then(function(result) {
            _this._readableStreamController;
            if (result.done) {
                _this._tryClose();
                byobRequest.respond(0);
            } else {
                copyArrayBufferView(result.value, byobRequest.view);
                byobRequest.respond(result.value.byteLength);
            }
        });
        this._setPendingRead(read);
        return read;
    };
    return WrappingReadableByteStreamSource1;
}(AbstractWrappingReadableStreamSource);
function createWritableStreamWrapper(ctor) {
    assert(isWritableStreamConstructor(ctor));
    return function(writable) {
        if (writable.constructor === ctor) return writable;
        var sink = createWrappingWritableSink(writable);
        return new ctor(sink);
    };
}
function createWrappingWritableSink(writable) {
    assert(isWritableStream(writable));
    assert(writable.locked === false);
    var writer = writable.getWriter();
    return new WrappingWritableStreamSink(writer);
}
var WrappingWritableStreamSink = /** @class */ function() {
    function WrappingWritableStreamSink1(underlyingWriter) {
        var _this = this;
        this._writableStreamController = undefined;
        this._pendingWrite = undefined;
        this._state = "writable" /* WRITABLE */ ;
        this._storedError = undefined;
        this._underlyingWriter = underlyingWriter;
        this._errorPromise = new Promise(function(resolve, reject) {
            _this._errorPromiseReject = reject;
        });
        this._errorPromise.catch(noop);
    }
    WrappingWritableStreamSink1.prototype.start = function(controller) {
        var _this = this;
        this._writableStreamController = controller;
        this._underlyingWriter.closed.then(function() {
            _this._state = "closed" /* CLOSED */ ;
        }).catch(function(reason) {
            return _this._finishErroring(reason);
        });
    };
    WrappingWritableStreamSink1.prototype.write = function(chunk) {
        var _this = this;
        var writer = this._underlyingWriter;
        // Detect past errors
        if (writer.desiredSize === null) return writer.ready;
        var writeRequest = writer.write(chunk);
        // Detect future errors
        writeRequest.catch(function(reason) {
            return _this._finishErroring(reason);
        });
        writer.ready.catch(function(reason) {
            return _this._startErroring(reason);
        });
        // Reject write when errored
        var write = Promise.race([
            writeRequest,
            this._errorPromise
        ]);
        this._setPendingWrite(write);
        return write;
    };
    WrappingWritableStreamSink1.prototype.close = function() {
        var _this = this;
        if (this._pendingWrite === undefined) return this._underlyingWriter.close();
        return this._finishPendingWrite().then(function() {
            return _this.close();
        });
    };
    WrappingWritableStreamSink1.prototype.abort = function(reason) {
        if (this._state === "errored" /* ERRORED */ ) return undefined;
        var writer = this._underlyingWriter;
        return writer.abort(reason);
    };
    WrappingWritableStreamSink1.prototype._setPendingWrite = function(writePromise) {
        var _this = this;
        var pendingWrite;
        var finishWrite = function() {
            if (_this._pendingWrite === pendingWrite) _this._pendingWrite = undefined;
        };
        this._pendingWrite = pendingWrite = writePromise.then(finishWrite, finishWrite);
    };
    WrappingWritableStreamSink1.prototype._finishPendingWrite = function() {
        var _this = this;
        if (this._pendingWrite === undefined) return Promise.resolve();
        var afterWrite = function() {
            return _this._finishPendingWrite();
        };
        return this._pendingWrite.then(afterWrite, afterWrite);
    };
    WrappingWritableStreamSink1.prototype._startErroring = function(reason) {
        var _this = this;
        if (this._state === "writable" /* WRITABLE */ ) {
            this._state = "erroring" /* ERRORING */ ;
            this._storedError = reason;
            var afterWrite = function() {
                return _this._finishErroring(reason);
            };
            if (this._pendingWrite === undefined) afterWrite();
            else this._finishPendingWrite().then(afterWrite, afterWrite);
            this._writableStreamController.error(reason);
        }
    };
    WrappingWritableStreamSink1.prototype._finishErroring = function(reason) {
        if (this._state === "writable" /* WRITABLE */ ) this._startErroring(reason);
        if (this._state === "erroring" /* ERRORING */ ) {
            this._state = "errored" /* ERRORED */ ;
            this._errorPromiseReject(this._storedError);
        }
    };
    return WrappingWritableStreamSink1;
}();
function createTransformStreamWrapper(ctor) {
    assert(isTransformStreamConstructor(ctor));
    return function(transform) {
        if (transform.constructor === ctor) return transform;
        var transformer = createWrappingTransformer(transform);
        return new ctor(transformer);
    };
}
function createWrappingTransformer(transform) {
    assert(isTransformStream(transform));
    var readable = transform.readable, writable = transform.writable;
    assert(readable.locked === false);
    assert(writable.locked === false);
    var reader = readable.getReader();
    var writer;
    try {
        writer = writable.getWriter();
    } catch (e) {
        reader.releaseLock(); // do not leak reader
        throw e;
    }
    return new WrappingTransformStreamTransformer(reader, writer);
}
var WrappingTransformStreamTransformer = /** @class */ function() {
    function WrappingTransformStreamTransformer1(reader, writer) {
        var _this = this;
        this._transformStreamController = undefined;
        this._onRead = function(result) {
            if (result.done) return;
            _this._transformStreamController.enqueue(result.value);
            return _this._reader.read().then(_this._onRead);
        };
        this._onError = function(reason) {
            _this._flushReject(reason);
            _this._transformStreamController.error(reason);
            _this._reader.cancel(reason).catch(noop);
            _this._writer.abort(reason).catch(noop);
        };
        this._onTerminate = function() {
            _this._flushResolve();
            _this._transformStreamController.terminate();
            var error = new TypeError('TransformStream terminated');
            _this._writer.abort(error).catch(noop);
        };
        this._reader = reader;
        this._writer = writer;
        this._flushPromise = new Promise(function(resolve, reject) {
            _this._flushResolve = resolve;
            _this._flushReject = reject;
        });
    }
    WrappingTransformStreamTransformer1.prototype.start = function(controller) {
        this._transformStreamController = controller;
        this._reader.read().then(this._onRead).then(this._onTerminate, this._onError);
        var readerClosed = this._reader.closed;
        if (readerClosed) readerClosed.then(this._onTerminate, this._onError);
    };
    WrappingTransformStreamTransformer1.prototype.transform = function(chunk) {
        return this._writer.write(chunk);
    };
    WrappingTransformStreamTransformer1.prototype.flush = function() {
        var _this = this;
        return this._writer.close().then(function() {
            return _this._flushPromise;
        });
    };
    return WrappingTransformStreamTransformer1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"fmOme":[function(require,module,exports) {
var global = arguments[3];
/**
 * web-streams-polyfill v3.2.1
 */ (function(global, factory) {
    factory(exports);
})(this, function(exports) {
    'use strict';
    /// <reference lib="es2015.symbol" />
    const SymbolPolyfill = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol : (description)=>`Symbol(${description})`
    ;
    /// <reference lib="dom" />
    function noop() {
        return undefined;
    }
    function getGlobals() {
        if (typeof self !== 'undefined') return self;
        else if (typeof window !== 'undefined') return window;
        else if (typeof global !== 'undefined') return global;
        return undefined;
    }
    const globals = getGlobals();
    function typeIsObject(x) {
        return typeof x === 'object' && x !== null || typeof x === 'function';
    }
    const rethrowAssertionErrorRejection = noop;
    const originalPromise = Promise;
    const originalPromiseThen = Promise.prototype.then;
    const originalPromiseResolve = Promise.resolve.bind(originalPromise);
    const originalPromiseReject = Promise.reject.bind(originalPromise);
    function newPromise(executor) {
        return new originalPromise(executor);
    }
    function promiseResolvedWith(value) {
        return originalPromiseResolve(value);
    }
    function promiseRejectedWith(reason) {
        return originalPromiseReject(reason);
    }
    function PerformPromiseThen(promise, onFulfilled, onRejected) {
        // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
        // approximation.
        return originalPromiseThen.call(promise, onFulfilled, onRejected);
    }
    function uponPromise(promise, onFulfilled, onRejected) {
        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
    }
    function uponFulfillment(promise, onFulfilled) {
        uponPromise(promise, onFulfilled);
    }
    function uponRejection(promise, onRejected) {
        uponPromise(promise, undefined, onRejected);
    }
    function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
    }
    function setPromiseIsHandledToTrue(promise) {
        PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
    }
    const queueMicrotask = (()=>{
        const globalQueueMicrotask = globals && globals.queueMicrotask;
        if (typeof globalQueueMicrotask === 'function') return globalQueueMicrotask;
        const resolvedPromise = promiseResolvedWith(undefined);
        return (fn)=>PerformPromiseThen(resolvedPromise, fn)
        ;
    })();
    function reflectCall(F, V, args) {
        if (typeof F !== 'function') throw new TypeError('Argument is not a function');
        return Function.prototype.apply.call(F, V, args);
    }
    function promiseCall(F, V, args) {
        try {
            return promiseResolvedWith(reflectCall(F, V, args));
        } catch (value) {
            return promiseRejectedWith(value);
        }
    }
    // Original from Chromium
    // https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
    const QUEUE_MAX_ARRAY_SIZE = 16384;
    /**
     * Simple queue structure.
     *
     * Avoids scalability issues with using a packed array directly by using
     * multiple arrays in a linked list and keeping the array size bounded.
     */ class SimpleQueue {
        constructor(){
            this._cursor = 0;
            this._size = 0;
            // _front and _back are always defined.
            this._front = {
                _elements: [],
                _next: undefined
            };
            this._back = this._front;
            // The cursor is used to avoid calling Array.shift().
            // It contains the index of the front element of the array inside the
            // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
            this._cursor = 0;
            // When there is only one node, size === elements.length - cursor.
            this._size = 0;
        }
        get length() {
            return this._size;
        }
        // For exception safety, this method is structured in order:
        // 1. Read state
        // 2. Calculate required state mutations
        // 3. Perform state mutations
        push(element) {
            const oldBack = this._back;
            let newBack = oldBack;
            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) newBack = {
                _elements: [],
                _next: undefined
            };
            // push() is the mutation most likely to throw an exception, so it
            // goes first.
            oldBack._elements.push(element);
            if (newBack !== oldBack) {
                this._back = newBack;
                oldBack._next = newBack;
            }
            ++this._size;
        }
        // Like push(), shift() follows the read -> calculate -> mutate pattern for
        // exception safety.
        shift() {
            const oldFront = this._front;
            let newFront = oldFront;
            const oldCursor = this._cursor;
            let newCursor = oldCursor + 1;
            const elements = oldFront._elements;
            const element = elements[oldCursor];
            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
                newFront = oldFront._next;
                newCursor = 0;
            }
            // No mutations before this point.
            --this._size;
            this._cursor = newCursor;
            if (oldFront !== newFront) this._front = newFront;
            // Permit shifted element to be garbage collected.
            elements[oldCursor] = undefined;
            return element;
        }
        // The tricky thing about forEach() is that it can be called
        // re-entrantly. The queue may be mutated inside the callback. It is easy to
        // see that push() within the callback has no negative effects since the end
        // of the queue is checked for on every iteration. If shift() is called
        // repeatedly within the callback then the next iteration may return an
        // element that has been removed. In this case the callback will be called
        // with undefined values until we either "catch up" with elements that still
        // exist or reach the back of the queue.
        forEach(callback) {
            let i = this._cursor;
            let node = this._front;
            let elements = node._elements;
            while(i !== elements.length || node._next !== undefined){
                if (i === elements.length) {
                    node = node._next;
                    elements = node._elements;
                    i = 0;
                    if (elements.length === 0) break;
                }
                callback(elements[i]);
                ++i;
            }
        }
        // Return the element that would be returned if shift() was called now,
        // without modifying the queue.
        peek() {
            const front = this._front;
            const cursor = this._cursor;
            return front._elements[cursor];
        }
    }
    function ReadableStreamReaderGenericInitialize(reader, stream) {
        reader._ownerReadableStream = stream;
        stream._reader = reader;
        if (stream._state === 'readable') defaultReaderClosedPromiseInitialize(reader);
        else if (stream._state === 'closed') defaultReaderClosedPromiseInitializeAsResolved(reader);
        else defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
    }
    // A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
    // check.
    function ReadableStreamReaderGenericCancel(reader, reason) {
        const stream = reader._ownerReadableStream;
        return ReadableStreamCancel(stream, reason);
    }
    function ReadableStreamReaderGenericRelease(reader) {
        if (reader._ownerReadableStream._state === 'readable') defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        else defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        reader._ownerReadableStream._reader = undefined;
        reader._ownerReadableStream = undefined;
    }
    // Helper functions for the readers.
    function readerLockException(name) {
        return new TypeError('Cannot ' + name + ' a stream using a released reader');
    }
    // Helper functions for the ReadableStreamDefaultReader.
    function defaultReaderClosedPromiseInitialize(reader) {
        reader._closedPromise = newPromise((resolve, reject)=>{
            reader._closedPromise_resolve = resolve;
            reader._closedPromise_reject = reject;
        });
    }
    function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseReject(reader, reason);
    }
    function defaultReaderClosedPromiseInitializeAsResolved(reader) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseResolve(reader);
    }
    function defaultReaderClosedPromiseReject(reader, reason) {
        if (reader._closedPromise_reject === undefined) return;
        setPromiseIsHandledToTrue(reader._closedPromise);
        reader._closedPromise_reject(reason);
        reader._closedPromise_resolve = undefined;
        reader._closedPromise_reject = undefined;
    }
    function defaultReaderClosedPromiseResetToRejected(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
    }
    function defaultReaderClosedPromiseResolve(reader) {
        if (reader._closedPromise_resolve === undefined) return;
        reader._closedPromise_resolve(undefined);
        reader._closedPromise_resolve = undefined;
        reader._closedPromise_reject = undefined;
    }
    const AbortSteps = SymbolPolyfill('[[AbortSteps]]');
    const ErrorSteps = SymbolPolyfill('[[ErrorSteps]]');
    const CancelSteps = SymbolPolyfill('[[CancelSteps]]');
    const PullSteps = SymbolPolyfill('[[PullSteps]]');
    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
    const NumberIsFinite = Number.isFinite || function(x) {
        return typeof x === 'number' && isFinite(x);
    };
    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
    const MathTrunc = Math.trunc || function(v) {
        return v < 0 ? Math.ceil(v) : Math.floor(v);
    };
    // https://heycam.github.io/webidl/#idl-dictionaries
    function isDictionary(x) {
        return typeof x === 'object' || typeof x === 'function';
    }
    function assertDictionary(obj, context) {
        if (obj !== undefined && !isDictionary(obj)) throw new TypeError(`${context} is not an object.`);
    }
    // https://heycam.github.io/webidl/#idl-callback-functions
    function assertFunction(x, context) {
        if (typeof x !== 'function') throw new TypeError(`${context} is not a function.`);
    }
    // https://heycam.github.io/webidl/#idl-object
    function isObject(x) {
        return typeof x === 'object' && x !== null || typeof x === 'function';
    }
    function assertObject(x, context) {
        if (!isObject(x)) throw new TypeError(`${context} is not an object.`);
    }
    function assertRequiredArgument(x, position, context) {
        if (x === undefined) throw new TypeError(`Parameter ${position} is required in '${context}'.`);
    }
    function assertRequiredField(x, field, context) {
        if (x === undefined) throw new TypeError(`${field} is required in '${context}'.`);
    }
    // https://heycam.github.io/webidl/#idl-unrestricted-double
    function convertUnrestrictedDouble(value) {
        return Number(value);
    }
    function censorNegativeZero(x) {
        return x === 0 ? 0 : x;
    }
    function integerPart(x) {
        return censorNegativeZero(MathTrunc(x));
    }
    // https://heycam.github.io/webidl/#idl-unsigned-long-long
    function convertUnsignedLongLongWithEnforceRange(value, context) {
        const lowerBound = 0;
        const upperBound = Number.MAX_SAFE_INTEGER;
        let x = Number(value);
        x = censorNegativeZero(x);
        if (!NumberIsFinite(x)) throw new TypeError(`${context} is not a finite number`);
        x = integerPart(x);
        if (x < lowerBound || x > upperBound) throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
        if (!NumberIsFinite(x) || x === 0) return 0;
        // TODO Use BigInt if supported?
        // let xBigInt = BigInt(integerPart(x));
        // xBigInt = BigInt.asUintN(64, xBigInt);
        // return Number(xBigInt);
        return x;
    }
    function assertReadableStream(x, context) {
        if (!IsReadableStream(x)) throw new TypeError(`${context} is not a ReadableStream.`);
    }
    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamDefaultReader(stream) {
        return new ReadableStreamDefaultReader(stream);
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamAddReadRequest(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
    }
    function ReadableStreamFulfillReadRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readRequest = reader._readRequests.shift();
        if (done) readRequest._closeSteps();
        else readRequest._chunkSteps(chunk);
    }
    function ReadableStreamGetNumReadRequests(stream) {
        return stream._reader._readRequests.length;
    }
    function ReadableStreamHasDefaultReader(stream) {
        const reader = stream._reader;
        if (reader === undefined) return false;
        if (!IsReadableStreamDefaultReader(reader)) return false;
        return true;
    }
    /**
     * A default reader vended by a {@link ReadableStream}.
     *
     * @public
     */ class ReadableStreamDefaultReader {
        constructor(stream){
            assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
            assertReadableStream(stream, 'First parameter');
            if (IsReadableStreamLocked(stream)) throw new TypeError('This stream has already been locked for exclusive reading by another reader');
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readRequests = new SimpleQueue();
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed,
         * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
         */ get closed() {
            if (!IsReadableStreamDefaultReader(this)) return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
            return this._closedPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */ cancel(reason) {
            if (!IsReadableStreamDefaultReader(this)) return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
            if (this._ownerReadableStream === undefined) return promiseRejectedWith(readerLockException('cancel'));
            return ReadableStreamReaderGenericCancel(this, reason);
        }
        /**
         * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
         *
         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
         */ read() {
            if (!IsReadableStreamDefaultReader(this)) return promiseRejectedWith(defaultReaderBrandCheckException('read'));
            if (this._ownerReadableStream === undefined) return promiseRejectedWith(readerLockException('read from'));
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve, reject)=>{
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            const readRequest = {
                _chunkSteps: (chunk)=>resolvePromise({
                        value: chunk,
                        done: false
                    })
                ,
                _closeSteps: ()=>resolvePromise({
                        value: undefined,
                        done: true
                    })
                ,
                _errorSteps: (e)=>rejectPromise(e)
            };
            ReadableStreamDefaultReaderRead(this, readRequest);
            return promise;
        }
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */ releaseLock() {
            if (!IsReadableStreamDefaultReader(this)) throw defaultReaderBrandCheckException('releaseLock');
            if (this._ownerReadableStream === undefined) return;
            if (this._readRequests.length > 0) throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
            ReadableStreamReaderGenericRelease(this);
        }
    }
    Object.defineProperties(ReadableStreamDefaultReader.prototype, {
        cancel: {
            enumerable: true
        },
        read: {
            enumerable: true
        },
        releaseLock: {
            enumerable: true
        },
        closed: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamDefaultReader',
        configurable: true
    });
    // Abstract operations for the readers.
    function IsReadableStreamDefaultReader(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) return false;
        return x instanceof ReadableStreamDefaultReader;
    }
    function ReadableStreamDefaultReaderRead(reader, readRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === 'closed') readRequest._closeSteps();
        else if (stream._state === 'errored') readRequest._errorSteps(stream._storedError);
        else stream._readableStreamController[PullSteps](readRequest);
    }
    // Helper functions for the ReadableStreamDefaultReader.
    function defaultReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
    }
    /// <reference lib="es2018.asynciterable" />
    /* eslint-disable @typescript-eslint/no-empty-function */ const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function*() {}).prototype);
    /// <reference lib="es2018.asynciterable" />
    class ReadableStreamAsyncIteratorImpl {
        constructor(reader, preventCancel){
            this._ongoingPromise = undefined;
            this._isFinished = false;
            this._reader = reader;
            this._preventCancel = preventCancel;
        }
        next() {
            const nextSteps = ()=>this._nextSteps()
            ;
            this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
            return this._ongoingPromise;
        }
        return(value) {
            const returnSteps = ()=>this._returnSteps(value)
            ;
            return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
        }
        _nextSteps() {
            if (this._isFinished) return Promise.resolve({
                value: undefined,
                done: true
            });
            const reader = this._reader;
            if (reader._ownerReadableStream === undefined) return promiseRejectedWith(readerLockException('iterate'));
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve, reject)=>{
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            const readRequest = {
                _chunkSteps: (chunk)=>{
                    this._ongoingPromise = undefined;
                    // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
                    // FIXME Is this a bug in the specification, or in the test?
                    queueMicrotask(()=>resolvePromise({
                            value: chunk,
                            done: false
                        })
                    );
                },
                _closeSteps: ()=>{
                    this._ongoingPromise = undefined;
                    this._isFinished = true;
                    ReadableStreamReaderGenericRelease(reader);
                    resolvePromise({
                        value: undefined,
                        done: true
                    });
                },
                _errorSteps: (reason)=>{
                    this._ongoingPromise = undefined;
                    this._isFinished = true;
                    ReadableStreamReaderGenericRelease(reader);
                    rejectPromise(reason);
                }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promise;
        }
        _returnSteps(value) {
            if (this._isFinished) return Promise.resolve({
                value,
                done: true
            });
            this._isFinished = true;
            const reader = this._reader;
            if (reader._ownerReadableStream === undefined) return promiseRejectedWith(readerLockException('finish iterating'));
            if (!this._preventCancel) {
                const result = ReadableStreamReaderGenericCancel(reader, value);
                ReadableStreamReaderGenericRelease(reader);
                return transformPromiseWith(result, ()=>({
                        value,
                        done: true
                    })
                );
            }
            ReadableStreamReaderGenericRelease(reader);
            return promiseResolvedWith({
                value,
                done: true
            });
        }
    }
    const ReadableStreamAsyncIteratorPrototype = {
        next () {
            if (!IsReadableStreamAsyncIterator(this)) return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
            return this._asyncIteratorImpl.next();
        },
        return (value) {
            if (!IsReadableStreamAsyncIterator(this)) return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
            return this._asyncIteratorImpl.return(value);
        }
    };
    if (AsyncIteratorPrototype !== undefined) Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
        iterator._asyncIteratorImpl = impl;
        return iterator;
    }
    function IsReadableStreamAsyncIterator(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) return false;
        try {
            // noinspection SuspiciousTypeOfGuard
            return x._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
        } catch (_a) {
            return false;
        }
    }
    // Helper functions for the ReadableStream.
    function streamAsyncIteratorBrandCheckException(name) {
        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
    }
    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
    const NumberIsNaN = Number.isNaN || function(x) {
        // eslint-disable-next-line no-self-compare
        return x !== x;
    };
    function CreateArrayFromList(elements) {
        // We use arrays to represent lists, so this is basically a no-op.
        // Do a slice though just in case we happen to depend on the unique-ness.
        return elements.slice();
    }
    function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
    }
    // Not implemented correctly
    function TransferArrayBuffer(O) {
        return O;
    }
    // Not implemented correctly
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function IsDetachedBuffer(O) {
        return false;
    }
    function ArrayBufferSlice(buffer, begin, end) {
        // ArrayBuffer.prototype.slice is not available on IE10
        // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
        if (buffer.slice) return buffer.slice(begin, end);
        const length = end - begin;
        const slice = new ArrayBuffer(length);
        CopyDataBlockBytes(slice, 0, buffer, begin, length);
        return slice;
    }
    function IsNonNegativeNumber(v) {
        if (typeof v !== 'number') return false;
        if (NumberIsNaN(v)) return false;
        if (v < 0) return false;
        return true;
    }
    function CloneAsUint8Array(O) {
        const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
        return new Uint8Array(buffer);
    }
    function DequeueValue(container) {
        const pair = container._queue.shift();
        container._queueTotalSize -= pair.size;
        if (container._queueTotalSize < 0) container._queueTotalSize = 0;
        return pair.value;
    }
    function EnqueueValueWithSize(container, value, size) {
        if (!IsNonNegativeNumber(size) || size === Infinity) throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
        container._queue.push({
            value,
            size
        });
        container._queueTotalSize += size;
    }
    function PeekQueueValue(container) {
        const pair = container._queue.peek();
        return pair.value;
    }
    function ResetQueue(container) {
        container._queue = new SimpleQueue();
        container._queueTotalSize = 0;
    }
    /**
     * A pull-into request in a {@link ReadableByteStreamController}.
     *
     * @public
     */ class ReadableStreamBYOBRequest {
        constructor(){
            throw new TypeError('Illegal constructor');
        }
        /**
         * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
         */ get view() {
            if (!IsReadableStreamBYOBRequest(this)) throw byobRequestBrandCheckException('view');
            return this._view;
        }
        respond(bytesWritten) {
            if (!IsReadableStreamBYOBRequest(this)) throw byobRequestBrandCheckException('respond');
            assertRequiredArgument(bytesWritten, 1, 'respond');
            bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
            if (this._associatedReadableByteStreamController === undefined) throw new TypeError('This BYOB request has been invalidated');
            IsDetachedBuffer(this._view.buffer);
            ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
        }
        respondWithNewView(view) {
            if (!IsReadableStreamBYOBRequest(this)) throw byobRequestBrandCheckException('respondWithNewView');
            assertRequiredArgument(view, 1, 'respondWithNewView');
            if (!ArrayBuffer.isView(view)) throw new TypeError('You can only respond with array buffer views');
            if (this._associatedReadableByteStreamController === undefined) throw new TypeError('This BYOB request has been invalidated');
            IsDetachedBuffer(view.buffer);
            ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
        }
    }
    Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
        respond: {
            enumerable: true
        },
        respondWithNewView: {
            enumerable: true
        },
        view: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamBYOBRequest',
        configurable: true
    });
    /**
     * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
     *
     * @public
     */ class ReadableByteStreamController {
        constructor(){
            throw new TypeError('Illegal constructor');
        }
        /**
         * Returns the current BYOB pull request, or `null` if there isn't one.
         */ get byobRequest() {
            if (!IsReadableByteStreamController(this)) throw byteStreamControllerBrandCheckException('byobRequest');
            return ReadableByteStreamControllerGetBYOBRequest(this);
        }
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
         */ get desiredSize() {
            if (!IsReadableByteStreamController(this)) throw byteStreamControllerBrandCheckException('desiredSize');
            return ReadableByteStreamControllerGetDesiredSize(this);
        }
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */ close() {
            if (!IsReadableByteStreamController(this)) throw byteStreamControllerBrandCheckException('close');
            if (this._closeRequested) throw new TypeError('The stream has already been closed; do not close it again!');
            const state = this._controlledReadableByteStream._state;
            if (state !== 'readable') throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
            ReadableByteStreamControllerClose(this);
        }
        enqueue(chunk) {
            if (!IsReadableByteStreamController(this)) throw byteStreamControllerBrandCheckException('enqueue');
            assertRequiredArgument(chunk, 1, 'enqueue');
            if (!ArrayBuffer.isView(chunk)) throw new TypeError('chunk must be an array buffer view');
            if (chunk.byteLength === 0) throw new TypeError('chunk must have non-zero byteLength');
            if (chunk.buffer.byteLength === 0) throw new TypeError(`chunk's buffer must have non-zero byteLength`);
            if (this._closeRequested) throw new TypeError('stream is closed or draining');
            const state = this._controlledReadableByteStream._state;
            if (state !== 'readable') throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
            ReadableByteStreamControllerEnqueue(this, chunk);
        }
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */ error(e) {
            if (!IsReadableByteStreamController(this)) throw byteStreamControllerBrandCheckException('error');
            ReadableByteStreamControllerError(this, e);
        }
        /** @internal */ [CancelSteps](reason) {
            ReadableByteStreamControllerClearPendingPullIntos(this);
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableByteStreamControllerClearAlgorithms(this);
            return result;
        }
        /** @internal */ [PullSteps](readRequest) {
            const stream = this._controlledReadableByteStream;
            if (this._queueTotalSize > 0) {
                const entry = this._queue.shift();
                this._queueTotalSize -= entry.byteLength;
                ReadableByteStreamControllerHandleQueueDrain(this);
                const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
                readRequest._chunkSteps(view);
                return;
            }
            const autoAllocateChunkSize = this._autoAllocateChunkSize;
            if (autoAllocateChunkSize !== undefined) {
                let buffer;
                try {
                    buffer = new ArrayBuffer(autoAllocateChunkSize);
                } catch (bufferE) {
                    readRequest._errorSteps(bufferE);
                    return;
                }
                const pullIntoDescriptor = {
                    buffer,
                    bufferByteLength: autoAllocateChunkSize,
                    byteOffset: 0,
                    byteLength: autoAllocateChunkSize,
                    bytesFilled: 0,
                    elementSize: 1,
                    viewConstructor: Uint8Array,
                    readerType: 'default'
                };
                this._pendingPullIntos.push(pullIntoDescriptor);
            }
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableByteStreamControllerCallPullIfNeeded(this);
        }
    }
    Object.defineProperties(ReadableByteStreamController.prototype, {
        close: {
            enumerable: true
        },
        enqueue: {
            enumerable: true
        },
        error: {
            enumerable: true
        },
        byobRequest: {
            enumerable: true
        },
        desiredSize: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableByteStreamController',
        configurable: true
    });
    // Abstract operations for the ReadableByteStreamController.
    function IsReadableByteStreamController(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) return false;
        return x instanceof ReadableByteStreamController;
    }
    function IsReadableStreamBYOBRequest(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) return false;
        return x instanceof ReadableStreamBYOBRequest;
    }
    function ReadableByteStreamControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
        if (!shouldPull) return;
        if (controller._pulling) {
            controller._pullAgain = true;
            return;
        }
        controller._pulling = true;
        // TODO: Test controller argument
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, ()=>{
            controller._pulling = false;
            if (controller._pullAgain) {
                controller._pullAgain = false;
                ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
        }, (e)=>{
            ReadableByteStreamControllerError(controller, e);
        });
    }
    function ReadableByteStreamControllerClearPendingPullIntos(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        controller._pendingPullIntos = new SimpleQueue();
    }
    function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
        let done = false;
        if (stream._state === 'closed') done = true;
        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === 'default') ReadableStreamFulfillReadRequest(stream, filledView, done);
        else ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
    function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
        const bytesFilled = pullIntoDescriptor.bytesFilled;
        const elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
    }
    function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
        controller._queue.push({
            buffer,
            byteOffset,
            byteLength
        });
        controller._queueTotalSize += byteLength;
    }
    function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
        const elementSize = pullIntoDescriptor.elementSize;
        const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
        const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
        const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
        let totalBytesToCopyRemaining = maxBytesToCopy;
        let ready = false;
        if (maxAlignedBytes > currentAlignedBytes) {
            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
            ready = true;
        }
        const queue = controller._queue;
        while(totalBytesToCopyRemaining > 0){
            const headOfQueue = queue.peek();
            const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
            const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
            if (headOfQueue.byteLength === bytesToCopy) queue.shift();
            else {
                headOfQueue.byteOffset += bytesToCopy;
                headOfQueue.byteLength -= bytesToCopy;
            }
            controller._queueTotalSize -= bytesToCopy;
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
            totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
    }
    function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
        pullIntoDescriptor.bytesFilled += size;
    }
    function ReadableByteStreamControllerHandleQueueDrain(controller) {
        if (controller._queueTotalSize === 0 && controller._closeRequested) {
            ReadableByteStreamControllerClearAlgorithms(controller);
            ReadableStreamClose(controller._controlledReadableByteStream);
        } else ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
        if (controller._byobRequest === null) return;
        controller._byobRequest._associatedReadableByteStreamController = undefined;
        controller._byobRequest._view = null;
        controller._byobRequest = null;
    }
    function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
        while(controller._pendingPullIntos.length > 0){
            if (controller._queueTotalSize === 0) return;
            const pullIntoDescriptor = controller._pendingPullIntos.peek();
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
                ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
            }
        }
    }
    function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
        const stream = controller._controlledReadableByteStream;
        let elementSize = 1;
        if (view.constructor !== DataView) elementSize = view.constructor.BYTES_PER_ELEMENT;
        const ctor = view.constructor;
        // try {
        const buffer = TransferArrayBuffer(view.buffer);
        // } catch (e) {
        //   readIntoRequest._errorSteps(e);
        //   return;
        // }
        const pullIntoDescriptor = {
            buffer,
            bufferByteLength: buffer.byteLength,
            byteOffset: view.byteOffset,
            byteLength: view.byteLength,
            bytesFilled: 0,
            elementSize,
            viewConstructor: ctor,
            readerType: 'byob'
        };
        if (controller._pendingPullIntos.length > 0) {
            controller._pendingPullIntos.push(pullIntoDescriptor);
            // No ReadableByteStreamControllerCallPullIfNeeded() call since:
            // - No change happens on desiredSize
            // - The source has already been notified of that there's at least 1 pending read(view)
            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
            return;
        }
        if (stream._state === 'closed') {
            const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
            readIntoRequest._closeSteps(emptyView);
            return;
        }
        if (controller._queueTotalSize > 0) {
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
                ReadableByteStreamControllerHandleQueueDrain(controller);
                readIntoRequest._chunkSteps(filledView);
                return;
            }
            if (controller._closeRequested) {
                const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
                ReadableByteStreamControllerError(controller, e);
                readIntoRequest._errorSteps(e);
                return;
            }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
        const stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader(stream)) while(ReadableStreamGetNumReadIntoRequests(stream) > 0){
            const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
        }
    }
    function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) return;
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
            const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
        }
        pullIntoDescriptor.bytesFilled -= remainderSize;
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    }
    function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        const state = controller._controlledReadableByteStream._state;
        if (state === 'closed') ReadableByteStreamControllerRespondInClosedState(controller);
        else ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerShiftPendingPullInto(controller) {
        const descriptor = controller._pendingPullIntos.shift();
        return descriptor;
    }
    function ReadableByteStreamControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== 'readable') return false;
        if (controller._closeRequested) return false;
        if (!controller._started) return false;
        if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) return true;
        if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) return true;
        const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
        if (desiredSize > 0) return true;
        return false;
    }
    function ReadableByteStreamControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = undefined;
        controller._cancelAlgorithm = undefined;
    }
    // A client of ReadableByteStreamController may use these functions directly to bypass state check.
    function ReadableByteStreamControllerClose(controller) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== 'readable') return;
        if (controller._queueTotalSize > 0) {
            controller._closeRequested = true;
            return;
        }
        if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (firstPendingPullInto.bytesFilled > 0) {
                const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
                ReadableByteStreamControllerError(controller, e);
                throw e;
            }
        }
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
    }
    function ReadableByteStreamControllerEnqueue(controller, chunk) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== 'readable') return;
        const buffer = chunk.buffer;
        const byteOffset = chunk.byteOffset;
        const byteLength = chunk.byteLength;
        const transferredBuffer = TransferArrayBuffer(buffer);
        if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            IsDetachedBuffer(firstPendingPullInto.buffer);
            firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
        }
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        if (ReadableStreamHasDefaultReader(stream)) {
            if (ReadableStreamGetNumReadRequests(stream) === 0) ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            else {
                if (controller._pendingPullIntos.length > 0) ReadableByteStreamControllerShiftPendingPullInto(controller);
                const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
                ReadableStreamFulfillReadRequest(stream, transferredView, false);
            }
        } else if (ReadableStreamHasBYOBReader(stream)) {
            // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        } else ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerError(controller, e) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== 'readable') return;
        ReadableByteStreamControllerClearPendingPullIntos(controller);
        ResetQueue(controller);
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e);
    }
    function ReadableByteStreamControllerGetBYOBRequest(controller) {
        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
            const firstDescriptor = controller._pendingPullIntos.peek();
            const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
            const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
            SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
            controller._byobRequest = byobRequest;
        }
        return controller._byobRequest;
    }
    function ReadableByteStreamControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableByteStream._state;
        if (state === 'errored') return null;
        if (state === 'closed') return 0;
        return controller._strategyHWM - controller._queueTotalSize;
    }
    function ReadableByteStreamControllerRespond(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === 'closed') {
            if (bytesWritten !== 0) throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
        } else {
            if (bytesWritten === 0) throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
            if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) throw new RangeError('bytesWritten out of range');
        }
        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
    }
    function ReadableByteStreamControllerRespondWithNewView(controller, view) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === 'closed') {
            if (view.byteLength !== 0) throw new TypeError('The view\'s length must be 0 when calling respondWithNewView() on a closed stream');
        } else {
            if (view.byteLength === 0) throw new TypeError('The view\'s length must be greater than 0 when calling respondWithNewView() on a readable stream');
        }
        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) throw new RangeError('The region specified by view does not match byobRequest');
        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) throw new RangeError('The buffer of view has different capacity than byobRequest');
        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) throw new RangeError('The region specified by view is larger than byobRequest');
        const viewByteLength = view.byteLength;
        firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
        ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
    }
    function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
        controller._controlledReadableByteStream = stream;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._byobRequest = null;
        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
        controller._queue = controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._closeRequested = false;
        controller._started = false;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._autoAllocateChunkSize = autoAllocateChunkSize;
        controller._pendingPullIntos = new SimpleQueue();
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), ()=>{
            controller._started = true;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
        }, (r)=>{
            ReadableByteStreamControllerError(controller, r);
        });
    }
    function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
        const controller = Object.create(ReadableByteStreamController.prototype);
        let startAlgorithm = ()=>undefined
        ;
        let pullAlgorithm = ()=>promiseResolvedWith(undefined)
        ;
        let cancelAlgorithm = ()=>promiseResolvedWith(undefined)
        ;
        if (underlyingByteSource.start !== undefined) startAlgorithm = ()=>underlyingByteSource.start(controller)
        ;
        if (underlyingByteSource.pull !== undefined) pullAlgorithm = ()=>underlyingByteSource.pull(controller)
        ;
        if (underlyingByteSource.cancel !== undefined) cancelAlgorithm = (reason)=>underlyingByteSource.cancel(reason)
        ;
        const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0) throw new TypeError('autoAllocateChunkSize must be greater than 0');
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
    }
    function SetUpReadableStreamBYOBRequest(request, controller, view) {
        request._associatedReadableByteStreamController = controller;
        request._view = view;
    }
    // Helper functions for the ReadableStreamBYOBRequest.
    function byobRequestBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
    }
    // Helper functions for the ReadableByteStreamController.
    function byteStreamControllerBrandCheckException(name) {
        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
    }
    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamBYOBReader(stream) {
        return new ReadableStreamBYOBReader(stream);
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
    }
    function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readIntoRequest = reader._readIntoRequests.shift();
        if (done) readIntoRequest._closeSteps(chunk);
        else readIntoRequest._chunkSteps(chunk);
    }
    function ReadableStreamGetNumReadIntoRequests(stream) {
        return stream._reader._readIntoRequests.length;
    }
    function ReadableStreamHasBYOBReader(stream) {
        const reader = stream._reader;
        if (reader === undefined) return false;
        if (!IsReadableStreamBYOBReader(reader)) return false;
        return true;
    }
    /**
     * A BYOB reader vended by a {@link ReadableStream}.
     *
     * @public
     */ class ReadableStreamBYOBReader {
        constructor(stream){
            assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
            assertReadableStream(stream, 'First parameter');
            if (IsReadableStreamLocked(stream)) throw new TypeError('This stream has already been locked for exclusive reading by another reader');
            if (!IsReadableByteStreamController(stream._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readIntoRequests = new SimpleQueue();
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the reader's lock is released before the stream finishes closing.
         */ get closed() {
            if (!IsReadableStreamBYOBReader(this)) return promiseRejectedWith(byobReaderBrandCheckException('closed'));
            return this._closedPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */ cancel(reason) {
            if (!IsReadableStreamBYOBReader(this)) return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
            if (this._ownerReadableStream === undefined) return promiseRejectedWith(readerLockException('cancel'));
            return ReadableStreamReaderGenericCancel(this, reason);
        }
        /**
         * Attempts to reads bytes into view, and returns a promise resolved with the result.
         *
         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
         */ read(view) {
            if (!IsReadableStreamBYOBReader(this)) return promiseRejectedWith(byobReaderBrandCheckException('read'));
            if (!ArrayBuffer.isView(view)) return promiseRejectedWith(new TypeError('view must be an array buffer view'));
            if (view.byteLength === 0) return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
            if (view.buffer.byteLength === 0) return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
            IsDetachedBuffer(view.buffer);
            if (this._ownerReadableStream === undefined) return promiseRejectedWith(readerLockException('read from'));
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve, reject)=>{
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            const readIntoRequest = {
                _chunkSteps: (chunk)=>resolvePromise({
                        value: chunk,
                        done: false
                    })
                ,
                _closeSteps: (chunk)=>resolvePromise({
                        value: chunk,
                        done: true
                    })
                ,
                _errorSteps: (e)=>rejectPromise(e)
            };
            ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
            return promise;
        }
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */ releaseLock() {
            if (!IsReadableStreamBYOBReader(this)) throw byobReaderBrandCheckException('releaseLock');
            if (this._ownerReadableStream === undefined) return;
            if (this._readIntoRequests.length > 0) throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
            ReadableStreamReaderGenericRelease(this);
        }
    }
    Object.defineProperties(ReadableStreamBYOBReader.prototype, {
        cancel: {
            enumerable: true
        },
        read: {
            enumerable: true
        },
        releaseLock: {
            enumerable: true
        },
        closed: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamBYOBReader',
        configurable: true
    });
    // Abstract operations for the readers.
    function IsReadableStreamBYOBReader(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) return false;
        return x instanceof ReadableStreamBYOBReader;
    }
    function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === 'errored') readIntoRequest._errorSteps(stream._storedError);
        else ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
    }
    // Helper functions for the ReadableStreamBYOBReader.
    function byobReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
    }
    function ExtractHighWaterMark(strategy, defaultHWM) {
        const { highWaterMark  } = strategy;
        if (highWaterMark === undefined) return defaultHWM;
        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) throw new RangeError('Invalid highWaterMark');
        return highWaterMark;
    }
    function ExtractSizeAlgorithm(strategy) {
        const { size  } = strategy;
        if (!size) return ()=>1
        ;
        return size;
    }
    function convertQueuingStrategy(init, context) {
        assertDictionary(init, context);
        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        const size = init === null || init === void 0 ? void 0 : init.size;
        return {
            highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
            size: size === undefined ? undefined : convertQueuingStrategySize(size, `${context} has member 'size' that`)
        };
    }
    function convertQueuingStrategySize(fn, context) {
        assertFunction(fn, context);
        return (chunk)=>convertUnrestrictedDouble(fn(chunk))
        ;
    }
    function convertUnderlyingSink(original, context) {
        assertDictionary(original, context);
        const abort = original === null || original === void 0 ? void 0 : original.abort;
        const close = original === null || original === void 0 ? void 0 : original.close;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        const write = original === null || original === void 0 ? void 0 : original.write;
        return {
            abort: abort === undefined ? undefined : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
            close: close === undefined ? undefined : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
            start: start === undefined ? undefined : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
            write: write === undefined ? undefined : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
            type
        };
    }
    function convertUnderlyingSinkAbortCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason)=>promiseCall(fn, original, [
                reason
            ])
        ;
    }
    function convertUnderlyingSinkCloseCallback(fn, original, context) {
        assertFunction(fn, context);
        return ()=>promiseCall(fn, original, [])
        ;
    }
    function convertUnderlyingSinkStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller)=>reflectCall(fn, original, [
                controller
            ])
        ;
    }
    function convertUnderlyingSinkWriteCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller)=>promiseCall(fn, original, [
                chunk,
                controller
            ])
        ;
    }
    function assertWritableStream(x, context) {
        if (!IsWritableStream(x)) throw new TypeError(`${context} is not a WritableStream.`);
    }
    function isAbortSignal(value) {
        if (typeof value !== 'object' || value === null) return false;
        try {
            return typeof value.aborted === 'boolean';
        } catch (_a) {
            // AbortSignal.prototype.aborted throws if its brand check fails
            return false;
        }
    }
    const supportsAbortController = typeof AbortController === 'function';
    /**
     * Construct a new AbortController, if supported by the platform.
     *
     * @internal
     */ function createAbortController() {
        if (supportsAbortController) return new AbortController();
        return undefined;
    }
    /**
     * A writable stream represents a destination for data, into which you can write.
     *
     * @public
     */ class WritableStream {
        constructor(rawUnderlyingSink = {}, rawStrategy = {}){
            if (rawUnderlyingSink === undefined) rawUnderlyingSink = null;
            else assertObject(rawUnderlyingSink, 'First parameter');
            const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
            const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
            InitializeWritableStream(this);
            const type = underlyingSink.type;
            if (type !== undefined) throw new RangeError('Invalid type is specified');
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
        }
        /**
         * Returns whether or not the writable stream is locked to a writer.
         */ get locked() {
            if (!IsWritableStream(this)) throw streamBrandCheckException$2('locked');
            return IsWritableStreamLocked(this);
        }
        /**
         * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
         * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
         * mechanism of the underlying sink.
         *
         * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
         * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
         * the stream) if the stream is currently locked.
         */ abort(reason) {
            if (!IsWritableStream(this)) return promiseRejectedWith(streamBrandCheckException$2('abort'));
            if (IsWritableStreamLocked(this)) return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
            return WritableStreamAbort(this, reason);
        }
        /**
         * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
         * close behavior. During this time any further attempts to write will fail (without erroring the stream).
         *
         * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
         * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
         * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
         */ close() {
            if (!IsWritableStream(this)) return promiseRejectedWith(streamBrandCheckException$2('close'));
            if (IsWritableStreamLocked(this)) return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
            if (WritableStreamCloseQueuedOrInFlight(this)) return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
            return WritableStreamClose(this);
        }
        /**
         * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
         * is locked, no other writer can be acquired until this one is released.
         *
         * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
         * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
         * the same time, which would cause the resulting written data to be unpredictable and probably useless.
         */ getWriter() {
            if (!IsWritableStream(this)) throw streamBrandCheckException$2('getWriter');
            return AcquireWritableStreamDefaultWriter(this);
        }
    }
    Object.defineProperties(WritableStream.prototype, {
        abort: {
            enumerable: true
        },
        close: {
            enumerable: true
        },
        getWriter: {
            enumerable: true
        },
        locked: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStream',
        configurable: true
    });
    // Abstract operations for the WritableStream.
    function AcquireWritableStreamDefaultWriter(stream) {
        return new WritableStreamDefaultWriter(stream);
    }
    // Throws if and only if startAlgorithm throws.
    function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = ()=>1
    ) {
        const stream = Object.create(WritableStream.prototype);
        InitializeWritableStream(stream);
        const controller = Object.create(WritableStreamDefaultController.prototype);
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
    }
    function InitializeWritableStream(stream) {
        stream._state = 'writable';
        // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
        // 'erroring' or 'errored'. May be set to an undefined value.
        stream._storedError = undefined;
        stream._writer = undefined;
        // Initialize to undefined first because the constructor of the controller checks this
        // variable to validate the caller.
        stream._writableStreamController = undefined;
        // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
        // producer without waiting for the queued writes to finish.
        stream._writeRequests = new SimpleQueue();
        // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
        // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
        stream._inFlightWriteRequest = undefined;
        // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
        // has been detached.
        stream._closeRequest = undefined;
        // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
        // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
        stream._inFlightCloseRequest = undefined;
        // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
        stream._pendingAbortRequest = undefined;
        // The backpressure signal set by the controller.
        stream._backpressure = false;
    }
    function IsWritableStream(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) return false;
        return x instanceof WritableStream;
    }
    function IsWritableStreamLocked(stream) {
        if (stream._writer === undefined) return false;
        return true;
    }
    function WritableStreamAbort(stream, reason) {
        var _a;
        if (stream._state === 'closed' || stream._state === 'errored') return promiseResolvedWith(undefined);
        stream._writableStreamController._abortReason = reason;
        (_a = stream._writableStreamController._abortController) === null || _a === void 0 || _a.abort();
        // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
        // but it doesn't know that signaling abort runs author code that might have changed the state.
        // Widen the type again by casting to WritableStreamState.
        const state = stream._state;
        if (state === 'closed' || state === 'errored') return promiseResolvedWith(undefined);
        if (stream._pendingAbortRequest !== undefined) return stream._pendingAbortRequest._promise;
        let wasAlreadyErroring = false;
        if (state === 'erroring') {
            wasAlreadyErroring = true;
            // reason will not be used, so don't keep a reference to it.
            reason = undefined;
        }
        const promise = newPromise((resolve, reject)=>{
            stream._pendingAbortRequest = {
                _promise: undefined,
                _resolve: resolve,
                _reject: reject,
                _reason: reason,
                _wasAlreadyErroring: wasAlreadyErroring
            };
        });
        stream._pendingAbortRequest._promise = promise;
        if (!wasAlreadyErroring) WritableStreamStartErroring(stream, reason);
        return promise;
    }
    function WritableStreamClose(stream) {
        const state = stream._state;
        if (state === 'closed' || state === 'errored') return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
        const promise = newPromise((resolve, reject)=>{
            const closeRequest = {
                _resolve: resolve,
                _reject: reject
            };
            stream._closeRequest = closeRequest;
        });
        const writer = stream._writer;
        if (writer !== undefined && stream._backpressure && state === 'writable') defaultWriterReadyPromiseResolve(writer);
        WritableStreamDefaultControllerClose(stream._writableStreamController);
        return promise;
    }
    // WritableStream API exposed for controllers.
    function WritableStreamAddWriteRequest(stream) {
        const promise = newPromise((resolve, reject)=>{
            const writeRequest = {
                _resolve: resolve,
                _reject: reject
            };
            stream._writeRequests.push(writeRequest);
        });
        return promise;
    }
    function WritableStreamDealWithRejection(stream, error) {
        const state = stream._state;
        if (state === 'writable') {
            WritableStreamStartErroring(stream, error);
            return;
        }
        WritableStreamFinishErroring(stream);
    }
    function WritableStreamStartErroring(stream, reason) {
        const controller = stream._writableStreamController;
        stream._state = 'erroring';
        stream._storedError = reason;
        const writer = stream._writer;
        if (writer !== undefined) WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
        if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) WritableStreamFinishErroring(stream);
    }
    function WritableStreamFinishErroring(stream) {
        stream._state = 'errored';
        stream._writableStreamController[ErrorSteps]();
        const storedError = stream._storedError;
        stream._writeRequests.forEach((writeRequest)=>{
            writeRequest._reject(storedError);
        });
        stream._writeRequests = new SimpleQueue();
        if (stream._pendingAbortRequest === undefined) {
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
        }
        const abortRequest = stream._pendingAbortRequest;
        stream._pendingAbortRequest = undefined;
        if (abortRequest._wasAlreadyErroring) {
            abortRequest._reject(storedError);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
        }
        const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
        uponPromise(promise, ()=>{
            abortRequest._resolve();
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        }, (reason)=>{
            abortRequest._reject(reason);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        });
    }
    function WritableStreamFinishInFlightWrite(stream) {
        stream._inFlightWriteRequest._resolve(undefined);
        stream._inFlightWriteRequest = undefined;
    }
    function WritableStreamFinishInFlightWriteWithError(stream, error) {
        stream._inFlightWriteRequest._reject(error);
        stream._inFlightWriteRequest = undefined;
        WritableStreamDealWithRejection(stream, error);
    }
    function WritableStreamFinishInFlightClose(stream) {
        stream._inFlightCloseRequest._resolve(undefined);
        stream._inFlightCloseRequest = undefined;
        const state = stream._state;
        if (state === 'erroring') {
            // The error was too late to do anything, so it is ignored.
            stream._storedError = undefined;
            if (stream._pendingAbortRequest !== undefined) {
                stream._pendingAbortRequest._resolve();
                stream._pendingAbortRequest = undefined;
            }
        }
        stream._state = 'closed';
        const writer = stream._writer;
        if (writer !== undefined) defaultWriterClosedPromiseResolve(writer);
    }
    function WritableStreamFinishInFlightCloseWithError(stream, error) {
        stream._inFlightCloseRequest._reject(error);
        stream._inFlightCloseRequest = undefined;
        // Never execute sink abort() after sink close().
        if (stream._pendingAbortRequest !== undefined) {
            stream._pendingAbortRequest._reject(error);
            stream._pendingAbortRequest = undefined;
        }
        WritableStreamDealWithRejection(stream, error);
    }
    // TODO(ricea): Fix alphabetical order.
    function WritableStreamCloseQueuedOrInFlight(stream) {
        if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) return false;
        return true;
    }
    function WritableStreamHasOperationMarkedInFlight(stream) {
        if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) return false;
        return true;
    }
    function WritableStreamMarkCloseRequestInFlight(stream) {
        stream._inFlightCloseRequest = stream._closeRequest;
        stream._closeRequest = undefined;
    }
    function WritableStreamMarkFirstWriteRequestInFlight(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
    }
    function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
        if (stream._closeRequest !== undefined) {
            stream._closeRequest._reject(stream._storedError);
            stream._closeRequest = undefined;
        }
        const writer = stream._writer;
        if (writer !== undefined) defaultWriterClosedPromiseReject(writer, stream._storedError);
    }
    function WritableStreamUpdateBackpressure(stream, backpressure) {
        const writer = stream._writer;
        if (writer !== undefined && backpressure !== stream._backpressure) {
            if (backpressure) defaultWriterReadyPromiseReset(writer);
            else defaultWriterReadyPromiseResolve(writer);
        }
        stream._backpressure = backpressure;
    }
    /**
     * A default writer vended by a {@link WritableStream}.
     *
     * @public
     */ class WritableStreamDefaultWriter {
        constructor(stream){
            assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
            assertWritableStream(stream, 'First parameter');
            if (IsWritableStreamLocked(stream)) throw new TypeError('This stream has already been locked for exclusive writing by another writer');
            this._ownerWritableStream = stream;
            stream._writer = this;
            const state = stream._state;
            if (state === 'writable') {
                if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) defaultWriterReadyPromiseInitialize(this);
                else defaultWriterReadyPromiseInitializeAsResolved(this);
                defaultWriterClosedPromiseInitialize(this);
            } else if (state === 'erroring') {
                defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
                defaultWriterClosedPromiseInitialize(this);
            } else if (state === 'closed') {
                defaultWriterReadyPromiseInitializeAsResolved(this);
                defaultWriterClosedPromiseInitializeAsResolved(this);
            } else {
                const storedError = stream._storedError;
                defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
                defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
            }
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the writer’s lock is released before the stream finishes closing.
         */ get closed() {
            if (!IsWritableStreamDefaultWriter(this)) return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
            return this._closedPromise;
        }
        /**
         * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
         * A producer can use this information to determine the right amount of data to write.
         *
         * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
         * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
         * the writer’s lock is released.
         */ get desiredSize() {
            if (!IsWritableStreamDefaultWriter(this)) throw defaultWriterBrandCheckException('desiredSize');
            if (this._ownerWritableStream === undefined) throw defaultWriterLockException('desiredSize');
            return WritableStreamDefaultWriterGetDesiredSize(this);
        }
        /**
         * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
         * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
         * back to zero or below, the getter will return a new promise that stays pending until the next transition.
         *
         * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
         * rejected.
         */ get ready() {
            if (!IsWritableStreamDefaultWriter(this)) return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
            return this._readyPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
         */ abort(reason) {
            if (!IsWritableStreamDefaultWriter(this)) return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
            if (this._ownerWritableStream === undefined) return promiseRejectedWith(defaultWriterLockException('abort'));
            return WritableStreamDefaultWriterAbort(this, reason);
        }
        /**
         * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
         */ close() {
            if (!IsWritableStreamDefaultWriter(this)) return promiseRejectedWith(defaultWriterBrandCheckException('close'));
            const stream = this._ownerWritableStream;
            if (stream === undefined) return promiseRejectedWith(defaultWriterLockException('close'));
            if (WritableStreamCloseQueuedOrInFlight(stream)) return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
            return WritableStreamDefaultWriterClose(this);
        }
        /**
         * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
         * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
         * now on; otherwise, the writer will appear closed.
         *
         * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
         * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
         * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
         * other producers from writing in an interleaved manner.
         */ releaseLock() {
            if (!IsWritableStreamDefaultWriter(this)) throw defaultWriterBrandCheckException('releaseLock');
            const stream = this._ownerWritableStream;
            if (stream === undefined) return;
            WritableStreamDefaultWriterRelease(this);
        }
        write(chunk) {
            if (!IsWritableStreamDefaultWriter(this)) return promiseRejectedWith(defaultWriterBrandCheckException('write'));
            if (this._ownerWritableStream === undefined) return promiseRejectedWith(defaultWriterLockException('write to'));
            return WritableStreamDefaultWriterWrite(this, chunk);
        }
    }
    Object.defineProperties(WritableStreamDefaultWriter.prototype, {
        abort: {
            enumerable: true
        },
        close: {
            enumerable: true
        },
        releaseLock: {
            enumerable: true
        },
        write: {
            enumerable: true
        },
        closed: {
            enumerable: true
        },
        desiredSize: {
            enumerable: true
        },
        ready: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStreamDefaultWriter',
        configurable: true
    });
    // Abstract operations for the WritableStreamDefaultWriter.
    function IsWritableStreamDefaultWriter(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) return false;
        return x instanceof WritableStreamDefaultWriter;
    }
    // A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
    function WritableStreamDefaultWriterAbort(writer, reason) {
        const stream = writer._ownerWritableStream;
        return WritableStreamAbort(stream, reason);
    }
    function WritableStreamDefaultWriterClose(writer) {
        const stream = writer._ownerWritableStream;
        return WritableStreamClose(stream);
    }
    function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') return promiseResolvedWith(undefined);
        if (state === 'errored') return promiseRejectedWith(stream._storedError);
        return WritableStreamDefaultWriterClose(writer);
    }
    function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
        if (writer._closedPromiseState === 'pending') defaultWriterClosedPromiseReject(writer, error);
        else defaultWriterClosedPromiseResetToRejected(writer, error);
    }
    function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
        if (writer._readyPromiseState === 'pending') defaultWriterReadyPromiseReject(writer, error);
        else defaultWriterReadyPromiseResetToRejected(writer, error);
    }
    function WritableStreamDefaultWriterGetDesiredSize(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (state === 'errored' || state === 'erroring') return null;
        if (state === 'closed') return 0;
        return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
    }
    function WritableStreamDefaultWriterRelease(writer) {
        const stream = writer._ownerWritableStream;
        const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
        // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
        // rejected until afterwards. This means that simply testing state will not work.
        WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
        stream._writer = undefined;
        writer._ownerWritableStream = undefined;
    }
    function WritableStreamDefaultWriterWrite(writer, chunk) {
        const stream = writer._ownerWritableStream;
        const controller = stream._writableStreamController;
        const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
        if (stream !== writer._ownerWritableStream) return promiseRejectedWith(defaultWriterLockException('write to'));
        const state = stream._state;
        if (state === 'errored') return promiseRejectedWith(stream._storedError);
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
        if (state === 'erroring') return promiseRejectedWith(stream._storedError);
        const promise = WritableStreamAddWriteRequest(stream);
        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
        return promise;
    }
    const closeSentinel = {};
    /**
     * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
     *
     * @public
     */ class WritableStreamDefaultController {
        constructor(){
            throw new TypeError('Illegal constructor');
        }
        /**
         * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
         *
         * @deprecated
         *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
         *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
         */ get abortReason() {
            if (!IsWritableStreamDefaultController(this)) throw defaultControllerBrandCheckException$2('abortReason');
            return this._abortReason;
        }
        /**
         * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
         */ get signal() {
            if (!IsWritableStreamDefaultController(this)) throw defaultControllerBrandCheckException$2('signal');
            if (this._abortController === undefined) // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
            // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
            // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
            throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
            return this._abortController.signal;
        }
        /**
         * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
         *
         * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
         * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
         * normal lifecycle of interactions with the underlying sink.
         */ error(e) {
            if (!IsWritableStreamDefaultController(this)) throw defaultControllerBrandCheckException$2('error');
            const state = this._controlledWritableStream._state;
            if (state !== 'writable') // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
            // just treat it as a no-op.
            return;
            WritableStreamDefaultControllerError(this, e);
        }
        /** @internal */ [AbortSteps](reason) {
            const result = this._abortAlgorithm(reason);
            WritableStreamDefaultControllerClearAlgorithms(this);
            return result;
        }
        /** @internal */ [ErrorSteps]() {
            ResetQueue(this);
        }
    }
    Object.defineProperties(WritableStreamDefaultController.prototype, {
        abortReason: {
            enumerable: true
        },
        signal: {
            enumerable: true
        },
        error: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStreamDefaultController',
        configurable: true
    });
    // Abstract operations implementing interface required by the WritableStream.
    function IsWritableStreamDefaultController(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) return false;
        return x instanceof WritableStreamDefaultController;
    }
    function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledWritableStream = stream;
        stream._writableStreamController = controller;
        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
        controller._queue = undefined;
        controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._abortReason = undefined;
        controller._abortController = createAbortController();
        controller._started = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._writeAlgorithm = writeAlgorithm;
        controller._closeAlgorithm = closeAlgorithm;
        controller._abortAlgorithm = abortAlgorithm;
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
        const startResult = startAlgorithm();
        const startPromise = promiseResolvedWith(startResult);
        uponPromise(startPromise, ()=>{
            controller._started = true;
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, (r)=>{
            controller._started = true;
            WritableStreamDealWithRejection(stream, r);
        });
    }
    function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(WritableStreamDefaultController.prototype);
        let startAlgorithm = ()=>undefined
        ;
        let writeAlgorithm = ()=>promiseResolvedWith(undefined)
        ;
        let closeAlgorithm = ()=>promiseResolvedWith(undefined)
        ;
        let abortAlgorithm = ()=>promiseResolvedWith(undefined)
        ;
        if (underlyingSink.start !== undefined) startAlgorithm = ()=>underlyingSink.start(controller)
        ;
        if (underlyingSink.write !== undefined) writeAlgorithm = (chunk)=>underlyingSink.write(chunk, controller)
        ;
        if (underlyingSink.close !== undefined) closeAlgorithm = ()=>underlyingSink.close()
        ;
        if (underlyingSink.abort !== undefined) abortAlgorithm = (reason)=>underlyingSink.abort(reason)
        ;
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    }
    // ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
    function WritableStreamDefaultControllerClearAlgorithms(controller) {
        controller._writeAlgorithm = undefined;
        controller._closeAlgorithm = undefined;
        controller._abortAlgorithm = undefined;
        controller._strategySizeAlgorithm = undefined;
    }
    function WritableStreamDefaultControllerClose(controller) {
        EnqueueValueWithSize(controller, closeSentinel, 0);
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }
    function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
        try {
            return controller._strategySizeAlgorithm(chunk);
        } catch (chunkSizeE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
            return 1;
        }
    }
    function WritableStreamDefaultControllerGetDesiredSize(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
    }
    function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
        try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
        } catch (enqueueE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
            return;
        }
        const stream = controller._controlledWritableStream;
        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }
    // Abstract operations for the WritableStreamDefaultController.
    function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
        const stream = controller._controlledWritableStream;
        if (!controller._started) return;
        if (stream._inFlightWriteRequest !== undefined) return;
        const state = stream._state;
        if (state === 'erroring') {
            WritableStreamFinishErroring(stream);
            return;
        }
        if (controller._queue.length === 0) return;
        const value = PeekQueueValue(controller);
        if (value === closeSentinel) WritableStreamDefaultControllerProcessClose(controller);
        else WritableStreamDefaultControllerProcessWrite(controller, value);
    }
    function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
        if (controller._controlledWritableStream._state === 'writable') WritableStreamDefaultControllerError(controller, error);
    }
    function WritableStreamDefaultControllerProcessClose(controller) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight(stream);
        DequeueValue(controller);
        const sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(sinkClosePromise, ()=>{
            WritableStreamFinishInFlightClose(stream);
        }, (reason)=>{
            WritableStreamFinishInFlightCloseWithError(stream, reason);
        });
    }
    function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight(stream);
        const sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise(sinkWritePromise, ()=>{
            WritableStreamFinishInFlightWrite(stream);
            const state = stream._state;
            DequeueValue(controller);
            if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
                const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, (reason)=>{
            if (stream._state === 'writable') WritableStreamDefaultControllerClearAlgorithms(controller);
            WritableStreamFinishInFlightWriteWithError(stream, reason);
        });
    }
    function WritableStreamDefaultControllerGetBackpressure(controller) {
        const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
        return desiredSize <= 0;
    }
    // A client of WritableStreamDefaultController may use these functions directly to bypass state check.
    function WritableStreamDefaultControllerError(controller, error) {
        const stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms(controller);
        WritableStreamStartErroring(stream, error);
    }
    // Helper functions for the WritableStream.
    function streamBrandCheckException$2(name) {
        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
    }
    // Helper functions for the WritableStreamDefaultController.
    function defaultControllerBrandCheckException$2(name) {
        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
    }
    // Helper functions for the WritableStreamDefaultWriter.
    function defaultWriterBrandCheckException(name) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
    }
    function defaultWriterLockException(name) {
        return new TypeError('Cannot ' + name + ' a stream using a released writer');
    }
    function defaultWriterClosedPromiseInitialize(writer) {
        writer._closedPromise = newPromise((resolve, reject)=>{
            writer._closedPromise_resolve = resolve;
            writer._closedPromise_reject = reject;
            writer._closedPromiseState = 'pending';
        });
    }
    function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseReject(writer, reason);
    }
    function defaultWriterClosedPromiseInitializeAsResolved(writer) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseResolve(writer);
    }
    function defaultWriterClosedPromiseReject(writer, reason) {
        if (writer._closedPromise_reject === undefined) return;
        setPromiseIsHandledToTrue(writer._closedPromise);
        writer._closedPromise_reject(reason);
        writer._closedPromise_resolve = undefined;
        writer._closedPromise_reject = undefined;
        writer._closedPromiseState = 'rejected';
    }
    function defaultWriterClosedPromiseResetToRejected(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
    }
    function defaultWriterClosedPromiseResolve(writer) {
        if (writer._closedPromise_resolve === undefined) return;
        writer._closedPromise_resolve(undefined);
        writer._closedPromise_resolve = undefined;
        writer._closedPromise_reject = undefined;
        writer._closedPromiseState = 'resolved';
    }
    function defaultWriterReadyPromiseInitialize(writer) {
        writer._readyPromise = newPromise((resolve, reject)=>{
            writer._readyPromise_resolve = resolve;
            writer._readyPromise_reject = reject;
        });
        writer._readyPromiseState = 'pending';
    }
    function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseReject(writer, reason);
    }
    function defaultWriterReadyPromiseInitializeAsResolved(writer) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseResolve(writer);
    }
    function defaultWriterReadyPromiseReject(writer, reason) {
        if (writer._readyPromise_reject === undefined) return;
        setPromiseIsHandledToTrue(writer._readyPromise);
        writer._readyPromise_reject(reason);
        writer._readyPromise_resolve = undefined;
        writer._readyPromise_reject = undefined;
        writer._readyPromiseState = 'rejected';
    }
    function defaultWriterReadyPromiseReset(writer) {
        defaultWriterReadyPromiseInitialize(writer);
    }
    function defaultWriterReadyPromiseResetToRejected(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
    }
    function defaultWriterReadyPromiseResolve(writer) {
        if (writer._readyPromise_resolve === undefined) return;
        writer._readyPromise_resolve(undefined);
        writer._readyPromise_resolve = undefined;
        writer._readyPromise_reject = undefined;
        writer._readyPromiseState = 'fulfilled';
    }
    /// <reference lib="dom" />
    const NativeDOMException = typeof DOMException !== 'undefined' ? DOMException : undefined;
    /// <reference types="node" />
    function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor === 'function' || typeof ctor === 'object')) return false;
        try {
            new ctor();
            return true;
        } catch (_a) {
            return false;
        }
    }
    function createDOMExceptionPolyfill() {
        // eslint-disable-next-line no-shadow
        const ctor = function DOMException(message, name) {
            this.message = message || '';
            this.name = name || 'Error';
            if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
        };
        ctor.prototype = Object.create(Error.prototype);
        Object.defineProperty(ctor.prototype, 'constructor', {
            value: ctor,
            writable: true,
            configurable: true
        });
        return ctor;
    }
    // eslint-disable-next-line no-redeclare
    const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
    function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
        const reader = AcquireReadableStreamDefaultReader(source);
        const writer = AcquireWritableStreamDefaultWriter(dest);
        source._disturbed = true;
        let shuttingDown = false;
        // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
        let currentWrite = promiseResolvedWith(undefined);
        return newPromise((resolve, reject)=>{
            let abortAlgorithm;
            if (signal !== undefined) {
                abortAlgorithm = ()=>{
                    const error = new DOMException$1('Aborted', 'AbortError');
                    const actions = [];
                    if (!preventAbort) actions.push(()=>{
                        if (dest._state === 'writable') return WritableStreamAbort(dest, error);
                        return promiseResolvedWith(undefined);
                    });
                    if (!preventCancel) actions.push(()=>{
                        if (source._state === 'readable') return ReadableStreamCancel(source, error);
                        return promiseResolvedWith(undefined);
                    });
                    shutdownWithAction(()=>Promise.all(actions.map((action)=>action()
                        ))
                    , true, error);
                };
                if (signal.aborted) {
                    abortAlgorithm();
                    return;
                }
                signal.addEventListener('abort', abortAlgorithm);
            }
            // Using reader and writer, read all chunks from this and write them to dest
            // - Backpressure must be enforced
            // - Shutdown must stop all activity
            function pipeLoop() {
                return newPromise((resolveLoop, rejectLoop)=>{
                    function next(done) {
                        if (done) resolveLoop();
                        else // Use `PerformPromiseThen` instead of `uponPromise` to avoid
                        // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
                        PerformPromiseThen(pipeStep(), next, rejectLoop);
                    }
                    next(false);
                });
            }
            function pipeStep() {
                if (shuttingDown) return promiseResolvedWith(true);
                return PerformPromiseThen(writer._readyPromise, ()=>{
                    return newPromise((resolveRead, rejectRead)=>{
                        ReadableStreamDefaultReaderRead(reader, {
                            _chunkSteps: (chunk)=>{
                                currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
                                resolveRead(false);
                            },
                            _closeSteps: ()=>resolveRead(true)
                            ,
                            _errorSteps: rejectRead
                        });
                    });
                });
            }
            // Errors must be propagated forward
            isOrBecomesErrored(source, reader._closedPromise, (storedError)=>{
                if (!preventAbort) shutdownWithAction(()=>WritableStreamAbort(dest, storedError)
                , true, storedError);
                else shutdown(true, storedError);
            });
            // Errors must be propagated backward
            isOrBecomesErrored(dest, writer._closedPromise, (storedError)=>{
                if (!preventCancel) shutdownWithAction(()=>ReadableStreamCancel(source, storedError)
                , true, storedError);
                else shutdown(true, storedError);
            });
            // Closing must be propagated forward
            isOrBecomesClosed(source, reader._closedPromise, ()=>{
                if (!preventClose) shutdownWithAction(()=>WritableStreamDefaultWriterCloseWithErrorPropagation(writer)
                );
                else shutdown();
            });
            // Closing must be propagated backward
            if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
                const destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
                if (!preventCancel) shutdownWithAction(()=>ReadableStreamCancel(source, destClosed)
                , true, destClosed);
                else shutdown(true, destClosed);
            }
            setPromiseIsHandledToTrue(pipeLoop());
            function waitForWritesToFinish() {
                // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
                // for that too.
                const oldCurrentWrite = currentWrite;
                return PerformPromiseThen(currentWrite, ()=>oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined
                );
            }
            function isOrBecomesErrored(stream, promise, action) {
                if (stream._state === 'errored') action(stream._storedError);
                else uponRejection(promise, action);
            }
            function isOrBecomesClosed(stream, promise, action) {
                if (stream._state === 'closed') action();
                else uponFulfillment(promise, action);
            }
            function shutdownWithAction(action, originalIsError, originalError) {
                if (shuttingDown) return;
                shuttingDown = true;
                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) uponFulfillment(waitForWritesToFinish(), doTheRest);
                else doTheRest();
                function doTheRest() {
                    uponPromise(action(), ()=>finalize(originalIsError, originalError)
                    , (newError)=>finalize(true, newError)
                    );
                }
            }
            function shutdown(isError, error) {
                if (shuttingDown) return;
                shuttingDown = true;
                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) uponFulfillment(waitForWritesToFinish(), ()=>finalize(isError, error)
                );
                else finalize(isError, error);
            }
            function finalize(isError, error) {
                WritableStreamDefaultWriterRelease(writer);
                ReadableStreamReaderGenericRelease(reader);
                if (signal !== undefined) signal.removeEventListener('abort', abortAlgorithm);
                if (isError) reject(error);
                else resolve(undefined);
            }
        });
    }
    /**
     * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
     *
     * @public
     */ class ReadableStreamDefaultController {
        constructor(){
            throw new TypeError('Illegal constructor');
        }
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
         */ get desiredSize() {
            if (!IsReadableStreamDefaultController(this)) throw defaultControllerBrandCheckException$1('desiredSize');
            return ReadableStreamDefaultControllerGetDesiredSize(this);
        }
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */ close() {
            if (!IsReadableStreamDefaultController(this)) throw defaultControllerBrandCheckException$1('close');
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) throw new TypeError('The stream is not in a state that permits close');
            ReadableStreamDefaultControllerClose(this);
        }
        enqueue(chunk) {
            if (!IsReadableStreamDefaultController(this)) throw defaultControllerBrandCheckException$1('enqueue');
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) throw new TypeError('The stream is not in a state that permits enqueue');
            return ReadableStreamDefaultControllerEnqueue(this, chunk);
        }
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */ error(e) {
            if (!IsReadableStreamDefaultController(this)) throw defaultControllerBrandCheckException$1('error');
            ReadableStreamDefaultControllerError(this, e);
        }
        /** @internal */ [CancelSteps](reason) {
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableStreamDefaultControllerClearAlgorithms(this);
            return result;
        }
        /** @internal */ [PullSteps](readRequest) {
            const stream = this._controlledReadableStream;
            if (this._queue.length > 0) {
                const chunk = DequeueValue(this);
                if (this._closeRequested && this._queue.length === 0) {
                    ReadableStreamDefaultControllerClearAlgorithms(this);
                    ReadableStreamClose(stream);
                } else ReadableStreamDefaultControllerCallPullIfNeeded(this);
                readRequest._chunkSteps(chunk);
            } else {
                ReadableStreamAddReadRequest(stream, readRequest);
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
        }
    }
    Object.defineProperties(ReadableStreamDefaultController.prototype, {
        close: {
            enumerable: true
        },
        enqueue: {
            enumerable: true
        },
        error: {
            enumerable: true
        },
        desiredSize: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamDefaultController',
        configurable: true
    });
    // Abstract operations for the ReadableStreamDefaultController.
    function IsReadableStreamDefaultController(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) return false;
        return x instanceof ReadableStreamDefaultController;
    }
    function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
        if (!shouldPull) return;
        if (controller._pulling) {
            controller._pullAgain = true;
            return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, ()=>{
            controller._pulling = false;
            if (controller._pullAgain) {
                controller._pullAgain = false;
                ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
        }, (e)=>{
            ReadableStreamDefaultControllerError(controller, e);
        });
    }
    function ReadableStreamDefaultControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableStream;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) return false;
        if (!controller._started) return false;
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) return true;
        const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
        if (desiredSize > 0) return true;
        return false;
    }
    function ReadableStreamDefaultControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = undefined;
        controller._cancelAlgorithm = undefined;
        controller._strategySizeAlgorithm = undefined;
    }
    // A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
    function ReadableStreamDefaultControllerClose(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) return;
        const stream = controller._controlledReadableStream;
        controller._closeRequested = true;
        if (controller._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(controller);
            ReadableStreamClose(stream);
        }
    }
    function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) return;
        const stream = controller._controlledReadableStream;
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) ReadableStreamFulfillReadRequest(stream, chunk, false);
        else {
            let chunkSize;
            try {
                chunkSize = controller._strategySizeAlgorithm(chunk);
            } catch (chunkSizeE) {
                ReadableStreamDefaultControllerError(controller, chunkSizeE);
                throw chunkSizeE;
            }
            try {
                EnqueueValueWithSize(controller, chunk, chunkSize);
            } catch (enqueueE) {
                ReadableStreamDefaultControllerError(controller, enqueueE);
                throw enqueueE;
            }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }
    function ReadableStreamDefaultControllerError(controller, e) {
        const stream = controller._controlledReadableStream;
        if (stream._state !== 'readable') return;
        ResetQueue(controller);
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e);
    }
    function ReadableStreamDefaultControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableStream._state;
        if (state === 'errored') return null;
        if (state === 'closed') return 0;
        return controller._strategyHWM - controller._queueTotalSize;
    }
    // This is used in the implementation of TransformStream.
    function ReadableStreamDefaultControllerHasBackpressure(controller) {
        if (ReadableStreamDefaultControllerShouldCallPull(controller)) return false;
        return true;
    }
    function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
        const state = controller._controlledReadableStream._state;
        if (!controller._closeRequested && state === 'readable') return true;
        return false;
    }
    function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledReadableStream = stream;
        controller._queue = undefined;
        controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._started = false;
        controller._closeRequested = false;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), ()=>{
            controller._started = true;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }, (r)=>{
            ReadableStreamDefaultControllerError(controller, r);
        });
    }
    function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        let startAlgorithm = ()=>undefined
        ;
        let pullAlgorithm = ()=>promiseResolvedWith(undefined)
        ;
        let cancelAlgorithm = ()=>promiseResolvedWith(undefined)
        ;
        if (underlyingSource.start !== undefined) startAlgorithm = ()=>underlyingSource.start(controller)
        ;
        if (underlyingSource.pull !== undefined) pullAlgorithm = ()=>underlyingSource.pull(controller)
        ;
        if (underlyingSource.cancel !== undefined) cancelAlgorithm = (reason)=>underlyingSource.cancel(reason)
        ;
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    }
    // Helper functions for the ReadableStreamDefaultController.
    function defaultControllerBrandCheckException$1(name) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
    }
    function ReadableStreamTee(stream, cloneForBranch2) {
        if (IsReadableByteStreamController(stream._readableStreamController)) return ReadableByteStreamTee(stream);
        return ReadableStreamDefaultTee(stream);
    }
    function ReadableStreamDefaultTee(stream, cloneForBranch2) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgain = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve)=>{
            resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
            if (reading) {
                readAgain = true;
                return promiseResolvedWith(undefined);
            }
            reading = true;
            const readRequest = {
                _chunkSteps: (chunk)=>{
                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                    // successful synchronously-available reads get ahead of asynchronously-available errors.
                    queueMicrotask(()=>{
                        readAgain = false;
                        const chunk1 = chunk;
                        const chunk2 = chunk;
                        // There is no way to access the cloning code right now in the reference implementation.
                        // If we add one then we'll need an implementation for serializable objects.
                        // if (!canceled2 && cloneForBranch2) {
                        //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
                        // }
                        if (!canceled1) ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                        if (!canceled2) ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                        reading = false;
                        if (readAgain) pullAlgorithm();
                    });
                },
                _closeSteps: ()=>{
                    reading = false;
                    if (!canceled1) ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                    if (!canceled2) ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                    if (!canceled1 || !canceled2) resolveCancelPromise(undefined);
                },
                _errorSteps: ()=>{
                    reading = false;
                }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promiseResolvedWith(undefined);
        }
        function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
                const compositeReason = CreateArrayFromList([
                    reason1,
                    reason2
                ]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
                const compositeReason = CreateArrayFromList([
                    reason1,
                    reason2
                ]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function startAlgorithm() {
        // do nothing
        }
        branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
        branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
        uponRejection(reader._closedPromise, (r)=>{
            ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
            ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
            if (!canceled1 || !canceled2) resolveCancelPromise(undefined);
        });
        return [
            branch1,
            branch2
        ];
    }
    function ReadableByteStreamTee(stream) {
        let reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgainForBranch1 = false;
        let readAgainForBranch2 = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve)=>{
            resolveCancelPromise = resolve;
        });
        function forwardReaderError(thisReader) {
            uponRejection(thisReader._closedPromise, (r)=>{
                if (thisReader !== reader) return;
                ReadableByteStreamControllerError(branch1._readableStreamController, r);
                ReadableByteStreamControllerError(branch2._readableStreamController, r);
                if (!canceled1 || !canceled2) resolveCancelPromise(undefined);
            });
        }
        function pullWithDefaultReader() {
            if (IsReadableStreamBYOBReader(reader)) {
                ReadableStreamReaderGenericRelease(reader);
                reader = AcquireReadableStreamDefaultReader(stream);
                forwardReaderError(reader);
            }
            const readRequest = {
                _chunkSteps: (chunk)=>{
                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                    // successful synchronously-available reads get ahead of asynchronously-available errors.
                    queueMicrotask(()=>{
                        readAgainForBranch1 = false;
                        readAgainForBranch2 = false;
                        const chunk1 = chunk;
                        let chunk2 = chunk;
                        if (!canceled1 && !canceled2) try {
                            chunk2 = CloneAsUint8Array(chunk);
                        } catch (cloneE) {
                            ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                            ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                            resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                            return;
                        }
                        if (!canceled1) ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                        if (!canceled2) ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                        reading = false;
                        if (readAgainForBranch1) pull1Algorithm();
                        else if (readAgainForBranch2) pull2Algorithm();
                    });
                },
                _closeSteps: ()=>{
                    reading = false;
                    if (!canceled1) ReadableByteStreamControllerClose(branch1._readableStreamController);
                    if (!canceled2) ReadableByteStreamControllerClose(branch2._readableStreamController);
                    if (branch1._readableStreamController._pendingPullIntos.length > 0) ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                    if (branch2._readableStreamController._pendingPullIntos.length > 0) ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                    if (!canceled1 || !canceled2) resolveCancelPromise(undefined);
                },
                _errorSteps: ()=>{
                    reading = false;
                }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
        }
        function pullWithBYOBReader(view, forBranch2) {
            if (IsReadableStreamDefaultReader(reader)) {
                ReadableStreamReaderGenericRelease(reader);
                reader = AcquireReadableStreamBYOBReader(stream);
                forwardReaderError(reader);
            }
            const byobBranch = forBranch2 ? branch2 : branch1;
            const otherBranch = forBranch2 ? branch1 : branch2;
            const readIntoRequest = {
                _chunkSteps: (chunk)=>{
                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                    // successful synchronously-available reads get ahead of asynchronously-available errors.
                    queueMicrotask(()=>{
                        readAgainForBranch1 = false;
                        readAgainForBranch2 = false;
                        const byobCanceled = forBranch2 ? canceled2 : canceled1;
                        const otherCanceled = forBranch2 ? canceled1 : canceled2;
                        if (!otherCanceled) {
                            let clonedChunk;
                            try {
                                clonedChunk = CloneAsUint8Array(chunk);
                            } catch (cloneE) {
                                ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                                ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                                return;
                            }
                            if (!byobCanceled) ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                            ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                        } else if (!byobCanceled) ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                        reading = false;
                        if (readAgainForBranch1) pull1Algorithm();
                        else if (readAgainForBranch2) pull2Algorithm();
                    });
                },
                _closeSteps: (chunk)=>{
                    reading = false;
                    const byobCanceled = forBranch2 ? canceled2 : canceled1;
                    const otherCanceled = forBranch2 ? canceled1 : canceled2;
                    if (!byobCanceled) ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                    if (!otherCanceled) ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                    if (chunk !== undefined) {
                        if (!byobCanceled) ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                        if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                    }
                    if (!byobCanceled || !otherCanceled) resolveCancelPromise(undefined);
                },
                _errorSteps: ()=>{
                    reading = false;
                }
            };
            ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
        }
        function pull1Algorithm() {
            if (reading) {
                readAgainForBranch1 = true;
                return promiseResolvedWith(undefined);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
            if (byobRequest === null) pullWithDefaultReader();
            else pullWithBYOBReader(byobRequest._view, false);
            return promiseResolvedWith(undefined);
        }
        function pull2Algorithm() {
            if (reading) {
                readAgainForBranch2 = true;
                return promiseResolvedWith(undefined);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
            if (byobRequest === null) pullWithDefaultReader();
            else pullWithBYOBReader(byobRequest._view, true);
            return promiseResolvedWith(undefined);
        }
        function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
                const compositeReason = CreateArrayFromList([
                    reason1,
                    reason2
                ]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
                const compositeReason = CreateArrayFromList([
                    reason1,
                    reason2
                ]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function startAlgorithm() {
            return;
        }
        branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
        branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
        forwardReaderError(reader);
        return [
            branch1,
            branch2
        ];
    }
    function convertUnderlyingDefaultOrByteSource(source, context) {
        assertDictionary(source, context);
        const original = source;
        const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
        const pull = original === null || original === void 0 ? void 0 : original.pull;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        return {
            autoAllocateChunkSize: autoAllocateChunkSize === undefined ? undefined : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
            cancel: cancel === undefined ? undefined : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
            pull: pull === undefined ? undefined : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
            start: start === undefined ? undefined : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
            type: type === undefined ? undefined : convertReadableStreamType(type, `${context} has member 'type' that`)
        };
    }
    function convertUnderlyingSourceCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason)=>promiseCall(fn, original, [
                reason
            ])
        ;
    }
    function convertUnderlyingSourcePullCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller)=>promiseCall(fn, original, [
                controller
            ])
        ;
    }
    function convertUnderlyingSourceStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller)=>reflectCall(fn, original, [
                controller
            ])
        ;
    }
    function convertReadableStreamType(type, context) {
        type = `${type}`;
        if (type !== 'bytes') throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
        return type;
    }
    function convertReaderOptions(options, context) {
        assertDictionary(options, context);
        const mode = options === null || options === void 0 ? void 0 : options.mode;
        return {
            mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
        };
    }
    function convertReadableStreamReaderMode(mode, context) {
        mode = `${mode}`;
        if (mode !== 'byob') throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return mode;
    }
    function convertIteratorOptions(options, context) {
        assertDictionary(options, context);
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        return {
            preventCancel: Boolean(preventCancel)
        };
    }
    function convertPipeOptions(options, context) {
        assertDictionary(options, context);
        const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
        const signal = options === null || options === void 0 ? void 0 : options.signal;
        if (signal !== undefined) assertAbortSignal(signal, `${context} has member 'signal' that`);
        return {
            preventAbort: Boolean(preventAbort),
            preventCancel: Boolean(preventCancel),
            preventClose: Boolean(preventClose),
            signal
        };
    }
    function assertAbortSignal(signal, context) {
        if (!isAbortSignal(signal)) throw new TypeError(`${context} is not an AbortSignal.`);
    }
    function convertReadableWritablePair(pair, context) {
        assertDictionary(pair, context);
        const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
        assertRequiredField(readable, 'readable', 'ReadableWritablePair');
        assertReadableStream(readable, `${context} has member 'readable' that`);
        const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
        assertRequiredField(writable, 'writable', 'ReadableWritablePair');
        assertWritableStream(writable, `${context} has member 'writable' that`);
        return {
            readable,
            writable
        };
    }
    /**
     * A readable stream represents a source of data, from which you can read.
     *
     * @public
     */ class ReadableStream {
        constructor(rawUnderlyingSource = {}, rawStrategy = {}){
            if (rawUnderlyingSource === undefined) rawUnderlyingSource = null;
            else assertObject(rawUnderlyingSource, 'First parameter');
            const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
            const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
            InitializeReadableStream(this);
            if (underlyingSource.type === 'bytes') {
                if (strategy.size !== undefined) throw new RangeError('The strategy for a byte stream cannot have a size function');
                const highWaterMark = ExtractHighWaterMark(strategy, 0);
                SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
            } else {
                const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
                const highWaterMark = ExtractHighWaterMark(strategy, 1);
                SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
            }
        }
        /**
         * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
         */ get locked() {
            if (!IsReadableStream(this)) throw streamBrandCheckException$1('locked');
            return IsReadableStreamLocked(this);
        }
        /**
         * Cancels the stream, signaling a loss of interest in the stream by a consumer.
         *
         * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
         * method, which might or might not use it.
         */ cancel(reason) {
            if (!IsReadableStream(this)) return promiseRejectedWith(streamBrandCheckException$1('cancel'));
            if (IsReadableStreamLocked(this)) return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
            return ReadableStreamCancel(this, reason);
        }
        getReader(rawOptions) {
            if (!IsReadableStream(this)) throw streamBrandCheckException$1('getReader');
            const options = convertReaderOptions(rawOptions, 'First parameter');
            if (options.mode === undefined) return AcquireReadableStreamDefaultReader(this);
            return AcquireReadableStreamBYOBReader(this);
        }
        pipeThrough(rawTransform, rawOptions = {}) {
            if (!IsReadableStream(this)) throw streamBrandCheckException$1('pipeThrough');
            assertRequiredArgument(rawTransform, 1, 'pipeThrough');
            const transform = convertReadableWritablePair(rawTransform, 'First parameter');
            const options = convertPipeOptions(rawOptions, 'Second parameter');
            if (IsReadableStreamLocked(this)) throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
            if (IsWritableStreamLocked(transform.writable)) throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
            const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
            setPromiseIsHandledToTrue(promise);
            return transform.readable;
        }
        pipeTo(destination, rawOptions = {}) {
            if (!IsReadableStream(this)) return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
            if (destination === undefined) return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
            if (!IsWritableStream(destination)) return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
            let options;
            try {
                options = convertPipeOptions(rawOptions, 'Second parameter');
            } catch (e) {
                return promiseRejectedWith(e);
            }
            if (IsReadableStreamLocked(this)) return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
            if (IsWritableStreamLocked(destination)) return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
            return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        }
        /**
         * Tees this readable stream, returning a two-element array containing the two resulting branches as
         * new {@link ReadableStream} instances.
         *
         * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
         * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
         * propagated to the stream's underlying source.
         *
         * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
         * this could allow interference between the two branches.
         */ tee() {
            if (!IsReadableStream(this)) throw streamBrandCheckException$1('tee');
            const branches = ReadableStreamTee(this);
            return CreateArrayFromList(branches);
        }
        values(rawOptions) {
            if (!IsReadableStream(this)) throw streamBrandCheckException$1('values');
            const options = convertIteratorOptions(rawOptions, 'First parameter');
            return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
        }
    }
    Object.defineProperties(ReadableStream.prototype, {
        cancel: {
            enumerable: true
        },
        getReader: {
            enumerable: true
        },
        pipeThrough: {
            enumerable: true
        },
        pipeTo: {
            enumerable: true
        },
        tee: {
            enumerable: true
        },
        values: {
            enumerable: true
        },
        locked: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStream',
        configurable: true
    });
    if (typeof SymbolPolyfill.asyncIterator === 'symbol') Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.asyncIterator, {
        value: ReadableStream.prototype.values,
        writable: true,
        configurable: true
    });
    // Abstract operations for the ReadableStream.
    // Throws if and only if startAlgorithm throws.
    function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = ()=>1
    ) {
        const stream = Object.create(ReadableStream.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
    }
    // Throws if and only if startAlgorithm throws.
    function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
        const stream = Object.create(ReadableStream.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableByteStreamController.prototype);
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
        return stream;
    }
    function InitializeReadableStream(stream) {
        stream._state = 'readable';
        stream._reader = undefined;
        stream._storedError = undefined;
        stream._disturbed = false;
    }
    function IsReadableStream(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) return false;
        return x instanceof ReadableStream;
    }
    function IsReadableStreamLocked(stream) {
        if (stream._reader === undefined) return false;
        return true;
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamCancel(stream, reason) {
        stream._disturbed = true;
        if (stream._state === 'closed') return promiseResolvedWith(undefined);
        if (stream._state === 'errored') return promiseRejectedWith(stream._storedError);
        ReadableStreamClose(stream);
        const reader = stream._reader;
        if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
            reader._readIntoRequests.forEach((readIntoRequest)=>{
                readIntoRequest._closeSteps(undefined);
            });
            reader._readIntoRequests = new SimpleQueue();
        }
        const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
        return transformPromiseWith(sourceCancelPromise, noop);
    }
    function ReadableStreamClose(stream) {
        stream._state = 'closed';
        const reader = stream._reader;
        if (reader === undefined) return;
        defaultReaderClosedPromiseResolve(reader);
        if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest)=>{
                readRequest._closeSteps();
            });
            reader._readRequests = new SimpleQueue();
        }
    }
    function ReadableStreamError(stream, e) {
        stream._state = 'errored';
        stream._storedError = e;
        const reader = stream._reader;
        if (reader === undefined) return;
        defaultReaderClosedPromiseReject(reader, e);
        if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest)=>{
                readRequest._errorSteps(e);
            });
            reader._readRequests = new SimpleQueue();
        } else {
            reader._readIntoRequests.forEach((readIntoRequest)=>{
                readIntoRequest._errorSteps(e);
            });
            reader._readIntoRequests = new SimpleQueue();
        }
    }
    // Helper functions for the ReadableStream.
    function streamBrandCheckException$1(name) {
        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
    }
    function convertQueuingStrategyInit(init, context) {
        assertDictionary(init, context);
        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
        return {
            highWaterMark: convertUnrestrictedDouble(highWaterMark)
        };
    }
    // The size function must not have a prototype property nor be a constructor
    const byteLengthSizeFunction = (chunk)=>{
        return chunk.byteLength;
    };
    try {
        Object.defineProperty(byteLengthSizeFunction, 'name', {
            value: 'size',
            configurable: true
        });
    } catch (_a) {
    // This property is non-configurable in older browsers, so ignore if this throws.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
    }
    /**
     * A queuing strategy that counts the number of bytes in each chunk.
     *
     * @public
     */ class ByteLengthQueuingStrategy {
        constructor(options){
            assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
            options = convertQueuingStrategyInit(options, 'First parameter');
            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        /**
         * Returns the high water mark provided to the constructor.
         */ get highWaterMark() {
            if (!IsByteLengthQueuingStrategy(this)) throw byteLengthBrandCheckException('highWaterMark');
            return this._byteLengthQueuingStrategyHighWaterMark;
        }
        /**
         * Measures the size of `chunk` by returning the value of its `byteLength` property.
         */ get size() {
            if (!IsByteLengthQueuingStrategy(this)) throw byteLengthBrandCheckException('size');
            return byteLengthSizeFunction;
        }
    }
    Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
        highWaterMark: {
            enumerable: true
        },
        size: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: 'ByteLengthQueuingStrategy',
        configurable: true
    });
    // Helper functions for the ByteLengthQueuingStrategy.
    function byteLengthBrandCheckException(name) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
    }
    function IsByteLengthQueuingStrategy(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) return false;
        return x instanceof ByteLengthQueuingStrategy;
    }
    // The size function must not have a prototype property nor be a constructor
    const countSizeFunction = ()=>{
        return 1;
    };
    try {
        Object.defineProperty(countSizeFunction, 'name', {
            value: 'size',
            configurable: true
        });
    } catch (_a1) {
    // This property is non-configurable in older browsers, so ignore if this throws.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
    }
    /**
     * A queuing strategy that counts the number of chunks.
     *
     * @public
     */ class CountQueuingStrategy {
        constructor(options){
            assertRequiredArgument(options, 1, 'CountQueuingStrategy');
            options = convertQueuingStrategyInit(options, 'First parameter');
            this._countQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        /**
         * Returns the high water mark provided to the constructor.
         */ get highWaterMark() {
            if (!IsCountQueuingStrategy(this)) throw countBrandCheckException('highWaterMark');
            return this._countQueuingStrategyHighWaterMark;
        }
        /**
         * Measures the size of `chunk` by always returning 1.
         * This ensures that the total queue size is a count of the number of chunks in the queue.
         */ get size() {
            if (!IsCountQueuingStrategy(this)) throw countBrandCheckException('size');
            return countSizeFunction;
        }
    }
    Object.defineProperties(CountQueuingStrategy.prototype, {
        highWaterMark: {
            enumerable: true
        },
        size: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: 'CountQueuingStrategy',
        configurable: true
    });
    // Helper functions for the CountQueuingStrategy.
    function countBrandCheckException(name) {
        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
    }
    function IsCountQueuingStrategy(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) return false;
        return x instanceof CountQueuingStrategy;
    }
    function convertTransformer(original, context) {
        assertDictionary(original, context);
        const flush = original === null || original === void 0 ? void 0 : original.flush;
        const readableType = original === null || original === void 0 ? void 0 : original.readableType;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const transform = original === null || original === void 0 ? void 0 : original.transform;
        const writableType = original === null || original === void 0 ? void 0 : original.writableType;
        return {
            flush: flush === undefined ? undefined : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
            readableType,
            start: start === undefined ? undefined : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
            transform: transform === undefined ? undefined : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
            writableType
        };
    }
    function convertTransformerFlushCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller)=>promiseCall(fn, original, [
                controller
            ])
        ;
    }
    function convertTransformerStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller)=>reflectCall(fn, original, [
                controller
            ])
        ;
    }
    function convertTransformerTransformCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller)=>promiseCall(fn, original, [
                chunk,
                controller
            ])
        ;
    }
    // Class TransformStream
    /**
     * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
     * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
     * In a manner specific to the transform stream in question, writes to the writable side result in new data being
     * made available for reading from the readable side.
     *
     * @public
     */ class TransformStream {
        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}){
            if (rawTransformer === undefined) rawTransformer = null;
            const writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
            const readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
            const transformer = convertTransformer(rawTransformer, 'First parameter');
            if (transformer.readableType !== undefined) throw new RangeError('Invalid readableType specified');
            if (transformer.writableType !== undefined) throw new RangeError('Invalid writableType specified');
            const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
            const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
            const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
            const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
            let startPromise_resolve;
            const startPromise = newPromise((resolve)=>{
                startPromise_resolve = resolve;
            });
            InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
            SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
            if (transformer.start !== undefined) startPromise_resolve(transformer.start(this._transformStreamController));
            else startPromise_resolve(undefined);
        }
        /**
         * The readable side of the transform stream.
         */ get readable() {
            if (!IsTransformStream(this)) throw streamBrandCheckException('readable');
            return this._readable;
        }
        /**
         * The writable side of the transform stream.
         */ get writable() {
            if (!IsTransformStream(this)) throw streamBrandCheckException('writable');
            return this._writable;
        }
    }
    Object.defineProperties(TransformStream.prototype, {
        readable: {
            enumerable: true
        },
        writable: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'TransformStream',
        configurable: true
    });
    function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
        function startAlgorithm() {
            return startPromise;
        }
        function writeAlgorithm(chunk) {
            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
        }
        function abortAlgorithm(reason) {
            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
        }
        function closeAlgorithm() {
            return TransformStreamDefaultSinkCloseAlgorithm(stream);
        }
        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
        function pullAlgorithm() {
            return TransformStreamDefaultSourcePullAlgorithm(stream);
        }
        function cancelAlgorithm(reason) {
            TransformStreamErrorWritableAndUnblockWrite(stream, reason);
            return promiseResolvedWith(undefined);
        }
        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
        stream._backpressure = undefined;
        stream._backpressureChangePromise = undefined;
        stream._backpressureChangePromise_resolve = undefined;
        TransformStreamSetBackpressure(stream, true);
        stream._transformStreamController = undefined;
    }
    function IsTransformStream(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) return false;
        return x instanceof TransformStream;
    }
    // This is a no-op if both sides are already errored.
    function TransformStreamError(stream, e) {
        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
        TransformStreamErrorWritableAndUnblockWrite(stream, e);
    }
    function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
        WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
        if (stream._backpressure) // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
        // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
        // _backpressure is set.
        TransformStreamSetBackpressure(stream, false);
    }
    function TransformStreamSetBackpressure(stream, backpressure) {
        // Passes also when called during construction.
        if (stream._backpressureChangePromise !== undefined) stream._backpressureChangePromise_resolve();
        stream._backpressureChangePromise = newPromise((resolve)=>{
            stream._backpressureChangePromise_resolve = resolve;
        });
        stream._backpressure = backpressure;
    }
    // Class TransformStreamDefaultController
    /**
     * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
     *
     * @public
     */ class TransformStreamDefaultController {
        constructor(){
            throw new TypeError('Illegal constructor');
        }
        /**
         * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
         */ get desiredSize() {
            if (!IsTransformStreamDefaultController(this)) throw defaultControllerBrandCheckException('desiredSize');
            const readableController = this._controlledTransformStream._readable._readableStreamController;
            return ReadableStreamDefaultControllerGetDesiredSize(readableController);
        }
        enqueue(chunk) {
            if (!IsTransformStreamDefaultController(this)) throw defaultControllerBrandCheckException('enqueue');
            TransformStreamDefaultControllerEnqueue(this, chunk);
        }
        /**
         * Errors both the readable side and the writable side of the controlled transform stream, making all future
         * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
         */ error(reason) {
            if (!IsTransformStreamDefaultController(this)) throw defaultControllerBrandCheckException('error');
            TransformStreamDefaultControllerError(this, reason);
        }
        /**
         * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
         * transformer only needs to consume a portion of the chunks written to the writable side.
         */ terminate() {
            if (!IsTransformStreamDefaultController(this)) throw defaultControllerBrandCheckException('terminate');
            TransformStreamDefaultControllerTerminate(this);
        }
    }
    Object.defineProperties(TransformStreamDefaultController.prototype, {
        enqueue: {
            enumerable: true
        },
        error: {
            enumerable: true
        },
        terminate: {
            enumerable: true
        },
        desiredSize: {
            enumerable: true
        }
    });
    if (typeof SymbolPolyfill.toStringTag === 'symbol') Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'TransformStreamDefaultController',
        configurable: true
    });
    // Transform Stream Default Controller Abstract Operations
    function IsTransformStreamDefaultController(x) {
        if (!typeIsObject(x)) return false;
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) return false;
        return x instanceof TransformStreamDefaultController;
    }
    function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
        controller._controlledTransformStream = stream;
        stream._transformStreamController = controller;
        controller._transformAlgorithm = transformAlgorithm;
        controller._flushAlgorithm = flushAlgorithm;
    }
    function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
        const controller = Object.create(TransformStreamDefaultController.prototype);
        let transformAlgorithm = (chunk)=>{
            try {
                TransformStreamDefaultControllerEnqueue(controller, chunk);
                return promiseResolvedWith(undefined);
            } catch (transformResultE) {
                return promiseRejectedWith(transformResultE);
            }
        };
        let flushAlgorithm = ()=>promiseResolvedWith(undefined)
        ;
        if (transformer.transform !== undefined) transformAlgorithm = (chunk)=>transformer.transform(chunk, controller)
        ;
        if (transformer.flush !== undefined) flushAlgorithm = ()=>transformer.flush(controller)
        ;
        SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
    }
    function TransformStreamDefaultControllerClearAlgorithms(controller) {
        controller._transformAlgorithm = undefined;
        controller._flushAlgorithm = undefined;
    }
    function TransformStreamDefaultControllerEnqueue(controller, chunk) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) throw new TypeError('Readable side is not in a state that permits enqueue');
        // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
        // accept TransformStreamDefaultControllerEnqueue() calls.
        try {
            ReadableStreamDefaultControllerEnqueue(readableController, chunk);
        } catch (e) {
            // This happens when readableStrategy.size() throws.
            TransformStreamErrorWritableAndUnblockWrite(stream, e);
            throw stream._readable._storedError;
        }
        const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
        if (backpressure !== stream._backpressure) TransformStreamSetBackpressure(stream, true);
    }
    function TransformStreamDefaultControllerError(controller, e) {
        TransformStreamError(controller._controlledTransformStream, e);
    }
    function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
        const transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith(transformPromise, undefined, (r)=>{
            TransformStreamError(controller._controlledTransformStream, r);
            throw r;
        });
    }
    function TransformStreamDefaultControllerTerminate(controller) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose(readableController);
        const error = new TypeError('TransformStream terminated');
        TransformStreamErrorWritableAndUnblockWrite(stream, error);
    }
    // TransformStreamDefaultSink Algorithms
    function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
        const controller = stream._transformStreamController;
        if (stream._backpressure) {
            const backpressureChangePromise = stream._backpressureChangePromise;
            return transformPromiseWith(backpressureChangePromise, ()=>{
                const writable = stream._writable;
                const state = writable._state;
                if (state === 'erroring') throw writable._storedError;
                return TransformStreamDefaultControllerPerformTransform(controller, chunk);
            });
        }
        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
    }
    function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
        // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
        // errored.
        TransformStreamError(stream, reason);
        return promiseResolvedWith(undefined);
    }
    function TransformStreamDefaultSinkCloseAlgorithm(stream) {
        // stream._readable cannot change after construction, so caching it across a call to user code is safe.
        const readable = stream._readable;
        const controller = stream._transformStreamController;
        const flushPromise = controller._flushAlgorithm();
        TransformStreamDefaultControllerClearAlgorithms(controller);
        // Return a promise that is fulfilled with undefined on success.
        return transformPromiseWith(flushPromise, ()=>{
            if (readable._state === 'errored') throw readable._storedError;
            ReadableStreamDefaultControllerClose(readable._readableStreamController);
        }, (r)=>{
            TransformStreamError(stream, r);
            throw readable._storedError;
        });
    }
    // TransformStreamDefaultSource Algorithms
    function TransformStreamDefaultSourcePullAlgorithm(stream) {
        // Invariant. Enforced by the promises returned by start() and pull().
        TransformStreamSetBackpressure(stream, false);
        // Prevent the next pull() call until there is backpressure.
        return stream._backpressureChangePromise;
    }
    // Helper functions for the TransformStreamDefaultController.
    function defaultControllerBrandCheckException(name) {
        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
    }
    // Helper functions for the TransformStream.
    function streamBrandCheckException(name) {
        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
    }
    exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
    exports.CountQueuingStrategy = CountQueuingStrategy;
    exports.ReadableByteStreamController = ReadableByteStreamController;
    exports.ReadableStream = ReadableStream;
    exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
    exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
    exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
    exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
    exports.TransformStream = TransformStream;
    exports.TransformStreamDefaultController = TransformStreamDefaultController;
    exports.WritableStream = WritableStream;
    exports.WritableStreamDefaultController = WritableStreamDefaultController;
    exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}],"6nSGe":[function(require,module,exports) {
module.exports = Promise.all([
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("eVYu3")),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("h82a2")),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("1cIxw")),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("glgxt"))
]).then(()=>module.bundle.root('71ZtM')
);

},{"./helpers/browser/js-loader":"7UeDE","./helpers/bundle-url":"fTnf8","./helpers/bundle-manifest":"iCS4n"}],"7UeDE":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script1 = document.createElement('script');
        script1.async = true;
        script1.type = 'text/javascript';
        script1.charset = 'utf-8';
        script1.src = bundle;
        script1.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script1.onerror = script1.onload = null;
            script1.remove();
            reject(error);
        };
        script1.onload = function() {
            script1.onerror = script1.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script1);
    });
});

},{"../cacheLoader":"k3r1i"}],"k3r1i":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"fTnf8":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"94TJO":[function(require,module,exports) {
module.exports = Promise.all([
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("eVYu3")),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("h82a2")),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("1cIxw"))
]).then(()=>module.bundle.root('lMaKx')
);

},{"./helpers/browser/js-loader":"7UeDE","./helpers/bundle-url":"fTnf8","./helpers/bundle-manifest":"iCS4n"}],"gUoPl":[function(require,module,exports) {
module.exports = Promise.all([
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("eVYu3")),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("dh83w"))
]).then(()=>module.bundle.root('gPBnc')
);

},{"./helpers/browser/js-loader":"7UeDE","./helpers/bundle-url":"fTnf8","./helpers/bundle-manifest":"iCS4n"}],"2Jk6D":[function(require,module,exports) {
module.exports = Promise.all([
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("eVYu3")),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('289Eq') + require('./helpers/bundle-manifest').resolve("h82a2"))
]).then(()=>module.bundle.root('7FarF')
);

},{"./helpers/browser/js-loader":"7UeDE","./helpers/bundle-url":"fTnf8","./helpers/bundle-manifest":"iCS4n"}],"cgtR8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AssetImpl", ()=>AssetImpl
);
const ASSETS_EP = 'escrow/assets';
const endpointForId = (id)=>`${ASSETS_EP}/${id}`
;
var AssetImpl;
(function(AssetImpl1) {
    async function search(client, params) {
        return client.search(ASSETS_EP, params);
    }
    AssetImpl1.search = search;
    async function get(client, assetId) {
        return client.get(endpointForId(assetId));
    }
    AssetImpl1.get = get;
})(AssetImpl || (AssetImpl = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"jDodY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClientType", ()=>ClientType
);
parcelHelpers.export(exports, "FrontendClient", ()=>FrontendClient
);
parcelHelpers.export(exports, "BackendClient", ()=>BackendClient
);
parcelHelpers.export(exports, "ServiceClient", ()=>ServiceClient
);
parcelHelpers.export(exports, "ClientImpl", ()=>ClientImpl
);
var _appJs = require("./app.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseClient_client;
var ClientType;
(function(ClientType1) {
    ClientType1["Frontend"] = "frontend";
    ClientType1["Backend"] = "backend";
    ClientType1["Service"] = "service";
})(ClientType || (ClientType = {}));
class BaseClient {
    constructor(client, pod){
        _BaseClient_client.set(this, void 0);
        __classPrivateFieldSet(this, _BaseClient_client, client, "f");
        this.id = pod.id;
        this.createdAt = new Date(pod.createdAt);
        this.creator = pod.creator;
        this.appId = pod.appId;
        this.name = pod.name;
        this.type = pod.type;
    }
    async delete() {
        return __classPrivateFieldGet(this, _BaseClient_client, "f").delete(endpointForId(this.appId, this.id));
    }
    isFrontend() {
        return this.type === ClientType.Frontend;
    }
    isBackend() {
        return this.type === ClientType.Backend;
    }
    isService() {
        return this.type === ClientType.Service;
    }
}
_BaseClient_client = new WeakMap();
function makeClient(client, pod) {
    if (pod.type === ClientType.Frontend) return new FrontendClient(client, pod);
    if (pod.type === ClientType.Backend) return new BackendClient(client, pod);
    if (pod.type === ClientType.Service) return new ServiceClient(client, pod);
    throw new Error(`unrecognized client type`);
}
class FrontendClient extends BaseClient {
    constructor(client, pod){
        super(client, pod);
        this.type = ClientType.Frontend;
        this.redirectUris = pod.redirectUris;
        this.postLogoutRedirectUris = pod.postLogoutRedirectUris;
    }
}
class BackendClient extends BaseClient {
    constructor(client, pod){
        super(client, pod);
        this.type = ClientType.Backend;
        this.redirectUris = pod.redirectUris;
        this.postLogoutRedirectUris = pod.postLogoutRedirectUris;
        this.publicKeys = pod.publicKeys;
    }
}
class ServiceClient extends BaseClient {
    constructor(client, pod){
        super(client, pod);
        this.type = ClientType.Service;
        this.publicKeys = pod.publicKeys;
    }
}
var ClientImpl;
(function(ClientImpl1) {
    async function create(client, appId, params) {
        const podClient = await client.create(endpointForCollection(appId), params);
        return makeClient(client, podClient);
    }
    ClientImpl1.create = create;
    async function get(client, appId, clientId) {
        const podClient = await client.get(endpointForId(appId, clientId));
        return makeClient(client, podClient);
    }
    ClientImpl1.get = get;
    async function list(client, appId, filter) {
        const podPage = await client.get(endpointForCollection(appId), filter);
        const results = podPage.results.map((podClient)=>makeClient(client, podClient)
        );
        return {
            results,
            nextPageToken: podPage.nextPageToken
        };
    }
    ClientImpl1.list = list;
    async function update(client, appId, clientId, params) {
        const podClient = await client.update(endpointForId(appId, clientId), params);
        return makeClient(client, podClient);
    }
    ClientImpl1.update = update;
    async function delete_(client, appId, clientId) {
        return client.delete(endpointForId(appId, clientId));
    }
    ClientImpl1.delete_ = delete_;
})(ClientImpl || (ClientImpl = {}));
const endpointForCollection = (appId)=>`${_appJs.endpointForApp(appId)}/clients`
;
const endpointForId = (appId, clientId)=>`${endpointForCollection(appId)}/${clientId}`
;

},{"./app.js":"fr7eU","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"8xVS3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "JobPhase", ()=>JobPhase
);
/**
 * An existing, already-submitted job. The job might also be already completed.
 */ parcelHelpers.export(exports, "Job", ()=>Job
);
/**
 * An existing, already-submitted job. The job might also be already completed.
 */ parcelHelpers.export(exports, "JobStatusReport", ()=>JobStatusReport
);
parcelHelpers.export(exports, "ComputeImpl", ()=>ComputeImpl
);
var _modelJs = require("./model.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Job_client, _JobStatusReport_client;
var JobPhase;
(function(JobPhase1) {
    JobPhase1["PENDING"] = "Pending";
    JobPhase1["RUNNING"] = "Running";
    JobPhase1["SUCCEEDED"] = "Succeeded";
    JobPhase1["FAILED"] = "Failed";
})(JobPhase || (JobPhase = {}));
class Job {
    constructor(client, pod){
        _Job_client.set(this, void 0);
        __classPrivateFieldSet(this, _Job_client, client, "f");
        this.id = pod.id;
        this.createdAt = new Date(pod.createdAt);
        this.spec = pod.spec;
        this.io = pod.io;
        this.status = pod.status;
    }
}
_Job_client = new WeakMap();
class JobStatusReport {
    constructor(client, pod){
        _JobStatusReport_client.set(this, void 0);
        __classPrivateFieldSet(this, _JobStatusReport_client, client, "f");
        this.id = pod.id;
        this.status = pod.status;
    }
}
_JobStatusReport_client = new WeakMap();
const COMPUTE_EP = 'compute';
const JOBS_EP = `${COMPUTE_EP}/jobs`;
const endpointForId = (id)=>`${JOBS_EP}/${id}`
;
const statusEndpointForId = (id)=>`${JOBS_EP}/${id}/status`
;
const revokeApiEndpointForId = (id)=>`${JOBS_EP}/${id}/revoke_gateway_access`
;
var ComputeImpl;
(function(ComputeImpl1) {
    async function submitJob(client, spec) {
        const pod = await client.create(JOBS_EP, spec);
        return new Job(client, pod);
    }
    ComputeImpl1.submitJob = submitJob;
    async function listJobs(client, filter = {}) {
        const podPage = await client.get(JOBS_EP, filter);
        return _modelJs.makePage(Job, podPage, client);
    }
    ComputeImpl1.listJobs = listJobs;
    async function getJob(client, jobId) {
        const pod = await client.get(endpointForId(jobId));
        return new Job(client, pod);
    }
    ComputeImpl1.getJob = getJob;
    async function getJobStatus(client, jobId) {
        const pod = await client.get(statusEndpointForId(jobId));
        return new JobStatusReport(client, pod);
    }
    ComputeImpl1.getJobStatus = getJobStatus;
    async function terminateJob(client, jobId) {
        return client.delete(endpointForId(jobId));
    }
    ComputeImpl1.terminateJob = terminateJob;
    async function revokeGatewayAccess(client, jobId) {
        return client.post(revokeApiEndpointForId(jobId), undefined);
    }
    ComputeImpl1.revokeGatewayAccess = revokeGatewayAccess;
})(ComputeImpl || (ComputeImpl = {}));

},{"./model.js":"lMocE","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"iefjf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Database", ()=>Database
);
parcelHelpers.export(exports, "DatabaseImpl", ()=>DatabaseImpl
);
var _modelJs = require("./model.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Database_client;
class Database {
    constructor(client, pod){
        _Database_client.set(this, void 0);
        __classPrivateFieldSet(this, _Database_client, client, "f");
        this.id = pod.id;
        this.createdAt = new Date(pod.createdAt);
        this.creator = pod.creator;
        this.owner = pod.owner;
        this.name = pod.name;
    }
    async update(params) {
        Object.assign(this, await DatabaseImpl.update(__classPrivateFieldGet(this, _Database_client, "f"), this.id, params));
        return this;
    }
    async delete() {
        return DatabaseImpl.delete_(__classPrivateFieldGet(this, _Database_client, "f"), this.id);
    }
}
_Database_client = new WeakMap();
var DatabaseImpl;
(function(DatabaseImpl1) {
    async function get(client, id) {
        const podDatabase = await client.get(endpointForId(id));
        return new Database(client, podDatabase);
    }
    DatabaseImpl1.get = get;
    async function create(client, params) {
        const podDatabase = await client.create(DATABASES_EP, params);
        return new Database(client, podDatabase);
    }
    DatabaseImpl1.create = create;
    async function list(client, filter) {
        const podPage = await client.get(DATABASES_EP, filter);
        return _modelJs.makePage(Database, podPage, client);
    }
    DatabaseImpl1.list = list;
    async function query(client, id, params) {
        return client.post(endpointForId(id), params);
    }
    DatabaseImpl1.query = query;
    async function insert(client, id, params) {
        return client.post(endpointForId(id) + '/insert', params);
    }
    DatabaseImpl1.insert = insert;
    async function update(client, id, params) {
        const PODDatabase = await client.update(endpointForId(id), params);
        return new Database(client, PODDatabase);
    }
    DatabaseImpl1.update = update;
    async function delete_(client, id) {
        return client.delete(endpointForId(id));
    }
    DatabaseImpl1.delete_ = delete_;
})(DatabaseImpl || (DatabaseImpl = {}));
const DATABASES_EP = 'databases';
const endpointForId = (id)=>`${DATABASES_EP}/${id}`
;

},{"./model.js":"lMocE","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"cDpvr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Document", ()=>Document
);
parcelHelpers.export(exports, "DocumentImpl", ()=>DocumentImpl
);
/**
 * An `Upload` is the result of calling `parcel.uploadDocument`.
 *
 * During upload, emits `progress` events, each with a `ProgressEvent` as its argument.
 *
 * When the document has been uploaded, the `finish` event is emitted with the `Document`
 * reference as its argument.
 */ parcelHelpers.export(exports, "Upload", ()=>Upload
);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _formData = require("form-data");
var _formDataDefault = parcelHelpers.interopDefault(_formData);
var _modelJs = require("./model.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Document_client;
class Document {
    constructor(client, pod){
        _Document_client.set(this, void 0);
        __classPrivateFieldSet(this, _Document_client, client, "f");
        this.id = pod.id;
        this.createdAt = new Date(pod.createdAt);
        this.creator = pod.creator;
        this.owner = pod.owner;
        this.size = pod.size;
        this.details = pod.details;
        this.originatingJob = pod.originatingJob;
    }
    /**
     * Downloads the private data referenced by the document if the authorized identity
     * has been granted access.
     * @returns the decrypted data as a pipeable stream and AsyncIterable
     */ download() {
        return DocumentImpl.download(__classPrivateFieldGet(this, _Document_client, "f"), this.id);
    }
    async update(params) {
        Object.assign(this, await DocumentImpl.update(__classPrivateFieldGet(this, _Document_client, "f"), this.id, params));
        return this;
    }
    async delete() {
        return DocumentImpl.delete_(__classPrivateFieldGet(this, _Document_client, "f"), this.id);
    }
    async history(filter) {
        return DocumentImpl.history(__classPrivateFieldGet(this, _Document_client, "f"), this.id, filter);
    }
}
_Document_client = new WeakMap();
var DocumentImpl;
(function(DocumentImpl1) {
    async function get(client, id) {
        const podDocument = await client.get(endpointForId(id));
        return new Document(client, podDocument);
    }
    DocumentImpl1.get = get;
    async function search(client, params) {
        const podPage = await client.search(DOCUMENTS_EP, params);
        return _modelJs.makePage(Document, podPage, client);
    }
    DocumentImpl1.search = search;
    function upload(client, data, params) {
        return new Upload(client, data, params !== null && params !== void 0 ? params : undefined);
    }
    DocumentImpl1.upload = upload;
    function download(client, id) {
        return client.download(id);
    }
    DocumentImpl1.download = download;
    async function history(client, id, filter) {
        const podPage = await client.get(endpointForId(id) + '/history', filter);
        const results = podPage.results.map((podAccessEvent)=>({
                createdAt: new Date(podAccessEvent.createdAt),
                document: podAccessEvent.document,
                accessor: podAccessEvent.accessor
            })
        );
        return {
            results,
            nextPageToken: podPage.nextPageToken
        };
    }
    DocumentImpl1.history = history;
    async function update(client, id, params) {
        const podDocument = await client.update(endpointForId(id), params);
        return new Document(client, podDocument);
    }
    DocumentImpl1.update = update;
    async function delete_(client, id) {
        return client.delete(endpointForId(id));
    }
    DocumentImpl1.delete_ = delete_;
})(DocumentImpl || (DocumentImpl = {}));
const DOCUMENTS_EP = 'documents';
const endpointForId = (id)=>`${DOCUMENTS_EP}/${id}`
;
class Upload extends _eventemitter3Default.default {
    constructor(client, data1, sdkParams){
        var _a, _b;
        super();
        this.abortController = new AbortController();
        const form = new _formDataDefault.default();
        const appendPart = (name, data, contentType, length)=>{
            if (typeof form.getBuffer === 'function' /* node polyfill */ ) form.append(name, data, {
                contentType,
                knownLength: length
            });
            else {
                if (typeof data === 'string' || data instanceof Uint8Array) data = new Blob([
                    data
                ], {
                    type: contentType
                });
                else if ('pipe' in data) throw new TypeError('uploaded data must of type `Storable`');
                form.append(name, data);
            }
        };
        if (sdkParams) {
            const { toApp , ...parcelParams } = sdkParams;
            if (toApp) parcelParams.details = {
                ...parcelParams.details,
                tags: [
                    ...(_b = (_a = parcelParams === null || parcelParams === void 0 ? void 0 : parcelParams.details) === null || _a === void 0 ? void 0 : _a.tags) !== null && _b !== void 0 ? _b : [],
                    `to-app-${toApp}`
                ]
            };
            const paramsString = JSON.stringify(parcelParams);
            appendPart('metadata', paramsString, 'application/json', paramsString.length);
        } else appendPart('metadata', '', 'text/plain', 0); // The metadata part is required.
        appendPart('data', data1, 'application/octet-stream', data1.length);
        client.upload(form, {
            headers: 'getHeaders' in form ? /* node */ form.getHeaders() : undefined,
            signal: this.abortController.signal,
            timeout: false
        })// eslint-disable-next-line promise/prefer-await-to-then
        .then((podDocument)=>{
            this.emit('finish', new Document(client, podDocument));
        })// eslint-disable-next-line promise/prefer-await-to-then
        .catch((error)=>{
            this.emit('error', error);
        });
    }
    /** Aborts the upload. Emits an `abort` event and sets the `aborted` flag. */ abort() {
        this.abortController.abort();
        this.emit('abort');
    }
    get aborted() {
        return this.abortController.signal.aborted;
    }
    /**
     * @returns a `Promise` that resolves when the upload stream has finished.
     */ get finished() {
        return new Promise((resolve, reject)=>{
            this.on('finish', resolve);
            this.on('error', reject);
        });
    }
}

},{"eventemitter3":"gYxXD","form-data":"7f6Qb","./model.js":"lMocE","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"gYxXD":[function(require,module,exports) {
'use strict';
var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
module.exports = EventEmitter;

},{}],"3Ylft":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A metering report of your API usage.
 */ parcelHelpers.export(exports, "MeteringReport", ()=>MeteringReport
);
/**
 * Your monthly quota for API usage.
 */ parcelHelpers.export(exports, "MeteringQuota", ()=>MeteringQuota
);
parcelHelpers.export(exports, "MeterImpl", ()=>MeterImpl
);
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _MeteringReport_client, _MeteringQuota_client;
class MeteringReport {
    constructor(client, pod){
        _MeteringReport_client.set(this, void 0);
        __classPrivateFieldSet(this, _MeteringReport_client, client, "f");
        this.createCount = pod.createCount;
        this.readCount = pod.readCount;
        this.writeCount = pod.writeCount;
        this.deleteCount = pod.deleteCount;
        this.uploadCount = pod.uploadCount;
        this.downloadCount = pod.downloadCount;
        this.uploadSizeBytes = pod.uploadSizeBytes;
        this.downloadSizeBytes = pod.downloadSizeBytes;
        this.computeMsec = pod.computeMsec;
    }
}
_MeteringReport_client = new WeakMap();
class MeteringQuota {
    constructor(client, pod){
        _MeteringQuota_client.set(this, void 0);
        __classPrivateFieldSet(this, _MeteringQuota_client, client, "f");
        this.apiCallsLimit = pod.apiCallsLimit;
        this.accessedBytesLimit = pod.accessedBytesLimit;
        this.computeMsecLimit = pod.computeMsecLimit;
    }
}
_MeteringQuota_client = new WeakMap();
const USAGE_EP = 'usage';
const QUOTA_EP = 'quota';
var MeterImpl;
(function(MeterImpl1) {
    async function getUsage(client, filter) {
        const pod = await client.get(USAGE_EP, filter);
        return new MeteringReport(client, pod);
    }
    MeterImpl1.getUsage = getUsage;
    async function getQuota(client) {
        const pod = await client.get(QUOTA_EP);
        return new MeteringQuota(client, pod);
    }
    MeterImpl1.getQuota = getQuota;
    async function setQuota(client, params) {
        const pod = await client.put(QUOTA_EP, params);
        return new MeteringQuota(client, pod);
    }
    MeterImpl1.setQuota = setQuota;
})(MeterImpl || (MeterImpl = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}],"2Emad":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Token", ()=>Token
);
parcelHelpers.export(exports, "TokenImpl", ()=>TokenImpl
);
var _assetJs = require("./asset.js");
var _modelJs = require("./model.js");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Token_client;
const TOKENS_EP = 'tokens';
const RECEIPTS_EP = 'receipts';
const endpointForId = (id)=>`${TOKENS_EP}/${id}`
;
const endpointForAssets = (token)=>`${endpointForId(token)}/assets`
;
const endpointForAsset = (token, asset)=>`${endpointForAssets(token)}/${asset}`
;
const endpointForTransfers = (id)=>`${endpointForId(id)}/transfers`
;
const endpointForTransfer = (token, receipt)=>`${endpointForTransfers(token)}/${receipt}`
;
class Token {
    constructor(client, pod){
        _Token_client.set(this, void 0);
        __classPrivateFieldSet(this, _Token_client, client, "f");
        this.id = pod.id;
        this.creator = pod.creator;
        this.createdAt = new Date(pod.createdAt);
        this.name = pod.name;
        this.grant = pod.grant;
        this.consumesAssets = pod.consumesAssets;
        this.transferability = pod.transferability;
    }
    async delete() {
        return TokenImpl.delete_(__classPrivateFieldGet(this, _Token_client, "f"), this.id);
    }
    async searchAssets(filter) {
        return _assetJs.AssetImpl.search(__classPrivateFieldGet(this, _Token_client, "f"), {
            ...filter,
            token: this.id
        });
    }
    /**
     * Adds an asset to this token.
     * The asset must be held by the escrow identity and not have been consumed by another token.
     */ async addAsset(asset) {
        return TokenImpl.addAsset(__classPrivateFieldGet(this, _Token_client, "f"), this.id, asset);
    }
    /**
     * Removes an asset from this token. You must hold the entire supply of the token to do this.
     * If this token previously consumed the asset, it will again become available to tokenize.
     */ async removeAsset(asset) {
        return TokenImpl.removeAsset(__classPrivateFieldGet(this, _Token_client, "f"), this.id, asset);
    }
    async transfer(amount, recipient) {
        return TokenImpl.transfer(__classPrivateFieldGet(this, _Token_client, "f"), this.id, amount, recipient);
    }
    async listTransfers(filter) {
        return TokenImpl.listTransferReceipts(__classPrivateFieldGet(this, _Token_client, "f"), this.id, filter);
    }
}
_Token_client = new WeakMap();
var TokenImpl;
(function(TokenImpl1) {
    async function mint(client, params) {
        const podToken = await client.create(TOKENS_EP, params);
        return new Token(client, podToken);
    }
    TokenImpl1.mint = mint;
    async function get(client, id) {
        const podToken = await client.get(endpointForId(id));
        return new Token(client, podToken);
    }
    TokenImpl1.get = get;
    async function delete_(client, id) {
        return client.delete(endpointForId(id));
    }
    TokenImpl1.delete_ = delete_;
    async function search(client, params) {
        const podPage = await client.search(TOKENS_EP, params);
        return _modelJs.makePage(Token, podPage, client);
    }
    TokenImpl1.search = search;
    async function addAsset(client, token, asset) {
        return client.post(endpointForAsset(token, asset), undefined);
    }
    TokenImpl1.addAsset = addAsset;
    async function removeAsset(client, token, asset) {
        await client.delete(endpointForAsset(token, asset));
    }
    TokenImpl1.removeAsset = removeAsset;
    async function transfer(client, token, amount, recipient) {
        if (amount % 1 !== 0 || amount < 0) throw new Error(`invalid token amount ${amount}. must be a positive integer`);
        const podReceipt = await client.post(endpointForTransfers(token), {
            recipient,
            amount
        });
        return {
            ...podReceipt,
            completedAt: new Date(podReceipt.completedAt)
        };
    }
    TokenImpl1.transfer = transfer;
    async function listTransferReceipts(client, tokenId, filter) {
        const podPage = await client.get(endpointForTransfers(tokenId), filter);
        return {
            ...podPage,
            results: podPage.results.map((podReceipt)=>({
                    ...podReceipt,
                    completedAt: new Date(podReceipt.completedAt)
                })
            )
        };
    }
    TokenImpl1.listTransferReceipts = listTransferReceipts;
    async function getTransferReceipt(client, receipt, token) {
        const url = token ? endpointForTransfer(token, receipt) : `${RECEIPTS_EP}/${receipt}`;
        const podReceipt = await client.get(url);
        return {
            ...podReceipt,
            completedAt: new Date(podReceipt.completedAt)
        };
    }
    TokenImpl1.getTransferReceipt = getTransferReceipt;
})(TokenImpl || (TokenImpl = {}));

},{"./asset.js":"cgtR8","./model.js":"lMocE","@parcel/transformer-js/src/esmodule-helpers.js":"hWqVN"}]},["kmYsz","5KCUC"], "5KCUC", "parcelRequire94c2")

