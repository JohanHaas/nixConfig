{config, pkgs, inputs, ...}:
{
    imports = [
        ];

    programs.ags = {
        enable = true;
        configDir = "${inputs.self}/assets/agsConfig";
        extraPackages = with pkgs; [
            fzf
        ];
    };
}