{
  config,
  pkgs,
  inputs,
  ...
}:
{
  boot.kernelPackages = pkgs.linuxPackages_zen;

  hardware.cpu.amd.updateMicrocode = true;
  boot.kernelParams = [ "amd_pstate=active" ];
  boot.initrd.kernelModules = [ "amdgpu" ];
  
  hardware.graphics = {
    enable = true;
    enable32Bit = true; 
    extraPackages = with pkgs; [
      libva
      libvdpau-va-gl
      libva-vdpau-driver 
    ];
  };

  powerManagement.cpuFreqGovernor = "performance";

  services.ananicy = {
    enable = true;
    package = pkgs.ananicy-cpp; 
  };
}
