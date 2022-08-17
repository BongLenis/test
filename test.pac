function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "*.salv.com"))
        return "PROXY rproxy.bondora.vtnx.net:8080";

    // by default use no proxy
    return "DIRECT";
}