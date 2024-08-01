/**
 * Unit tests for src/trend.ts
 */
import getTrending from '../src/trend'
import { expect } from '@jest/globals'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('trend', () => {
  it('should return an array of Repository', async () => {
    const mockResponse = {
      data: `
<!DOCTYPE html>
<html
  lang="en"
  
  data-color-mode="auto" data-light-theme="light" data-dark-theme="dark"
  data-a11y-animated-images="system" data-a11y-link-underlines="true"
  >




  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link rel="preconnect" href="https://github.githubassets.com" crossorigin>
  <link rel="preconnect" href="https://avatars.githubusercontent.com">

  

  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/light-f552bab6ce72.css" /><link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/dark-4589f64a2275.css" /><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-a7246d2d6733.css" /><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-f2ef05cef2f1.css" /><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-daa1fe317131.css" /><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-1ab6fcc64845.css" /><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-46de871e876c.css" /><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-c9754fef2a31.css" /><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-dba748981a29.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/primer-primitives-4cbeaa0795ef.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/primer-fa3434a1ba0a.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/global-31defe89cafd.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/github-2d10c03a821d.css" />
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/site-7f483e56e095.css" />
<link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/explore-70575c0ccaf9.css" />

  


  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["code_vulnerability_scanning","copilot_chat_static_thread_suggestions","copilot_chat_in_mobile_ga","copilot_conversational_ux_history_refs","copilot_followup_to_agent","copilot_smell_icebreaker_ux","copilot_implicit_context","copilot_stop_response","copilot_updated_function_buttons","failbot_handle_non_errors","geojson_azure_maps","image_metric_tracking","marketing_forms_api_integration_contact_request","marketing_pages_search_explore_provider","turbo_experiment_risky","sample_network_conn_type","no_character_key_shortcuts_in_inputs","react_start_transition_for_navigations","custom_inp","remove_child_patch","kb_source_repos"]}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/wp-runtime-602e0fe0ebe5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_dompurify_dist_purify_js-810e4b1b9abd.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-6663c5-f997ed3e81d6.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_trusted-types-policies_policy_ts-ui_packages_trusted-types_trusted-types_ts-d5ceff60bac2.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/environment-5ee16bb20a1f.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_selector-observer_dist_index_esm_js-9f960d9b217c.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js-c7679f99a1f3.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_relative-time-element_dist_index_js-c76945c5961a.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_markdown-toolbar-e-820fc0-1176135e4d90.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_catalyst_-392fe4-1327b94f3269.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_text-expander-element_dist_index_js-b2135edb5ced.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b7d8f4-6e6f83bcc978.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-menu-element_-cc02d5-4f18c9a350f8.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-3959a9-8b35cf73f178.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/github-elements-adc6b1e94cfd.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/element-registry-059d7e790ec1.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-fd5530-141bf1a3abfb.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-cc7cb714ead5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_morphdom_dist_morphdom-esm_js-node_modules_github_memoize_dist_esm_index_js-8d7117d67c36.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-1cea0f5eff45.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-880ac2bbb719.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_scroll-anchoring_dist_scroll-anchoring_esm_js-node_modules_github_hotkey-1a1d91-1bb71f3f93c2.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_color-convert_index_js-94fdbf91204e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_dimensions_js-node_modules_github_jtml_lib_index_js-b1947a1d4855.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_session-resume_dist_index_js-node_modules_primer_behaviors_dist_e-da6ec6-77ce2f267f4e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_textarea-autosi-9e0349-704599a61056.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_updatable-content_ts-ee9ff6350c18.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_onfocus_ts-app_ass-421cec-d3af2356fb47.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_sticky-scroll-into-view_ts-72d6e7bfb28f.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-467754-25aa4f5b0d26.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-5276a3faf037.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-be8b6d18ffaa.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-06ff531-2ea61fcc9a71.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/notifications-global-1506817815cf.js"></script>
  

  <title>Trending  repositories on GitHub today · GitHub</title>



  <meta name="route-pattern" content="/trending(/:language)(.:format)" data-turbo-transient>
  <meta name="route-controller" content="trending" data-turbo-transient>
  <meta name="route-action" content="index" data-turbo-transient>

    
  <meta name="current-catalog-service-hash" content="047de2aa31687506697d59851c60a89162ffacfdbae2bc21df7cf2e253362bdb">


  <meta name="request-id" content="C1BA:235FE1:25945C:280C2E:664C1F74" data-pjax-transient="true"/><meta name="html-safe-nonce" content="c6201d310ac29bbbdd6146f50590dcc98f9fcdddbdc6df7fdc289b0c3d355c6e" data-pjax-transient="true"/><meta name="visitor-payload" content="eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiJDMUJBOjIzNUZFMToyNTk0NUM6MjgwQzJFOjY2NEMxRjc0IiwidmlzaXRvcl9pZCI6Ijg1NjM3NjQ3MDA4NTE3NDA1MzIiLCJyZWdpb25fZWRnZSI6InNvdXRoZWFzdGFzaWEiLCJyZWdpb25fcmVuZGVyIjoic291dGhlYXN0YXNpYSJ9" data-pjax-transient="true"/><meta name="visitor-hmac" content="211836c3ced43884c818a881398c877751339a09356863b0fd1d760f73892d6b" data-pjax-transient="true"/>




  <meta name="github-keyboard-shortcuts" content="copilot" data-turbo-transient="true" />
  

  <meta name="selected-link" value="trending_repositories" data-turbo-transient>
  <link rel="assets" href="https://github.githubassets.com/">

    <meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I">

<meta name="octolytics-url" content="https://collector.github.com/github/collect" />

  

  




    <meta name="user-login" content="">

  

    <meta name="viewport" content="width=device-width">

    

      <meta name="description" content="GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 420 million projects.">

      <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">

    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/trending" />

      <meta property="og:url" content="https://github.com">
  <meta property="og:site_name" content="GitHub">
  <meta property="og:title" content="Build software better, together">
  <meta property="og:description" content="GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 420 million projects.">
  <meta property="og:image" content="https://github.githubassets.com/assets/github-logo-55c5b9a1fe52.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="1200">
  <meta property="og:image" content="https://github.githubassets.com/assets/github-mark-57519b92ca4e.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="620">
  <meta property="og:image" content="https://github.githubassets.com/assets/github-octocat-13c86b8b336d.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="620">

  <meta property="twitter:site" content="github">
  <meta property="twitter:site:id" content="13334762">
  <meta property="twitter:creator" content="github">
  <meta property="twitter:creator:id" content="13334762">
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="GitHub">
  <meta property="twitter:description" content="GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 420 million projects.">
  <meta property="twitter:image:src" content="https://github.githubassets.com/assets/github-logo-55c5b9a1fe52.png">
  <meta property="twitter:image:width" content="1200">
  <meta property="twitter:image:height" content="1200">




      <meta name="hostname" content="github.com">



        <meta name="expected-hostname" content="github.com">


  <meta http-equiv="x-pjax-version" content="6fec0e76edbdd024c70e90e1ced3d3f979084edcee197c828eb602dad778cafb" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="38c639a245e1dd04786881fae1060fbd72d3ed419b2f0d38d6082dc9d67876c3" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="49c707fb26a902e4f395de8f44e598695b54715125b046ce5834344f333686c3" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="2009a1a8595f694a1ce8f022dd11a2decccc9a1a6409cf6d16dc2869affdbfa2" data-turbo-track="reload">

  <meta name="turbo-cache-control" content="no-preview" data-turbo-transient="">



      <link rel="canonical" href="https://github.com/trending" data-turbo-transient>


    <meta name="turbo-body-classes" content="logged-out env-production page-responsive">


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark" />


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-responsive" style="word-wrap: break-word;">
    <div data-turbo-body class="logged-out env-production page-responsive" style="word-wrap: break-word;">
      


    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" data-skip-target-assigned="false" class="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>

      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
      <script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/react-lib-dc88c1a68b28.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-541a38-c63b7a3484dd.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Box_Box_js-8f8c5e2a2cbf.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_github_ca-9009bd-47065f21e9ac.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Button_Button_js-97ed51d4f278.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js-730f6ad7c9e5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_node_modules_primer_octicons-react_dist_index_esm_mjs-dc98a76c65d6.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_ActionList_index_js-9e50e37cd494.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Button_IconButton_js-node_modules_primer_react_lib--1cd808-6070bc6b2c67.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c-44ed51a2083d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/keyboard-shortcuts-dialog-52a107eb77ae.js"></script>

<react-partial
  partial-name="keyboard-shortcuts-dialog"
  data-ssr="false"
>
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}</script>
  <div data-target="react-partial.reactRoot"></div>
</react-partial>




      

        

            
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-94fd67-8743f7dc256e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/sessions-458fee042571.js"></script>
<header class="Header-old header-logged-out js-details-container Details position-relative f4 py-3" role="banner" data-color-mode=light data-light-theme=light data-dark-theme=dark>
  <h2 class="sr-only">Navigation Menu</h2>

  <button type="button" class="Header-backdrop d-lg-none border-0 position-fixed top-0 left-0 width-full height-full js-details-target" aria-label="Toggle navigation">
    <span class="d-none">Toggle navigation</span>
  </button>

  <div class=" d-flex flex-column flex-lg-row flex-items-center p-responsive height-full position-relative z-1">
    <div class="d-flex flex-justify-between flex-items-center width-full width-lg-auto">
      <a class="mr-lg-3 color-fg-inherit flex-order-2" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
      </a>

      <div class="flex-1">
        <a href="/login?return_to=https%3A%2F%2Fgithub.com%2Ftrending"
          class="d-inline-block d-lg-none flex-order-1 f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit"
          data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f66ec526e526995b2bc9c41265cfbb6b0aea30213bd87db1802e11e2965d2ac7"
          data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign in
        </a>
      </div>

      <div class="flex-1 flex-order-2 text-right">
        <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1">  <span class="Button-content">
    <span class="Button-label"><div class="HeaderMenu-toggle-bar rounded my-1"></div>
            <div class="HeaderMenu-toggle-bar rounded my-1"></div>
            <div class="HeaderMenu-toggle-bar rounded my-1"></div></span>
  </span>
</button>
      </div>
    </div>


    <div class="HeaderMenu--logged-out p-responsive height-fit position-lg-relative d-lg-flex flex-column flex-auto pt-7 pb-4 top-0">
      <div class="header-menu-wrapper d-flex flex-column flex-self-end flex-lg-row flex-justify-between flex-auto p-3 p-lg-0 rounded rounded-lg-0 mt-3 mt-lg-0">
          <nav class="mt-0 px-3 px-lg-0 mb-3 mb-lg-0" aria-label="Global">
            <ul class="d-lg-flex list-style-none">
                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false">
        Product
        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex dropdown-menu-wide">
          <div class="px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
            <ul class="list-style-none f5" >
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Actions&quot;,&quot;label&quot;:&quot;ref_cta:Actions;&quot;}" href="https://github.com/features/actions">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-workflow color-fg-subtle mr-3">
    <path d="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Actions</div>
        Automate any workflow
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Packages&quot;,&quot;label&quot;:&quot;ref_cta:Packages;&quot;}" href="https://github.com/features/packages">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-package color-fg-subtle mr-3">
    <path d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Packages</div>
        Host and manage packages
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Security&quot;,&quot;label&quot;:&quot;ref_cta:Security;&quot;}" href="https://github.com/features/security">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-shield-check color-fg-subtle mr-3">
    <path d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"></path><path d="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Security</div>
        Find and fix vulnerabilities
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Codespaces&quot;,&quot;label&quot;:&quot;ref_cta:Codespaces;&quot;}" href="https://github.com/features/codespaces">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-codespaces color-fg-subtle mr-3">
    <path d="M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 13H5.25a1.75 1.75 0 0 1-1.75-1.75Zm-2 12c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75ZM5.25 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Zm-2 12a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25Z"></path><path d="M10 17.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Codespaces</div>
        Instant dev environments
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Copilot&quot;,&quot;label&quot;:&quot;ref_cta:Copilot;&quot;}" href="https://github.com/features/copilot">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-copilot color-fg-subtle mr-3">
    <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Copilot</div>
        Write better code with AI
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Code review&quot;,&quot;label&quot;:&quot;ref_cta:Code review;&quot;}" href="https://github.com/features/code-review">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-code-review color-fg-subtle mr-3">
    <path d="M10.3 6.74a.75.75 0 0 1-.04 1.06l-2.908 2.7 2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z"></path><path d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.749.749 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Code review</div>
        Manage code changes
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Issues&quot;,&quot;label&quot;:&quot;ref_cta:Issues;&quot;}" href="https://github.com/features/issues">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-issue-opened color-fg-subtle mr-3">
    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Issues</div>
        Plan and track work
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Discussions&quot;,&quot;label&quot;:&quot;ref_cta:Discussions;&quot;}" href="https://github.com/features/discussions">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-comment-discussion color-fg-subtle mr-3">
    <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path><path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Discussions</div>
        Collaborate outside of code
      </div>

    
</a></li>

            </ul>
          </div>
          <div class="px-lg-4">
              <span class="d-block h4 color-fg-default my-1" id="product-explore-heading">Explore</span>
            <ul class="list-style-none f5" aria-labelledby="product-explore-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to All features&quot;,&quot;label&quot;:&quot;ref_cta:All features;&quot;}" href="https://github.com/features">
      All features

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Documentation&quot;,&quot;label&quot;:&quot;ref_cta:Documentation;&quot;}" href="https://docs.github.com">
      Documentation

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to GitHub Skills&quot;,&quot;label&quot;:&quot;ref_cta:GitHub Skills;&quot;}" href="https://skills.github.com">
      GitHub Skills

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Blog&quot;,&quot;label&quot;:&quot;ref_cta:Blog;&quot;}" href="https://github.blog">
      Blog

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false">
        Solutions
        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
          <div class="border-bottom pb-3 mb-3">
              <span class="d-block h4 color-fg-default my-1" id="solutions-for-heading">For</span>
            <ul class="list-style-none f5" aria-labelledby="solutions-for-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Enterprise&quot;,&quot;label&quot;:&quot;ref_cta:Enterprise;&quot;}" href="https://github.com/enterprise">
      Enterprise

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Teams&quot;,&quot;label&quot;:&quot;ref_cta:Teams;&quot;}" href="https://github.com/team">
      Teams

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Startups&quot;,&quot;label&quot;:&quot;ref_cta:Startups;&quot;}" href="https://github.com/enterprise/startups">
      Startups

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Education&quot;,&quot;label&quot;:&quot;ref_cta:Education;&quot;}" href="https://education.github.com">
      Education

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
          <div class="border-bottom pb-3 mb-3">
              <span class="d-block h4 color-fg-default my-1" id="solutions-by-solution-heading">By Solution</span>
            <ul class="list-style-none f5" aria-labelledby="solutions-by-solution-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to CI/CD &amp;amp; Automation&quot;,&quot;label&quot;:&quot;ref_cta:CI/CD &amp;amp; Automation;&quot;}" href="https://github.com/solutions/ci-cd">
      CI/CD &amp; Automation

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to DevOps&quot;,&quot;label&quot;:&quot;ref_cta:DevOps;&quot;}" href="https://github.com/solutions/devops">
      DevOps

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to DevSecOps&quot;,&quot;label&quot;:&quot;ref_cta:DevSecOps;&quot;}" href="https://resources.github.com/devops/fundamentals/devsecops">
      DevSecOps

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
          <div class="">
              <span class="d-block h4 color-fg-default my-1" id="solutions-resources-heading">Resources</span>
            <ul class="list-style-none f5" aria-labelledby="solutions-resources-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Learning Pathways&quot;,&quot;label&quot;:&quot;ref_cta:Learning Pathways;&quot;}" href="https://resources.github.com/learn/pathways">
      Learning Pathways

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to White papers, Ebooks, Webinars&quot;,&quot;label&quot;:&quot;ref_cta:White papers, Ebooks, Webinars;&quot;}" href="https://resources.github.com">
      White papers, Ebooks, Webinars

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Customer Stories&quot;,&quot;label&quot;:&quot;ref_cta:Customer Stories;&quot;}" href="https://github.com/customer-stories">
      Customer Stories

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Partners&quot;,&quot;label&quot;:&quot;ref_cta:Partners;&quot;}" href="https://partner.github.com">
      Partners

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false">
        Open Source
        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
          <div class="border-bottom pb-3 mb-3">
            <ul class="list-style-none f5" >
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to GitHub Sponsors&quot;,&quot;label&quot;:&quot;ref_cta:GitHub Sponsors;&quot;}" href="https://github.com/sponsors">
      
      <div>
        <div class="color-fg-default h4">GitHub Sponsors</div>
        Fund open source developers
      </div>

    
</a></li>

            </ul>
          </div>
          <div class="border-bottom pb-3 mb-3">
            <ul class="list-style-none f5" >
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to The ReadME Project&quot;,&quot;label&quot;:&quot;ref_cta:The ReadME Project;&quot;}" href="https://github.com/readme">
      
      <div>
        <div class="color-fg-default h4">The ReadME Project</div>
        GitHub community articles
      </div>

    
</a></li>

            </ul>
          </div>
          <div class="">
              <span class="d-block h4 color-fg-default my-1" id="open-source-repositories-heading">Repositories</span>
            <ul class="list-style-none f5" aria-labelledby="open-source-repositories-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Topics&quot;,&quot;label&quot;:&quot;ref_cta:Topics;&quot;}" href="https://github.com/topics">
      Topics

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Trending&quot;,&quot;label&quot;:&quot;ref_cta:Trending;&quot;}" href="https://github.com/trending">
      Trending

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Collections&quot;,&quot;label&quot;:&quot;ref_cta:Collections;&quot;}" href="https://github.com/collections">
      Collections

    
</a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
    <a class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block" data-analytics-event="{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Pricing&quot;,&quot;label&quot;:&quot;ref_cta:Pricing;&quot;}" href="https://github.com/pricing">Pricing</a>
</li>

            </ul>
          </nav>

        <div class="d-lg-flex flex-items-center mb-3 mb-lg-0 text-center text-lg-left ml-3" style="">
                


<qbsearch-input class="search-input" data-scope="" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="QhuUto7RO17yOhP4nB62aJpgdDb5aWP9PNMTKda6iwdIbs5X45aW5vFT-VVX8sG7xlcgzoyvGgwsx55aZB9Amw" data-max-custom-scopes="10" data-header-redesign-enabled="false" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="" data-current-org="" data-current-owner="" data-logged-in="false" data-copilot-chat-enabled="false" data-blackbird-indexed-repo-csrf="<esi:include src=&quot;/_esi/rails_csrf_token_form_hidden?r=RysSXhYB6E6NqiFAh2Uc4GNZ83g67aDAmO2lqmPvGrFT0%2BsG46eqM8BTOfzfa1XLqj3LEPsP6T8UI2qzz2CDJY057TK72jUxN%2BODbLStl%2FXfYu3EU5jGvCUTOH0tCVYSOMmFokdDIFeGlWrpX7REL3KMNbNuJZMm88QlvVJyl8AAifOTG%2Fh1qt1jXmFKTbuGNiIH2%2F9VKVF05NF87ACI38Emtgwolb4eNh1gOWTOyMykII7xCdEU%2Bav6H%2F5gKZQhoEtBfWR2k1JAA3p0RxyMIeluspo%2FA64OJhUiAK7fWVEBb1K387daXwgpfcEc9Jh3NI3PKtQ3NoZAs8UaQZ3YyZr8EW8OTNBi7UAiVCe34xt2CNdeUBkOw5d97dKf3YSPsy78TYoPLFb6lbvhvgzY0euIDccQPFd%2B%2FJWRSMhBcLEdxAHrfFWI4TRxCn%2BC4%2F0XATs5x6G4BQoOmxve%2Bp5xDn6Gz7MK7H3VaiaHa4EjS28ueSSFbl9AlCgwChAhAtU2CfQ%3D--DKdNYMSIdd43QLzS--3y6%2BS%2FUKqvZJLYMkmp5TIw%3D%3D&quot; />">
  <div
    class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center mr-4 rounded"
    data-action="click:qbsearch-input#searchInputContainerClicked"
  >
      <button
        type="button"
        class="header-search-button placeholder  input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"
        data-target="qbsearch-input.inputButton"
        placeholder="Search or jump to..."
        data-hotkey=s,/
        autocapitalize="off"
        data-action="click:qbsearch-input#handleExpand"
      >
        <div class="mr-2 color-fg-muted">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
        </div>
        <span class="flex-1" data-target="qbsearch-input.inputButtonText">Search or jump to...</span>
          <div class="d-flex" data-target="qbsearch-input.hotkeyIndicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" class="mr-1"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>

          </div>
      </button>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay>
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-large Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-fixed width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container"
          style="border-radius: 12px;"
          data-target="qbsearch-input.queryBuilderContainer"
          hidden
        >
          </option></form><form id="query-builder-test-form" action="" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div
        class="QueryBuilder-StyledInput width-fit "
        data-target="query-builder.styledInput"
      >
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div
            aria-hidden="true"
            class="QueryBuilder-StyledInputContent"
            data-target="query-builder.styledInputContent"
          ></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-a7e3abd5-03bd-42f6-9141-8ab0603f104d" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" />
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="hidden" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
</template>

<template id="code-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</template>

<template id="file-code-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file-code">
    <path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
</svg>
</template>

<template id="history-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-history">
    <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
</svg>
</template>

<template id="repo-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
</template>

<template id="bookmark-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bookmark">
    <path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"></path>
</svg>
</template>

<template id="plus-circle-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus-circle">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7.25-3.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</template>

<template id="circle-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill">
    <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
</svg>
</template>

<template id="trash-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-trash">
    <path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path>
</svg>
</template>

<template id="team-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>
</template>

<template id="project-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project">
    <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
</svg>
</template>

<template id="pencil-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-pencil">
    <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
</svg>
</template>

<template id="copilot-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</template>

<template id="workflow-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-workflow">
    <path d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25Zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
</template>

<template id="book-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
</svg>
</template>

<template id="code-review-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code-review">
    <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 13H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25v-8.5C0 1.784.784 1 1.75 1ZM1.5 2.75v8.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm5.28 1.72a.75.75 0 0 1 0 1.06L5.31 7l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0Zm2.44 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.69 7 9.22 5.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</template>

<template id="codespaces-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
</template>

<template id="comment-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment">
    <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
</template>

<template id="comment-discussion-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
</template>

<template id="organization-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-organization">
    <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</template>

<template id="rocket-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-rocket">
    <path d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
</template>

<template id="shield-check-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield-check">
    <path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM11.28 6.28l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.97-2.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
</template>

<template id="heart-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
</template>

<template id="server-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-server">
    <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v4c0 .372-.116.717-.314 1 .198.283.314.628.314 1v4a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 12.75v-4c0-.358.109-.707.314-1a1.739 1.739 0 0 1-.314-1v-4C0 1.784.784 1 1.75 1ZM1.5 2.75v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm.25 5.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25ZM7 4.75A.75.75 0 0 1 7.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 4.75ZM7.75 10h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM3 4.75A.75.75 0 0 1 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 4.75ZM3.75 10h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</template>

<template id="globe-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-globe">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552.714 1.192 1.436 2.874 1.58 4.948Z"></path>
</svg>
</template>

<template id="issue-opened-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</template>

<template id="device-mobile-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-device-mobile">
    <path d="M3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 .784 2.784 0 3.75 0ZM3.5 1.75v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
</template>

<template id="package-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-package">
    <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
</svg>
</template>

<template id="credit-card-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-credit-card">
    <path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path>
</svg>
</template>

<template id="play-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
</template>

<template id="gift-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
</template>

<template id="code-square-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code-square">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
</template>

<template id="device-desktop-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-device-desktop">
    <path d="M14.25 1c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 14.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.752.752 0 0 1 11.25 16h-6.5a.75.75 0 0 1-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 0 1 0 10.25v-7.5C0 1.784.784 1 1.75 1ZM1.75 2.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25ZM9.018 12H6.982a5.72 5.72 0 0 1-.765 2.5h3.566a5.72 5.72 0 0 1-.765-2.5Z"></path>
</svg>
</template>

        <div class="position-relative">
                <ul
                  role="listbox"
                  class="ActionListWrap QueryBuilder-ListWrap"
                  aria-label="Suggestions"
                  data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  "
                  data-target="query-builder.resultsList"
                  data-persist-list=false
                  id="query-builder-test-results"
                ></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-a7e3abd5-03bd-42f6-9141-8ab0603f104d" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only"></div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">
              Search syntax tips
</a>            <div class="d-flex flex-1"></div>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<dialog-helper>
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
        
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title">
        <div data-view-component="true" class="Overlay-body">        </option></form><form id="code-search-feedback-form" data-turbo="false" action="/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" data-csrf="true" name="authenticity_token" value="nAjOo2ILX7/Mgk7OLUz3jOjxIUxSFzX+cH10GDaFqoKugnb+PRIP8ADHFZc3VAkyEp4LZHPxXYX/l1UXBynMHw==" />
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager">
    
<dialog-helper>
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title">
        <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        </option></form><form id="custom-scopes-dialog-form" data-turbo="false" action="/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" data-csrf="true" name="authenticity_token" value="Ro0Ld+IceeojBX3O98ZzXZsSM28LAewtxi+mCeJjLysAU4TcTvO9qr8EgWMDWX4/7tt00IXqKQykS3Z4qmDPfQ==" />
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required>
              <input
                type="text"
                name="custom_scope_name"
                id="custom_scope_name"
                data-target="custom-scopes.customScopesNameField"
                class="form-control"
                autocomplete="off"
                placeholder="github-ruby"
                required
                maxlength="50">
              <input type="hidden" data-csrf="true" value="lsTsCJuWo8vIFVCTz1NnB2WI25ZETpicUvnTFrwpcIb0PD7NV0sqzP/rG76sHwCPRC09Sy6JVm3psl0KWaB7Ww==" />
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input
              type="text"
              name="custom_scope_query"
              id="custom_scope_query"
              data-target="custom-scopes.customScopesQueryField"
              class="form-control"
              autocomplete="off"
              placeholder="(repo:mona/a OR repo:mona/b) AND lang:python"
              required
              maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input><input type="hidden" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" value="kz6SuAROVJdEUDCXpjRNVMnK2AkJ5LRWtKbMdQXOOlsCw3z3enh+ebZlK3su2gmyjqM3iAB8CikS0SvtWbBgRg==" />


          <div class="position-relative mr-lg-3 d-lg-inline-block">
            <a href="/login?return_to=https%3A%2F%2Fgithub.com%2Ftrending"
              class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f66ec526e526995b2bc9c41265cfbb6b0aea30213bd87db1802e11e2965d2ac7"
              data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
              Sign in
            </a>
          </div>

            <a href="/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2Ftrending&amp;source=header"
              class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f66ec526e526995b2bc9c41265cfbb6b0aea30213bd87db1802e11e2965d2ac7"
              data-analytics-event="{&quot;category&quot;:&quot;Sign up&quot;,&quot;action&quot;:&quot;click to sign up for account&quot;,&quot;label&quot;:&quot;ref_page:/trending;ref_cta:Sign up;ref_loc:header logged out&quot;}"
            >
              Sign up
            </a>
        </div>
      </div>
    </div>
  </div>
</header>

      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full mb-3">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden>You switched accounts on another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>

    <button id="icon-button-cc5b778c-b759-4d3c-a8ad-8909861c8d7b" aria-labelledby="tooltip-33d8dd48-e085-4c47-8a39-c85e15425d62" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-33d8dd48-e085-4c47-8a39-c85e15425d62" for="icon-button-cc5b778c-b759-4d3c-a8ad-8909861c8d7b" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Dismiss alert</tool-tip>


  
</div>
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" class="flash-container" data-turbo-replace>





  <template class="js-flash-template">
    
<div class="flash flash-full   {{ className }}">
  <div >
    <button autofocus class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    <div aria-atomic="true" role="alert" class="js-flash-alert">
      
      <div>{{ message }}</div>

    </div>
  </div>
</div>
  </template>
</div>


    
    <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>





  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
      <main>
        
<div class="site-subnav color-bg-default site-subnav-sticky js-sticky" >
  <nav class="container-lg mx-auto p-responsive" role="navigation" aria-label="Explore navigation">
    <div class="d-flex flex-wrap flex-items-center flex-justify-center flex-md-justify-start text-center text-md-left">

        <a class="js-selected-navigation-item d-inline-block subnav-primary f5 py-0 py-md-3 mt-2 mt-md-0 mr-0 mr-md-4 no-underline subnav-link" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;NAVIGATION_BAR&quot;,&quot;click_target&quot;:&quot;EXPLORE&quot;,&quot;click_visual_representation&quot;:&quot;CLICK_VISUAL_REPRESENTATION_UNKNOWN&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="cb6ae174c248a27bbc9d141956a1ca2a7f706289a886df8630e2f7387e66a7bf" data-selected-links="/explore /explore/email /explore" href="/explore">Explore</a>

      <a class="js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;NAVIGATION_BAR&quot;,&quot;click_target&quot;:&quot;TOPICS&quot;,&quot;click_visual_representation&quot;:&quot;CLICK_VISUAL_REPRESENTATION_UNKNOWN&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7eb239c5b3f84933803cc6e595085dfd9cadb04542db43d48fcecb7d094143e0" data-selected-links="topics_path /topics/ /topics" href="/topics">Topics</a>

        <a class="js-selected-navigation-item selected d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;NAVIGATION_BAR&quot;,&quot;click_target&quot;:&quot;TRENDING&quot;,&quot;click_visual_representation&quot;:&quot;CLICK_VISUAL_REPRESENTATION_UNKNOWN&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ca27317d10e5479e94b790880705ca204b4195e623160cabacb86d8fa3c917eb" aria-current="page" data-selected-links="/trending /trending/developers /trending/developers /trending /trending" href="/trending">Trending</a>

        <a class="js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;NAVIGATION_BAR&quot;,&quot;click_target&quot;:&quot;COLLECTIONS&quot;,&quot;click_visual_representation&quot;:&quot;CLICK_VISUAL_REPRESENTATION_UNKNOWN&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6d6d43b8d5f0b396de63ab68d77a3eee259b96e3b39014ccadd55b6a1fc44a83" data-selected-links="collections_path /collections/ /collections" href="/collections">Collections</a>

        <a class="js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;NAVIGATION_BAR&quot;,&quot;click_target&quot;:&quot;EVENTS&quot;,&quot;click_visual_representation&quot;:&quot;CLICK_VISUAL_REPRESENTATION_UNKNOWN&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="83b1972501079bbd1c0771d6c29253e16e27a68de383bcc6471183850a40ba66" data-selected-links="events_path /events/ /events" href="/events">Events</a>

        <a class="js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;NAVIGATION_BAR&quot;,&quot;click_target&quot;:&quot;GITHUB_SPONSORS&quot;,&quot;click_visual_representation&quot;:&quot;CLICK_VISUAL_REPRESENTATION_UNKNOWN&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="a6cf341a50b391113bacebfc6688736daa9157ee596029843a7952556828b9b3" data-selected-links="sponsors_explore_index_path /sponsors/explore /sponsors/explore" href="/sponsors/explore">GitHub Sponsors</a>

    </div>
  </nav>
</div>


<div class="color-bg-subtle border-bottom">
  <div class="container-lg p-responsive text-center py-6">
    <h1 class="h1">Trending</h1>

    <p class="f4 color-fg-muted col-md-6 mx-auto">
      See what the GitHub community is most excited about today.
    </p>
  </div>
</div>

<div class="position-relative container-lg p-responsive pt-6">
  <div class="Box">
    <div class="Box-header d-md-flex flex-items-center flex-justify-between">
      <nav class="subnav mb-0" aria-label="Trending" data-pjax>
  <a class="js-selected-navigation-item selected subnav-item" aria-current="page" data-selected-links="trending_repositories /trending" href="/trending">Repositories</a>
  <a class="js-selected-navigation-item subnav-item" data-selected-links="trending_developers /trending/developers" href="/trending/developers">Developers</a>
</nav>


      <div
        class="d-sm-flex flex-items-center flex-md-justify-end mt-3 mt-md-0 table-list-header-toggle
          ml-n2 ml-md-0"
      >
        <div class="position-relative mb-3 mb-sm-0">
          <details
  class="details-reset details-overlay select-menu select-menu-modal-right hx_rsm"
  id="select-menu-spoken-language"
>
    <summary data-view-component="true" class="select-menu-button btn-link">    Spoken Language:

    <span data-menu-button="" data-view-component="true" class="text-bold">
        Any
</span>
</summary>
  <details-menu class="select-menu-modal position-absolute right-0" style="z-index: 99;">
    <div class="select-menu-header">
      <span data-view-component="true" class="select-menu-title">
        Select a spoken language
</span>
      <button data-toggle-for="select-menu-spoken-language" aria-label="Close menu" type="button" data-view-component="true" class="close-button hx_rsm-close-button btn-link ml-2"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>

    </div>

    <div class="select-menu-filters">
      <div class="select-menu-text-filter">
        <input
          type="text"
          id="text-filter-field-spoken-language"
          class="form-control js-filterable-field js-navigation-enable"
          placeholder="Filter spoken languages"
          aria-label="Type or choose a spoken language"
          autofocus
          autocomplete="off"
        >
      </div>
    </div>

    <div class="select-menu-list" data-pjax>

      <div data-filterable-for="text-filter-field-spoken-language" data-filterable-type="substring">
          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ab" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Abkhazian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=aa" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Afar
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=af" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Afrikaans
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ak" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Akan
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sq" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Albanian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=am" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Amharic
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ar" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Arabic
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=an" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Aragonese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=hy" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Armenian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=as" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Assamese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=av" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Avaric
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ae" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Avestan
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ay" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Aymara
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=az" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Azerbaijani
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=bm" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bambara
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ba" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bashkir
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=eu" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Basque
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=be" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Belarusian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=bn" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bengali
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=bh" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bihari languages
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=bi" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bislama
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=bs" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bosnian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=br" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Breton
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=bg" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bulgarian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=my" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Burmese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ca" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Catalan, Valencian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ch" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Chamorro
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ce" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Chechen
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ny" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Chichewa, Chewa, Nyanja
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=zh" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Chinese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=cv" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Chuvash
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=kw" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cornish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=co" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Corsican
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=cr" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cree
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=hr" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Croatian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=cs" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Czech
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=da" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Danish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=dv" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Divehi, Dhivehi, Maldivian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=nl" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dutch, Flemish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=dz" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dzongkha
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=en" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              English
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=eo" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Esperanto
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=et" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Estonian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ee" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ewe
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=fo" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Faroese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=fj" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Fijian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=fi" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Finnish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=fr" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              French
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ff" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Fulah
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=gl" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Galician
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ka" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Georgian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=de" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              German
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=el" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Greek, Modern
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=gn" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Guarani
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=gu" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gujarati
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ht" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Haitian, Haitian Creole
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ha" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Hausa
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=he" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Hebrew
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=hz" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Herero
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=hi" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Hindi
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ho" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Hiri Motu
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=hu" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Hungarian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ia" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Interlingua (International Auxil...
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=id" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Indonesian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ie" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Interlingue, Occidental
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ga" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Irish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ig" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Igbo
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ik" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Inupiaq
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=io" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ido
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=is" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Icelandic
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=it" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Italian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=iu" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Inuktitut
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ja" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Japanese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=jv" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Javanese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=kl" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kalaallisut, Greenlandic
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=kn" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kannada
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=kr" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kanuri
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ks" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kashmiri
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=kk" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kazakh
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=km" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Central Khmer
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ki" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kikuyu, Gikuyu
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=rw" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kinyarwanda
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ky" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kirghiz, Kyrgyz
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=kv" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Komi
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=kg" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kongo
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ko" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Korean
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ku" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kurdish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=kj" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kuanyama, Kwanyama
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=la" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Latin
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=lb" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Luxembourgish, Letzeburgesch
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=lg" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ganda
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=li" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Limburgan, Limburger, Limburgish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ln" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lingala
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=lo" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lao
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=lt" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lithuanian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=lu" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Luba-Katanga
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=lv" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Latvian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=gv" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Manx
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=mk" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Macedonian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=mg" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Malagasy
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ms" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Malay
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ml" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Malayalam
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=mt" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Maltese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=mi" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Maori
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=mr" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Marathi
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=mh" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Marshallese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=mn" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mongolian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=na" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nauru
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=nv" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Navajo, Navaho
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=nd" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              North Ndebele
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ne" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nepali
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ng" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ndonga
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=nb" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Norwegian Bokmål
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=nn" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Norwegian Nynorsk
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=no" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Norwegian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ii" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sichuan Yi, Nuosu
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=nr" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              South Ndebele
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=oc" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Occitan
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=oj" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ojibwa
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=cu" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Church Slavic, Old Slavonic, Chu...
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=om" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Oromo
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=or" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Oriya
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=os" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ossetian, Ossetic
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=pa" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Punjabi, Panjabi
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=pi" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pali
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=fa" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Persian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=pl" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Polish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ps" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pashto, Pushto
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=pt" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Portuguese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=qu" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Quechua
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=rm" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Romansh
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=rn" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Rundi
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ro" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Romanian, Moldavian, Moldovan
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ru" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Russian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sa" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sanskrit
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sc" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sardinian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sd" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sindhi
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=se" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Northern Sami
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sm" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Samoan
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sg" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sango
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sr" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Serbian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=gd" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gaelic, Scottish Gaelic
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sn" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Shona
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=si" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sinhala, Sinhalese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sk" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Slovak
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sl" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Slovenian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=so" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Somali
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=st" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Southern Sotho
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=es" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Spanish, Castilian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=su" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sundanese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sw" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Swahili
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ss" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Swati
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=sv" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Swedish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ta" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tamil
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=te" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Telugu
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=tg" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tajik
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=th" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Thai
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ti" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tigrinya
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=bo" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tibetan
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=tk" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Turkmen
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=tl" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tagalog
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=tn" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tswana
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=to" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tonga (Tonga Islands)
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=tr" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Turkish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ts" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tsonga
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=tt" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tatar
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=tw" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Twi
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ty" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tahitian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ug" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Uighur, Uyghur
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=uk" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ukrainian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ur" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Urdu
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=uz" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Uzbek
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=ve" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Venda
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=vi" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Vietnamese
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=vo" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Volapük
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=wa" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Walloon
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=cy" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Welsh
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=wo" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Wolof
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=fy" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Western Frisian
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=xh" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Xhosa
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=yi" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Yiddish
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=yo" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Yoruba
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=za" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Zhuang, Chuang
</span></a>          <a role="menuitemradio" aria-checked="false" data-pjax="" href="/trending?spoken_language_code=zu" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Zulu
</span></a>      </div>
    </div>

    <div class="select-menu-loading-overlay">
      <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
    </div>
  </details-menu>
</details>


        </div>

        <div class="mb-3 mb-sm-0">
          <details class="details-reset details-overlay select-menu select-menu-modal-right hx_rsm" id="select-menu-language">
    <summary data-view-component="true" class="select-menu-button btn-link">    Language:

    <span data-menu-button="" data-view-component="true" class="text-bold">
        Any
</span>
</summary>
  <details-menu class="select-menu-modal position-absolute right-0" style="z-index: 99;">
    <div class="select-menu-header">
      <span data-view-component="true" class="select-menu-title">
        Select a language
</span>
      <button data-toggle-for="select-menu-language" aria-label="Close menu" type="button" data-view-component="true" class="close-button hx_rsm-close-button btn-link d-none ml-2"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>

    <div class="select-menu-filters">
      <filter-input class="select-menu-text-filter" aria-owns="languages-menuitems">
        <input
          type="text"
          class="form-control"
          placeholder="Filter languages"
          aria-label="Type or choose a language"
          autofocus
          autocomplete="off"
        >
      </filter-input>
    </div>

    <div class="select-menu-list" data-pjax id="languages-menuitems">

      <div data-filter-list>
          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/unknown?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Unknown languages
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/1c-enterprise?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              1C Enterprise
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/2-dimensional-array?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              2-Dimensional Array
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/4d?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              4D
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/abap?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ABAP
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/abap-cds?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ABAP CDS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/abnf?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ABNF
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/actionscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ActionScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ada?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ada
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/adblock-filter-list?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Adblock Filter List
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/adobe-font-metrics?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Adobe Font Metrics
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/agda?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Agda
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ags-script?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AGS Script
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/aidl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AIDL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/al?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/alloy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Alloy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/alpine-abuild?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Alpine Abuild
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/altium-designer?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Altium Designer
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ampl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AMPL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/angelscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AngelScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ant-build-system?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ant Build System
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/antlers?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Antlers
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/antlr?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ANTLR
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/apacheconf?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ApacheConf
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/apex?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Apex
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/api-blueprint?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              API Blueprint
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/apl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              APL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/apollo-guidance-computer?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Apollo Guidance Computer
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/applescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AppleScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/arc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Arc
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/asciidoc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AsciiDoc
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/asl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ASL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/asn.1?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ASN.1
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/classic-asp?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Classic ASP
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/asp.net?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ASP.NET
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/aspectj?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AspectJ
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/assembly?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Assembly
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/astro?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Astro
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/asymptote?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Asymptote
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ats?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ATS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/augeas?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Augeas
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/autohotkey?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AutoHotkey
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/autoit?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              AutoIt
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/avro-idl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Avro IDL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/awk?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Awk
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ballerina?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ballerina
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/basic?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              BASIC
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/batchfile?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Batchfile
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/beef?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Beef
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/befunge?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Befunge
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/berry?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Berry
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/bibtex?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              BibTeX
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/bicep?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bicep
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/bikeshed?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bikeshed
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/bison?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bison
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/bitbake?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              BitBake
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/blade?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Blade
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/blitzbasic?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              BlitzBasic
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/blitzmax?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              BlitzMax
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/bluespec?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bluespec
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/bluespec-bh?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Bluespec BH
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/boo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Boo
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/boogie?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Boogie
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/brainfuck?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Brainfuck
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/brighterscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              BrighterScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/brightscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Brightscript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/zeek?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Zeek
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/browserslist?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Browserslist
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/c?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              C
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/c%23?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              C#
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/c++?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              C++
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/c-objdump?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              C-ObjDump
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/c2hs-haskell?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              C2hs Haskell
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cabal-config?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cabal Config
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cadence?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cadence
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cairo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cairo
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cameligo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CameLIGO
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cap-cds?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CAP CDS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cap&#39;n-proto?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cap&#39;n Proto
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cartocss?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CartoCSS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ceylon?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ceylon
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/chapel?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Chapel
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/charity?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Charity
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/checksums?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Checksums
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/chuck?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ChucK
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cil?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CIL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/circom?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Circom
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cirru?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cirru
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/clarion?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Clarion
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/clarity?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Clarity
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/classic-asp?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Classic ASP
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/clean?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Clean
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/click?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Click
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/clips?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CLIPS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/clojure?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Clojure
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/closure-templates?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Closure Templates
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cloud-firestore-security-rules?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cloud Firestore Security Rules
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cmake?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CMake
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cobol?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              COBOL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/codeowners?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CODEOWNERS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/codeql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CodeQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/coffeescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CoffeeScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/coldfusion?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ColdFusion
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/coldfusion-cfc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ColdFusion CFC
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/collada?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              COLLADA
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/common-lisp?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Common Lisp
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/common-workflow-language?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Common Workflow Language
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/component-pascal?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Component Pascal
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/conll-u?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CoNLL-U
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cool?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cool
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/coq?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Coq
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cpp-objdump?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cpp-ObjDump
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/creole?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Creole
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/crystal?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Crystal
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cson?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CSON
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/csound?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Csound
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/csound-document?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Csound Document
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/csound-score?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Csound Score
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/css?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CSS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/csv?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CSV
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cuda?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cuda
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cue?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CUE
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cue-sheet?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cue Sheet
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/curl-config?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              cURL Config
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/curry?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Curry
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cweb?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              CWeb
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cycript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cycript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cypher?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cypher
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/cython?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Cython
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/d?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              D
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/d-objdump?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              D-ObjDump
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/d2?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              D2
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dafny?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dafny
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/darcs-patch?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Darcs Patch
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dart?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dart
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dataweave?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              DataWeave
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/debian-package-control-file?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Debian Package Control File
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/denizenscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              DenizenScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/desktop?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              desktop
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dhall?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dhall
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/diff?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Diff
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/digital-command-language?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              DIGITAL Command Language
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dircolors?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              dircolors
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/directx-3d-file?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              DirectX 3D File
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dm?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              DM
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dns-zone?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              DNS Zone
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dockerfile?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dockerfile
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dogescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dogescript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dotenv?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dotenv
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dtrace?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              DTrace
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/dylan?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Dylan
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/e?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              E
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/e-mail?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              E-mail
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/eagle?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Eagle
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/earthly?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Earthly
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/easybuild?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Easybuild
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ebnf?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              EBNF
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ec?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              eC
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ecere-projects?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ecere Projects
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ecl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ECL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/eclipse?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ECLiPSe
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ecmarkup?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ecmarkup
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/edge?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Edge
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/edgeql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              EdgeQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/editorconfig?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              EditorConfig
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/edje-data-collection?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Edje Data Collection
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/edn?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              edn
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/eiffel?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Eiffel
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ejs?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              EJS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/elixir?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Elixir
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/elm?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Elm
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/elvish?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Elvish
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/elvish-transcript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Elvish Transcript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/emacs-lisp?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Emacs Lisp
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/emberscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              EmberScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/e-mail?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              E-mail
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/eq?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              EQ
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/erlang?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Erlang
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/euphoria?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Euphoria
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/f%23?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              F#
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/f*?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              F*
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/factor?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Factor
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/fancy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Fancy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/fantom?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Fantom
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/faust?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Faust
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/fennel?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Fennel
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/figlet-font?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              FIGlet Font
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/filebench-wml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Filebench WML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/filterscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Filterscript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/fish?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              fish
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/fluent?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Fluent
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/flux?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              FLUX
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/formatted?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Formatted
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/forth?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Forth
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/fortran?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Fortran
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/fortran-free-form?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Fortran Free Form
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/freebasic?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              FreeBasic
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/freemarker?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              FreeMarker
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/frege?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Frege
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/futhark?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Futhark
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/g-code?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              G-code
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/game-maker-language?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Game Maker Language
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gaml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GAML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gams?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GAMS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gap?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GAP
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gcc-machine-description?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GCC Machine Description
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gdb?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GDB
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gdscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GDScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gedcom?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GEDCOM
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gemfile.lock?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gemfile.lock
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gemini?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gemini
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/genero-4gl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Genero 4gl
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/genero-per?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Genero per
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/genie?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Genie
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/genshi?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Genshi
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gentoo-ebuild?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gentoo Ebuild
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gentoo-eclass?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gentoo Eclass
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gerber-image?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gerber Image
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gettext-catalog?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gettext Catalog
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gherkin?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gherkin
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/git-attributes?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Git Attributes
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/git-config?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Git Config
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/git-revision-list?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Git Revision List
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gleam?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gleam
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/glimmer-js?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Glimmer JS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/glsl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GLSL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/glyph?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Glyph
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/glyph-bitmap-distribution-format?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Glyph Bitmap Distribution Format
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gn?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GN
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gnuplot?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gnuplot
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/go?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Go
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/go-checksums?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Go Checksums
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/go-module?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Go Module
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/go-workspace?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Go Workspace
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/godot-resource?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Godot Resource
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/golo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Golo
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gosu?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gosu
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/grace?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Grace
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gradle?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gradle
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gradle-kotlin-dsl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Gradle Kotlin DSL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/grammatical-framework?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Grammatical Framework
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/graph-modeling-language?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Graph Modeling Language
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/graphql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GraphQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/graphviz-(dot)?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Graphviz (DOT)
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/groovy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Groovy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/groovy-server-pages?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Groovy Server Pages
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/gsc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              GSC
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hack?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Hack
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/haml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Haml
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/handlebars?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Handlebars
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/haproxy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HAProxy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/harbour?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Harbour
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/haskell?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Haskell
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/haxe?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Haxe
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hcl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HCL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hiveql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HiveQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hlsl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HLSL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hocon?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HOCON
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/holyc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HolyC
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hoon?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              hoon
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hosts-file?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Hosts File
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/html?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HTML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jinja?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jinja
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/html+ecr?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HTML+ECR
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/html+eex?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HTML+EEX
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/html+erb?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HTML+ERB
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/html+php?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HTML+PHP
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/html+razor?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HTML+Razor
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/http?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HTTP
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hxml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HXML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Hy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/hyphy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              HyPhy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/idl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              IDL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/idris?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Idris
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ignore-list?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ignore List
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/igor-pro?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              IGOR Pro
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/imagej-macro?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ImageJ Macro
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/imba?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Imba
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/inform-7?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Inform 7
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ini?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              INI
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ink?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ink
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/inno-setup?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Inno Setup
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/io?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Io
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ioke?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ioke
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/irc-log?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              IRC log
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/isabelle?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Isabelle
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/isabelle-root?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Isabelle ROOT
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/j?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              J
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/janet?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Janet
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jar-manifest?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JAR Manifest
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jasmin?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jasmin
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/java?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Java
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/java-properties?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Java Properties
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/java-server-pages?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Java Server Pages
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/javascript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JavaScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/javascript+erb?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JavaScript+ERB
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jcl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JCL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jest-snapshot?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jest Snapshot
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jetbrains-mps?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JetBrains MPS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jflex?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JFlex
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jinja?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jinja
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jison?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jison
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jison-lex?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jison Lex
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jolie?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jolie
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jq?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              jq
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/json?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JSON
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/json-with-comments?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JSON with Comments
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/json5?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JSON5
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jsoniq?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JSONiq
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jsonld?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              JSONLD
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jsonnet?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jsonnet
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/julia?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Julia
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/jupyter-notebook?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Jupyter Notebook
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/just?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Just
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kaitai-struct?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kaitai Struct
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kakounescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              KakouneScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kerboscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              KerboScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kicad-layout?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              KiCad Layout
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kicad-legacy-layout?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              KiCad Legacy Layout
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kicad-schematic?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              KiCad Schematic
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kickstart?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kickstart
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kit?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kit
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kotlin?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kotlin
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/krl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              KRL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kusto?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Kusto
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/kvlang?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              kvlang
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/labview?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LabVIEW
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lark?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lark
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lasso?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lasso
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/latte?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Latte
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lean?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lean
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lean-4?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lean 4
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/less?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Less
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lex?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lex
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lfe?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LFE
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ligolang?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LigoLANG
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lilypond?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LilyPond
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/limbo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Limbo
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/linker-script?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Linker Script
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/linux-kernel-module?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Linux Kernel Module
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/liquid?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Liquid
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/literate-agda?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Literate Agda
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/literate-coffeescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Literate CoffeeScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/literate-haskell?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Literate Haskell
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/livescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LiveScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/llvm?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LLVM
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/logos?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Logos
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/logtalk?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Logtalk
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lolcode?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LOLCODE
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lookml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LookML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/loomscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LoomScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lsl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LSL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ltspice-symbol?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              LTspice Symbol
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/lua?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Lua
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/m?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              M
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/m4?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              M4
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/m4sugar?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              M4Sugar
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/macaulay2?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Macaulay2
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/makefile?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Makefile
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mako?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mako
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/markdown?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Markdown
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/marko?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Marko
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mask?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mask
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mathematica?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mathematica
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/matlab?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MATLAB
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/maven-pom?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Maven POM
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/max?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Max
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/maxscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MAXScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mcfunction?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              mcfunction
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mdx?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MDX
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wikitext?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Wikitext
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mercury?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mercury
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mermaid?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mermaid
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/meson?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Meson
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/metal?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Metal
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/microsoft-developer-studio-project?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Microsoft Developer Studio Project
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/microsoft-visual-studio-solution?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Microsoft Visual Studio Solution
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/minid?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MiniD
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/miniyaml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MiniYAML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mint?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mint
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mirah?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mirah
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mirc-script?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              mIRC Script
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mlir?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MLIR
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/modelica?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Modelica
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/modula-2?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Modula-2
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/modula-3?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Modula-3
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/module-management-system?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Module Management System
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mojo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mojo
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/monkey?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Monkey
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/monkey-c?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Monkey C
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/moocode?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Moocode
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/moonscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MoonScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/motoko?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Motoko
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/motorola-68k-assembly?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Motorola 68K Assembly
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/move?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Move
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mql4?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MQL4
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mql5?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MQL5
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mtml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MTML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/muf?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              MUF
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mupad?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              mupad
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/muse?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Muse
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/mustache?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Mustache
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/myghty?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Myghty
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nanorc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              nanorc
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nasal?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nasal
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nasl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NASL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ncl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NCL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nearley?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nearley
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nemerle?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nemerle
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/neon?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NEON
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nesc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              nesC
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/netlinx?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NetLinx
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/netlinx+erb?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NetLinx+ERB
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/netlogo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NetLogo
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/newlisp?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NewLisp
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nextflow?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nextflow
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nginx?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nginx
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nim?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nim
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ninja?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ninja
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nit?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nit
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nix?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nix
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/npm-config?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NPM Config
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nsis?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NSIS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nu?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nu
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/numpy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NumPy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nunjucks?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nunjucks
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nushell?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Nushell
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/nwscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              NWScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/oasv2-json?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OASv2-json
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/oasv2-yaml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OASv2-yaml
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/oasv3-json?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OASv3-json
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/oasv3-yaml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OASv3-yaml
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/oberon?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Oberon
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/objdump?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ObjDump
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/object-data-instance-notation?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Object Data Instance Notation
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/objective-c?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Objective-C
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/objective-c++?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Objective-C++
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/objective-j?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Objective-J
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/objectscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ObjectScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ocaml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OCaml
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/odin?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Odin
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/omgrofl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Omgrofl
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ooc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ooc
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/opa?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Opa
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/opal?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Opal
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/open-policy-agent?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Open Policy Agent
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/openapi-specification-v2?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenAPI Specification v2
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/openapi-specification-v3?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenAPI Specification v3
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/opencl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenCL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/openedge-abl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenEdge ABL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/openqasm?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenQASM
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/openrc-runscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenRC runscript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/openscad?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenSCAD
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/openstep-property-list?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenStep Property List
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/opentype-feature-file?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              OpenType Feature File
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/option-list?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Option List
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/org?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Org
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ox?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ox
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/oxygene?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Oxygene
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/oz?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Oz
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/p4?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              P4
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pact?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pact
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pan?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pan
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/papyrus?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Papyrus
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/parrot?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Parrot
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/parrot-assembly?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Parrot Assembly
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/parrot-internal-representation?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Parrot Internal Representation
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pascal?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pascal
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pawn?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pawn
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pddl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PDDL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/peg.js?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PEG.js
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pep8?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pep8
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/perl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Perl
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/php?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PHP
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pic?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pic
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pickle?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pickle
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/picolisp?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PicoLisp
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/piglatin?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PigLatin
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pike?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pike
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pip-requirements?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pip Requirements
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/plantuml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PlantUML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/plpgsql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PLpgSQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/plsql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PLSQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pod?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pod
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pod-6?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pod 6
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pogoscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PogoScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/polar?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Polar
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pony?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pony
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/portugol?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Portugol
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/postcss?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PostCSS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/postscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PostScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pov-ray-sdl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              POV-Ray SDL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/powerbuilder?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PowerBuilder
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/powershell?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PowerShell
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/praat?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Praat
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/prisma?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Prisma
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/processing?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Processing
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/procfile?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Procfile
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/proguard?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Proguard
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/prolog?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Prolog
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/promela?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Promela
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/propeller-spin?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Propeller Spin
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/protocol-buffer?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Protocol Buffer
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/protocol-buffer-text-format?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Protocol Buffer Text Format
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/public-key?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Public Key
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pug?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pug
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/puppet?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Puppet
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pure-data?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pure Data
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/purebasic?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PureBasic
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/purescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              PureScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/pyret?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Pyret
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/python?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Python
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/python-console?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Python console
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/python-traceback?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Python traceback
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/q?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              q
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/q%23?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Q#
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/qmake?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              QMake
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/qml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              QML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/qt-script?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Qt Script
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/quake?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Quake
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/r?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              R
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/racket?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Racket
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ragel?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ragel
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/raku?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Raku
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/raml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RAML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rascal?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Rascal
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/raw-token-data?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Raw token data
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rbs?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RBS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rdoc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RDoc
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/readline-config?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Readline Config
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/realbasic?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              REALbasic
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/reason?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Reason
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/reasonligo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ReasonLIGO
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rebol?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Rebol
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/record-jar?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Record Jar
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/red?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Red
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/redcode?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Redcode
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/redirect-rules?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Redirect Rules
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/regular-expression?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Regular Expression
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ren&#39;py?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ren&#39;Py
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/renderscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RenderScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ReScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/restructuredtext?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              reStructuredText
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rexx?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              REXX
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rez?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Rez
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rich-text-format?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Rich Text Format
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ring?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ring
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/riot?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Riot
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rmarkdown?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RMarkdown
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/robotframework?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RobotFramework
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/robots.txt?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              robots.txt
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/roc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Roc
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/roff?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Roff
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/roff-manpage?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Roff Manpage
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rouge?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Rouge
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/routeros-script?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RouterOS Script
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rpc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RPC
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rpgle?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RPGLE
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rpm-spec?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RPM Spec
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ruby?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Ruby
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/runoff?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              RUNOFF
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/rust?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Rust
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sage?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sage
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/saltstack?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SaltStack
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sas?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SAS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sass?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sass
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/scala?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Scala
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/scaml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Scaml
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/scenic?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Scenic
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/scheme?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Scheme
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/scilab?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Scilab
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/scss?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SCSS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sed?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              sed
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/self?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Self
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/selinux-policy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SELinux Policy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/shaderlab?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ShaderLab
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/shell?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Shell
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/shellcheck-config?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ShellCheck Config
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/shellsession?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ShellSession
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/shen?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Shen
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sieve?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sieve
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/simple-file-verification?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Simple File Verification
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/singularity?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Singularity
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/slash?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Slash
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/slice?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Slice
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/slim?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Slim
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/slint?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Slint
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/smali?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Smali
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/smalltalk?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Smalltalk
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/smarty?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Smarty
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/smithy?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Smithy
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/smpl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SmPL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/smt?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SMT
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/snakemake?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Snakemake
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/solidity?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Solidity
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/soong?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Soong
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sourcepawn?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SourcePawn
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sparql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SPARQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/spline-font-database?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Spline Font Database
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sqf?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SQF
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sqlpl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SQLPL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/squirrel?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Squirrel
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/srecode-template?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SRecode Template
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ssh-config?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SSH Config
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/stan?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Stan
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/standard-ml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Standard ML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/star?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              STAR
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/starlark?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Starlark
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/stata?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Stata
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/stl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              STL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ston?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              STON
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/stringtemplate?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              StringTemplate
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/stylus?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Stylus
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/subrip-text?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SubRip Text
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sugarss?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SugarSS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/supercollider?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SuperCollider
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/svelte?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Svelte
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/svg?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SVG
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sway?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sway
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/sweave?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Sweave
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/swift?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Swift
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/swig?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SWIG
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/systemverilog?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              SystemVerilog
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/talon?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Talon
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tcl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tcl
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tcsh?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tcsh
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tea?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Tea
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/terra?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Terra
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/terraform-template?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Terraform Template
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tex?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TeX
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/texinfo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Texinfo
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/text?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Text
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/textile?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Textile
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/textmate-properties?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TextMate Properties
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/thrift?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Thrift
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/ti-program?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TI Program
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tl-verilog?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TL-Verilog
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tla?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TLA
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/toit?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Toit
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/toml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TOML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tsql?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TSQL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tsv?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TSV
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/tsx?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TSX
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/turing?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Turing
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/turtle?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Turtle
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/twig?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Twig
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/txl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TXL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/type-language?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Type Language
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/typescript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              TypeScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/typst?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Typst
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/unified-parallel-c?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Unified Parallel C
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/unity3d-asset?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Unity3D Asset
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/unix-assembly?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Unix Assembly
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/uno?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Uno
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/unrealscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              UnrealScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/urweb?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              UrWeb
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/v?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              V
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vala?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Vala
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/valve-data-format?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Valve Data Format
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vba?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              VBA
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vbscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              VBScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vcl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              VCL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/velocity-template-language?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Velocity Template Language
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/verilog?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Verilog
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vhdl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              VHDL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vim-help-file?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Vim Help File
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vim-script?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Vim Script
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vim-snippet?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Vim Snippet
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/visual-basic-.net?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Visual Basic .NET
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/visual-basic-.net?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Visual Basic .NET
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/visual-basic-6.0?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Visual Basic 6.0
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/volt?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Volt
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vue?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Vue
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/vyper?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Vyper
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wavefront-material?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Wavefront Material
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wavefront-object?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Wavefront Object
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wdl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              WDL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/web-ontology-language?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Web Ontology Language
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/webassembly?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              WebAssembly
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/webassembly-interface-type?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              WebAssembly Interface Type
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/webidl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              WebIDL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/webvtt?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              WebVTT
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wget-config?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Wget Config
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wgsl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              WGSL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/whiley?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Whiley
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wikitext?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Wikitext
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/win32-message-file?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Win32 Message File
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/windows-registry-entries?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Windows Registry Entries
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wisp?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              wisp
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/witcher-script?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Witcher Script
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wollok?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Wollok
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/world-of-warcraft-addon-data?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              World of Warcraft Addon Data
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/wren?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Wren
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/x-bitmap?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              X BitMap
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/x-font-directory-index?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              X Font Directory Index
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/x-pixmap?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              X PixMap
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/x10?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              X10
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xbase?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              xBase
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XC
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xcompose?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XCompose
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xml-property-list?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XML Property List
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xojo?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Xojo
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xonsh?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Xonsh
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xpages?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XPages
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xproc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XProc
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xquery?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XQuery
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xs?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XS
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xslt?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              XSLT
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/xtend?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Xtend
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/yacc?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Yacc
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/yaml?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              YAML
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/yang?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              YANG
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/yara?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              YARA
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/yasnippet?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              YASnippet
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/yul?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Yul
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/zap?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ZAP
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/zeek?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Zeek
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/zenscript?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ZenScript
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/zephir?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Zephir
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/zig?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Zig
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/zil?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              ZIL
</span></a>          <a aria-checked="false" data-pjax="" role="menuitemradio" href="/trending/zimpl?since=daily" data-view-component="true" class="select-menu-item Link">

            <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
              Zimpl
</span></a>      </div>
    </div>
    <div class="select-menu-loading-overlay" aria-label="Loading">
      <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
    </div>
  </details-menu>
</details>

        </div>

        <div>
          <details
  class="details-reset details-overlay select-menu select-menu-modal-right hx_rsm hx_rsm--auto-height"
  id="select-menu-date"
>
    <summary data-view-component="true" class="select-menu-button btn-link">    Date range:

    <span data-menu-button="" data-view-component="true" class="text-bold">
      Today
</span>
</summary>
  <details-menu class="select-menu-modal position-absolute right-0" style="z-index: 99;">
    <div class="select-menu-header">
      <span data-view-component="true" class="select-menu-title">
        Adjust time span
</span>
      <button data-toggle-for="select-menu-date" aria-label="Close menu" type="button" data-view-component="true" class="close-button hx_rsm-close-button btn-link d-none ml-2"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>

    <div class="select-menu-list">
        <a aria-checked="false" data-pjax="" role="menuitemradio" href="https://github.com/trending?since=daily" data-view-component="true" class="select-menu-item Link">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check select-menu-item-icon">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>

          <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
            Today
</span></a>        <a aria-checked="false" data-pjax="" role="menuitemradio" href="https://github.com/trending?since=weekly" data-view-component="true" class="select-menu-item Link">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check select-menu-item-icon">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>

          <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
            This week
</span></a>        <a aria-checked="false" data-pjax="" role="menuitemradio" href="https://github.com/trending?since=monthly" data-view-component="true" class="select-menu-item Link">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check select-menu-item-icon">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>

          <span data-menu-button-text="" data-view-component="true" class="select-menu-item-text">
            This month
</span></a>    </div>
  </details-menu>
</details>

        </div>
      </div>
    </div>

    <div data-hpc>
          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2FHigherOrderCO%2FBend" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:684776900,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4613b5863e98d72f0439c1cf5f1390d8ef329c25a452da26104edf4384f3c7f4" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:684776900,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="c5c80687babade2d6b0af6af99297413df4466f6ca9897d7592b1c12302681a3" href="/HigherOrderCO/Bend" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        HigherOrderCO /
</span>
      Bend
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      A massively parallel, high-level programming language
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #dea584"></span>
  <span itemprop="programmingLanguage">Rust</span>
</span>


      <a href="/HigherOrderCO/Bend/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        11,786
</a>
      <a href="/HigherOrderCO/Bend/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        296
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:1044010}}" data-hydro-click-hmac="cdf8de2b0c3f787fcd6636b60b1237c1d7bb86ac75cfb48b2507b22eeac331ca" data-hovercard-type="user" data-hovercard-url="/users/developedby/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/developedby"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/4893601?s=40&amp;v=4" width="20" height="20" alt="@developedby" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:1044010}}" data-hydro-click-hmac="cdf8de2b0c3f787fcd6636b60b1237c1d7bb86ac75cfb48b2507b22eeac331ca" data-hovercard-type="user" data-hovercard-url="/users/imaqtkatt/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/imaqtkatt"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/135721694?s=40&amp;v=4" width="20" height="20" alt="@imaqtkatt" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:1044010}}" data-hydro-click-hmac="cdf8de2b0c3f787fcd6636b60b1237c1d7bb86ac75cfb48b2507b22eeac331ca" data-hovercard-type="user" data-hovercard-url="/users/LunaAmora/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/LunaAmora"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/19491161?s=40&amp;v=4" width="20" height="20" alt="@LunaAmora" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:1044010}}" data-hydro-click-hmac="cdf8de2b0c3f787fcd6636b60b1237c1d7bb86ac75cfb48b2507b22eeac331ca" data-hovercard-type="user" data-hovercard-url="/users/VictorTaelin/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/VictorTaelin"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/13090166?s=40&amp;v=4" width="20" height="20" alt="@VictorTaelin" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:1044010}}" data-hydro-click-hmac="cdf8de2b0c3f787fcd6636b60b1237c1d7bb86ac75cfb48b2507b22eeac331ca" data-hovercard-type="user" data-hovercard-url="/users/tjjfvi/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/tjjfvi"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/44031566?s=40&amp;v=4" width="20" height="20" alt="@tjjfvi" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        2,666 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">
      <a href="/sponsors/neovim" aria-label="Sponsor @neovim" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;TRENDING_REPO_SPONSOR&quot;,&quot;sponsorable_login&quot;:&quot;neovim&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="187ac9fef6a67b29b4e2d2b1153a7622b466a74c53ef5a1aa4ed501ffb998164" data-view-component="true" class="Button--secondary Button--small Button mr-2">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-0 mr-md-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
    <span class="d-none d-md-inline v-align-middle" >
      Sponsor
    </span></span>
  </span>
</a>


      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fneovim%2Fneovim" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:16408992,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="078b2da4d462c3d08018a55cff004016fe4031f4ac7c8f2b152d9e676b4811b2" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:16408992,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="a95dc1215f807847a2623b0d167b4388540ace54843ce16944d8672f4832dec5" href="/neovim/neovim" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        neovim /
</span>
      neovim
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Vim-fork focused on extensibility and usability
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #199f4b"></span>
  <span itemprop="programmingLanguage">Vim Script</span>
</span>


      <a href="/neovim/neovim/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        77,970
</a>
      <a href="/neovim/neovim/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        5,384
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:41987730}}" data-hydro-click-hmac="bfd4a7a8b01383af6007afa3d60cee2944d56cf7599eaa7925a2397261365002" data-hovercard-type="user" data-hovercard-url="/users/justinmk/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/justinmk"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/1359421?s=40&amp;v=4" width="20" height="20" alt="@justinmk" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:41987730}}" data-hydro-click-hmac="bfd4a7a8b01383af6007afa3d60cee2944d56cf7599eaa7925a2397261365002" data-hovercard-type="user" data-hovercard-url="/users/zeertzjq/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/zeertzjq"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/35768171?s=40&amp;v=4" width="20" height="20" alt="@zeertzjq" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:41987730}}" data-hydro-click-hmac="bfd4a7a8b01383af6007afa3d60cee2944d56cf7599eaa7925a2397261365002" data-hovercard-type="user" data-hovercard-url="/users/janlazo/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/janlazo"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/8740057?s=40&amp;v=4" width="20" height="20" alt="@janlazo" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:41987730}}" data-hydro-click-hmac="bfd4a7a8b01383af6007afa3d60cee2944d56cf7599eaa7925a2397261365002" data-hovercard-type="user" data-hovercard-url="/users/bfredl/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/bfredl"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/1363104?s=40&amp;v=4" width="20" height="20" alt="@bfredl" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:41987730}}" data-hydro-click-hmac="bfd4a7a8b01383af6007afa3d60cee2944d56cf7599eaa7925a2397261365002" data-hovercard-type="user" data-hovercard-url="/users/ZyX-I/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ZyX-I"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/322097?s=40&amp;v=4" width="20" height="20" alt="@ZyX-I" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        198 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">
      <a href="/sponsors/adrianhajdin" aria-label="Sponsor @adrianhajdin" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;TRENDING_REPO_SPONSOR&quot;,&quot;sponsorable_login&quot;:&quot;adrianhajdin&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="32cf0a638e5eb6ca63b379be069dd4c06013eb91df3b733770e4a1e31729635e" data-view-component="true" class="Button--secondary Button--small Button mr-2">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-0 mr-md-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
    <span class="d-none d-md-inline v-align-middle" >
      Sponsor
    </span></span>
  </span>
</a>


      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fadrianhajdin%2Fportfolio" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:798759510,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4738220501e3773b0f01cd62563e0c589896a9c29892805d74f033357ccc3b06" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:798759510,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8e0fe3e9710241413c3d5ca6a0cbc3154e5c024c45b2f44ff65b4bba092907e2" href="/adrianhajdin/portfolio" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        adrianhajdin /
</span>
      portfolio
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Modern &amp; Minimal JS Mastery Portfolio
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #3178c6"></span>
  <span itemprop="programmingLanguage">TypeScript</span>
</span>


      <a href="/adrianhajdin/portfolio/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        565
</a>
      <a href="/adrianhajdin/portfolio/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        99
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/sujatagunale/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sujatagunale"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/151519281?s=40&amp;v=4" width="20" height="20" alt="@sujatagunale" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/adrianhajdin/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/adrianhajdin"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/24898559?s=40&amp;v=4" width="20" height="20" alt="@adrianhajdin" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        178 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2FTheOfficialFloW%2FPPPwn" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:794185166,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6c6a569ed395a26575fd1ca302de104ea97ff4a0e000b4c1abb294602dd3915d" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:794185166,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="be543bcdd313599a0d291b380c3fb07b7ce5bd192c62df880e4ec7478457894f" href="/TheOfficialFloW/PPPwn" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        TheOfficialFloW /
</span>
      PPPwn
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      PPPwn - PlayStation 4 PPPoE RCE
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #3572A5"></span>
  <span itemprop="programmingLanguage">Python</span>
</span>


      <a href="/TheOfficialFloW/PPPwn/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        2,065
</a>
      <a href="/TheOfficialFloW/PPPwn/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        317
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/TheOfficialFloW/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/TheOfficialFloW"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/14246466?s=40&amp;v=4" width="20" height="20" alt="@TheOfficialFloW" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/iMrDJAi/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/iMrDJAi"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/42304709?s=40&amp;v=4" width="20" height="20" alt="@iMrDJAi" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/jakiki6/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jakiki6"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/52753282?s=40&amp;v=4" width="20" height="20" alt="@jakiki6" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/kmeps4/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kmeps4"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/77245601?s=40&amp;v=4" width="20" height="20" alt="@kmeps4" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/W-i-n-7/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/W-i-n-7"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/90262580?s=40&amp;v=4" width="20" height="20" alt="@W-i-n-7" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        107 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fmassgravel%2FMicrosoft-Activation-Scripts" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:233472199,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b8fca57fe7c5d7c8f5c5d1189162d1857e843e77b2f9ed9664818271343920d6" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:233472199,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b012354ee59befbb1a93aee26e1a48bcfb202931b7b944875241da4b882207c8" href="/massgravel/Microsoft-Activation-Scripts" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        massgravel /
</span>
      Microsoft-Activation-Scripts
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      A Windows and Office activator using HWID / Ohook / KMS38 / Online KMS activation methods, with a focus on open-source code and fewer antivirus detections.
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #C1F12E"></span>
  <span itemprop="programmingLanguage">Batchfile</span>
</span>


      <a href="/massgravel/Microsoft-Activation-Scripts/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        79,545
</a>
      <a href="/massgravel/Microsoft-Activation-Scripts/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        7,757
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:90523111}}" data-hydro-click-hmac="391f739d0cbc401c0ba745c5f6d17e751807bd4231a85a6380b1d373487f3ef1" data-hovercard-type="user" data-hovercard-url="/users/WindowsAddict/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/WindowsAddict"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/40813939?s=40&amp;v=4" width="20" height="20" alt="@WindowsAddict" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:90523111}}" data-hydro-click-hmac="391f739d0cbc401c0ba745c5f6d17e751807bd4231a85a6380b1d373487f3ef1" data-hovercard-type="user" data-hovercard-url="/users/mspaintmsi/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mspaintmsi"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/41545165?s=40&amp;v=4" width="20" height="20" alt="@mspaintmsi" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:90523111}}" data-hydro-click-hmac="391f739d0cbc401c0ba745c5f6d17e751807bd4231a85a6380b1d373487f3ef1" data-hovercard-type="user" data-hovercard-url="/users/BandhiyaHardik/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/BandhiyaHardik"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/110784317?s=40&amp;v=4" width="20" height="20" alt="@BandhiyaHardik" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:90523111}}" data-hydro-click-hmac="391f739d0cbc401c0ba745c5f6d17e751807bd4231a85a6380b1d373487f3ef1" data-hovercard-type="user" data-hovercard-url="/users/KomashiFX/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/KomashiFX"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/54118714?s=40&amp;v=4" width="20" height="20" alt="@KomashiFX" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:90523111}}" data-hydro-click-hmac="391f739d0cbc401c0ba745c5f6d17e751807bd4231a85a6380b1d373487f3ef1" data-hovercard-type="user" data-hovercard-url="/users/nekoppai/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/nekoppai"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/109633131?s=40&amp;v=4" width="20" height="20" alt="@nekoppai" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        164 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Finitia-labs%2Finitia" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:703964262,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="266dbb42ad89c54cf1475b86c9e6e09d1ef50af87435194cec4cf75fe8a5ca63" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:703964262,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="552a67f83897beb5da1e1954c79afae3d5f1f37092ce0f7a2ea092322efc2b66" href="/initia-labs/initia" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        initia-labs /
</span>
      initia
</a>  </h2>


  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #00ADD8"></span>
  <span itemprop="programmingLanguage">Go</span>
</span>


      <a href="/initia-labs/initia/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        88
</a>
      <a href="/initia-labs/initia/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        100
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1624b778276e789a4b952f4f024b178ca5826544f935e57298c1d5b6ad8c3665" data-hovercard-type="user" data-hovercard-url="/users/beer-1/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/beer-1"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/147697694?s=40&amp;v=4" width="20" height="20" alt="@beer-1" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1624b778276e789a4b952f4f024b178ca5826544f935e57298c1d5b6ad8c3665" data-hovercard-type="user" data-hovercard-url="/users/Vritra4/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Vritra4"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/11830048?s=40&amp;v=4" width="20" height="20" alt="@Vritra4" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1624b778276e789a4b952f4f024b178ca5826544f935e57298c1d5b6ad8c3665" data-hovercard-type="user" data-hovercard-url="/users/sh-cha/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sh-cha"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/48665813?s=40&amp;v=4" width="20" height="20" alt="@sh-cha" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1624b778276e789a4b952f4f024b178ca5826544f935e57298c1d5b6ad8c3665" data-hovercard-type="user" data-hovercard-url="/users/ALPAC-4/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ALPAC-4"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/81249838?s=40&amp;v=4" width="20" height="20" alt="@ALPAC-4" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1624b778276e789a4b952f4f024b178ca5826544f935e57298c1d5b6ad8c3665" data-hovercard-type="user" data-hovercard-url="/users/Eric-Warehime/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Eric-Warehime"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/10753834?s=40&amp;v=4" width="20" height="20" alt="@Eric-Warehime" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        13 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2FLayerZero-Labs%2Fsybil-report" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:800182815,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6cd010ad775c5743416497eb9a73b34e77603fb7fdc675136eae891a5506e806" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:800182815,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="bfafe78f1b16e1131d6479ddfd83510993b1cd93704f19a145165eca663fcaa7" href="/LayerZero-Labs/sybil-report" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        LayerZero-Labs /
</span>
      sybil-report
</a>  </h2>


  <div class="f6 color-fg-muted mt-2">

      <a href="/LayerZero-Labs/sybil-report/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        240
</a>
      <a href="/LayerZero-Labs/sybil-report/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        160
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/LayerZero-GH/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/LayerZero-GH"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/131821301?s=40&amp;v=4" width="20" height="20" alt="@LayerZero-GH" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        34 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fmendableai%2Ffirecrawl" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:787076358,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f2f7a4ff949aedaa290b54bb05ff5c5a3e411a7e5a4f43a2a35e8c41b35bce8b" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:787076358,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8a7ac87fb358c13fdc7b643095d951db37d85f9fa3b125caaec0ae40f93bb4ab" href="/mendableai/firecrawl" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        mendableai /
</span>
      firecrawl
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #3178c6"></span>
  <span itemprop="programmingLanguage">TypeScript</span>
</span>


      <a href="/mendableai/firecrawl/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        3,791
</a>
      <a href="/mendableai/firecrawl/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        283
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/nickscamara/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/nickscamara"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/20311743?s=40&amp;v=4" width="20" height="20" alt="@nickscamara" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/rafaelsideguide/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/rafaelsideguide"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/150964962?s=40&amp;v=4" width="20" height="20" alt="@rafaelsideguide" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/calebpeffer/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/calebpeffer"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/44934913?s=40&amp;v=4" width="20" height="20" alt="@calebpeffer" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/chand1012/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/chand1012"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/3521582?s=40&amp;v=4" width="20" height="20" alt="@chand1012" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/szepeviktor/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/szepeviktor"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/952007?s=40&amp;v=4" width="20" height="20" alt="@szepeviktor" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        260 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">
      <a href="/sponsors/mainmatter" aria-label="Sponsor @mainmatter" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;TRENDING_REPO_SPONSOR&quot;,&quot;sponsorable_login&quot;:&quot;mainmatter&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4bdb6b020d85307a978923735b4d47e260b19228882e790494d445ade19726b2" data-view-component="true" class="Button--secondary Button--small Button mr-2">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-0 mr-md-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
    <span class="d-none d-md-inline v-align-middle" >
      Sponsor
    </span></span>
  </span>
</a>


      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fmainmatter%2F100-exercises-to-learn-rust" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:799669968,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8ba4e48129f8f1fa90eaccb57b82939a25d360ad4a0c2d06a388b1ba134a667a" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:799669968,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8b898a25e3bdfae5b1f5666c60ffdd1fb298f51ceac11789a8c1b96354e38f94" href="/mainmatter/100-exercises-to-learn-rust" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        mainmatter /
</span>
      100-exercises-to-learn-rust
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      A self-paced course to learn Rust, one exercise at a time.
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #dea584"></span>
  <span itemprop="programmingLanguage">Rust</span>
</span>


      <a href="/mainmatter/100-exercises-to-learn-rust/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        1,562
</a>
      <a href="/mainmatter/100-exercises-to-learn-rust/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        208
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162758943}}" data-hydro-click-hmac="9ec12958072ffcc4513f2bfed15b4a79dd68797e2129298f9ac3597637328665" data-hovercard-type="user" data-hovercard-url="/users/LukeMathWalker/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/LukeMathWalker"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/20745048?s=40&amp;v=4" width="20" height="20" alt="@LukeMathWalker" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162758943}}" data-hydro-click-hmac="9ec12958072ffcc4513f2bfed15b4a79dd68797e2129298f9ac3597637328665" data-hovercard-type="user" data-hovercard-url="/users/Sh099078/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Sh099078"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/16464925?s=40&amp;v=4" width="20" height="20" alt="@Sh099078" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162758943}}" data-hydro-click-hmac="9ec12958072ffcc4513f2bfed15b4a79dd68797e2129298f9ac3597637328665" data-hovercard-type="user" data-hovercard-url="/users/ehershey/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ehershey"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/286008?s=40&amp;v=4" width="20" height="20" alt="@ehershey" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162758943}}" data-hydro-click-hmac="9ec12958072ffcc4513f2bfed15b4a79dd68797e2129298f9ac3597637328665" data-hovercard-type="user" data-hovercard-url="/users/woju/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/woju"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/1550337?s=40&amp;v=4" width="20" height="20" alt="@woju" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162758943}}" data-hydro-click-hmac="9ec12958072ffcc4513f2bfed15b4a79dd68797e2129298f9ac3597637328665" data-hovercard-type="user" data-hovercard-url="/users/phmx/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/phmx"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/2445500?s=40&amp;v=4" width="20" height="20" alt="@phmx" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        499 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">
      <a href="/sponsors/KAYOKG" aria-label="Sponsor @KAYOKG" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;TRENDING_REPO_SPONSOR&quot;,&quot;sponsorable_login&quot;:&quot;KAYOKG&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="78740f57c8962b017bbc71238f2735c9517cc58f354941393fd273a95ff96eaa" data-view-component="true" class="Button--secondary Button--small Button mr-2">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-0 mr-md-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
    <span class="d-none d-md-inline v-align-middle" >
      Sponsor
    </span></span>
  </span>
</a>


      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2FKAYOKG%2FBibliotecaDev" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:627677288,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="01378190a0080b41e6c47311bedc69dc1e3d0256c0e6722e1c14ef93545aee15" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:627677288,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="428a1b47e474df6918d8d39a564774c9314a17727f35ddc2595e63c20d4281a4" href="/KAYOKG/BibliotecaDev" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        KAYOKG /
</span>
      BibliotecaDev
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      📚 Biblioteca de livros essenciais da área da programação.
    </p>

  <div class="f6 color-fg-muted mt-2">

      <a href="/KAYOKG/BibliotecaDev/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        2,284
</a>
      <a href="/KAYOKG/BibliotecaDev/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        403
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/KAYOKG/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/KAYOKG"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/98864503?s=40&amp;v=4" width="20" height="20" alt="@KAYOKG" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/SolarisSy/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SolarisSy"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/85815564?s=40&amp;v=4" width="20" height="20" alt="@SolarisSy" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/jpsoarxs/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jpsoarxs"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/49282011?s=40&amp;v=4" width="20" height="20" alt="@jpsoarxs" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/IgormBorba/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/IgormBorba"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/137915590?s=40&amp;v=4" width="20" height="20" alt="@IgormBorba" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        274 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">
      <a href="/sponsors/iluwatar" aria-label="Sponsor @iluwatar" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;TRENDING_REPO_SPONSOR&quot;,&quot;sponsorable_login&quot;:&quot;iluwatar&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1f074cac61217c069027f7e59957d18b1afd429a56e3ecb9af47685962f8ca46" data-view-component="true" class="Button--secondary Button--small Button mr-2">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-0 mr-md-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
    <span class="d-none d-md-inline v-align-middle" >
      Sponsor
    </span></span>
  </span>
</a>


      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Filuwatar%2Fjava-design-patterns" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:22790488,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="3e56d05d4bdf7be2fc6e929b32a43ad1d837e5dd396b85c276cc4a2ef25cbacd" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:22790488,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="3de44db2a654c02c788629dcd96b663836d1ea646568af40ae54b0d40865c73e" href="/iluwatar/java-design-patterns" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        iluwatar /
</span>
      java-design-patterns
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Design patterns implemented in Java
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #b07219"></span>
  <span itemprop="programmingLanguage">Java</span>
</span>


      <a href="/iluwatar/java-design-patterns/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        86,979
</a>
      <a href="/iluwatar/java-design-patterns/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        25,986
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/iluwatar/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/iluwatar"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/582346?s=40&amp;v=4" width="20" height="20" alt="@iluwatar" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" href="/apps/allcontributors"><img class="avatar mb-1" src="https://avatars.githubusercontent.com/in/23186?s=40&amp;v=4" width="20" height="20" alt="@allcontributors" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/npathai/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/npathai"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/1792515?s=40&amp;v=4" width="20" height="20" alt="@npathai" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/ohbus/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ohbus"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/13291222?s=40&amp;v=4" width="20" height="20" alt="@ohbus" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/mikulucky/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mikulucky"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/4526195?s=40&amp;v=4" width="20" height="20" alt="@mikulucky" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        168 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">
      <a href="/sponsors/Raphire" aria-label="Sponsor @Raphire" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;TRENDING_REPO_SPONSOR&quot;,&quot;sponsorable_login&quot;:&quot;Raphire&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8b966b3b955163b5773382b3ab217afcc5ff34d5642e9e100bdafad0a36a0859" data-view-component="true" class="Button--secondary Button--small Button mr-2">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-0 mr-md-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
    <span class="d-none d-md-inline v-align-middle" >
      Sponsor
    </span></span>
  </span>
</a>


      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2FRaphire%2FWin11Debloat" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:307843105,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="597300c8c47aeaa391bd8d6d3db7e6558dbe6fb3901e7a6de4304abd95490908" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:307843105,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6c914708860ac1a520d7b1327c79b7a7dd9ba5413515a40f35927d6508ae950a" href="/Raphire/Win11Debloat" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        Raphire /
</span>
      Win11Debloat
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      A simple, easy to use powershell script to remove bloatware apps from windows, disable telemetry, bing in windows search aswell as perform various other changes to declutter and improve your windows experience. This script works for both windows 10 and windows 11.
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #012456"></span>
  <span itemprop="programmingLanguage">PowerShell</span>
</span>


      <a href="/Raphire/Win11Debloat/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        3,273
</a>
      <a href="/Raphire/Win11Debloat/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        152
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/Raphire/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Raphire"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/9938813?s=40&amp;v=4" width="20" height="20" alt="@Raphire" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/loadstring1/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/loadstring1"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/156520308?s=40&amp;v=4" width="20" height="20" alt="@loadstring1" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/jasonpatrickellykrause/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jasonpatrickellykrause"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/8408603?s=40&amp;v=4" width="20" height="20" alt="@jasonpatrickellykrause" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/JMacIV/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/JMacIV"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/43364021?s=40&amp;v=4" width="20" height="20" alt="@JMacIV" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/DrbitsOFFICIAL/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/DrbitsOFFICIAL"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/151682543?s=40&amp;v=4" width="20" height="20" alt="@DrbitsOFFICIAL" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        223 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2FHigherOrderCO%2FHVM" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:443977141,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="32784e08cf640bc97def2412bf93c0246b8b7e6b8f221a0cd27b979771aabebe" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:443977141,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b301db90b3b354d4f488939d1024ebadc5f83fc7556ff2e23c65ca34d3cfdb0a" href="/HigherOrderCO/HVM" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        HigherOrderCO /
</span>
      HVM
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      A massively parallel, optimal functional runtime in Rust
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #3A4E3A"></span>
  <span itemprop="programmingLanguage">Cuda</span>
</span>


      <a href="/HigherOrderCO/HVM/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        9,590
</a>
      <a href="/HigherOrderCO/HVM/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        353
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/VictorTaelin/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/VictorTaelin"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/13090166?s=40&amp;v=4" width="20" height="20" alt="@VictorTaelin" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/kings177/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kings177"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/53550620?s=40&amp;v=4" width="20" height="20" alt="@kings177" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/developedby/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/developedby"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/4893601?s=40&amp;v=4" width="20" height="20" alt="@developedby" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/enricozb/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/enricozb"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/5505315?s=40&amp;v=4" width="20" height="20" alt="@enricozb" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/edusporto/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/edusporto"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/30930225?s=40&amp;v=4" width="20" height="20" alt="@edusporto" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        685 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Frasbt%2FLLMs-from-scratch" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:669879380,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="002bdb60a659caaa61b7f50b589ce50d345d5e3bfb909375a197a2408ae31242" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:669879380,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="806aad79f142cee874a82860758b0b777ab63f56b354ea568577e994b0be2c08" href="/rasbt/LLMs-from-scratch" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        rasbt /
</span>
      LLMs-from-scratch
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Implementing a ChatGPT-like LLM in PyTorch from scratch, step by step
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #DA5B0B"></span>
  <span itemprop="programmingLanguage">Jupyter Notebook</span>
</span>


      <a href="/rasbt/LLMs-from-scratch/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        16,679
</a>
      <a href="/rasbt/LLMs-from-scratch/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        1,528
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&amp;spoken_language_code=&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4717bd0c71d988bcc7bf4c264a5cca014b759aabf049d45fade418641a4cc2b4" data-hovercard-type="user" data-hovercard-url="/users/rasbt/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/rasbt"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/5618407?s=40&amp;v=4" width="20" height="20" alt="@rasbt" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&amp;spoken_language_code=&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4717bd0c71d988bcc7bf4c264a5cca014b759aabf049d45fade418641a4cc2b4" data-hovercard-type="user" data-hovercard-url="/users/d-kleine/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/d-kleine"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/53251018?s=40&amp;v=4" width="20" height="20" alt="@d-kleine" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&amp;spoken_language_code=&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4717bd0c71d988bcc7bf4c264a5cca014b759aabf049d45fade418641a4cc2b4" data-hovercard-type="user" data-hovercard-url="/users/Intelligence-Manifesto/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Intelligence-Manifesto"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/155522535?s=40&amp;v=4" width="20" height="20" alt="@Intelligence-Manifesto" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&amp;spoken_language_code=&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4717bd0c71d988bcc7bf4c264a5cca014b759aabf049d45fade418641a4cc2b4" data-hovercard-type="user" data-hovercard-url="/users/rayed-therap/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/rayed-therap"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/4649183?s=40&amp;v=4" width="20" height="20" alt="@rayed-therap" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending?since=daily&amp;spoken_language_code=&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4717bd0c71d988bcc7bf4c264a5cca014b759aabf049d45fade418641a4cc2b4" data-hovercard-type="user" data-hovercard-url="/users/eltociear/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/eltociear"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/22633385?s=40&amp;v=4" width="20" height="20" alt="@eltociear" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        71 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Frashadphz%2Ffarfalle" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:792039881,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7fcb7283afbc4a715511a032db80fd8eb7d75dc49bd755a32a558311140cb749" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:792039881,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="942c354cc60afbc8cf8d89531b6fdc13ec1a8b3134f6fa8e64f369dc85494051" href="/rashadphz/farfalle" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        rashadphz /
</span>
      farfalle
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      🔍 AI search engine - self-host with local or cloud LLMs
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #3178c6"></span>
  <span itemprop="programmingLanguage">TypeScript</span>
</span>


      <a href="/rashadphz/farfalle/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        657
</a>
      <a href="/rashadphz/farfalle/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        54
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/rashadphz/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/rashadphz"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/20783686?s=40&amp;v=4" width="20" height="20" alt="@rashadphz" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        296 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2FLazyVim%2FLazyVim" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:583706111,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7955e38f7937bd1731e99b8c775afba5ec441c23d68caad52aea625235accf24" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:583706111,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="3f86e48ca389e49f4199a09d1cbdccbb1c682efb22b1505a7b3d2b6fc0735ff6" href="/LazyVim/LazyVim" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        LazyVim /
</span>
      LazyVim
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Neovim config for the lazy
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #000080"></span>
  <span itemprop="programmingLanguage">Lua</span>
</span>


      <a href="/LazyVim/LazyVim/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        13,504
</a>
      <a href="/LazyVim/LazyVim/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        902
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:164135181}}" data-hydro-click-hmac="b853985f3ae0a9e984af5332d34b5a6f09f7c1b3c5dee5f51ea90ddd39a5b0f7" data-hovercard-type="user" data-hovercard-url="/users/folke/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/folke"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/292349?s=40&amp;v=4" width="20" height="20" alt="@folke" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:164135181}}" data-hydro-click-hmac="b853985f3ae0a9e984af5332d34b5a6f09f7c1b3c5dee5f51ea90ddd39a5b0f7" href="/apps/github-actions"><img class="avatar mb-1" src="https://avatars.githubusercontent.com/in/15368?s=40&amp;v=4" width="20" height="20" alt="@github-actions" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:164135181}}" data-hydro-click-hmac="b853985f3ae0a9e984af5332d34b5a6f09f7c1b3c5dee5f51ea90ddd39a5b0f7" data-hovercard-type="user" data-hovercard-url="/users/dpetka2001/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/dpetka2001"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/12776461?s=40&amp;v=4" width="20" height="20" alt="@dpetka2001" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:164135181}}" data-hydro-click-hmac="b853985f3ae0a9e984af5332d34b5a6f09f7c1b3c5dee5f51ea90ddd39a5b0f7" data-hovercard-type="user" data-hovercard-url="/users/amaanq/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/amaanq"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/29718261?s=40&amp;v=4" width="20" height="20" alt="@amaanq" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:164135181}}" data-hydro-click-hmac="b853985f3ae0a9e984af5332d34b5a6f09f7c1b3c5dee5f51ea90ddd39a5b0f7" data-hovercard-type="user" data-hovercard-url="/users/appelgriebsch/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/appelgriebsch"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/6803419?s=40&amp;v=4" width="20" height="20" alt="@appelgriebsch" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        128 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Farendst%2FTasmota" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:80286288,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9f732fd7c20b56b6e624b9c8086571c1f3fd9dbec0b3faed7f8e00f0489a448a" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:80286288,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="39a8f851112d9b2677f689c61dbfff182b008fd1e24225692e621e2c1164bbaa" href="/arendst/Tasmota" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        arendst /
</span>
      Tasmota
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Alternative firmware for ESP8266 and ESP32 based devices with easy configuration using webUI, OTA updates, automation using timers or rules, expandability and entirely local control over MQTT, HTTP, Serial or KNX. Full documentation at
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #555555"></span>
  <span itemprop="programmingLanguage">C</span>
</span>


      <a href="/arendst/Tasmota/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        21,535
</a>
      <a href="/arendst/Tasmota/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        4,685
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/arendst/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/arendst"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/11044339?s=40&amp;v=4" width="20" height="20" alt="@arendst" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/Jason2866/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Jason2866"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/24528715?s=40&amp;v=4" width="20" height="20" alt="@Jason2866" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/s-hadinger/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/s-hadinger"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/49731213?s=40&amp;v=4" width="20" height="20" alt="@s-hadinger" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/ascillato/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ascillato"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/35405447?s=40&amp;v=4" width="20" height="20" alt="@ascillato" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/gemu2015/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/gemu2015"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/11647075?s=40&amp;v=4" width="20" height="20" alt="@gemu2015" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        12 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fxbmc%2Fxbmc" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:1217614,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6dc3d5e28c77a370401aeabfe14ab95204561cc63255b16a763def8753655f22" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:1217614,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="0db7bce334867ec84df0c38a0cf4b38f8d346f63f8c89894e55b0436c136c1f7" href="/xbmc/xbmc" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        xbmc /
</span>
      xbmc
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Kodi is an award-winning free and open source home theater/media center software and entertainment hub for digital media. With its beautiful interface and powerful skinning engine, it's available for Android, BSD, Linux, macOS, iOS, tvOS and Windows.
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #f34b7d"></span>
  <span itemprop="programmingLanguage">C++</span>
</span>


      <a href="/xbmc/xbmc/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        17,715
</a>
      <a href="/xbmc/xbmc/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        6,243
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/ksooo/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ksooo"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/3226626?s=40&amp;v=4" width="20" height="20" alt="@ksooo" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/FernetMenta/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/FernetMenta"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/576009?s=40&amp;v=4" width="20" height="20" alt="@FernetMenta" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/Montellese/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Montellese"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/75864?s=40&amp;v=4" width="20" height="20" alt="@Montellese" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/MartijnKaijser/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MartijnKaijser"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/907436?s=40&amp;v=4" width="20" height="20" alt="@MartijnKaijser" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:162187285}}" data-hydro-click-hmac="583297fa4333313f55796062205a974b7d0d370186992c9a3d9a107855d8d1ad" data-hovercard-type="user" data-hovercard-url="/users/Memphiz/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Memphiz"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/701326?s=40&amp;v=4" width="20" height="20" alt="@Memphiz" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        16 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Ffolke%2Ftokyonight.nvim" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:358671583,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="fc8f5c3d2a76a66f41047f9c062e6cc8b06e92f48b11291e9e579877301c6115" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:358671583,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="eeed97b8f50862ff6ee77a13c6eac511051318c8a80d193571c561a2d7428a82" href="/folke/tokyonight.nvim" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        folke /
</span>
      tokyonight.nvim
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      🏙 A clean, dark Neovim theme written in Lua, with support for lsp, treesitter and lots of plugins. Includes additional themes for Kitty, Alacritty, iTerm and Fish.
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #000080"></span>
  <span itemprop="programmingLanguage">Lua</span>
</span>


      <a href="/folke/tokyonight.nvim/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        5,338
</a>
      <a href="/folke/tokyonight.nvim/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        352
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/folke/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/folke"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/292349?s=40&amp;v=4" width="20" height="20" alt="@folke" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" href="/apps/github-actions"><img class="avatar mb-1" src="https://avatars.githubusercontent.com/in/15368?s=40&amp;v=4" width="20" height="20" alt="@github-actions" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/amaanq/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/amaanq"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/29718261?s=40&amp;v=4" width="20" height="20" alt="@amaanq" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/stsewd/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/stsewd"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/4975310?s=40&amp;v=4" width="20" height="20" alt="@stsewd" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/wangl-cc/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/wangl-cc"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/40141251?s=40&amp;v=4" width="20" height="20" alt="@wangl-cc" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        23 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fbepass-org%2Foblivion-desktop" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:785129076,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="fbba4eb7f26868044cda2c4d04466b9113268b710cf73027dcc1308963ce6bb7" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:785129076,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="5cd51eb09362ffcf0ca9ee9443248c3a2917fb12af4d56399f1dda592a333a71" href="/bepass-org/oblivion-desktop" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        bepass-org /
</span>
      oblivion-desktop
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #3178c6"></span>
  <span itemprop="programmingLanguage">TypeScript</span>
</span>


      <a href="/bepass-org/oblivion-desktop/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        2,004
</a>
      <a href="/bepass-org/oblivion-desktop/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        236
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/ircfspace/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ircfspace"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/128790947?s=40&amp;v=4" width="20" height="20" alt="@ircfspace" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/kiomarzsss/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kiomarzsss"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/161816667?s=40&amp;v=4" width="20" height="20" alt="@kiomarzsss" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/Akimio521/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Akimio521"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/77880495?s=40&amp;v=4" width="20" height="20" alt="@Akimio521" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/eltociear/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/eltociear"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/22633385?s=40&amp;v=4" width="20" height="20" alt="@eltociear" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:5185590}}" data-hydro-click-hmac="775ab2ec68a636c0d5b4acbfc10ebf194a4254b1be3a907e0a18497bdf84089f" data-hovercard-type="user" data-hovercard-url="/users/seramo/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/seramo"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/23317510?s=40&amp;v=4" width="20" height="20" alt="@seramo" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        340 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">
      <a href="/sponsors/neovim" aria-label="Sponsor @neovim" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;TRENDING_REPO_SPONSOR&quot;,&quot;sponsorable_login&quot;:&quot;neovim&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="187ac9fef6a67b29b4e2d2b1153a7622b466a74c53ef5a1aa4ed501ffb998164" data-view-component="true" class="Button--secondary Button--small Button mr-2">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-0 mr-md-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
    <span class="d-none d-md-inline v-align-middle" >
      Sponsor
    </span></span>
  </span>
</a>


      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fneovim%2Fnvim-lspconfig" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:221512407,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="3d01a32d37a7a8e293ccb01d3b8702ed9664cba850dddfe28f28ec5081969d8a" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:221512407,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="14453c269b4d5164a394419c72512f90d9604db9e93ac1934621e7e7e21250bc" href="/neovim/nvim-lspconfig" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        neovim /
</span>
      nvim-lspconfig
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Quickstart configs for Nvim LSP
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #000080"></span>
  <span itemprop="programmingLanguage">Lua</span>
</span>


      <a href="/neovim/nvim-lspconfig/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        9,671
</a>
      <a href="/neovim/nvim-lspconfig/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        2,014
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/mjlbach/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mjlbach"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/13316262?s=40&amp;v=4" width="20" height="20" alt="@mjlbach" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" href="/apps/github-actions"><img class="avatar mb-1" src="https://avatars.githubusercontent.com/in/15368?s=40&amp;v=4" width="20" height="20" alt="@github-actions" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/h-michael/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/h-michael"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/4556097?s=40&amp;v=4" width="20" height="20" alt="@h-michael" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/glepnir/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/glepnir"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/41671631?s=40&amp;v=4" width="20" height="20" alt="@glepnir" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/williamboman/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/williamboman"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/6705160?s=40&amp;v=4" width="20" height="20" alt="@williamboman" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        11 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fentropy-research%2FDevon" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:772385740,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9ad63bf95dd0fdee414f3e123cc88877f73aec72c24a595539520aa193e1b6f3" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:772385740,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f7a53d04e1e400f508ad33bdcd8d74260859dcc867069d8ac7e82f614c0f7f74" href="/entropy-research/Devon" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        entropy-research /
</span>
      Devon
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Devon: An open-source pair programmer
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #3572A5"></span>
  <span itemprop="programmingLanguage">Python</span>
</span>


      <a href="/entropy-research/Devon/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        1,087
</a>
      <a href="/entropy-research/Devon/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        84
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/Mihir1003/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Mihir1003"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/32996071?s=40&amp;v=4" width="20" height="20" alt="@Mihir1003" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/killind-dev/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/killind-dev"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/61808204?s=40&amp;v=4" width="20" height="20" alt="@killind-dev" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/ObjectJosh/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ObjectJosh"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/42549561?s=40&amp;v=4" width="20" height="20" alt="@ObjectJosh" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/christopherhwood/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/christopherhwood"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/6379762?s=40&amp;v=4" width="20" height="20" alt="@christopherhwood" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/twilwa/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/twilwa"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/111034762?s=40&amp;v=4" width="20" height="20" alt="@twilwa" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        247 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fmukel%2Fllama3.java" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:791733442,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="dba6f5e394b4b4c5ea1c3bd595f880af975e251c8591981be8e1d13b4a6a8aec" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:791733442,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ee7eb5f2d6a72077082ea6952fafaa182a35feaa4431260df25b06a82ebf2d28" href="/mukel/llama3.java" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        mukel /
</span>
      llama3.java
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Practical Llama 3 inference in Java
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #b07219"></span>
  <span itemprop="programmingLanguage">Java</span>
</span>


      <a href="/mukel/llama3.java/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        163
</a>
      <a href="/mukel/llama3.java/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        10
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/mukel/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mukel"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/1896283?s=40&amp;v=4" width="20" height="20" alt="@mukel" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        48 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">

      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Fweaviate%2FVerba" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:672002598,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4b488ace44dd796062896243201b9da5889e2752dbc03d6c2b244df9e59e363d" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:672002598,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="d17bb343412eb55111b2815d16eba963a3452b355c69a293330c542e6ed5cf16" href="/weaviate/Verba" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        weaviate /
</span>
      Verba
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      Retrieval Augmented Generation (RAG) chatbot powered by Weaviate
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #3572A5"></span>
  <span itemprop="programmingLanguage">Python</span>
</span>


      <a href="/weaviate/Verba/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        3,372
</a>
      <a href="/weaviate/Verba/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        367
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:23544997}}" data-hydro-click-hmac="7a1bc016e3712763247c44fc24640fb8889cb714ee17e9d452478382d262606c" data-hovercard-type="user" data-hovercard-url="/users/thomashacker/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomashacker"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/43848523?s=40&amp;v=4" width="20" height="20" alt="@thomashacker" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:23544997}}" data-hydro-click-hmac="7a1bc016e3712763247c44fc24640fb8889cb714ee17e9d452478382d262606c" data-hovercard-type="user" data-hovercard-url="/users/erika-cardenas/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/erika-cardenas"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/110841617?s=40&amp;v=4" width="20" height="20" alt="@erika-cardenas" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:23544997}}" data-hydro-click-hmac="7a1bc016e3712763247c44fc24640fb8889cb714ee17e9d452478382d262606c" data-hovercard-type="user" data-hovercard-url="/users/dudanogueira/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/dudanogueira"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/1761174?s=40&amp;v=4" width="20" height="20" alt="@dudanogueira" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:23544997}}" data-hydro-click-hmac="7a1bc016e3712763247c44fc24640fb8889cb714ee17e9d452478382d262606c" data-hovercard-type="user" data-hovercard-url="/users/samos123/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/samos123"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/388784?s=40&amp;v=4" width="20" height="20" alt="@samos123" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:23544997}}" data-hydro-click-hmac="7a1bc016e3712763247c44fc24640fb8889cb714ee17e9d452478382d262606c" data-hovercard-type="user" data-hovercard-url="/users/hholtmann/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/hholtmann"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/1582965?s=40&amp;v=4" width="20" height="20" alt="@hholtmann" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        353 stars today
</span>  </div>
</article>

          <article class="Box-row">
  <div class="float-right d-flex">
      <a href="/sponsors/tiann" aria-label="Sponsor @tiann" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;TRENDING_REPO_SPONSOR&quot;,&quot;sponsorable_login&quot;:&quot;tiann&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ed82f873d6570ddf52155fc01799258bb45122466bec805df4d24ffe03dd2d48" data-view-component="true" class="Button--secondary Button--small Button mr-2">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-0 mr-md-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
    <span class="d-none d-md-inline v-align-middle" >
      Sponsor
    </span></span>
  </span>
</a>


      <div data-view-component="true" class="BtnGroup d-flex">
        <a href="/login?return_to=%2Ftiann%2FKernelSU" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:576303915,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="e81a1c84364ce7e037b5db24b47605a4900fa05850e6f39bceb5a305618d3b52" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-none d-md-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-0 v-align-text-bottom d-inline-block d-md-none">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        <span data-view-component="true" class="d-none d-md-inline">
          Star
</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </div>

  <h2 class="h3 lh-condensed">
    <a data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;REPOSITORY&quot;,&quot;click_visual_representation&quot;:&quot;REPOSITORY_NAME_HEADING&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:576303915,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="80c5c2fece996c14eff6530c6e6066b94cc120e88da60d01e84933d0a0b5d9fd" href="/tiann/KernelSU" data-view-component="true" class="Link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

      <span data-view-component="true" class="text-normal">
        tiann /
</span>
      KernelSU
</a>  </h2>

    <p class="col-9 color-fg-muted my-1 pr-4">
      A Kernel based root solution for Android
    </p>

  <div class="f6 color-fg-muted mt-2">
      <span class="d-inline-block ml-0 mr-3">
  <span class="repo-language-color" style="background-color: #A97BFF"></span>
  <span itemprop="programmingLanguage">Kotlin</span>
</span>


      <a href="/tiann/KernelSU/stargazers" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        8,456
</a>
      <a href="/tiann/KernelSU/forks" data-view-component="true" class="Link Link--muted d-inline-block mr-3">
        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
        1,368
</a>
      <span data-view-component="true" class="d-inline-block mr-3">
        Built by

          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/tiann/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/tiann"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/4233744?s=40&amp;v=4" width="20" height="20" alt="@tiann" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/Ylarod/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Ylarod"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/30978685?s=40&amp;v=4" width="20" height="20" alt="@Ylarod" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" href="/apps/github-actions"><img class="avatar mb-1" src="https://avatars.githubusercontent.com/in/15368?s=40&amp;v=4" width="20" height="20" alt="@github-actions" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/igormiguell/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/igormiguell"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/134963561?s=40&amp;v=4" width="20" height="20" alt="@igormiguell" /></a>
          <a class="d-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;explore.click&quot;,&quot;payload&quot;:{&quot;click_context&quot;:&quot;TRENDING_REPOSITORIES_PAGE&quot;,&quot;click_target&quot;:&quot;CONTRIBUTING_DEVELOPER&quot;,&quot;click_visual_representation&quot;:&quot;DEVELOPER_AVATAR&quot;,&quot;actor_id&quot;:null,&quot;record_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/trending&quot;,&quot;user_id&quot;:62124007}}" data-hydro-click-hmac="b0c55a3d9972ec649b52d214f03ddfd26233910e2785f8598ef4d45d41352a03" data-hovercard-type="user" data-hovercard-url="/users/dabao1955/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/dabao1955"><img class="avatar mb-1 avatar-user" src="https://avatars.githubusercontent.com/u/79307765?s=40&amp;v=4" width="20" height="20" alt="@dabao1955" /></a>
</span>
      <span data-view-component="true" class="d-inline-block float-sm-right">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        16 stars today
</span>  </div>
</article>

    </div>
  </div>
</div>

      </main>
  </div>

          <footer class="footer pt-8 pb-6 f6 color-fg-muted p-responsive" role="contentinfo" >
  <h2 class='sr-only'>Footer</h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</a>
      <span>
        &copy; 2024 GitHub,&nbsp;Inc.
      </span>
    </div>

    <nav aria-label="Footer">
      <h3 class="sr-only" id="sr-footer-heading">Footer navigation</h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link">Terms</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link">Privacy</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link">Security</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link">Status</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link">Docs</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link">Contact</a>
          </li>

          <li class="mr-3" >
  <cookie-consent-link>
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement">
      Manage cookies
    </button>
  </cookie-consent-link>
</li>

<li class="mr-3">
  <cookie-consent-link>
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement">
      Do not share my personal information
    </button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>




    <ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-initial-cookie-consent-allowed="" data-cookie-consent-required="false"></ghcc-consent>


  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
  </div>
</div>

    <template id="snippet-clipboard-copy-button">
  <div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>
<template id="snippet-clipboard-copy-button-unpositioned">
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>




    </div>

    <div id="js-global-screen-reader-notice" class="sr-only" aria-live="polite" aria-atomic="true" ></div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only" aria-live="assertive" aria-atomic="true"></div>
  </body>
</html>`
    }
    mockedAxios.get.mockResolvedValueOnce(mockResponse)
    const repos = await getTrending()
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get).toHaveBeenCalledWith(`https://github.com/trending`)
    expect(repos).toHaveLength(25)
    expect(repos).toEqual([
      {
        author: 'HigherOrderCO',
        description: 'A massively parallel, high-level programming language',
        forks: '296',
        href: 'https://github.com/HigherOrderCO/Bend',
        language: 'Rust',
        name: 'Bend',
        stars: '11786',
        starsToday: '2666'
      },
      {
        author: 'neovim',
        description: 'Vim-fork focused on extensibility and usability',
        forks: '5384',
        href: 'https://github.com/neovim/neovim',
        language: 'Vim Script',
        name: 'neovim',
        stars: '77970',
        starsToday: '198'
      },
      {
        author: 'adrianhajdin',
        description: 'Modern & Minimal JS Mastery Portfolio',
        forks: '99',
        href: 'https://github.com/adrianhajdin/portfolio',
        language: 'TypeScript',
        name: 'portfolio',
        stars: '565',
        starsToday: '178'
      },
      {
        author: 'TheOfficialFloW',
        description: 'PPPwn - PlayStation 4 PPPoE RCE',
        forks: '317',
        href: 'https://github.com/TheOfficialFloW/PPPwn',
        language: 'Python',
        name: 'PPPwn',
        stars: '2065',
        starsToday: '107'
      },
      {
        author: 'massgravel',
        description:
          'A Windows and Office activator using HWID / Ohook / KMS38 / Online KMS activation methods, with a focus on open-source code and fewer antivirus detections.',
        forks: '7757',
        href: 'https://github.com/massgravel/Microsoft-Activation-Scripts',
        language: 'Batchfile',
        name: 'Microsoft-Activation-Scripts',
        stars: '79545',
        starsToday: '164'
      },
      {
        author: 'initia-labs',
        description: '',
        forks: '100',
        href: 'https://github.com/initia-labs/initia',
        language: 'Go',
        name: 'initia',
        stars: '88',
        starsToday: '13'
      },
      {
        author: 'LayerZero-Labs',
        description: '',
        forks: '160',
        href: 'https://github.com/LayerZero-Labs/sybil-report',
        language: '',
        name: 'sybil-report',
        stars: '240',
        starsToday: '34'
      },
      {
        author: 'mendableai',
        description:
          '🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.',
        forks: '283',
        href: 'https://github.com/mendableai/firecrawl',
        language: 'TypeScript',
        name: 'firecrawl',
        stars: '3791',
        starsToday: '260'
      },
      {
        author: 'mainmatter',
        description:
          'A self-paced course to learn Rust, one exercise at a time.',
        forks: '208',
        href: 'https://github.com/mainmatter/100-exercises-to-learn-rust',
        language: 'Rust',
        name: '100-exercises-to-learn-rust',
        stars: '1562',
        starsToday: '499'
      },
      {
        author: 'KAYOKG',
        description:
          '📚 Biblioteca de livros essenciais da área da programação.',
        forks: '403',
        href: 'https://github.com/KAYOKG/BibliotecaDev',
        language: '',
        name: 'BibliotecaDev',
        stars: '2284',
        starsToday: '274'
      },
      {
        author: 'iluwatar',
        description: 'Design patterns implemented in Java',
        forks: '25986',
        href: 'https://github.com/iluwatar/java-design-patterns',
        language: 'Java',
        name: 'java-design-patterns',
        stars: '86979',
        starsToday: '168'
      },
      {
        author: 'Raphire',
        description:
          'A simple, easy to use powershell script to remove bloatware apps from windows, disable telemetry, bing in windows search aswell as perform various other changes to declutter and improve your windows experience. This script works for both windows 10 and windows 11.',
        forks: '152',
        href: 'https://github.com/Raphire/Win11Debloat',
        language: 'PowerShell',
        name: 'Win11Debloat',
        stars: '3273',
        starsToday: '223'
      },
      {
        author: 'HigherOrderCO',
        description: 'A massively parallel, optimal functional runtime in Rust',
        forks: '353',
        href: 'https://github.com/HigherOrderCO/HVM',
        language: 'Cuda',
        name: 'HVM',
        stars: '9590',
        starsToday: '685'
      },
      {
        author: 'rasbt',
        description:
          'Implementing a ChatGPT-like LLM in PyTorch from scratch, step by step',
        forks: '1528',
        href: 'https://github.com/rasbt/LLMs-from-scratch',
        language: 'Jupyter Notebook',
        name: 'LLMs-from-scratch',
        stars: '16679',
        starsToday: '71'
      },
      {
        author: 'rashadphz',
        description: '🔍 AI search engine - self-host with local or cloud LLMs',
        forks: '54',
        href: 'https://github.com/rashadphz/farfalle',
        language: 'TypeScript',
        name: 'farfalle',
        stars: '657',
        starsToday: '296'
      },
      {
        author: 'LazyVim',
        description: 'Neovim config for the lazy',
        forks: '902',
        href: 'https://github.com/LazyVim/LazyVim',
        language: 'Lua',
        name: 'LazyVim',
        stars: '13504',
        starsToday: '128'
      },
      {
        author: 'arendst',
        description:
          'Alternative firmware for ESP8266 and ESP32 based devices with easy configuration using webUI, OTA updates, automation using timers or rules, expandability and entirely local control over MQTT, HTTP, Serial or KNX. Full documentation at',
        forks: '4685',
        href: 'https://github.com/arendst/Tasmota',
        language: 'C',
        name: 'Tasmota',
        stars: '21535',
        starsToday: '12'
      },
      {
        author: 'xbmc',
        description:
          "Kodi is an award-winning free and open source home theater/media center software and entertainment hub for digital media. With its beautiful interface and powerful skinning engine, it's available for Android, BSD, Linux, macOS, iOS, tvOS and Windows.",
        forks: '6243',
        href: 'https://github.com/xbmc/xbmc',
        language: 'C++',
        name: 'xbmc',
        stars: '17715',
        starsToday: '16'
      },
      {
        author: 'folke',
        description:
          '🏙 A clean, dark Neovim theme written in Lua, with support for lsp, treesitter and lots of plugins. Includes additional themes for Kitty, Alacritty, iTerm and Fish.',
        forks: '352',
        href: 'https://github.com/folke/tokyonight.nvim',
        language: 'Lua',
        name: 'tokyonight.nvim',
        stars: '5338',
        starsToday: '23'
      },
      {
        author: 'bepass-org',
        description:
          'Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux',
        forks: '236',
        href: 'https://github.com/bepass-org/oblivion-desktop',
        language: 'TypeScript',
        name: 'oblivion-desktop',
        stars: '2004',
        starsToday: '340'
      },
      {
        author: 'neovim',
        description: 'Quickstart configs for Nvim LSP',
        forks: '2014',
        href: 'https://github.com/neovim/nvim-lspconfig',
        language: 'Lua',
        name: 'nvim-lspconfig',
        stars: '9671',
        starsToday: '11'
      },
      {
        author: 'entropy-research',
        description: 'Devon: An open-source pair programmer',
        forks: '84',
        href: 'https://github.com/entropy-research/Devon',
        language: 'Python',
        name: 'Devon',
        stars: '1087',
        starsToday: '247'
      },
      {
        author: 'mukel',
        description: 'Practical Llama 3 inference in Java',
        forks: '10',
        href: 'https://github.com/mukel/llama3.java',
        language: 'Java',
        name: 'llama3.java',
        stars: '163',
        starsToday: '48'
      },
      {
        author: 'weaviate',
        description:
          'Retrieval Augmented Generation (RAG) chatbot powered by Weaviate',
        forks: '367',
        href: 'https://github.com/weaviate/Verba',
        language: 'Python',
        name: 'Verba',
        stars: '3372',
        starsToday: '353'
      },
      {
        author: 'tiann',
        description: 'A Kernel based root solution for Android',
        forks: '1368',
        href: 'https://github.com/tiann/KernelSU',
        language: 'Kotlin',
        name: 'KernelSU',
        stars: '8456',
        starsToday: '16'
      }
    ])
  })

  it('should throw error when fails', async () => {
    const errorValue = {
      response: {
        status: 500,
        statusText: 'Internal Server Error',
        data: {
          error: {
            message: 'Network Error'
          }
        }
      }
    }
    mockedAxios.get.mockRejectedValueOnce(errorValue)
    await expect(getTrending()).rejects.toThrow("Can't fetch trending repos")

    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  })
})
