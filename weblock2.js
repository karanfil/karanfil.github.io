var PROXY_DIRECT = "DIRECT";
var DIRECT = "DIRECT";
var BLACK = "PROXY 8.8.8.8:53";
var WHITE = PROXY_DIRECT;

function s(u, r) {
    return shExpMatch(u, r);
}

function d(h, r) {
    return dnsDomainIs(h, r);
}

function n(h, r, m) {
    return isInNet(h, r, m);
}

function e(u) {
    var h;
    if (u.indexOf("://") > -1) {
        h = u.split('/')[2];
    } else {
        h = u.split('/')[0];
    }
    h = h.split(':')[0];
    var s = h.split('.').reverse();
    return s;
}

function FindProxyForURL(url, host) {
    var u = url.toLowerCase();
    var h = host.toLowerCase();
    var a = e(u);
    var b = a[0];
    var c = a[1];
    var f = c.length;
    var t = c[f - 1];
    var z = c[f - 2];
    if (d(h, "aLU7km.configtest.wl.is")) {
        return "PROXY 5.9.40.99:80";
    }
    if (d(h, "wl.is") || d(h, "weblockapp.com")) {
        return PROXY_DIRECT;
    }
    if (b == "com") {
        if (t == "3") {
            if (d(h, "admtpmp123.com") || d(h, "wafmedia3.com")) return BLACK;
        }
        if (t == "2") {
            if (d(h, "aimg.fc2.com") || d(h, "adshost2.com") || d(h, "affiliate.fc2.com")) return BLACK;
        }
        if (t == "a") {
            if (z == "i") {
                if (d(h, "cdn.millennialmedia.com") || d(h, "xtendmedia.com") || d(h, "engine.a.redditmedia.com") || d(h, "vdopia.com") || d(h, "amazemobilemedia.com") || d(h, "lfstmedia.com") || d(h, "wigetmedia.com") || d(h, "tremormedia.com") || d(h, "andomedia.com") || d(h, "conversantmedia.com")) return BLACK;
            } else if (z == "l") {
                if (d(h, "bnmla.com") || d(h, "atwola.com") || d(h, "taboola.com")) return BLACK;
            } else if (z == "r") {
                if (d(h, "transpera.com") || d(h, "stats.pandora.com") || d(h, "atedra.com")) return BLACK;
            } else if (z == "v") {
                if (d(h, "kochava.com") || d(h, "mojiva.com") || d(h, "adelva.com")) return BLACK;
            } else if (d(h, "atemda.com") || d(h, "adtoma.com") || d(h, "komoona.com") || d(h, "eclkmpsa.com") || d(h, "admeta.com") || d(h, "plista.com") || d(h, "videoplaza.com")) return BLACK;
        }
        if (t == "c") {
            if (d(h, "cxpublic.com") || d(h, "adztec.com") || d(h, "adsymptotic.com") || d(h, "pubmatic.com")) return BLACK;
        }
        if (t == "b") {
            if (z == "a") {
                if (d(h, "crosspromo.zeptolab.com") || d(h, "bms.zeptolab.com") || d(h, "asp.animelab.com")) return BLACK;
            } else if (z == "u") {
                if (!s(u, "*filmon*") && d(h, "mopub.com") || d(h, "m2pub.com") || d(h, "tremorhub.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "admob.com") || d(h, "hot\u002Dmob.com") || d(h, "revmob.com")) return BLACK;
            } else if (d(h, "ucweb.com") || d(h, "ox\u002Dd.advanceweb.com")) return BLACK;
        }
        if (t == "e") {
            if (z == "c") {
                if (d(h, "adnetworkperformance.com") || d(h, "valuecommerce.com") || d(h, "widespace.com") || d(h, "startappservice.com") || d(h, "delivery.trafficforce.com")) return BLACK;
            } else if (z == "b") {
                if (d(h, "delivery.brokerbabe.com") || d(h, "adotube.com") || d(h, "youtube.com") && s(u, "*/_get_ads*")) return BLACK;
            } else if (z == "g") {
                if (d(h, "bounceexchange.com") || d(h, "tradeadexchange.com") || s(u, "*admax*") && d(h, "nexage.com") || d(h, "startappexchange.com")) return BLACK;
            } else if (z == "s") {
                if (d(h, "mobilefuse.com") || d(h, "trafficposse.com") || d(h, "adinfuse.com") || d(h, "adhese.com") || d(h, "postrelease.com") || d(h, "cxense.com") || d(h, "openxenterprise.com") || d(h, "uauniverse.com")) return BLACK;
            } else if (z == "v") {
                if (d(h, "quantserve.com") || d(h, "inner\u002Dactive.com") || d(h, "pushnative.com") || d(h, "swrve.com") || d(h, "advertserve.com")) return BLACK;
            } else if (d(h, "amobee.com") || d(h, "assets.cookieconsent.silktide.com") || d(h, "adblade.com") || d(h, "ad4game.com") || d(h, "vungle.com") || d(h, "admngronline.com") || d(h, "madsone.com") || d(h, "greystripe.com") || d(h, "omniture.com")) return BLACK;
        }
        if (t == "d") {
            if (z == "a") {
                if (d(h, "opt.ximad.com") || s(u, "*/ad3/*") && d(h, "ximad.com") || d(h, "dotandad.com") || d(h, "sbs\u002Dad.com") || d(h, "bead\u002Dad.com") || d(h, "tapatalk.com") && s(u, "*get_ad.php*")) return BLACK;
            } else if (z == "i") {
                if (d(h, "innovid.com") || d(h, "mgid.com") || s(u, "*watchcartoononline*") && d(h, "algovid.com")) return BLACK;
            } else if (d(h, "adspeed.com") || d(h, "360yield.com") || d(h, "appflood.com") || d(h, "untd.com")) return BLACK;
        }
        if (t == "g") {
            if (z == "n") {
                if (d(h, "mobileapptracking.com") || d(h, "billytesting.com") || d(h, "integral\u002Dmarketing.com") || d(h, "advertising.com")) return BLACK;
            } else if (d(h, "trafmag.com") || d(h, "mathtag.com")) return BLACK;
        }
        if (t == "i") {
            if (d(h, "cdn.media.amp.avai.com") || d(h, "insightexpressai.com") || d(h, "upsight\u002Dapi.com") || d(h, "mobusi.com") || d(h, "zumobi.com") || d(h, "inmobi.com")) return BLACK;
        }
        if (t == "h") {
            if (z == "s") {
                if (d(h, "adcash.com") || d(h, "airpush.com") || d(h, "europacash.com")) return BLACK;
            } else if (z == "c") {
                if (d(h, "aimatch.com") || d(h, "adnotch.com") || d(h, "adinch.com") || d(h, "scorecardresearch.com")) return BLACK;
            } else if (d(h, "sharethrough.com")) return BLACK;
        }
        if (t == "k") {
            if (d(h, "ackak.com") || d(h, "iconpeak.com") || d(h, "exoclick.com") || d(h, "openclick.com") || d(h, "adzerk.com") || d(h, "adapi.addealsnetwork.com") || s(u, "*/plugins/like.php*") && d(h, "facebook.com")) return BLACK;
        }
        if (t == "m") {
            if (z == "e") {
                if (d(h, "ir\u002Dna.amazon\u002Dadsystem.com") || d(h, "dra.amazon\u002Dadsystem.com") || d(h, "aax\u002Dus\u002Dpdx.amazon\u002Dadsystem.com") || d(h, "aax.amazon\u002Dadsystem.com") || d(h, "aax\u002Dus\u002Deast.amazon\u002Dadsystem.com") || d(h, "api.unthem.com") || d(h, "aax\u002Deu.amazon\u002Dadsystem.com") || d(h, "s.amazon\u002Dadsystem.com")) return BLACK;
            } else if (d(h, "redtram.com") || d(h, "epom.com") || d(h, "sessionm.com") || d(h, "ad131m.com") || d(h, "ad120m.com") || d(h, "crittercism.com") || d(h, "castplatform.com") || d(h, "adform.com") || d(h, "gumgum.com") || d(h, "adnium.com") || d(h, "mdotm.com") || d(h, "ad127m.com") || d(h, "adcel.vrvm.com") || d(h, "ad132m.com")) return BLACK;
        }
        if (t == "l") {
            if (z == "e") {
                if (d(h, "padsdel.com") || d(h, "mixpanel.com") || d(h, "presselite.com") && s(u, "*/iphone/pushnotification/interstitiel/interstitiel.*")) return BLACK;
            } else if (z == "l") {
                if (d(h, "adroll.com") || d(h, "misterbell.com") || d(h, "brightroll.com") || d(h, "btrll.com")) return BLACK;
            } else if (d(h, "adversal.com") || d(h, "exponential.com") || d(h, "liverail.com") || d(h, "adwhirl.com")) return BLACK;
        }
        if (t == "o") {
            if (z == "e") {
                if (d(h, "criteo.com") || d(h, "veeseo.com") || d(h, "wbdds.jeuxvideo.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "analytics.yahoo.com") || d(h, "gemini.yahoo.com") || d(h, "soundwave.mobile.yahoo.com") || d(h, "ads.yahoo.com") || d(h, "adserver.yahoo.com")) return BLACK;
            } else if (d(h, "globaltraffico.com") || d(h, "sekindo.com") || d(h, "zedo.com") || d(h, "chango.com") || d(h, "yieldmo.com") || d(h, "smaato.com")) return BLACK;
        }
        if (t == "n") {
            if (z == "d") {
                if (d(h, "c.jsrdn.com") || d(h, "eacdn.com") || d(h, "cb\u002Dcdn.com") || d(h, "inmobicdn.com") || d(h, "akncdn.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "performancehorizon.com") || d(h, "clkmon.com") || d(h, "nspmotion.com") || d(h, "adition.com") || d(h, "tribalfusion.com") || d(h, "taboolasyndication.com") || d(h, "trackimpression.com") || d(h, "adfalcon.com")) return BLACK;
            } else if (d(h, "applovin.com") || d(h, "playhaven.com")) return BLACK;
        }
        if (t == "p") {
            if (z == "p") {
                if (d(h, "testflightapp.com") || d(h, "user\u002Dagent\u002Dtracker.herokuapp.com") || d(h, "startapp.com")) return BLACK;
            } else if (d(h, "heyzap.com") || d(h, "a.jumptap.com") || d(h, "urbanairship.com") || d(h, "rtbpop.com")) return BLACK;
        }
        if (t == "s") {
            if (z == "c") {
                if (!s(u, "*/ga.js") && !s(u, "*/analytics.js") && d(h, "google\u002Danalytics.com") || d(h, "localytics.com") || d(h, "medialytics.com") || d(h, "crashlytics.com") || !s(u, "*/analytics.js") && !s(u, "*/ga.js") && d(h, "google\u002Danalytics.com")) return BLACK;
            } else if (z == "d") {
                if (d(h, "bcfads.com") || d(h, "marsads.com") || d(h, "tapjoyads.com") || d(h, "buysellads.com") || d(h, "moatads.com") || d(h, "mads.com") || d(h, "hotwords.com") || d(h, "1phads.com") || d(h, "mobile.aws.weather.com") && s(u, "*/ads.json") || d(h, "ketads.com") || d(h, "openvideoads.com") || d(h, "pflexads.com") || d(h, "zestads.com") || d(h, "medyanetads.com") || d(h, "appads.com") || d(h, "carbonads.com") || d(h, "propellerads.com")) return BLACK;
            } else if (z == "k") {
                if (d(h, "mobytrks.com") || d(h, "ecpmrocks.com") || d(h, "hkg1.aastocks.com") || d(h, "terraclicks.com") || d(h, "ox\u002Dd.majorgeeks.com") || d(h, "yumenetworks.com") || d(h, "infolinks.com") || d(h, "keywordblocks.com")) return BLACK;
            } else if (z == "t") {
                if (d(h, "adacts.com") || d(h, "bbelements.com") || d(h, "medialets.com")) return BLACK;
            } else if (d(h, "addthis.com") && !d(h, "s7.addthis.com") || d(h, "clkdeals.com") || d(h, "otherlevels.com") || d(h, "propellerpops.com") || d(h, "traffpartners.com") || d(h, "mpnrs.com") || d(h, "ligatus.com") || d(h, "traffichaus.com") || d(h, "amazonaws.com") && s(u, "*/adversion*") || d(h, "ad\u002Dsys.com") || d(h, "serving\u002Dsys.com") || d(h, "adnxs.com")) return BLACK;
        }
        if (t == "r") {
            if (z == "a") {
                if (d(h, "apsalar.com") || d(h, "cpmstar.com") || d(h, "adgear.com")) return BLACK;
            } else if (z == "e") {
                if (d(h, "kixer.com") || d(h, "yieldmanager.com") || d(h, "liveadexchanger.com") || d(h, "eyewonder.com") || d(h, "wwwpromoter.com") || d(h, "tradedoubler.com") && !s(u, "*/click*") && !s(u, "*itunesredir*") || d(h, "adkeeper.com") || d(h, "fyber.com") || d(h, "statcounter.com") || d(h, "mob\u002Dserver.com") || d(h, "bidvertiser.com") || d(h, "appsflyer.com") || d(h, "applifier.com") || d(h, "smartadserver.com") || d(h, "sitemeter.com")) return BLACK;
            } else if (d(h, "image.click.livedoor.com")) return BLACK;
        }
        if (t == "u") {
            if (d(h, "leadzu.com") || d(h, "sailthru.com")) return BLACK;
        }
        if (t == "t") {
            if (z == "f") {
                if (d(h, "igpiphone.gameloft.com") || d(h, "cdn.applift.com") || d(h, "201205igp.gameloft.com") || d(h, "igp06.gameloft.com")) return BLACK;
            } else if (z == "n") {
                if (d(h, "liveintent.com") || d(h, "revcontent.com") || d(h, "app.cookieassistant.com") || d(h, "quantcount.com")) return BLACK;
            } else if (d(h, "chartbeat.com") || d(h, "rubiconproject.com") || d(h, "questionmarket.com") || d(h, "adsmarket.com") || d(h, "appsdt.com") || d(h, "lijit.com") || d(h, "mobiright.com") || d(h, "atdmt.com") || d(h, "leadbolt.com") || d(h, "adtilt.com") && !s(u, "*configure*") || d(h, "avocarrot.com") || d(h, "georiot.com") || d(h, "apprupt.com") || d(h, "chartboost.com") || d(h, "adexprt.com") || d(h, "scanscout.com") || d(h, "intellitxt.com")) return BLACK;
        }
        if (t == "v") {
            if (d(h, "tom.itv.com") || d(h, "directrev.com") || d(h, "n208adserv.com") || d(h, "clkrev.com")) return BLACK;
        }
        if (t == "y") {
            if (z == "l") {
                if (d(h, "adsupply.com") || d(h, "adtaily.com") || d(h, "4dsply.com") || d(h, "parsely.com")) return BLACK;
            } else if (z == "r") {
                if (d(h, "mobiletheory.com") || d(h, "flurry.com") || d(h, "ads.flurry.com")) return BLACK;
            } else if (d(h, "sponsorpay.com") || d(h, "doubleverify.com") || d(h, "trafficjunky.com") || d(h, "tapjoy.com") || d(h, "adcolony.com")) return BLACK;
        }
        if (t == "x") {
            if (d(h, "mobclix.com") || d(h, "adk2x.com") || d(h, "atlassbx.com") || d(h, "adpdx.com") || d(h, "mobfox.com")) return BLACK;
        }
        if (t == "z") {
            if (d(h, "altrooz.com") || d(h, "adbuddiz.com") || d(h, "zestadz.com")) return BLACK;
        }
        if (d(h, "movi11.com") || d(h, "wafmedia5.com") || d(h, "admtpmp124.com") || d(h, "admtpmp127.com") || d(h, "bannerflow.com")) return BLACK;
    } else if (b == "net") {
        if (t == "a") {
            if (d(h, "adorika.net") || d(h, "chitika.net") || d(h, "clickterra.net")) return BLACK;
        }
        if (t == "e") {
            if (d(h, "redintelligence.net") || d(h, "mobilefuse.net") || d(h, "trafficgate.net") || d(h, "accesstrade.net") || d(h, "adverserve.net") || d(h, "api.pubnative.net")) return BLACK;
        }
        if (t == "d") {
            if (d(h, "rnmd.net") || d(h, "nuggad.net")) return BLACK;
        }
        if (t == "k") {
            if (d(h, "fastclick.net") || d(h, "connect.decknetwork.net") || d(h, "adzerk.net") || d(h, "doubleclick.net") && !d(h, "static.doubleclick.net") && !d(h, "stats.g.doubleclick.net") && !s(u, "*ythome*")) return BLACK;
        }
        if (t == "m") {
            if (d(h, "alea.adam.daum.net") || d(h, "adform.net") || d(h, "adverticum.net")) return BLACK;
        }
        if (t == "o") {
            if (d(h, "adsmogo.net") || d(h, "reporo.net") || d(h, "smaato.net")) return BLACK;
        }
        if (t == "n") {
            if (z == "d") {
                if (d(h, "mxcdn.net") || d(h, "inmobicdn.net") || d(h, "s1.2mdn.net") || d(h, "popadscdn.net") || d(h, "cubecdn.net") && s(u, "*/js/loader_*")) return BLACK;
            }
        }
        if (t == "p") {
            if (d(h, "lduhtrp.net") || d(h, "smartclip.net")) return BLACK;
        }
        if (t == "s") {
            if (z == "d") {
                if (d(h, "popads.net") || d(h, "everestads.net") || d(h, "onclickads.net") || d(h, "carbonads.net") || d(h, "msads.net")) return BLACK;
            } else if (d(h, "playnomics.net") || d(h, "vaxadserver.azurewebsites.net") || d(h, "zucks.net") || d(h, "leadboltapps.net") || d(h, "intermarkets.net")) return BLACK;
        }
        if (t == "r") {
            if (d(h, "admaster.net") || d(h, "adjuggler.net") || d(h, "readserver.net")) return BLACK;
        }
        if (t == "t") {
            if (d(h, "leadbolt.net") || d(h, "kontagent.net")) return BLACK;
        }
        if (t == "y") {
            if (d(h, "buzzcity.net") || d(h, "trafficjunky.net")) return BLACK;
        }
        if (d(h, "adfonic.net") || d(h, "revsci.net") || d(h, "adbooth.net") || d(h, "2o7.net") || d(h, "uimserv.net")) return BLACK;
    } else if (b == "de") {
        if (t == "l") {
            if (d(h, "damoh.spiegel.de") || d(h, "brightroll.de")) return BLACK;
        }
        if (d(h, "madvertise.de") || d(h, "movad.de") || d(h, "adtech.de") || d(h, "de.ioam.de") || d(h, "advolution.de") || d(h, "adspirit.de")) return BLACK;
    } else if (b == "mobi") {
        if (d(h, "yoc.mobi") || d(h, "inner\u002Dactive.mobi") || d(h, "adsmogo.mobi") || d(h, "mocean.mobi") || d(h, "mydas.mobi") || d(h, "adver.mobi") || d(h, "vserv.mobi")) return BLACK;
    } else if (b == "org") {
        if (d(h, "openx.org") || d(h, "openvideoads.org") || d(h, "zwaar.org") || d(h, "adtrace.org") || d(h, "info.a7.org")) return BLACK;
    } else if (b == "pl") {
        if (d(h, "adtaily.pl") || d(h, "hit.gemius.pl") || d(h, "adidm.idmnet.pl") || d(h, "adocean.pl")) return BLACK;
    } else if (b == "se") {
        if (d(h, "adrotator.se") || d(h, "emediate.se") || d(h, "fusion.dn.se")) return BLACK;
    } else if (b == "info") {
        if (t == "k") {
            if (d(h, "appshelf.ttpsdk.info") || d(h, "houseads.ttpsdk.info")) return BLACK;
        }
        if (d(h, "print.theyeshivaworld.info")) return BLACK;
    } else if (b == "tv") {
        if (d(h, "videoplaza.tv") || d(h, "adap.tv") || d(h, "teads.tv")) return BLACK;
    } else if (b == "jp") {
        if (d(h, "zucks.co.jp") || d(h, "advg.jp")) return BLACK;
    } else if (b == "biz") {
        if (d(h, "trafficfactory.biz") || d(h, "rarenok.biz")) return BLACK;
    } else if (b == "asia") {
        if (d(h, "pixels.asia") || d(h, "snapmobile.asia")) return BLACK;
    } else if (b == "uk") {
        if (d(h, "ad\u002Dx.co.uk")) return BLACK;
    } else if (b == "es") {
        if (d(h, "kimia.es")) return BLACK;
    } else if (b == "eu") {
        if (d(h, "emediate.eu")) return BLACK;
    } else if (b == "gr") {
        if (d(h, "adman.gr")) return BLACK;
    } else if (b == "ad") {
        if (d(h, "content.ad")) return BLACK;
    } else if (b == "li") {
        if (d(h, "kau.li")) return BLACK;
    } else if (b == "at") {
        if (d(h, "ad.adworx.at")) return BLACK;
    } else if (b == "si") {
        if (d(h, "interseek.si")) return BLACK;
    } else if (b == "fr") {
        if (d(h, "ad2play.ftv\u002Dpublicite.fr")) return BLACK;
    } else if (b == "dk") {
        if (d(h, "emediate.dk")) return BLACK;
    } else if (b == "ru") {
        if (d(h, "admobi.ru")) return BLACK;
    } else if (b == "co") {
        if (d(h, "adk2.co")) return BLACK;
    } else if (b == "cn") {
        if (d(h, "admaster.com.cn")) return BLACK;
    } else if (b == "me") {
        if (d(h, "kiip.me")) return BLACK;
    } else if (b == "tw") {
        if (d(h, "adspending01.bwnet.com.tw")) return BLACK;
    } else if (b == "il") {
        if (d(h, "fus.yad2.co.il")) return BLACK;
    } else if (b == "io") {
        if (d(h, "liftoff.io")) return BLACK;
    } else if (b == "cz") {
        if (d(h, "imedia.cz")) return BLACK;
    }
    if ((s(u, "*/banners/*") && !d(h, "lightsource.ca")) || s(h, "media.net") || (s(u, "*/ads/*") && !d(h, "mzstatic.com") && !d(h, "apple.com") && !d(h, "gumtree.com") && !d(h, "otomoto.pl") && !d(h, "watchdisneyxd.go.com") && !d(h, "fortune.com") && !s(h, "olx.*") && !s(h, "*.olx.*") && !s(h, "*.kijiji.*") && !d(h, "ads\u002Dtrk.vidible.tv")) || ((d(h, "amazonaws.com") && s(u, "*admarvel*")) || d(h, "admarvel.com")) || s(u, "*/jquery.cookiesdirective.js") || ((!d(h, "foxnews.com") && !d(h, "radioactive.sg") && s(h, "ads.*")) || s(h, "*.ads.*")) || (s(h, "advert.*") || s(h, "*.advert.*")) || (s(h, "*.advertorial.*") || s(h, "advertorial.*")) || (s(u, "*/adview/*")) || s(u, "*/openx/www/api/v*/*.php*") || ((d(h, "flipboard.com") && s(u, "*/flipmag/admanager.js")) || (d(h, "flipboard.com") && s(u, "*/adcreative/*")) || (d(h, "flipboard.com") && s(u, "*/*adname*")) || (d(h, "flipboard.com") && s(u, "*/flare/*"))) || (s(h, "*.adsrv.*") || s(h, "adsrv.*")) || s(u, "*/cookie\u002Dinfo.js") || ((d(h, "supersonicads.com") && s(u, "*/delivery/*")) || (d(h, "ultraadserver.com") && s(u, "*/api*"))) || (s(h, "*.adasset.*") || s(h, "adasset.*")) || (s(h, "ad\u002Dtraffic.*") || s(h, "*.ad\u002Dtraffic.*")) || s(u, "*.pandora.com*getlicensing*") || s(u, "*.pandora.com*/ads/*") || (s(u, "*/adasset/*")) || (s(h, "*.adz.*") || s(h, "adz.*")) || (s(h, "adclick.*") || s(h, "*.adclick.*")) || (s(u, "*/adserve/*")) || (s(u, "*/ad\u002Dtraffic/*")) || s(u, "*.p\u002Dcdn.com/*/ads/*") || s(h, "inmobisdk*.akamaihd.net") || s(u, "*pandora.com*method\u003Dad*") || (s(u, "*/adresult/*")) || s(u, "*/cookiewarning?.js") || s(h, "openx.net") || s(u, "*.pandora.com*/devicead/*") || s(h, "m*.2mdn.net") || s(u, "*/openx/www/delivery/*.php*") || (s(u, "*/viewad/*")) || (s(u, "*/adserv/*")) || (s(h, "*.manage.com") || s(h, "manage.com")) || (s(u, "*/advertorial/*")) || s(u, "*.pandora.com*file\u003Dads/*") || ((s(u, "*mobiquo/tapatalkdetect.js"))) || (s(h, "banner.*") || s(h, "*.banner.*")) || (s(u, "*/adx/*")) || s(u, "*/cookieinfo/*") || (s(h, "*.ad.*") || s(h, "ad.*")) || s(u, "*/openx/www/images/*") || ((d(h, "msn.com") && s(u, "*/adsadclient*")) || d(h, "h2.msn.com") || d(h, "rad.msn.com") || d(h, "stjjp.msn.com") || d(h, "udc.msn.com")) || (s(u, "*/adclick/*")) || s(u, "*/jquery.cookiebar.js") || s(u, "*.p\u002Dcdn.com*/devicead/*") || s(u, "*/cookieconsent.js") || (s(u, "*/adz/*")) || s(u, "*/jqueryCookieGuard*.js") || ((d(h, "googleadservices.com") && !s(u, "*/pagead/conversion.js") && !s(u, "*/aclk*")) || (d(h, "pagead3.googlesyndication.com") || d(h, "pagead.googlesyndication.com") || d(h, "pagead1.googlesyndication.com")) || (d(h, "googletagservices.com") && !s(u, "*/gpt_mobile.js") && !s(u, "*/gpt.js"))) || s(h, "openx.com") || (s(u, "*/advert/*")) || s(h, "*.cj.com") || ((d(h, "pub.sapo.pt") && s(u, "*mobile.php*")) || (d(h, "pub.sapo.pt") && s(u, "*vast.php*"))) || (s(h, "*.adverts.*") || s(h, "adverts.*")) || s(h, "*.media.net") || ((d(h, "graph.facebook.com") && s(u, "*/network_ads*")) || (d(h, "graph.facebook.com") && s(u, "*advertise*")) || (d(h, "graph.facebook.com") && s(u, "*/network_ads"))) || (s(u, "*/adverts/*")) || (s(h, "adserv.*") || s(h, "*.adserv.*")) || (!d(h, "apple.com") && !d(h, "mzstatic.com") && s(u, "*/adserver/*")) || (s(u, "*assets.pinterest.com/js/pinit.js*")) || (s(u, "*speednetwor*.com*smart.js") || s(u, "*speednetwor*.com*adclickurl*")) || (s(h, "*.adserve.*") || s(h, "adserve.*")) || (s(h, "adview.*") || s(h, "*.adview.*")) || (s(h, "*.adresult.*") || s(h, "adresult.*")) || s(u, "*/cookiewarning.js") || (s(u, "*/banner/*")) || s(u, "*.cloudfront.net/campaigns/*") || s(h, "cj.com") || (s(h, "*.adx.*") || s(h, "adx.*")) || s(u, "*/permissionbar\u002Dlatest.min.js") || (s(u, "*/adv/*")) || (s(h, "*.adv.*") || s(h, "adv.*")) || ((s(h, "adserver.*") && !d(h, "adtechus.com")) || s(h, "*.adserver.*")) || s(u, "*.cookie\u002Dscript.com*") || (s(h, "banners.*") || s(h, "*.banners.*")) || (!d(h, "mzstatic.com") && !d(h, "apple.com") && !d(h, "economist.com") && !d(h, "fwmrm.net") && s(u, "*/ad/*")) || (n(h, "89.207.18.1", "255.255.255.0")) || s(u, "*betrad.com/pub/c/*.js") || (s(h, "*.viewad.*") || s(h, "viewad.*"))) return BLACK;
    if ((d(h, "netgazete.com") || d(h, "qwapi.com") || d(h, "iadsdk.apple.com") || d(h, "optimizely.com") || d(h, "nr\u002ddata.net") || d(h, "kissmetrics.com") || d(h, "api.smoot.apple.com") || d(h, "tapsense.com") || d(h, "bluekai.com") || d(h, "metamarkets.com") || d(h, "intercom.io") || d(h, "buelugaboost.com") || d(h, "segment.io") || d(h, "dolphin\u002dbrowser.com") || d(h, "swiftkey.com") || d(h, "flvrrz.cpm") || d(h, "apptentive.com") || d(h, "vungle.com") || d(h, "chartbeat.net") || d(h, "localytics.com") || d(h, "testflightapp.com") || d(h, "everplay.com") || d(h, "playhaven.com") || d(h, "kochava.com") || d(h, "swiftkey.net") || d(h, "pinchmedia.com") || d(h, "yandex.ru") || d(h, "yandex.com") || d(h, "googletagmanager.com") || s(u, "*/connect.facebook.net/*") || d(h, "visilabs.net") || d(h, "8digits.com") || d(h, "admost.com") || d(h, "swiftype.com") || d(h, "swiftypecdn.com") || s(u, "*/hits.disconnect.me/*") || d(h, "kontagent.net") || d(h, "radikal.com.tr") || d(h, "hurriyet.com.tr") || d(h, "milliyet.com.tr") || d(h, "zaman.com.tr") || d(h, "sozcu.com.tr") || d(h, "samanyoluhaber.com") || d(h, "cnnturk.com") || d(h, "ntv.com.tr") || d(h, "merhabahaber.com") || d(h, "haber7.com") || d(h, "cumhuriyet.com.tr") || d(h, "sabah.com.tr") || d(h, "visilabs.com"))) {
        return BLACK;
    }
    if (d(h, "adtechus.com")) return "PROXY 216.58.209.78:80";
    if (d(h, "fwmrm.net")) return "PROXY 216.58.209.78:80";
    if ((!s(u, "*.flv") && !s(u, "*.mp4") && !s(u, "*.flv*") && !s(u, "*.mp4*") && s(u, "*hulu.com/published/*")) || s(u, "*ads\u002D*.hulu.com*") || s(u, "*hulu.com/beacon/*\u003Dadauditerror*") || s(u, "*hulu.com/v3/revenue/*") || s(u, "*ll.a.hulu.com*")) return "PROXY 74.125.22.138:80";
    if (d(h, "fwmrm.net") || d(h, "adtechus.com")) return "PROXY 216.58.209.78:80";
    return PROXY_DIRECT;
}
