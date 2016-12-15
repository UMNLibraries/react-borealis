require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBorealis = require('react-borealis');

var _reactBorealis2 = _interopRequireDefault(_reactBorealis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  "focus": true,
  "type": "image",
  "thumbnail": "https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg",
  "items": [{
    "type": "image",
    "label": "Image",
    "focus": true,
    "include_controls": true,
    "sequenceMode": true,
    "showReferenceStrip": true,
    "defaultZoomLevel": 0,
    "tileSources": ["https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json", "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"]
  }, {
    "type": "transcript",
    "label": "Transcript",
    "texts": ["First Image Item Transcript", "Second Image Item  Transcript"],
    "focus": false
  }],
  tocs: ["MLK", "A Statue"]
}, {
  "focus": true,
  "type": "pdf",
  "height": 800,
  "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0",
  "items": [{
    "type": "pdf",
    "label": "PDF",
    "focus": true,
    "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf"
  }, {
    "type": "transcript",
    "label": "Transcript",
    "texts": ["PDF Transcript Here"],
    "focus": false
  }]
}, {
  "focus": false,
  "type": "audio",
  "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885",
  "items": [{
    "type": "audio",
    "label": "Audio",
    "focus": true,
    "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919"
  }, {
    "type": "transcript",
    "label": "Transcript",
    "texts": ["Audio Transcript Here"],
    "focus": false
  }]
}, {
  "focus": false,
  "type": "video",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0",
  "items": [{
    "type": "video",
    "label": "Video",
    "height": 500,
    "width": 500,
    "focus": true,
    "src": "http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470"
  }, {
    "type": "transcript",
    "label": "Transcript",
    "texts": ["Video Transcript Here"],
    "focus": false
  }]
}];

_reactDom2.default.render(_react2.default.createElement(_reactBorealis2.default, { items: items }), document.getElementById('app'));

},{"react":undefined,"react-borealis":undefined,"react-dom":undefined}]},{},[1]);
