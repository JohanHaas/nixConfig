{config, pkgs, inputs, ...}:
{
    imports = [
        inputs.ags.homeManagerModules.default
        ];

    programs.ags = {
        enable = true;
        configDir = "${inputs.self}/assets/agsConfig";
        extraPackages = with pkgs; [
            fzf
        ];
    };
}