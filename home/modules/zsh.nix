{
  config,
  pkgs,
  ...
}:
{
  programs.zsh = {
    enable = true;

    extraConfig = ''
      PROMPT="%n %F{magenta}>%f %~ "
      PS2="%F{magenta}>>>%f "
    '';

    autosuggestions.enable = true;
    syntaxHighlighting.enable = true;


}
