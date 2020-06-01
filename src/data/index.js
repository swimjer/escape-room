export default {

    start: {
        text: `It's not easy to swim the channel. There are lots of challenges and puzzles to solve first. First things first: applying to attend the swim trials. `,
        images: ['White_Cliffs_of_Dover.jpeg'],
    },

    steps: [
        {
            id: 1,
            text: `Brill! Your application for the trials was approved. You are a super starfish! You are going to the swim trials. 
You need to get on the bus to the swimming pool, but you forgot to write the bus number down. You feel like a right flounder!`,
            question: `What's the number of the bus you need to get on?`,
            images: ['buses.jpg'],
            solutions: ['588'],
            feedback: 'Type the bus number, using digits',
            hint: `Look for the fishy words!`,
            next: {
                '588': 2
            }
        },

        {
            id: 2,
            text: `Hurray! You got on the right bus and arrived at the pool for the swim trials. Time to swim your best.`,
            question: 'What swimming stroke goes on toast?',
            images: ['swimming_pool_swimmers.jpg'],
            solutions: ['butterfly', 'butter-fly', 'butter fly'],
            feedback: '',
            next: {
                'butterfly': 3,
                'butter-fly': 3,
                'butter fly': 3,
            },
        },

        {
            id: 3,
            text: `Well done swimmer, you have been chosen for the team! Time for lots of training. As well as swimming, you need to get used to cold water. Let's run a nice cold bath and get in.
            
Brrrr! Here's a puzzle to take your mind off the cold.

If 

eel = 3 
cod = 6
guppy = 13

What is pike? 
`,
            question: '',
            images: ['bath.jpg'],
            solutions: ['10'],
            feedback: 'Enter a number',
            hint: 'Are you scrabbling to find an answer?',
            next: {
                '10': 4
            },
        },
        {
            id: 4,
            text: `As well as swimming inside, it's a good idea to get in plenty of swim training outside. Fortunately there are a lot of places to practice.`,
            question: 'Which place is the odd one out?',
            images: ['world_map.png', 'sticker_swimming_cinque_terre.jpg', 'sticker_swim_fuji.jpg', 'sticker_swim_edinburgh.jpg', 'sticker_swimming_new_york.jpg'],
            solutions: ['japan'],
            feedback: 'Enter the name of the country. Which one is the odd one out?',
            hint: 'Find these places on the world map',
            next: {
                'japan': 5
            },
        },


        {
            id: 5,
            text: `no more clues .... .`,
            question: '',
            images: [],
            solutions: [''],
            feedback: '',
            hint: '',
            next: {
                '': 10
            },
        },



    ],
    end: {
        text: `Congratulations! You have swum the channel! Time for a delicious croissant or three before heading home.`,
        images: ['croissants.jpg'],
    }

}