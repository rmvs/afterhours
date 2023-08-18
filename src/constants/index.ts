const now = new Date();

export const REVIEWS = [
    {
        name: 'Jessica',
        age: 28,
        isVerified: true,
        avatar: null,
        stars: 5,
        date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 2).getTime(),
        review: `
            I’ve got to admit, sleep mask patches were a new phenomena for me, but I’m glad I tried them. 
            These are so much more comfortable than regular sleep masks (and not as pricey as other silk sleep masks either!)
        `
    },
    {
        name: 'Laura B.',
        social: '@bermu_u',
        age: null,
        isVerified: true,
        avatar: null,
        stars: 5,
        date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 1).getTime(),
        review: `
        The fabric and the shape is gentle and the way this mask conforms 
        around my eyes doesn't disturb any of my under-eye creams or serums, 
        which is a huge plus for my skincare routine.
        `
    },
    {
        name: 'Sofia',
        age: 32,
        isVerified: true,
        avatar: 'avatar/avatar-1.png',
        stars: 5,
        date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 3).getTime(),
        review: `
            I’m like a human tornado, but this mask stays put without those 
            pesky tight straps making me feel like a captive in my own bed.
        `
    },
    {
        name: 'Laura B.',
        socia: '@bermu_u',
        isVerified: true,
        stars: 5,
        date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 2).getTime(),
        review: `
            Perfect for side sleepers like myself because 
            it stays in place even if I’m sleeping on my side.
        `
    },
    {
        name: 'Luis',
        age: 29,
        isVerified: true,
        stars: 5,
        date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 1).getTime(),
        review: `
            This sleep mask is pure genius, my friends. 
            It's a simple design that's like a hug for your eyes, without the awkwardness. 
            Who knew a little mask could make such a colossal difference in your sleep?
        `
    },
    {
        name: 'Ryan',
        age: 27,
        isVerified: true,
        stars: 5,
        date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 1).getTime(),
        review: `
        I am not a big fan of regular sleep masks and the way they look and wrap around my head, but these sleep mask 
        patches conform perfectly to the shape of my eyes, allowing me to move around freely without worrying about the mask shifting or falling off during the night and without having 
        a headband wrapped around my head. It blocks out all the light and the sleep mask is incredibly versatile not just for nightly use but it is compact and portable, making it a perfect travel companion for long flights or hotel stays. Overall, this is an excellent investment for anyone who values their sleep. 😴
        `
    }
]

export const FAQTexts = [
    {
        key: 0,
        label: 'What is the material of the sleep mask?',
        children: `Our sleep mask is comfortable, thin (yet effective in blocking out light) and crafted with 100% silicone and 100% soft silk (known for its anti-wrinkle benefits!).`
    },
    {
        key: 1,
        label: 'What is the benefit of using silk?',
        children: `Silk is an excellent material for a sleep mask due to its soft and gentle texture, and ability to regulate temperature, creating a comfortable and soothing sleep environment. With its soft and silky texture, silk doesn’t drag or imprint on skin making it fantastic for anti-aging and anti-wrinkle benefits. As an organic fabric it outshines synthetic materials by being environmentally friendly and free from toxic chemicals.`
    },
    {
        key: 2,
        label: 'What are the benefits of using silicone?',
        children: `Our bio-adhesive silicone allows for the sleep mask patches to conform around the shape of the eyes. Silicone is a natural material which offers numerous benefits such as being hypoallergenic, non-toxic, and easily washable, making it an ideal choice for individuals with sensitive skin.`
    },
    {
        key: 3,
        label: 'How does the sleep mask block out light?',
        children: `Our sleep mask is designed to conform to the contours of your eyes, creating a vacuum like seal that blocks out light from reaching your eyes while prioritizing comfort and without leaving impressions on your face and around your nose.`
    },
    {
        key: 4,
        label: 'How does the sleep mask stay in place?',
        children: `Eliminating the need for straps, the individual sleep patches have a conforming shape with bio-adhesive silicone that sticks to the eye contour area. Each patch has a concave shape that avoids contact with the eyebrows and eyelashes entirely – allowing for total comfort.`
    },
    {
        key:5,
        label: 'Can I use the sleep mask if I am a side sleeper?',
        children: `Yes, the sleep mask patches are suitable for side sleepers. The conforming design ensures a snug fit that stays in place, even if you change your sleeping position.`
    },
    {
        key: 6,
        label: 'Is the sleep mask suitable for all faces?',
        children: `Yes, our sleep mask is designed to be one-size-fits-all with its conforming shape and strap-free design, allowing it to comfortably fit most faces. Our mask is crafted as 2 separate sleep mask patches, which conform around the eyes to block out light.`
    },
    {
        key: 7,
        label: 'What skin types is the sleep mask suitable for?',
        children: `Our sleep mask works on all skin types, including oily skin types, and is safe to be used on sensitive skin.`
    },
    {
        key: 8,
        label: 'How many uses is it good for?',
        children: `It will depend on how you care for your sleep patches. We say 10 or more uses but it depends on how often you wash them.`
    },
    {
        key: 9,
        label: 'How do you know when the sleep mask is ready to be replaced?',
        children: `When the mask loses its stickiness and even washing with light soap and water won’t make it sticky again, then it might be ready to be replaced. But even a light stickiness does the trick so don’t give up your mask too early.`
    },
    {
        key: 10,
        label: 'How do you clean the sleep mask?',
        children: `Our sleep mask should be washed with warm water and a gentle facial wash or soap and allowed to dry sticky side up. (Our sleep mask features quick dry material!).`
    }
]