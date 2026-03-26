{
  config,
  pkgs,
  ...
}:
{
  nix = {
    distributedBuilds = true;
    settings = {
      builders-use-substitutes = true;
      cores = 0; 
      max-jobs = "auto"; 
    };

    buildMachines = [
      { #vps
        hostName = "10.100.0.2";
        sshUser = "admin";
        sshKey = "/root/.ssh/admin-home";
        system = "x86_64-linux"; 
        maxJobs = 12;
        speedFactor = 1;         
        supportedFeatures = [ "nixos-test" "benchmark" "big-parallel" "kvm" ];
      }
      { #local
        hostName = "192.168.178.181";
        sshUser = "admin";
        sshKey = "/root/.ssh/admin-home";
        system = "x86_64-linux"; 
        maxJobs = 12;
        speedFactor = 100;         
        supportedFeatures = [ "nixos-test" "benchmark" "big-parallel" "kvm" ];
      }
    ];
  };
}
