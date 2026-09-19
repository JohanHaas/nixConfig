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
      { #homelab ueber tailnet
        hostName = "100.64.0.1";
        sshUser = "admin";
        sshKey = "/root/.ssh/admin-home";
        system = "x86_64-linux"; 
        maxJobs = 12;
        speedFactor = 1;         
        supportedFeatures = [ "nixos-test" "benchmark" "big-parallel" "kvm" ];
      }
    ];
  };
}
