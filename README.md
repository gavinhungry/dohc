dohc
====
Dead simple DNS-over-HTTPS (DoH) client

Installation
------------
```sh
npm -g install dohc
```

Usage
-----
```js
const dohc = require('dohc');
```

```js
let ip = await dohc('github.com');
```

### DoH provider
To perform the request against a different DoH provider (default is
[Cloudflare](https://developers.cloudflare.com/1.1.1.1/dns-over-https), as
specified in `config.json` as `DEFAULT_DOH_PROVIDER`):

```js
let ip = await dohc('github.com', {
  provider: 'dns.google/resolve'
});
```

### Record types
To request a different DNS record type (default is `A`, specified in
`config.json` as `DEFAULT_RECORD_TYPE`):

```js
let ip = await dohc('github.com', {
  type: 'AAAA'
});
```

### Raw JSON response
To return the raw JSON response from the DoH provider:

```js
let json = await dohc('github.com', {
  raw: true
});
```

Command line
------------
```sh
dohc github.com [--provider PROVIDER] [--type TYPE] [--raw]
```

License
-------
This software is released under the terms of the **MIT license**. See `LICENSE`.
