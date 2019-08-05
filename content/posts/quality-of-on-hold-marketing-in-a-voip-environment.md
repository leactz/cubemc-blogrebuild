---
title: "Quality of on Hold Marketing in a Voip Environment"
date: 2015-02-10T15:32:03+02:00
draft: false
og_image: ""
internal_feature_image: "uploads/voip-environment.jpg"
description: "This post by Exponential Solutions (The CUBE) addresses the issues surrounding the topic of audio quality of On Hold Marketing in a VOIP Environment"
excerpt: "This post addresses the issues surrounding the topic of audio quality on VoIP and cellphones, white noise bursts, G.711, G.729 and so forth."
tags: ["Music On Hold", "Messaging On Hold", "VoIP"]
author: "Charl"
---

## The delivery of quality audio productions is becoming more and more of an issue for [providers of On Hold Marketing services](https://cubemc.com/fusion/) as they contend with an increasing penetration of VOIP systems.

This post addresses the issues surrounding the topic of audio quality on VoIP and cellphones, white noise bursts, G.711, G.729 and so forth.

{{< imgresp ask-an-expert "an image that reads ask an expert" >}}

As the CTO of Exponential Solutions [(The CUBE),](https://cubemc.com) I am fortunate to have an extensive background as an electronics engineer, with a specialty in networking protocols, DSP and the actual math of some of these algorithms. Given this background I feel I am in a unique position to comment on the root cause of these quality issues and what can be done about it.

### Let me first point out the single most fundamental difference between conventional "POTS" phone service, and VoIP:

In the traditional phone service, all intelligence resides within the carrier phone network, with the endpoint devices (phones, PBXs, KSUs) being essentially “dumb” devices.
VoIP systems are the other way around: in VoIP it is the network (eg internet) which is dumb, with all the intelligence pushed into the endpoint devices (phones etc).

This has a very specific ramification: you the user are basically holding the 'smarts' in your hand now, so you're suddenly exposed to a lot more 'moving parts' when using VoIP. Configuration tends to be a whole lot more complex, there is a lot more to know, many more decisions to make, and a lot more that can go wrong. Every phone or device now suddenly has a range of different capabilities, and must now independently negotiate for "common ground" with every other device it establishes a connection with.

{{< imgresp voip-environment "an illustration to represent voip systems in the marketing sphere" >}}

### So lets look at the quality problem:

VoIP systems, like all other digital phone systems, must convert the audio signals into a numerical (digital) representation of the sound, and back again on the other end. This encoding/decoding is what is being referred to by the term "codec". It is the specific algorithm that is used during this encoding/decoding which is going to determine your success in getting on-hold content across.

The G.711 codec is the exact same codec used by the conventional phone network. In other words, if you are able to enforce use of G.711 everywhere within a VoIP environment, then in principle those VoIP calls should sound exactly like a conventional phone service.

Unfortunately, G.711 is generally speaking not very well suited for VoIP systems, because G.711 was designed for the traditional intelligent phone network, which is able to guarantee that G.711 data packets arrive at a very precise rate, like clockwork. On IP networks, which are fundamentally "dumb", this is hardly ever the case: packets go missing, or arrive late (or out of sequence). G.711 was never designed to degrade gracefully in those situations

G.711, as far as codecs go, is also a bandwidth hog. Imagine what a typical phone call sounds like. Now think of what a typical in-store music service like Playnetwork sounds like. The standard for the latter is 64kbps MP3 - which requires exactly the same bandwidth as a G.711 phone-quality call.

Therefore VoIP systems tend to favour other codecs like GSM, G.722, G.729.1, iLBC, Speex, and various others. These codecs are designed to be a lot more resilient when facing the vagaries of dumb IP networks. (Remember, the network is dumb, so the smarts must now sit in the endpoints).

The primary function of all these codecs, like G.711, G.729, is to make sure that people's voices can actually be heard on the other end, irrespective of voice-related hurdles, like people talking softy. This is why we use G.711 on the traditional phone system, and not just say straight 8-bit PCM encoding or some form of music coding like MP2/3.

{{< imgresp voice-optimized "an image of a voice microphone" "The primary function of the above mentioned codecs is to optimize voice delivery.">}}

In other words, these codecs are optimized for VOICE. And here lies the rub: the more efficient or aggressive a voice codec is in terms of how it deals with fluctuating bandwidth, the more likely it is that the codec is very highly voice-specific.

The math behind information encoding and compression revolves entirely around throwing away information which is not relevant to the particular domain. Most voice codecs operate by utilizing some mathematical model of the human vocal tract, trying to figure out what stimuli in that vocal tract model caused a sound, and then only signalling those stimuli to the far end.

If you are familiar with MIDI, its the same kind of idea -- the more sophisticated voice codec sends information about which notes, vowels, consonants etc need to be produced, rather than the actual sounds themselves, and on the far end there's a kind of a "synthesizer" that basically creates and stitches together a completely new sound based on those commands.

What this means for the MOH industry is the following: the more your mixed production sounds like something that could actually have come out of a human vocal tract, the better your chance of it sounding good on a cellphone or a VoIP system.

The less your production resembles something that could be produced by human vocal chords, the greater the chance that you will have quality issues, white noise bursts etc on the far end. Just knowing this should immediately provide you with several pointers: you will probably want to be careful to have music bed volume quite low when your voice artists are talking, you probably want to pick specific kinds of music (even a cappella) that have a spectrum and formants close to that of the human voice, rather than something that is, for example, disproportionately bass-heavy compared with voice, and so forth.

### That is really the nitty gritty of it: to make a production that survives transmission through a voice-specific codec, make it as much as possible like the human voice.

Now a lot of people, myself included, will tend to say "just use G.711 on your VoIP system if you can" - which will make it sound like a POTS phone system, albeit with the caveats noted above regarding bandwidth and non-graceful degradation.

{{< imgresp handshake "an image of a handshake" "Behind the scenes, your phones are in fact having their own little dialogue." >}}

Reality can be more complicated though. Since the intelligence and configuration reside in the endpoints now, every endpoint (e.g. VoIP phone, terminal adapter etc) must negotiate with every other party on the call as to what codec is going to be used. Behind the scenes, your phones are in fact having their own little dialogue, that go something like:

* A: "I can exchange G.711, G.722, G.729 or speex with you, but my system administrator would much prefer me to use G.729.1"
* B: "I can do G.729.1 so lets use that"
* A: "OK"

**The upshot is:** you won't always be able to influence which codec actually "wins out" for any given call, because the people that control and configure the two endpoints to the call have their own legitimate priorities such as minimizing bandwidth or jitter artefacts, maximizing voice clarity etc.

### So: is there a silver bullet?

In the long run, yes, but know that it requires the MOH industry to learn new concepts and do several things that are not being consistently done yet.

1. It is possible to use tools to encode a production to G.722, GSM etc -- and then to play it back so one can listen to what effect that has, even before the production goes out. Above pointers should help guide you as to how you might tweak your audio to make it survive the more aggressive codecs better.

2. VoIP technology actually fundamentally allows one to provide completely separate media files for every different codec that could possibly be used on a call. In other words, one could theoretically make several different mixes of a production: one geared to G.711, one tweaked for GSM, one tweaked for G.729 etc. If the call is negotiated to G.711, the G.711 version runs; if the call is negotiated to G.729 then the G.729 version runs, and so forth. And furthermore, it is even possible to count how often which version gets used. Of course, many VoIP systems do not yet expose this capability to you directly. This is something the MOH industry can certainly lobby for.

3. This is the one I consider the endgame: when a VoIP call is placed on hold, VoIP technology actually incorporates specific elements within its design for switching calls to on-hold programs -- and in fact provides for a completely DIFFERENT codec to be negotiated for those portions of the call! In other words, in principle VoIP technology could allow for any OH portion of a call to use a MUSIC-tailored codec like MP3 even though the voice part of the call may be conducted in G.729.

### This is clearly what is desired in the long run - but for now, implementation-wise the VoIP guys are falling rather short of this and will probably laugh you out of the room if you suggest that this is what they should be building.

However, THIS is what the MOH industry SHOULD be lobbying the VoIP industry for -- perhaps using the excellent samples of the MARCE award winners to illustrate what value the MOH industry is actually providing and why the VoIP providers should be fleshing their implementations out to actually provide these capabilities that are still "hidden" in the underlying design.

And, incidentally, this last alternative also happens to solve the "MOH starting from the beginning each time"-problem.


