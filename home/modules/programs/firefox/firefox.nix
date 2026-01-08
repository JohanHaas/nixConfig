{
  config,
  pkgs,
  inputs,
  ...
}: 
let
  firefox-addons = inputs.firefox-addons.packages.${pkgs.system};

  mkExtensionSymlink = ext: {
    name = ".librewolf/gaocorkf.default/extensions/${ext.passthru.addonId}.xpi";
    value = {
      source = "${ext}/share/mozilla/extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/${ext.passthru.addonId}.xpi";
    };
  };
  
  extensions = [
    firefox-addons.bitwarden
    firefox-addons.ublock-origin
    firefox-addons.darkreader
    firefox-addons.privacy-badger
    firefox-addons.localcdn
    firefox-addons.sponsorblock
    firefox-addons.return-youtube-dislikes
    firefox-addons.youtube-shorts-block
    firefox-addons.duckduckgo-privacy-essentials
  ];
in
{
  home.file = builtins.listToAttrs (map mkExtensionSymlink extensions);

  programs.firefox = {
    enable = true;
    package = pkgs.librewolf;
    profiles.default = {
      isDefault = true;
      id = 0;
      settings = {
        "cookiebanners.service.mode.privateBrowsing" = 2;
        "cookiebanners.service.mode" = 2;
        "network.cookie.cookieBehavior" = 0;
        "network.cookie.lifetimePolicy" = 0;
        "privacy.clearOnShutdown.cookies" = false;
        "privacy.clearOnShutdown.cache" = true;
        "privacy.clearOnShutdown.history" = false;
        "privacy.donottrackheader.enabled" = true;
        "privacy.trackingprotection.emailtracking.enabled" = true;
        "privacy.trackingprotection.socialtracking.enabled" = true;
        "browser.urlbar.suggest.bookmark" = false;
        "browser.urlbar.suggest.engines" = true;
        "browser.urlbar.suggest.topsites" = false;
        "privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts" = true;
        "privacy.query_stripping.enabled" = true;
        "privacy.trackingprotection.enabled" = true;
        "network.http.referer.XOriginPolicy" = 1;
        "dom.security.https_only_mode" = true;
        "cookiebanners.service.enableGlobalRules" = true;
        "privacy.fingerprintingProtection" = true;
        "privacy.trackingprotection.fingerprinting.enabled" = true;
        "signon.management.page.enabled" = false;
        "signon.generation.enabled" = false;
        "signon.rememberSignons" = false;
        "signon.autofillForms" = false;
        "signon.autofillForms.http" = false;
        "extensions.formautofill.addresses.enabled" = false;
        "browser.newtabpage.activity-stream.feeds.section.highlights" = false;
        "browser.newtabpage.activity-stream.feeds.snippets" = false;
        "browser.newtabpage.activity-stream.feeds.topsites" = false;
        "browser.newtabpage.activity-stream.feeds.section.topstories" = false;
        "browser.newtabpage.activity-stream.showSponsored" = false;
        "browser.newtabpage.activity-stream.showSponsoredTopSites" = false;
        "browser.newtabpage.activity-stream.section.highlights.includePocket" = false;
        "browser.newtabpage.activity-stream.section.highlights.includeBookmarks" = false;
        "browser.newtabpage.activity-stream.section.highlights.includeDownloads" = false;
        "browser.newtabpage.activity-stream.section.highlights.includeVisited" = false;
        "browser.newtabpage.activity-stream.discoverystream.enabled" = false;
        "browser.newtabpage.activity-stream.showSearch" = true;
        "browser.newtabpage.enabled" = true;
        "xpinstall.signatures.required" = false;
        "extensions.autoDisableScopes" = 0;
        "extensions.enabledScopes" = 15;
      };
    };
  };
}





