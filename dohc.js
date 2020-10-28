/*
 * dohc - Dead simple DNS-over-HTTPS (DoH) client
 * https://github.com/gavinhungry/dohc
 */

const CONFIG = require('./config');
const fetch = require('node-fetch');

/**
 * @param {String} domainName
 * @param {Object} [opts]
 * @param {String} [opts.provider] - DoH provider
 * @param {String} [opts.type] - record type
 * @param {Boolean} [opts.raw] - if true, return complete JSON response
 * @return {Promise}
 */
const dohc = async (domainName, {
  provider = CONFIG.DEFAULT_DOH_PROVIDER,
  type = CONFIG.DEFAULT_RECORD_TYPE,
  raw = false
} = {}) => {
  let queryUrl = `https://${provider}?name=${domainName}&type=${type}`;

  let res = await fetch(queryUrl, {
    headers: {
      'Accept': 'application/dns-json'
    }
  });

  let json = await res.json();
  if (raw) {
    return json;
  }

  return json?.Answer?.[0]?.data || null;
};

module.exports = dohc;
