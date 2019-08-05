---
title: "Raspberry: Pi in the Sky?"
date: 2014-04-14T12:51:42+02:00
draft: false
og_image: ""
internal_feature_image: "uploads/raspberry-pi.jpg"
description: "This post addresses how the CUBE ecosystem (CUBEOS and CUBE Apps, managed by CubeMC), could also be made to run on the Raspberry Pi hardware?"
excerpt: "We periodically get asked the question whether the CUBE ecosystem (CUBEOS and CUBE Apps, managed by CubeMC), could also be made to run on the Raspberry Pi hardware?"
tags: ["CUBE Software"]
author: "Steve"
---

## CUBE OS can be ported to other hardware platforms.

We periodically get asked the question whether the [CUBE](https://cubemc.com) ecosystem (CUBEOS and CUBE Apps, managed by CubeMC), could also be made to run on the Raspberry Pi hardware?

This question naturally arises because the Raspberry Pi appears to have a very attractive price point, and so holds a certain allure for the frugal service provider.

The short answer is resoundingly "yes." (As we've discussed in earlier posts,)[{{< relref "cubeos-designed-future-proof-industries-best-connectivity" >}}] CUBEOS and CUBE Apps are very much portable, and so can be run on all kinds of hardware, from Android boxes to the Raspberry Pi.

### BUT, the real question is - would you really want to do this, if you knew the ramifications?

It turns out that the Raspberry Pi could well hold a sting in the tail for service providers that try to use it professionally. Like sailors of yore, pain may be in store for the professional user that gets seduced by the Pi's inadvertent siren song of low hardware price.

It really comes down to those well-known truisms: "You get what you pay for" - and -  "If it seems too good to be true, it probably is." In the case of the Pi, it may be worth phrasing this as:  You don't get what you don't pay for.

{{< imgresp you-get-what-you-pay-for "an image saying you get what you pay for" >}}

There are numerous reasons we developed the 335MX hardware for CUBE's flagship offering -- and not something like the Pi. This is because there are several very significant technical downsides to the Raspberry Pi in its current incarnation, which in our view would make it unsuited to this kind of professional application.

As example, one major issue relates to how the Pi's ethernet networking has been implemented. The Pi hardware takes an aggressive shortcut here, implementing its networking feature along the same lines as an ethernet adapter plugged in via USB. Engineering-wise, this type of approach has significant shortcomings. Not just does it limit the networking speeds that are possible, but it also leads to packet data loss, and even total loss of network connectivity in certain cases -- which then can't be restored, without completely cycling the power of the unit.

{{< imgresp technical-difficulties "an image showing a bad signal denoting technical difficulties" >}}

Also, this design makes the Pi (and its network connection) sensitive to the particular power supply used, and any power fluctuations in general.  Various problems (such as complete network loss) can be triggered simply by the kinds of power fluctuations that regularly happen in any real-world setting.

This trade-off helps Pi reduce the cost for its target market: the kids.  Not, we think, good enough for professional network-connected systems that are expected to run 24/7.

Another issue is that of regulatory compliance. Computing systems (like the Pi) emit radio frequency electromagnetic interference: therefore, legally all such systems must be certified that their emissions remain within the legal standards. These standards exist to ensure that its electronics won't cause harmful interference to other equipment. This kind of certification is a very complex field, but it basically boils down to this: In Europe, all such products should carry a CE certification mark, while in the USA all such products should carry an FCC certification mark. Other countries have their own requirements, or piggy-back on the CE/FCC standards to varying extents.

The Pi is fundamentally sold as a "bare board" computer, which is literally just the exposed circuit board. There is no enclosure - it's a hobbyist computer after all. In this form, the Pi Foundation originally held that the Pi would not need to be certified at all, as it would fall under the exemptions granted to hobbyist systems and development boards.

This contention turned out to be false, and under duress the Pi Foundation was pushed to get their "bare board" Pi CE/FCC certified.

It is of course highly doubtful that any professional services provider would supply their customers with an exposed circuit board, so adding an enclosure to the Pi would be a pretty basic professional requirement. The problem is, the moment an enclosure is added, then the product is no longer a Pi as has been certified, but is in fact a different product - which must itself be certified.

It is currently a point of some contention as to whether the Pi's "bare board" CE/FCC certification could be construed also to extend to a Pi that has been build into a simple enclosure. That can be a bit of a stretch: certainly, if that casing touches in any way the connectorization of the board (such as giving you different types of connectors to make it easier to hook up certain things), then all bets are off.

This is because the enclosure itself, and any changes to connectors, can radically influence the entire emissions profile of the device - which is why legally it is the **entire** product (enclosure and all) that needs to be FCC/CE certified.

On top of this, the enclosure brings with it further safety matters related to its materials, plastics, and so forth, which must now also be covered within the whole-product certification.

So in short, unless you have a vendor that will stand behind the **entire** product being FCC/CE certified (enclosure and all), you may end up having to foot the lab bill yourself for certification - which would typically run you at least 5 figures with any independent certification lab. Otherwise you would be considered to be de-facto "self-certifying", which means you could be liable for penalties and the cost of re-design and rectification, should it ever emerge that the product's emissions or safety factors fall outside of the regulatory standards.

These are some of the key reasons that we at CUBE did NOT choose the Pi for our flagship hardware.

{{< imgresp cube-unit "an image of the CUBE unit" "Our flagship 335MX hardware offers a proper, real network implementation, and actual regulatory compliance." >}}

Instead, our flagship 335MX hardware offers a proper, real network implementation, and actual regulatory compliance. Our hardware platform also has a track record of professional usage - for instance, by companies like Siemens, and including within mission-critical systems like fire panels.

In addition to this, an entire ecosystem is available of complimenting professional support products -- such as 1U rack mount kits.  These are fundamentally part of a professional product platform, things that make CUBE a whole offering.

Then there is also the matter that CUBEOS, when used with the 335MX hardware, can deliver sought-after features that are simply currently not possible on other hardware - but that we'll have to cover in another blog post.