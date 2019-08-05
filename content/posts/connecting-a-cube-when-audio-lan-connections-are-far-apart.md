---
title: "Connecting a CUBE when Audio & LAN Connections Are Far Apart"
date: 2015-02-11T16:02:36+02:00
draft: false
og_image: ""
internal_feature_image: "uploads/connecting-cube-hardware.jpg"
description: "This post talks about how to install a CUBE for on hold or in store music service when the Audio &amp; LAN Connections are far apart."
excerpt: "Sometimes CUBE hardware must deliver audio to a point that is physically removed from a network connection. This paper outlines wiring strategies that can be used in such situations."
tags: ["CUBE Hardware", "Technical Support"]
author: "Charl"
---

## Sometimes CUBE hardware must deliver audio to a point that is physically removed from a network connection.

In this situation how does a provider go about installing a CUBE to facilitate an on hold marketing or in store music service?

This paper outlines wiring strategies that can be used in such situations.

{{< imgresp extending-cube-lan-connection "a diagram showing how to extend the CUBE LAN connection" "Extending the LAN connection to install a CUBE" >}}

### If a network connection is not available where CUBE must be installed, powerline ethernet adapters are often a great strategy to extend the network connection to the CUBE.

Powerline ethernet adapters can be purchased easily and at low cost from many retail stores selling computer equipment. CUBE has been used reliably with many models of powerline ethernet adapter, including those from low-cost manufacturers such as D-Link, TP-LINK and so forth. (For example the TP-Link AV200 or one of the kits such as TL-PA211KIT). A set of two adapters will be needed. Connect one powerline adapter to the network connection, and also to AC power. Connect the other powerline adapter to the CUBE’s network port, and also to AC power. The powerline adapters will establish a relay of the network connection between them, by utilizing the AC wiring of the building. (This is a straightforward process, simply follow the powerline adapter’s instructions). Note that the powerline adapters must be plugged directly into the AC wall outlet, not via any extension lead or multi-plug adapter. If the building uses multiple AC phases, both powerline adapters must be connected to AC circuits on the same phase.

In addition to the powerline adapter option, we have found that some providers also use a "wifi ethernet bridge". There are many options, e.g. Netgear WGE101, D-Link DAP1513 or even something like Apple's Airport Express. We find that people who use these in the field seem to use whatever is easiest to buy locally, and we have not had any particular feedback about any model being better than any other. A small number of providers have inquired about a WiFi option for the CUBE. We've found the other options discussed are actually better suited to the majority of providers. This is because the average provider and customer really has a hard time configuring wi-fi and maintain it running within their deployments. There are all the usual concerns around signal reliability, wifi access points crashing, etc.

{{< imgresp extending-cube-audio-connection "A diagram showing how to extend the CUBE audio connection" "Extending the audio connection to connect a CUBE for on hold marketing or in store applications" >}}

### What about if you wish to place the CUBE hardware close to an available network connection, and instead, extend the audio connection?

Using an unused phone wire pair, the CUBE’s audio output is then connected to a nearby phone jack.This relays the audio into the telecoms room, where it is available on the corresponding connection block or jack on the patch panel. From there, the audio signal can then be connected to its destination, for example the MOH input. Note that care must be taken to use an unused wire pair. In some cases, the nearby phone jack is not in use at all: in this case any available wire pair can be used, as long as that pair runs all the way to the connection block or patch panel in the telecoms room and is otherwise unused. In other cases, where the phone jack is already in use, the wiring may accommodate 2 or three pairs, with only one pair in use by the telephone itself. In this case, one of the other wire pairs can be used to connect CUBE audio, as long as that pair is unused and extends all the way to the connection block or patch panel in the telecoms room.