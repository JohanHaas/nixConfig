{config, pkgs, inputs, ...}:
{
    imports = [

        ];

    home.packages = with pkgs; [
      gnome-shell
    ];

    programs.ags = {
        enable = true;
        configDir = "${inputs.self}/assets/agsConfig";
        extraPackages = with pkgs; [
            inputs.astal.packages.${pkgs.system}.default

            fzf
        ];
    };
}