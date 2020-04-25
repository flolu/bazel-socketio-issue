# SocketIO Issue With Bazel + Angular

The `ts_devserver` doesn't seem to work with `socket.io-client` out of the box

## Setup

```
yarn install
```

## What Works

```
yarn prod
```

SocketIO works perfectly fine, server runs on http://localhost:8080

## The Issue

```
yarn dev
```

Results in this error in the Browser console (http://localhost:4200).

```
Uncaught TypeError: XMLHttpRequest is not a constructor
    at ts_scripts.js?v=1587802098203:16776
    at Object.23.../transport (ts_scripts.js?v=1587802098203:16780)
    at o (ts_scripts.js?v=1587802098203:11783)
    at ts_scripts.js?v=1587802098203:11783
    at Object.22../polling (ts_scripts.js?v=1587802098203:16326)
    at o (ts_scripts.js?v=1587802098203:11783)
    at ts_scripts.js?v=1587802098203:11783
    at Object.20../polling-jsonp (ts_scripts.js?v=1587802098203:16035)
    at o (ts_scripts.js?v=1587802098203:11783)
    at ts_scripts.js?v=1587802098203:11783
```

It is caused by [xmlhttprequest-ssl](https://www.npmjs.com/package/xmlhttprequest-ssl) which is a dependency of [engine.io-client](https://github.com/socketio/engine.io-client/blob/master/package.json) and it is needed by [ngx-socket-io](https://www.npmjs.com/package/ngx-socket-io)
