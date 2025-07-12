{config, pkgs, inputs, ...}:
{
    imports = [

        ];

    home.packages = with pkgs; [
        ags
    ];

    programs.ags = {
        enable = true;
        configDir = "${inputs.self}/assets/agsConfig";
        extraPackages = with pkgs; [
            fzf
        ];
    };
}