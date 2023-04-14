new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin,destination,direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title, 0.5, {y: '50', opacity: 0}, {y: 0, opacity:1});

        if(destination.index === 1){
            const rdyapp = document.querySelectorAll(".rdyapp");
            const subtitle = section.querySelector("h2");

            tl.fromTo(rdyapp, 0.7, {x: '300%'}, {x: '-30%' })
            .fromTo(subtitle, 0.5, {y: '50', opacity: 0}, {y: 0, opacity:1})
            .fromTo(rdyapp[0], 1, {opacity: 1}, {opacity: 1})
            .fromTo(rdyapp[1], 1.2, {opacity: 0}, {opacity: 1})
            .fromTo(rdyapp[2], 1.2, {opacity: 0}, {opacity: 1})
            .fromTo(rdyapp[3], 1.5, {opacity: 0}, {opacity: 1});
        }

        if(destination.index === 3){
            const chat = document.querySelector(".chat2");

            tl.fromTo(chat, 0.7, {x: '0'}, {x: '35%' });
        }
    }
})