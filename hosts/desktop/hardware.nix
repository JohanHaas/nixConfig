{
  config,
  pkgs,
  ...
}:
{
  boot.kernelPackages = inputs.cachyos-kernel.packages.${pkgs.system}.linuxPackages_cachyos-bore-lto;

  hardware.cpu.amd.updateMicrocode = true;
  boot.kernelParams = [ "amd_pstate=active" ];
  
  hardware.graphics = {
    enable = true;
    enable32Bit = true; 
    extraPackages = with pkgs; [
      libva
      vaapiVdpau
      libvdpau-va-gl
    ];
  }; 
}
