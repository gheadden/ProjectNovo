/* Copyright 2014 PayPal */
"use strict";

var sdkVersion = exports.sdkVersion = '0.10.0';
var userAgent = exports.userAgent = 'PayPalSDK/rest-sdk-nodejs ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + ')';

var default_options = exports.default_options = {
    'mode': 'sandbox',
    'schema': 'https',
    'host': 'api.sandbox.paypal.com',
    'port': '',
    'openid_connect_schema': 'https',
    'openid_connect_host': 'api.sandbox.paypal.com',
    'openid_connect_port': '',
    'authorize_url': 'https://www.sandbox.paypal.com/webapps/auth/protocol/openidconnect/v1/authorize',
    'logout_url': 'https://www.sandbox.paypal.com/webapps/auth/protocol/openidconnect/v1/endsession',
    'headers': {}
};
