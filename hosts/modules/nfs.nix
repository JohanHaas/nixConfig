{
  config,
  lib,
  pkgs,
  ...
}: {
  # Network storage
  services.rpcbind.enable = true;
  boot.supportedFilesystems = [ "nfs" ];

  fileSystems."/mnt/storage" = {
    device = "192.168.178.181:/storage";
    fsType = "nfs";
    options = [ 
      "x-systemd.automount" 
      "noauto" 
      "x-systemd.idle-timeout=600" 
      "soft" 
      "timeo=14" 
      "retrans=2"
    ];
  };

  fileSystems."/mnt/storage_vps" = {
    device = "100.64.0.1:/storage";
    fsType = "nfs";
    options = [ 
      "x-systemd.automount" 
      "noauto" 
      "x-systemd.idle-timeout=600" 
      "soft" 
      "timeo=14" 
      "retrans=2"
    ];
  };
}
