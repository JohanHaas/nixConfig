{
  config,
  pkgs,
  inputs,
  ...
}: {
  programs.firefox = {
    enable = true;
    #package = pkgs.librewolf;
    profiles.johan = {
      settings = {
        "cookiebanners.service.mode.privateBrowsing" = 2;
        "cookiebanners.service.mode" = 2;
        "network.cookie.lifetimePolicy" = 0;
        "privacy.clearOnShutdown.cookies" = false;
        "privacy.clearOnShutdown.history" = true;
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
      };
      extensions.packages = with inputs.firefox-addons.packages.${pkgs.system}; [
        bitwarden
        ublock-origin
        darkreader
        privacy-badger
        localcdn
        sponsorblock
        return-youtube-dislikes
        youtube-shorts-block
        duckduckgo-privacy-essentials
      ];
    };
  };
}
