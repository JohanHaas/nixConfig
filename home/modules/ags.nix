{config, pkgs, inputs, ...}:
{
    imports = [
        inputs.ags.homeManagerModules.default
        ];

    programs.ags = {
        enable = true;
        configDir = inputs.agsConfig.packages.${pkgs.system}.default;
        extraPackages = with pkgs; [
            fzf
        ];
    };
}