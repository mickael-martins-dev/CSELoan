"use strict";
exports.__esModule = true;
exports.ItemStore = void 0;
var ItemStore = /** @class */ (function () {
    function ItemStore(deepstreamClient) {
        var _this = this;
        this.items = new Array();
        deepstreamClient.login(function () {
            deepstreamClient.record.getList('items').whenReady(function (itemList) {
                itemList.getEntries().forEach(function (entry) {
                    var recordName = "item/" + entry;
                    deepstreamClient.record.getRecord(recordName).whenReady(function (record) {
                        var item = record.get();
                        var itemExt = {
                            item: item,
                            record: record
                        };
                        _this.items.push(itemExt);
                        record.subscribe(function (_record) {
                            console.log("Need to update the new element in view");
                        });
                        console.log(item);
                    });
                });
            });
        });
        var itemExt = {
            item: this.generateDummyData()
        };
        this.items.push(itemExt);
    }
    ItemStore.prototype.getItems = function () {
        return this.items;
    };
    ItemStore.prototype.generateDummyData = function () {
        var loans = [];
        return {
            index: 0,
            name: "Switch  1",
            description: "Console de jeux Nintendo Switch",
            category: "Console",
            type: 'GAMES',
            loans: loans
        };
    };
    return ItemStore;
}());
exports.ItemStore = ItemStore;
