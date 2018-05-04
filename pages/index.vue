<template lang="pug">
  article
    nav.fixed.z-2.top-0.w-100.bg-navy.shadow-3
      .cols.nav.cols-flush
        .nav-left
          a(href="/")
            span.red.bold User, Worker, Owner
            span.teal.bold.hide —May 2 @VSCO, Oakland, 5-8p
        .nav-right.hide
          a(href="https://www.eventbrite.com/e/user-worker-owner-bringing-democracy-to-work-tickets-45365886588").button.bold.h6.white Get Tickets
    section
    .hero.mt-4
      .cols.mb-5
        .grid.grid-cols-3.mt-5.w-100.grid-space-3
          .grid-col-span-2.center
            h1.bold.mb-0.red User, Worker, Owner
          .navy.self-end
            img.w-50.mb-1(src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1908563/uwo-logo.svg")
            h3.bold.line-through May 2nd,
              a(href="https://www.eventbrite.com/e/user-worker-owner-bringing-democracy-to-work-tickets-45365886588")  5-8p
            h3.navy.bold.self-center
              a(href="https://goo.gl/maps/8m4VgA6pMvj") VSCO
              span , Oakland
          .grid-col-span-2.bold.center
            h2.navy.mb-0 Bringing Democracy to Work
          form.grid-row-span-2.w-100(name="contact" method="POST" netlify action="#")
            label.bold Name
            input(type="text" name="name")
            label.mt-1.bold Email
            input(type="email" name="email")
            button.mt-2(type="submit") Newsletter Signup
          .grid-col-span-2
            .h4.bold For people participating in tech to bring their values to their workplaces and platforms. Defining the problems we face, connecting with peers, and exploring strategies and tools to build cooperative alternatives. Enter your email to learn about our next event.
    section.cols.mb-6.mt-6.schedule
      .col-8.offset-2.bg-white
        .p-3
          h2.bold.underline Speakers
          .h4.bold One evening, filled with talks from workers building democratic spaces alongside workshops to engage in related topics.
        .cols.p-3
          .col-6
            h2.bb-2.pb-2.yellow.border-silver.bold Niloufar
              .h2.regular Salehi
              .h5.dark Standford University
          .col-6
            h2.bb-2.pb-2.purple.border-silver.bold Nathan
              .h2.regular Schneider
              .h5.dark University of Colorado
          .col-6
            h2.bb-2.py-2.teal.border-silver.bold Camille
              .h2.regular Kerr
              .h5.dark ICA Group
          .col-6
            h2.bb-2.py-2.blue.border-silver.bold Poonam
              .h2.regular Whabi
              .h5.dark Design Action Collective
          .col-6
            h2.bb-2.py-2.purple.border-silver.bold  Julia
              .h2.regular Kong
              .h5.dark Reflex Design Collective
          .col-6
            h2.bb-2.py-2.orange.border-silver.bold  Simon
              .h2.regular Mont
              .h5.dark
                a(href="http://harmonize.work") Harmonize
        .cols.p-3
          .col
            h2.bold.underline Schedule
            ul
              li.bold
                h4 Doors open. 4:30pm
              li.bold
                h4 🎭 Welcome & opening remarks. 5:00pm
              li.bold
                h4 🥁 Talks on cooperative alternatives by digital labor researcher Niloufar Salehi, co-op scholar Nathan Schneider, and employee ownership specialist Camille Kerr. 5:15pm
              li.bold
                h4 👋 Pitches for simultaneous workshops and group discussions. 6:15pm
              li.bold
                h4 👩‍👩‍👧‍👦 Featured workshop, on how democratic governance works, by Harmonize founder Simon Mont and Reflex Design Collective co-founder Pierce Gordon. 6:30pm
              li.bold
                h4 👩‍👩‍👧‍👦 Reflections from workshops, peer connections. 7:30pm
              li.bold
                h4 🍦 Ice cream and closing remarks. 7:50pm
        .cols.p-3
          .col
            a(href="https://www.eventbrite.com/e/user-worker-owner-bringing-democracy-to-work-tickets-45365886588").h3.bold.px-2.button.mb-3 Get Tickets
            h2.bold.underline About
            p UWO brings together people from Tech Workers Coalition, Reflex Design Collective, CoLab Cooperative, and other groups committed to tech equity.
</template>
