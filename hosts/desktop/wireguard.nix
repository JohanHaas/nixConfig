{
  config,
  pkgs,
  ...
}:
{
  networking.wireguard.interfaces.wg0 = {
    ips = [ "10.100.0.4/24" ];

    privateKeyFile = "/var/lib/wireguard/privatekey";

    peers = [
      {
        publicKey = "YIBQ3p8oSzBWCDtF2pxqDYtlKgO14HYb0HkXz2+soDU=";
        allowedIPs = [ "10.100.0.0/24" ];

        endpoint = "159.69.23.42:51820";
        persistentKeepalive = 25;
      }
    ];
  };
}
