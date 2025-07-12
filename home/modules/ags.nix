{config, pkgs, inputs, ...}:
{
    imports = [

        ];

    home.packages = with pkgs; [
        ags
    ];

}