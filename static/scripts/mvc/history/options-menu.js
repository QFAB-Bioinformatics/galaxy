define("mvc/history/options-menu",["exports","mvc/ui/popup-menu","mvc/history/copy-dialog","mvc/base-mvc","utils/localization","mvc/webhooks"],function(e,t,a,r,l,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,a){return _.clone(y).filter(function(r){return!(e&&!r.anon)&&(!(!t&&r.purge)&&(r.href&&(r.href=a+r.href,r.target=r.target||"galaxy_main"),r.confirm&&(r.func=function(){confirm(r.confirm)&&(galaxy_main.location=r.href)}),!0))})}Object.defineProperty(e,"__esModule",{value:!0});var i=n(t),s=n(a),d=(n(r),n(l)),f=n(o),y=[{html:(0,d.default)("History Lists"),header:!0},{html:(0,d.default)("Saved Histories"),href:"histories/list",target:"_top"},{html:(0,d.default)("Histories Shared with Me"),href:"histories/list_shared",target:"_top"},{html:(0,d.default)("Current History"),header:!0,anon:!0},{html:(0,d.default)("Create New"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.createNewHistory()}},{html:(0,d.default)("Copy History"),func:function(){(0,s.default)(Galaxy.currHistoryPanel.model).done(function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,d.default)("Share or Publish"),href:"history/sharing"},{html:(0,d.default)("Show Structure"),href:"history/display_structured",anon:!0},{html:(0,d.default)("Extract Workflow"),href:"workflow/build_from_current_history"},{html:(0,d.default)("Delete"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm((0,d.default)("Really delete the current history?"))&&Galaxy.currHistoryPanel.model._delete().done(function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,d.default)("Delete Permanently"),purge:!0,anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm((0,d.default)("Really delete the current history permanently? This cannot be undone."))&&Galaxy.currHistoryPanel.model.purge().done(function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,d.default)("Dataset Actions"),header:!0,anon:!0},{html:(0,d.default)("Copy Datasets"),href:"dataset/copy_datasets"},{html:(0,d.default)("Dataset Security"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.router&&Galaxy.router.push("/histories/permissions?id="+Galaxy.currHistoryPanel.model.id)}},{html:(0,d.default)("Resume Paused Jobs"),href:"history/resume_paused_jobs?current=True",anon:!0},{html:(0,d.default)("Collapse Expanded Datasets"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.collapseAll()}},{html:(0,d.default)("Unhide Hidden Datasets"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm((0,d.default)("Really unhide all hidden datasets?"))&&$.post(Galaxy.root+"history/adjust_hidden",{user_action:"unhide"},function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,d.default)("Delete Hidden Datasets"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm((0,d.default)("Really delete all hidden datasets?"))&&$.post(Galaxy.root+"history/adjust_hidden",{user_action:"delete"},function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,d.default)("Purge Deleted Datasets"),confirm:(0,d.default)("Really delete all deleted datasets permanently? This cannot be undone."),href:"history/purge_deleted_datasets",purge:!0,anon:!0},{html:(0,d.default)("Downloads"),header:!0},{html:(0,d.default)("Export Tool Citations"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.router&&Galaxy.router.push("/histories/citations?id="+Galaxy.currHistoryPanel.model.id)}},{html:(0,d.default)("Export History to File"),href:"history/export_archive?preview=True",anon:!0},{html:(0,d.default)("Other Actions"),header:!0},{html:(0,d.default)("Import from File"),href:"histories/import",target:"_top"}];f.default.load({type:"history-menu",async:!1,callback:function(e){var t=[];e.each(function(e){var a=e.toJSON();a.activate&&t.push({html:(0,d.default)(a.config.title),anon:!0})}),t.length>0&&(t.unshift({html:(0,d.default)("Webhooks"),header:!0}),$.merge(y,t))}});e.default=function(e,t){var a=u(void 0===(t=t||{}).anonymous||t.anonymous,t.purgeAllowed||!1,Galaxy.root);return new i.default(e,a)}});
//# sourceMappingURL=../../../maps/mvc/history/options-menu.js.map