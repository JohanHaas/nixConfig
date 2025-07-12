{config, pkgs, inputs, ...}:
{
    imports = [
        inputs.ags.homeManagerModules.default
        ];

    programs.ags = {
        enable = true;
        configDir = inputs.AgsConfig.packages.${pkgs.system}.default;
        extraPackages = with pkgs; [
            fzf
        ];
    };
}